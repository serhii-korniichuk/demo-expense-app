module.exports = {
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
      "project": 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin',
    ],
    extends: [
      "react-app",
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    root: true,
    env: {
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      "prettier/prettier": [
        "error",
        {
          "endOfLine": "auto"
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": false
          }
        },
        {
          "selector": ["variable", "function"],
          "format": ["camelCase", "PascalCase", "UPPER_CASE"],
          "leadingUnderscore": "allow"
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  }