const vueParserOptions = {
  ...require('../defaults/parserOptions'),
  parser: {
    js: '@typescript-eslint/parser',
    jsx: '@typescript-eslint/parser',
    cjs: '@typescript-eslint/parser',
    mjs: '@typescript-eslint/parser',

    ts: '@typescript-eslint/parser',
    tsx: '@typescript-eslint/parser',
    cts: '@typescript-eslint/parser',
    mts: '@typescript-eslint/parser',

    '<template>': 'espree',
  },
  ecmaFeatures: {
    jsx: true,
  },
  project: true,
  extraFileExtensions: ['.vue'],
}

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: vueParserOptions,
  settings: {
    'import/ignore': [/\.vue$/],
    'import/extensions': ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.cts', '.mts', '.vue'],
    'import/resolver': {
      node: {},
      typescript: {
        ...require('../defaults/parserOptions'),
        project: true,
      },
      vue: {
        parserOptions: vueParserOptions,
      },
    },
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
      'vue-eslint-parser': ['.vue'],
    },
    'import/external-module-folders': ['node_modules'],
  },
  plugins: [...require('../defaults/plugins'), 'vue'],
  extends: ['plugin:vue/vue3-recommended', ...require('../defaults/extends'), require.resolve('../rules/vue')],
}
