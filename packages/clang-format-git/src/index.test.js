/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const {
  getGitClangFormatPath,
  getClangFormatGitPath,
  gitClangFormatPath,
  clangFormatGitPath,
} = require('./index');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index', () => {
  it('getGitClangFormatPath should be imported correctly', () => {
    ok(getGitClangFormatPath);
  });
  it('getClangFormatGitPath should be imported correctly', () => {
    ok(getClangFormatGitPath);
  });
  it('gitClangFormatPath should be imported correctly', () => {
    ok(gitClangFormatPath);
  });
  it('clangFormatGitPath should be imported correctly', () => {
    ok(clangFormatGitPath);
  });
});
