module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {}
}
