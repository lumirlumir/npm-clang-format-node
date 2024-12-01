const { ok } = require('node:assert');
const { execSync } = require('node:child_process');
const { describe, it } = require('node:test');
const { platform } = require('node:os');

const { getClangFormatNodePath } = require('clang-format-node');
const { getClangFormatGitPath } = require('clang-format-git');
const { clangFormatGitPythonPath } = require('clang-format-git-python');

const isPermission755 = path =>
  execSync(`stat -c '%a' ${path}`).toString().trim() === '755';

const binaries = [
  {
    osPlatform: 'darwin',
    architecture: 'arm64',
  },
  {
    osPlatform: 'darwin',
    architecture: 'x64',
  },
  {
    osPlatform: 'linux',
    architecture: 'arm',
  },
  {
    osPlatform: 'linux',
    architecture: 'arm64',
  },
  {
    osPlatform: 'linux',
    architecture: 'ppc64',
  },
  {
    osPlatform: 'linux',
    architecture: 's390x',
  },
  {
    osPlatform: 'linux',
    architecture: 'x64',
  },
  {
    osPlatform: 'win32',
    architecture: 'x64',
  },
];

describe('integration-binaries-permission ok testing', () => {
  // Skip test on Windows.
  // On Windows, using `chmod` to change permissions doesn't work correctly,
  // which can lead to unwanted results, as some binary permissions are not changed.
  if (platform() === 'win32') {
    // eslint-disable-next-line no-console
    console.log('This test was skipped on Windows.');
    return;
  }

  describe('clang-format-node', () => {
    binaries.forEach(({ osPlatform, architecture }) => {
      it(`osPlatform: ${osPlatform}, architecture: ${architecture}`, () => {
        ok(isPermission755(getClangFormatNodePath(osPlatform, architecture)));
      });
    });
  });

  describe('clang-format-git', () => {
    binaries.forEach(({ osPlatform, architecture }) => {
      it(`osPlatform: ${osPlatform}, architecture: ${architecture}`, () => {
        ok(isPermission755(getClangFormatGitPath(osPlatform, architecture)));
      });
    });
  });

  it('clang-format-git-python', () => {
    ok(isPermission755(clangFormatGitPythonPath));
  });
});
