const { strictEqual } = require('node:assert');
const { platform, arch } = require('node:os');
const { describe, it } = require('node:test');

const { clangFormatPath, clangFormatNodePath } = require('./clangFormatPath');
const { getClangFormatPath } = require('./getClangFormatPath');

describe('clangFormatPath strictEqual testing', () => {
  it('clangFormatPath === getClangFormatPath(platform(), arch())', () => {
    strictEqual(clangFormatPath, getClangFormatPath(platform(), arch()));
  });
  it('clangFormatNodePath === clangFormatPath', () => {
    strictEqual(clangFormatNodePath, clangFormatPath);
  });
});
