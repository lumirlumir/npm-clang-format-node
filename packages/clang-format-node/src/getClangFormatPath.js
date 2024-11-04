const { existsSync } = require('fs');
const { resolve } = require('path');

/**
 * Resolves and returns the path to the `clang-format` executable based on the OS platform and architecture.
 * Throws an error if the executable is not found.
 *
 * @param {string} osPlatform The current operating system platform (e.g., 'darwin', 'linux', 'win32').
 * @param {string} architecture The system architecture (e.g., 'arm64', 'x64').
 * @returns {string} The resolved path to the `clang-format` executable.
 * @throws {Error} Throws an error if the executable is not found for the specified OS platform and architecture.
 */
module.exports = (osPlatform, architecture) => {
  const clangFormatPath = resolve(
    __dirname,
    `bin`,
    `cfn-${osPlatform}-${architecture}`,
    `clang-format${osPlatform === 'win32' ? '.exe' : ''}`,
  );

  if (!existsSync(clangFormatPath))
    throw new Error(
      `No executable found for '${osPlatform}(OS platform)-${architecture}(architecture)'\nSee supported OS platform and architecture lists of clang-format-node in README.md`,
    );

  return clangFormatPath;
};
