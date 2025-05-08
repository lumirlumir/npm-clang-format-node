/**
 * @fileoverview Test for `gitClangFormatPath.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { strictEqual } = require('node:assert');
const { platform, arch } = require('node:os');
const { describe, it } = require('node:test');

const { gitClangFormatPath, clangFormatGitPath } = require('./gitClangFormatPath');
const { getGitClangFormatPath } = require('./getGitClangFormatPath');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('gitClangFormatPath', () => {
  it('gitClangFormatPath === getGitClangFormatPath(platform(), arch())', () => {
    strictEqual(gitClangFormatPath, getGitClangFormatPath(platform(), arch()));
  });
  it('clangFormatGitPath === gitClangFormatPath', () => {
    strictEqual(clangFormatGitPath, gitClangFormatPath);
  });
});
