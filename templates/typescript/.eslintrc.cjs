module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'ES6', // Allows the use of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'prettier', 'plugin:prettier/recommended'], // Uses the linting rules from @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true, // Enable Node.js global variables
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'error',
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-unused-vars': 'off',
    'one-var': 0,
    'no-console': 0,
    'no-undef': 0,
    'global-require': 0,
    'comma-dangle': 0,
    curly: ['error', 'multi-line'],
    'import/no-unresolved': [2, { commonjs: true }],
    'no-shadow': ['error', { allow: ['req', 'res', 'err'] }],
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
