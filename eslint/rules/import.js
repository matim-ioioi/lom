module.exports = {
  rules: {
    /**
     * Сортировка импортов
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true, // Не используем сортировку по номерам строк, используем eslint-plugin-import для этого
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],

    /**
     * Сортирует импорты по группам. Порядок групп: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'internal', 'type']
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin', // Node.js built-in modules
          'external', // Packages
          'internal', // Aliased modules
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
          'object',
        ],
        pathGroups: [
          { pattern: '@/*', group: 'internal' },
          { pattern: '@root/*', group: 'internal' },
        ],
        'newlines-between': 'ignore',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: false,
        },
      },
    ],

    /**
     * Импорты могут находиться только в начале файла
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * Разрешаем использовать `export` в любом месте файла
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
     */
    'import/exports-last': 'off',

    /**
     * После импортов должен быть отступ
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',

    /**
     * [ОТКЛЮЧЕНО] Выкидываем предупреждение, если использован импорт функционала, который помечен как `@deprecated` в `jsdoc`
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'off',

    /**
     * [ОТКЛЮЧЕНО] Проверка на существование свойств в импортированных модулях в глубину. Выключено, т.к. покрывается `TypeScript`
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'off',

    /**
     * Запрещает импорт с пустым телом
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     */
    'import/no-empty-named-blocks': 'error',

    /**
     * Не линтим импорты в зависимости от файлсистемы
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',

    /**
     * Запрещает циклические импорты между модулями
     *
     * 🚫 Не исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import/no-cycle': ['error', { ignoreExternal: true }],

    /**
     * Запрещает дублирование импортов (дублирование модулей)
     *
     * 🔧 Исправляется автоматически - https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
  },
}
