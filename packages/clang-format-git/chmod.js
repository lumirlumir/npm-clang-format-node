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

const clangFormatGitPaths = readdirSync(resolve(__dirname, 'bin'), {
  recursive: true,
  withFileTypes: true,
})
  .filter(dirent => dirent.isFile())
  .map(dirent => resolve(dirent.parentPath, dirent.name));

clangFormatGitPaths.forEach(clangFormatGitPath => {
  try {
    chmodSync(clangFormatGitPath, 0o755);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error changing permissions for ${clangFormatGitPath}:`, error.message);
    throw error;
  }
});
