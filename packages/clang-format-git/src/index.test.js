const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const {
  getGitClangFormatPath,
  getClangFormatGitPath,
  gitClangFormatPath,
  clangFormatGitPath,
} = require('./index');

describe('index ok testing', () => {
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
