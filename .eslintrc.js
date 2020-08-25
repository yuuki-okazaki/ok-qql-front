module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'warn',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: false }],
    'vue/no-unused-components': 'warn',
  },
}
