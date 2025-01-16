#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx git-clang-format` or `npx clang-format-git` command. See the `bin` property in `package.json`.
 */

/* eslint-disable n/prefer-node-protocol */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { spawn } = require('child_process');

const { clangFormatPath } = require('clang-format-node');

const { gitClangFormatPath } = require('./utils/gitClangFormatPath');

// --------------------------------------------------------------------------------
// Execution
// --------------------------------------------------------------------------------

const spawned = spawn(
  gitClangFormatPath,
  [`--binary=${clangFormatPath}`, ...process.argv.slice(2)],
  {
    stdio: 'inherit',
  },
);

spawned.on('close', code => {
  if (code !== 0) {
    console.error(`Process exited with code: ${code}`);
    process.exit(code);
  }
});
