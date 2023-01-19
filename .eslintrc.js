module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['jest', 'react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  ignorePatterns: ['**.d.ts'],
};
