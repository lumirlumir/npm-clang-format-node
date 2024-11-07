#!/usr/bin/env node

const { spawn } = require('child_process');

const { clangFormatPath } = require('clang-format-node');

const { gitClangFormatPath } = require('./utils/gitClangFormatPath');

const spawned = spawn(
  gitClangFormatPath,
  [`--binary=${clangFormatPath}`, ...process.argv.slice(2)],
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
