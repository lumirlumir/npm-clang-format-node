const { doesNotThrow, throws } = require('node:assert');
const { execSync } = require('node:child_process');
const { resolve } = require('node:path');
const { describe, it } = require('node:test');

const cli = resolve(__dirname, 'cli.js');

describe('cli doesNotThrow and throws testing', () => {
  // Correct
  it('node cli.js', () => {
    doesNotThrow(() => {
      execSync(`node ${cli}`); // Expected output: 'no modified files to format'
    });
  });
  it('node cli.js --help', () => {
    doesNotThrow(() => {
      execSync(`node ${cli} --help`);
    });
  });

  // Wrong
  it('node cli.js --abcdefg', () => {
    throws(() => {
      execSync(`node ${cli} --abcdefg`);
    });
  });
  it('node cli.js --binary=', () => {
    throws(() => {
      execSync(`node ${cli} --binary=`);
    });
  });
});
