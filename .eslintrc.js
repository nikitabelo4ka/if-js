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
    'max-classes-per-file': 'off',
    'no-unused-vars': "off",
    'no-console': 'off',
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
