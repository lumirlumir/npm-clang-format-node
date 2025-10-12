/**
 * @fileoverview Script to bump versions of packages in the monorepo.
 * Usage: `node path/to/version.mjs <semver> [preid]`
 */

/* eslint-disable no-console -- CLI */
// @ts-check

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { execSync } from 'node:child_process';
import { styleText } from 'node:util';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const semver = process.argv[2];
const preid = process.argv[3] ?? '';

/**
 * Stringifies a buffer.
 * @param {Buffer<ArrayBufferLike>} buffer
 * @returns {Record<string, any>}
 */
function stringifyBuffer(buffer) {
  return JSON.parse(buffer.toString());
}

// --------------------------------------------------------------------------------
// Script: Bump workspace root and package versions
// --------------------------------------------------------------------------------

console.log('Bump workspace root and package versions:\n');
console.log('> semver:', styleText('cyan', semver));
console.log('> preid:', styleText('cyan', preid), '\n');

execSync(
  `npm version ${semver} --include-workspace-root -w packages --no-git-tag-version --preid ${preid}`,
  {
    stdio: 'inherit',
  },
);

console.log(
  styleText('green', '\nSuccessfully bumped workspace root and package versions\n'),
);

// --------------------------------------------------------------------------------
// Script: Bump transitive dependency and dev-dependency versions
// --------------------------------------------------------------------------------

const packages = stringifyBuffer(execSync('npm pkg get -ws'));
const bumpedPackages = stringifyBuffer(execSync('npm pkg get -w packages'));

/** @type {Map<string, string>} */
const bumpedPackagesMap = new Map(
  Object.entries(bumpedPackages).map(([packageName, packageJson]) => [
    packageName,
    `^${packageJson.version}`,
  ]),
);

for (const [packageName, packageJson] of Object.entries(packages)) {
  console.log('Bump for workspace:', styleText('magenta', packageName));

  // Step 1: Check dependencies.
  if (packageJson.dependencies) {
    for (const [depName, oldDepVersion] of Object.entries(packageJson.dependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      const newDepVersion = String(bumpedPackagesMap.get(depName));

      console.log(
        '> Bump transitive dependency:',
        styleText('cyan', depName),
        'from',
        styleText('cyan', oldDepVersion),
        'to',
        styleText('cyan', newDepVersion),
      );

      execSync(
        `npm pkg set dependencies.${depName}="${newDepVersion}" -w ${packageName}`,
      );
    }
  }

  // Step 2: Check dev-dependencies.
  if (packageJson.devDependencies) {
    for (const [depName, oldDepVersion] of Object.entries(packageJson.devDependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      const newDepVersion = String(bumpedPackagesMap.get(depName));

      console.log(
        '> Bump transitive dev-dependency:',
        styleText('cyan', depName),
        'from',
        styleText('cyan', oldDepVersion),
        'to',
        styleText('cyan', newDepVersion),
      );

      execSync(
        `npm pkg set devDependencies.${depName}="${newDepVersion}" -w ${packageName}`,
      );
    }
  }

  console.log(); // New line.
}

console.log(
  styleText(
    'green',
    '\nSuccessfully bumped transitive dependency and dev-dependency versions\n',
  ),
);

// --------------------------------------------------------------------------------
// Script: run `npm install` to update lockfile
// --------------------------------------------------------------------------------

execSync('npm install', { stdio: 'inherit' });

console.log(styleText('green', '\nSuccessfully ran `npm install` to update lockfile\n'));
