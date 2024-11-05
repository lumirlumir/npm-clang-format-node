const { strictEqual } = require('node:assert');
const { resolve } = require('node:path');
const { describe, it } = require('node:test');

const { clangFormatGitPath, gitClangFormatPath } = require('./clangFormatGitPath');

describe('clangFormatGitPath strictEqual testing', () => {
  it('clangFormatGitPath === gitClangFormatPath', () => {
    strictEqual(clangFormatGitPath, gitClangFormatPath);
  });
  it('gitClangFormatPath === resolve(__dirname, `..`, `script`, `git-clang-format`)', () => {
    strictEqual(
      clangFormatGitPath,
      resolve(__dirname, `..`, `script`, `git-clang-format`),
    );
  });
});
