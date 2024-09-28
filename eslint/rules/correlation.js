module.exports = {
  rules: {
    /**
     * Запрещаем декларировать переменные с именем, если она уже определена в скоупе выше
     * Выключен, т.к. покрывается с помощью TypeScript
     *
     * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/no-shadow
     */
    'no-shadow': 'off',

    /**
     * Запрещаем использовать неиспользуемые переменные, которые начинаются не на `_`
     * Выключен, т.к. покрывается с помощью TypeScript
     *
     * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/no-unused-vars
     */
    'no-unused-vars': 'off',

    /**
     * Запрещаем обращения к необъявленным переменным, которые не обозначены комментарием `global`
     * Выключен, т.к. покрывается с помощью TypeScript
     *
     * 🚫 Не исправляется автоматически - https://eslint.org/docs/latest/rules/no-undef
     */
    'no-undef': 'off',

    'prettier/prettier': 'error',
  },
}
