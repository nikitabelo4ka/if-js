module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'react'],
  rules: {
    'no-restricted-syntax': 'off',
    'no-alert': 'off',
    'max-classes-per-file': 'off',
    'no-unused-vars': "off",
    'no-console': 'off',
    'jest/no-deprecated-functions': 'off',
    'no-param-reassign': 'off',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // for React
    },
  },
};
