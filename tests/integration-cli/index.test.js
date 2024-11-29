const { doesNotThrow } = require('node:assert');
const { execSync } = require('node:child_process');
const { describe, it } = require('node:test');

describe('integration-cli doesNotThrow testing', () => {
  describe('clang-format-node', () => {
    it('--help', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-node --help`);
      });
    });
    it('--version', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-node --version`);
      });
    });
  });

  describe('clang-format-git', () => {
    it('--help', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-git --help`);
      });
    });
  });

  describe('clang-format-git-python', () => {
    it('--help', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-git-python --help`);
      });
    });
  });
});
