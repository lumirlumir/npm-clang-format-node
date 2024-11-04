#!/usr/bin/env node
// The shebang line `#!/usr/bin/env node` ensures the script runs with the correct Node.js interpreter across different environments.

const { spawn } = require('child_process');

const { clangFormatPath } = require('./index');

try {
  const spawned = spawn(clangFormatPath, process.argv.slice(2), {
    stdio: 'inherit',
  });

  // Terminate the parent process after the child process has completed.
  spawned.on('close', process.exit);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
}
