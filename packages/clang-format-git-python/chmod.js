/**
 * @fileoverview Script to change permissions of script.
 */

/* eslint-disable n/prefer-node-protocol -- DO NOT USE `node:` namespace for backward compatibility */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('path');
const { chmodSync } = require('fs');

// --------------------------------------------------------------------------------
// Execution
// --------------------------------------------------------------------------------

const scriptPath = resolve(__dirname, 'script', 'git-clang-format');

try {
  chmodSync(scriptPath, 0o755);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(`Error changing permissions for ${scriptPath}:`, error.message);
  throw error;
}
