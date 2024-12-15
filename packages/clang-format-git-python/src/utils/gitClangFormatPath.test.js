/**
 * @fileoverview Test for `gitClangFormatPath.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { resolve } = require('node:path');
const { describe, it } = require('node:test');

const { gitClangFormatPath, clangFormatGitPythonPath } = require('./gitClangFormatPath');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('gitClangFormatPath strictEqual testing', () => {
  it('gitClangFormatPath === clangFormatGitPythonPath', () => {
    strictEqual(gitClangFormatPath, clangFormatGitPythonPath);
  });
  it('clangFormatGitPythonPath === resolve(__dirname, `..`, `script`, `git-clang-format`)', () => {
    strictEqual(
      clangFormatGitPythonPath,
      resolve(__dirname, `..`, `script`, `git-clang-format`),
    );
  });
});
