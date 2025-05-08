/**
 * @fileoverview Integration tests to verify that the binaries or script for `clang-format-node`, `clang-format-git`, and `clang-format-git-python` have the correct permissions (755) on POSIX.
 *
 * The tests are skipped on Windows due to issues with changing permissions using `chmod`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ok } = require('node:assert');
const { execSync } = require('node:child_process');
const { describe, it } = require('node:test');
const { platform } = require('node:os');

const { getClangFormatNodePath } = require('clang-format-node');
const { getClangFormatGitPath } = require('clang-format-git');
const { clangFormatGitPythonPath } = require('clang-format-git-python');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('integration-binaries-permission', () => {
  // Skip test on Windows.
  // On Windows, using `chmod` to change permissions doesn't work correctly,
  // which can lead to unwanted results, as some binary permissions are not changed.
  if (platform() === 'win32') {
    console.log('This test was skipped on Windows.'); // eslint-disable-line no-console
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
