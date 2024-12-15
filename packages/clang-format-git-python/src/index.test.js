/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const { gitClangFormatPath, clangFormatGitPythonPath } = require('./index');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index ok testing', () => {
  it('gitClangFormatPath should be imported correctly', () => {
    ok(gitClangFormatPath);
  });
  it('clangFormatGitPythonPath should be imported correctly', () => {
    ok(clangFormatGitPythonPath);
  });
});
