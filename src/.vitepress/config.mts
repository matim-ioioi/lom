import path from 'node:path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GOD-пространство',
  titleTemplate: true,
  description: 'Utilities and guides for LoM',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Настройки',
        items: [{ text: 'Статы', link: '/pages/settings/stats' }],
      },
      {
        text: 'Калькуляторы',
        items: [
          {
            text: 'Урон',
            items: [
              { text: 'Расчёт урона с руки', link: '/pages/calculators/damage/base-atk' },
              { text: 'Расчёт урона с навыков', link: '/pages/calculators/damage/skill-atk' },
              { text: 'Расчёт урона партнёров', link: '/pages/calculators/damage/pal-atk' },
            ],
          },
          {
            text: 'Души',
            items: [
              { text: 'Расчёт УРОВНЯ души по статам', link: '/pages/calculators/souls/level-by-stats' },
              { text: 'Расчёт СТАТОВ души по уровню', link: '/pages/calculators/souls/stats-by-level' },
            ],
          },
          {
            text: 'Печати пробуждения',
            items: [
              { text: 'Расчёт УРОВНЯ печати пробуждения по статам', link: '/pages/calculators/awakening/level-by-stats' },
              { text: 'Расчёт СТАТОВ печати пробуждения по уровню', link: '/pages/calculators/awakening/stats-by-level' },
            ],
          },
          {
            text: 'Летающие питомцы',
            items: [
              {
                text: 'Расчёт бонусов атрибутов летающих питомцев',
                link: '/pages/calculators/flying-pets/attributes-bonuses',
              },
              {
                text: 'Расчёт шансов выпадения атрибутов летающих питомцев',
                link: '/pages/calculators/flying-pets/attributes-chances',
              },
            ],
          },
        ],
      },
      {
        text: 'Календари',
        items: [{ text: 'Lucky Spinner', link: '/pages/calendars/lucky-spinner' }],
      },
      {
        text: 'Гайды по классам',
        items: [
          { text: 'Лучник', link: '/pages/guides/classes/hunter' },
          { text: 'Арбалетчик', link: '/pages/guides/classes/arrowgod' },
          { text: 'Вар', link: '/pages/guides/classes/warrior' },
          { text: 'Берсерк', link: '/pages/guides/classes/berserker' },
          { text: 'Целитель', link: '/pages/guides/classes/prophet' },
          { text: 'Демон', link: '/pages/guides/classes/darklord' },
        ],
      },
    ],
    sidebar: {
      '/pages/calculators/damage/': {
        base: '/pages/calculators/damage',
        items: [
          { text: 'Расчёт урона с руки', link: '/base-atk' },
          { text: 'Расчёт урона с навыков', link: '/skill-atk' },
          { text: 'Расчёт урона партнёров', link: '/pal-atk' },
        ],
      },
      '/pages/calculators/flying-pets/': {
        base: '/pages/calculators/flying-pets',
        items: [
          {
            text: 'Расчёт бонусов атрибутов летающих питомцев',
            link: '/attributes-bonuses',
          },
          {
            text: 'Расчёт шансов выпадения атрибутов летающих питомцев',
            link: '/attributes-chances',
          },
        ],
      },
      '/pages/guides/classes/': {
        base: '/pages/guides/classes',
        items: [
          { text: 'Лучник', link: '/hunter' },
          { text: 'Арбалетчик', link: '/hunter' },
          { text: 'Вар', link: '/warrior' },
          { text: 'Берсерк', link: '/berserker' },
          { text: 'Целитель', link: '/prophet' },
          { text: 'Демон', link: '/darklord' },
        ],
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '../'),
      },
    },
  },
})
