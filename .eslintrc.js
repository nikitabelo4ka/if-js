module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['label', 'import', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // для React
    },
  },
};
