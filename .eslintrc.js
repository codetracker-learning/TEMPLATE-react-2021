module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': [1, { allow: ['error', 'warn'] }],
    'comma-dangle': ['error'],
    'no-debugger': 1,
    'class-methods-use-this': 0,
    'linebreak-style': 0,
    'max-len': [1, 600, 2],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
  },
};
