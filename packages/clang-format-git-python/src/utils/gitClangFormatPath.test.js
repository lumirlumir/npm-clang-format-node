const { strictEqual } = require('node:assert');
const { resolve } = require('node:path');
const { describe, it } = require('node:test');

const { gitClangFormatPath, clangFormatGitPath } = require('./gitClangFormatPath');

describe('gitClangFormatPath strictEqual testing', () => {
  it('gitClangFormatPath === clangFormatGitPath', () => {
    strictEqual(gitClangFormatPath, clangFormatGitPath);
  });
  it('clangFormatGitPath === resolve(__dirname, `..`, `script`, `git-clang-format`)', () => {
    strictEqual(
      clangFormatGitPath,
      resolve(__dirname, `..`, `script`, `git-clang-format`),
    );
  });
});
