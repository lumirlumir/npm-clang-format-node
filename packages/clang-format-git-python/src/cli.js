#!/usr/bin/env node

/**
 * @fileoverview Entry file for the `npx git-clang-format` or `npx clang-format-git-python` command. See the `bin` property in `package.json`.
 */

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
  'python',
  // Both `--binary=path/to/the/binary` and `--binary path/to/the/binary` commands are valid (the only difference is the `=`).
  //
  // If you pass a `--binary` argument like `npx git-clang-format-python --binary="path/to/the/binary"` in bash,
  // the `--binary="path/to/the/binary"` argument will override the current `--binary=${clangFormatPath}` code.
  [gitClangFormatPath, `--binary=${clangFormatPath}`, ...process.argv.slice(2)],
  {
    stdio: 'inherit',
  },
);

spawned.on('close', code => {
  if (code !== 0) {
    // eslint-disable-next-line no-console
    console.error(`Process exited with code: ${code}`);
    process.exit(code);
  }
});
