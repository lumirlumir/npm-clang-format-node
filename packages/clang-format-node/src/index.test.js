const { ok } = require('node:assert');
const { describe, it } = require('node:test');

const { clangFormatPath } = require('./utils/clangFormatPath');
const { getClangFormatPath } = require('./utils/getClangFormatPath');

describe('index ok testing', () => {
  it('clangFormatPath should be imported correctly', () => {
    ok(clangFormatPath);
  });
  it('getClangFormatPath should be imported correctly', () => {
    ok(getClangFormatPath);
  });
});
