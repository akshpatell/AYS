module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
    // {
    //   env: {
    //     node: true,
    //   },
    //   files: [
    //     '.eslintrc.{js,cjs}',
    //   ],
    //   parserOptions: {
    //     sourceType: 'script',
    //   },
    // },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugines: [
  //   'react',
  //   '@babel',
  // ],
  ignorePatterns: ['dist'],
  rules: {
    // "prefer-const": 0,
    'import/no-extraneous-dependencies': 0,
  },
};
