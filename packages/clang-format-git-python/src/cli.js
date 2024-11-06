#!/usr/bin/env node

const { spawn } = require('child_process');

const { clangFormatPath } = require('clang-format-node');

const { clangFormatGitPath } = require('./utils/gitClangFormatPath');

const spawned = spawn(
  'python',
  // Both `--binary=path/to/the/binary` and `--binary path/to/the/binary` commands are valid (the only difference is the `=`).
  //
  // If you pass a `--binary` argument like `npx git-clang-format-python --binary="path/to/the/binary"` in bash,
  // the `--binary="path/to/the/binary"` argument will override the current `--binary=${clangFormatPath}` code.
  [clangFormatGitPath, `--binary=${clangFormatPath}`, ...process.argv.slice(2)],
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
