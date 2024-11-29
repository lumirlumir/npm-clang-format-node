const { doesNotThrow, throws } = require('node:assert');
const { execSync } = require('node:child_process');
const { describe, it } = require('node:test');

describe('integration-cli doesNotThrow and throws testing', () => {
  describe('clang-format-node', () => {
    // doesNotThrow
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

    // Throws
    it('--abcdefg', () => {
      throws(() => {
        execSync(`npx clang-format-node --abcdefg`);
      });
    });
  });

  describe('clang-format-git', () => {
    // doesNotThrow
    it('--help', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-git --help`);
      });
    });

    // Throws
    it('--abcdefg', () => {
      throws(() => {
        execSync(`npx clang-format-git --abcdefg`);
      });
    });
  });

  describe('clang-format-git-python', () => {
    // doesNotThrow
    it('--help', () => {
      doesNotThrow(() => {
        execSync(`npx clang-format-git-python --help`);
      });
    });

    // Throws
    it('--abcdefg', () => {
      throws(() => {
        execSync(`npx clang-format-git-python --abcdefg`);
      });
    });
  });
});
