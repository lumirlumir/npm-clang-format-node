/**
 * @fileoverview Script to change permissions of binaries.
 */

/* eslint-disable n/prefer-node-protocol -- DO NOT USE `node:` namespace for backward compatibility */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { resolve } = require('path');
const { chmodSync, readdirSync } = require('fs');

// --------------------------------------------------------------------------------
// Execution
// --------------------------------------------------------------------------------

const binPath = resolve(__dirname, 'bin');
const clangFormatNodePaths = readdirSync(binPath, {
  recursive: true,
})
  .filter(path => path.includes('clang-format'))
  .map(path => resolve(binPath, path));

clangFormatNodePaths.forEach(clangFormatNodePath => {
  try {
    chmodSync(clangFormatNodePath, 0o755);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `Error changing permissions for ${clangFormatNodePath}:`,
      error.message,
    );
    throw error;
  }
});
