/**
 * @fileoverview `getGitClangFormatPath` and `getClangFormatGitPath` APIs.
 */

// --------------------------------------------------------------------------------
// Require
// --------------------------------------------------------------------------------

const { existsSync } = require('fs');
const { resolve } = require('path');

// --------------------------------------------------------------------------------
// Declaration
// --------------------------------------------------------------------------------

/**
 * Returns the ABSOLUTE path to the `git-clang-format` executable binary based on the OS platform and architecture.
 *
 * The possible combinations are `darwin-arm64`, `darwin-x64`, `linux-arm`, `linux-arm64`, `linux-ppc64`, `linux-s390x`, `linux-x64`, `win32-x64`.
 *
 * Throws an error if the executable is not found.
 *
 * @param {string} osPlatform The current operating system platform. (e.g., `darwin`, `linux`, `win32`)
 * @param {string} architecture The current system architecture. (e.g., `arm`, `arm64`, `ppc64`, `s390x`, `x64`)
 * @returns {string} The ABSOLUTE path to the `git-clang-format` executable binary.
 * @throws `Error` Throws an error if the executable binary is not found for the specified OS platform and architecture.
 * @alias `getClangFormatGitPath`. See {@link getClangFormatGitPath}.
 * @version `v1.2.0` Initial release.
 */
function getGitClangFormatPath(osPlatform, architecture) {
  const gitClangFormatPath = resolve(
    __dirname,
    `..`,
    `bin`,
    `cfg-${osPlatform}-${architecture}`,
    `git-clang-format${osPlatform === 'win32' ? '.exe' : ''}`,
  );

  if (!existsSync(gitClangFormatPath))
    throw new Error(
      `No executable found for '${osPlatform}(OS platform)-${architecture}(architecture)'\nThe possible combinations are 'darwin-arm64', 'darwin-x64', 'linux-arm', 'linux-arm64', 'linux-ppc64', 'linux-s390x', 'linux-x64', 'win32-x64'`,
    );

  return gitClangFormatPath;
}

/**
 * Alias for `getGitClangFormatPath`.
 *
 * @alias `getGitClangFormatPath`. See {@link getGitClangFormatPath}.
 * @version `v1.2.0` Initial release.
 */
const getClangFormatGitPath = getGitClangFormatPath;

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------

module.exports = {
  getGitClangFormatPath,
  getClangFormatGitPath,
};
