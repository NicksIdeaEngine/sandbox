module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'emotion',
    'import',
    'html',
    'react-hooks',
    'react',
    'babel',
    'jest',
    'jest-formatting',
    'prettier',
    'jsx-a11y',
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
      },
    ],
    'no-console': 0,
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': [2, 'string'],
  },
};
