/**
 * @fileoverview Integration tests for `"type": "module"`.
 *
 * It tests the correct import and functionality of various paths from
 * `clang-format-node`, `clang-format-git`, and `clang-format-git-python` modules.
 *
 * This file should have the same format as '/tests/integration-api-cjs/index.test.mjs'.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { ok } from 'node:assert';
import { describe, it } from 'node:test';

import {
  clangFormatPath,
  clangFormatNodePath,
  getClangFormatPath,
  getClangFormatNodePath,
} from 'clang-format-node';

import {
  getGitClangFormatPath,
  getClangFormatGitPath,
  gitClangFormatPath,
  clangFormatGitPath,
} from 'clang-format-git';

import {
  gitClangFormatPath as gitClangFormatPathPython,
  clangFormatGitPythonPath,
} from 'clang-format-git-python';

// --------------------------------------------------------------------------------
// Test
// --------------------------------------------------------------------------------

describe('integration-api-cjs ESM', () => {
  describe('clang-format-node', () => {
    it('clangFormatPath should be imported correctly', () => {
      ok(clangFormatPath);
    });
    it('clangFormatNodePath should be imported correctly', () => {
      ok(clangFormatNodePath);
    });
    it('getClangFormatPath should be imported correctly', () => {
      ok(getClangFormatPath);
    });
    it('getClangFormatNodePath should be imported correctly', () => {
      ok(getClangFormatNodePath);
    });
  });

  describe('clang-format-git', () => {
    it('getGitClangFormatPath should be imported correctly', () => {
      ok(getGitClangFormatPath);
    });
    it('getClangFormatGitPath should be imported correctly', () => {
      ok(getClangFormatGitPath);
    });
    it('gitClangFormatPath should be imported correctly', () => {
      ok(gitClangFormatPath);
    });
    it('clangFormatGitPath should be imported correctly', () => {
      ok(clangFormatGitPath);
    });
  });

  describe('clang-format-git-python', () => {
    it('gitClangFormatPath should be imported correctly', () => {
      ok(gitClangFormatPathPython);
    });
    it('clangFormatGitPythonPath should be imported correctly', () => {
      ok(clangFormatGitPythonPath);
    });
  });
});
