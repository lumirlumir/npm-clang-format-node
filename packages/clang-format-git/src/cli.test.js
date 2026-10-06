/**
 * @fileoverview Test for `cli.js`.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { doesNotThrow, strictEqual, throws } = require('node:assert');
const childProcess = require('node:child_process');
const { EventEmitter } = require('node:events');
const { resolve } = require('node:path');
const { describe, it } = require('node:test');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

const { execSync } = childProcess;
const cli = resolve(__dirname, 'cli.js');

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('cli', () => {
  it('returns failure when the child is terminated by a signal', t => {
    const child = new EventEmitter();
    t.mock.method(childProcess, 'spawn', () => child);
    const exit = t.mock.method(process, 'exit', () => {});
    t.mock.method(console, 'error', () => {});

    require(cli); // eslint-disable-line n/global-require -- Load CLI after mocking spawn.
    child.emit('close', null, 'SIGTERM');

    strictEqual(exit.mock.calls.length, 1);
    strictEqual(exit.mock.calls[0].arguments[0], 1);
  });

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
