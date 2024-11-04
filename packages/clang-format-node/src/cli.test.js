const { doesNotThrow, throws } = require('node:assert');
const { execSync } = require('child_process');
const { describe, it } = require('node:test');

describe('cli doesNotThrow and throws testing', () => {
  it('npx clang-format --help', () => {
    doesNotThrow(() => {
      execSync('npx clang-format --help');
    });
  });
  it('npx clang-format --version', () => {
    doesNotThrow(() => {
      execSync('npx clang-format --version');
    });
  });
  it('npx clang-format --abcdefg', () => {
    throws(() => {
      execSync('npx clang-format --abcdefg');
    });
  });
});
