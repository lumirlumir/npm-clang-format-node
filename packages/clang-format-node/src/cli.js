#!/usr/bin/env node
// The shebang line `#!/usr/bin/env node` ensures the script runs with the correct Node.js interpreter across different environments.

/**
 * @fileoverview Entry file for the `npx clang-format` and `npx clang-format-node` command. See the `bin` property in `package.json`.
 */

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
    // eslint-disable-next-line no-console
    console.error(`Process exited with code: ${code}`);
    process.exit(code);
  }
});
