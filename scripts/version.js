/**
 * @fileoverview Script to bump versions of packages in the monorepo.
 * Usage: `node path/to/version.js <semver> [preid]`
 */

/* eslint-disable no-console -- CLI */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { execSync, spawnSync } from 'node:child_process';
import { styleText } from 'node:util';

// --------------------------------------------------------------------------------
// Helper
// --------------------------------------------------------------------------------

const semver = process.argv[2];
const preid = process.argv[3] ?? '';

// Validate inputs to prevent shell command injection.
if (!/^(major|minor|patch|premajor|preminor|prepatch|prerelease|from-git|\d+\.\d+\.\d+[\w.+-]*)$/.test(semver)) {
  console.error(`Invalid semver argument: ${semver}`);
  process.exit(1);
}
if (!/^[\w.-]*$/.test(preid)) {
  console.error(`Invalid preid argument: ${preid}`);
  process.exit(1);
}

/** @param {Buffer<ArrayBufferLike>} buffer @returns {Record<string, any>} */
function stringifyBuffer(buffer) {
  return JSON.parse(buffer.toString());
}

/** @param {string} text */
function bgCyan(text) {
  return styleText('bgCyan', text);
}

/** @param {string} text */
function cyan(text) {
  return styleText('cyan', text);
}

/** @param {string} text */
function green(text) {
  return styleText('green', text);
}

/** @param {string} text */
function magenta(text) {
  return styleText('magenta', text);
}

// --------------------------------------------------------------------------------
// Script: Bump workspace root and package versions
// --------------------------------------------------------------------------------

console.log('\n' + bgCyan('Bump workspace root and package versions') + '\n\n> semver: ' + cyan(semver) + '\n> preid: ' + cyan(preid) + '\n');

spawnSync(
  'npm',
  ['version', semver, '--preid', preid, '-w', 'packages', '--no-workspaces-update', '--include-workspace-root', '--no-git-tag-version'],
  { stdio: 'inherit' },
);

console.log('\n' + green('Successfully bumped workspace root and package versions') + '\n');

// --------------------------------------------------------------------------------
// Script: Bump transitive dependency and dev-dependency versions
// --------------------------------------------------------------------------------

console.log('\n' + bgCyan('Bump transitive dependency and dev-dependency versions') + '\n');

const packages = stringifyBuffer(execSync('npm pkg get -ws'));
const bumpedPackages = stringifyBuffer(execSync('npm pkg get -w packages'));

/** @type {Map<string, string>} */
const bumpedPackagesMap = new Map(
  Object.entries(bumpedPackages).map(([packageName, packageJson]) => [
    packageName,
    '^' + packageJson.version,
  ]),
);

for (const [packageName, packageJson] of Object.entries(packages)) {
  console.log('Workspace:', magenta(packageName));

  // Step 1: Check dependencies.
  if (packageJson.dependencies) {
    for (const [depName, oldDepVersion] of Object.entries(packageJson.dependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      const newDepVersion = String(bumpedPackagesMap.get(depName));

      console.log(
        '> Bump transitive dependency:',
        cyan(depName),
        'from',
        cyan(oldDepVersion),
        'to',
        cyan(newDepVersion),
      );

      spawnSync('npm', ['pkg', 'set', 'dependencies.' + depName + '=' + newDepVersion, '-w', packageName], { stdio: 'inherit' });
    }
  }

  // Step 2: Check dev-dependencies.
  if (packageJson.devDependencies) {
    for (const [depName, oldDepVersion] of Object.entries(packageJson.devDependencies)) {
      if (!bumpedPackagesMap.has(depName)) continue;

      const newDepVersion = String(bumpedPackagesMap.get(depName));

      console.log(
        '> Bump transitive dev-dependency:',
        cyan(depName),
        'from',
        cyan(oldDepVersion),
        'to',
        cyan(newDepVersion),
      );

      spawnSync('npm', ['pkg', 'set', 'devDependencies.' + depName + '=' + newDepVersion, '-w', packageName], { stdio: 'inherit' });
    }
  }

  console.log(); // New line.
}

console.log('\n' + green('Successfully bumped transitive dependency and dev-dependency versions') + '\n');

// --------------------------------------------------------------------------------
// Script: Run `npm install` to update lockfile
// --------------------------------------------------------------------------------

console.log('\n' + bgCyan('Run `npm install` to update lockfile') + '\n');

execSync('npm install --no-audit --no-fund', { stdio: 'inherit' });

console.log('\n' + green('Successfully ran `npm install` to update lockfile') + '\n');
