const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const { gitClangFormatPath, clangFormatGitPath } = require('./index');

describe('index ok testing', () => {
  it('gitClangFormatPath should be imported correctly', () => {
    ok(gitClangFormatPath);
  });
  it('clangFormatGitPath should be imported correctly', () => {
    ok(clangFormatGitPath);
  });
});
