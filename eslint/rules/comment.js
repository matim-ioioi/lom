module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    /**
     * Обязывает подписывать комментарии при любых `eslint-disable` командах
     *
     * 🚫 Не исправляется автоматически - https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
     */
    'eslint-comments/require-description': 'error',
  },
}
