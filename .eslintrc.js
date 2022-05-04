module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'react'],
  rules: {
    'jest/no-deprecated-functions': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // for React
    },
  },
};