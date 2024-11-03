#!/usr/bin/env node
// The shebang line `#!/usr/bin/env node` ensures the script runs with the correct Node.js interpreter across different environments.

const { platform, arch } = require('os');
const { spawn } = require('child_process');
const getClangFormatPath = require('./getClangFormatPath');

const OS_PLATFORM = platform();
const ARCHITECTURE = arch();

try {
  const spawned = spawn(
    getClangFormatPath(OS_PLATFORM, ARCHITECTURE),
    process.argv.slice(2),
    {
      stdio: 'inherit',
    },
  );

  // Terminate the parent process after the child process has completed.
  spawned.on('close', process.exit);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
}
