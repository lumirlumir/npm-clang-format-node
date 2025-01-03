/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const {
  clangFormatPath,
  clangFormatNodePath,
  getClangFormatPath,
  getClangFormatNodePath,
} = require('./index');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index ok testing', () => {
  it('clangFormatPath should be imported correctly', () => {
    ok(clangFormatPath);
  });
  it('clangFormatNodePath should be imported correctly', () => {
    ok(clangFormatNodePath);
  });
  it('getClangFormatPath should be imported correctly', () => {
    ok(getClangFormatPath);
  });
  it('getClangFormatNodePath should be imported correctly', () => {
    ok(getClangFormatNodePath);
  });
});
