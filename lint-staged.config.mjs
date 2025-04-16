export default {
  '*': [
    'npx prettier --write --ignore-unknown',
    'npx editorconfig-checker -config .editorconfig-checker.json',
  ],
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,md}': 'npx eslint --fix',
  '*.md': ['npx markdownlint --fix', 'npx textlint -f pretty-error'],
};
