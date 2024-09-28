module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...require('../defaults/parserOptions'),
    project: true,
  },
  settings: {
    'import/ignore': [/\.vitepress\/cache/],
    'import/extensions': ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.cts', '.mts'],
    'import/resolver': {
      node: {},
      typescript: {
        ...require('../defaults/parserOptions'),
        project: true,
      },
    },
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts'],
    },
    'import/external-module-folders': ['node_modules'],
  },
  plugins: [...require('../defaults/plugins')],
  extends: [...require('../defaults/extends')],
}
