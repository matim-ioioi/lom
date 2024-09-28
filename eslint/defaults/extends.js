module.exports = [
  'plugin:import/recommended',
  'plugin:import/typescript',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-type-checked',
  'plugin:prettier/recommended',
  'prettier',
  require.resolve('../rules/correlation'),
  require.resolve('../rules/correlation'),
  require.resolve('../rules/best-practice'),
  require.resolve('../rules/comment'),
  require.resolve('../rules/typescript'),
  require.resolve('../rules/import'),
]
