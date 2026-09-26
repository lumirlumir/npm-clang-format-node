/**
 * @fileoverview Test for `index.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { ok, strictEqual } = require('node:assert');
const { describe, it } = require('node:test');

const {
  getGitClangFormatPath,
  getClangFormatGitPath,
  gitClangFormatPath,
  clangFormatGitPath,
} = require('./index');
const { type } = require('../package.json');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('index', () => {
  describe('package.json', () => {
    /*
     * [Module syntax detection](https://nodejs.org/api/packages.html#determining-module-system) attempts to detect ESM syntax,
     * and re-run as an ES module when no "type" field is present. It was enabled by default in Node.js v20.19.0 and Node.js v22.7.0.
     * Detection increases startup time for ES modules, so Node is encouraging everyone -- especially package authors --
     * to add a type field to `package.json`, even for the default `"type": "commonjs"`.
     */
    it('should have `type: "commonjs"`', () => {
      strictEqual(type, 'commonjs');
    });
  });

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
