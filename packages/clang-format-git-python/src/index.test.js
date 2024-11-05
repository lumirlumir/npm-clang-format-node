const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const { clangFormatGitPath, gitClangFormatPath } = require('./index');

describe('index ok testing', () => {
  it('clangFormatGitPath should be imported correctly', () => {
    ok(clangFormatGitPath);
  });
  it('gitClangFormatPath should be imported correctly', () => {
    ok(gitClangFormatPath);
  });
});
