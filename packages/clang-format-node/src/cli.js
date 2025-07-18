#!/usr/bin/env node
// The shebang line `#!/usr/bin/env node` ensures the script runs with the correct Node.js interpreter across different environments.

/**
 * @fileoverview Entry file for the `npx clang-format` and `npx clang-format-node` command. See the `bin` property in `package.json`.
 */

/* eslint-disable n/prefer-node-protocol -- DO NOT USE `node:` namespace for backward compatibility */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { spawn } = require('child_process');
const { clangFormatPath } = require('./utils/clangFormatPath');

// --------------------------------------------------------------------------------
// Execution
// --------------------------------------------------------------------------------

const spawned = spawn(clangFormatPath, process.argv.slice(2), {
  stdio: 'inherit',
});

spawned.on('close', code => {
  if (code !== 0) {
    console.error(`Process exited with code: ${code}`); // eslint-disable-line no-console
    process.exit(code);
  }
});
