/**
 * @fileoverview Script to bump versions of packages in the monorepo.
 * Usage: `node path/to/version.mjs <semver> [preid]`
 */

// @ts-check

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { execSync } from 'node:child_process';

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
// Script: Bump package versions
// --------------------------------------------------------------------------------

execSync(`npm version ${semver} -w packages --no-git-tag-version --preid ${preid}`, {
  stdio: 'inherit',
});

// --------------------------------------------------------------------------------
// Script: Bump transitive (dev)-dependencies versions
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
  // Step 1: Check dependencies.
  if (packageJson.dependencies) {
    for (const depName of Object.keys(packageJson.dependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      execSync(
        `npm pkg set dependencies.${depName}="${bumpedPackagesMap.get(depName)}" -w ${packageName}`,
      );
    }
  }

  // Step 2: Check dev-dependencies.
  if (packageJson.devDependencies) {
    for (const depName of Object.keys(packageJson.devDependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      execSync(
        `npm pkg set devDependencies.${depName}="${bumpedPackagesMap.get(depName)}" -w ${packageName}`,
      );
    }
  }
}

// --------------------------------------------------------------------------------
// Script: run `npm install` to update lockfile
// --------------------------------------------------------------------------------

execSync('npm install', { stdio: 'inherit' });
