const TSCONFIG_CLIENT = './tsconfig.json'
const TSCONFIG_VUE = './tsconfig.eslint.json'

module.exports = {
  root: true,
  env: {
    es2024: true,
    browser: true,
    node: true,
    'shared-node-browser': true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['*.js', '*.ts', '*.mts'],
      extends: [require.resolve('./eslint/presets/base')],
      parserOptions: {
        project: TSCONFIG_CLIENT,
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: TSCONFIG_CLIENT,
          },
        },
      },
    },
    {
      files: ['*.vue'],
      extends: [require.resolve('./eslint/presets/vue')],
      parserOptions: {
        project: TSCONFIG_VUE,
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: TSCONFIG_VUE,
          },
        },
      },
    },
  ],
}
