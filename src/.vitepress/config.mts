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
          { text: 'Расчёт урона с руки', link: '/pages/calculators/base-atk' },
          { text: 'Расчёт урона с навыков', link: '/pages/calculators/skill-atk' },
          { text: 'Расчёт урона партнёров', link: '/pages/calculators/pal-atk' },
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
      {
        text: 'Гайды по классам',
        items: [
          { text: 'Лучник', link: '/pages/guides/classes/hunter' },
          { text: 'Арбалетчик', link: '/pages/guides/classes/hunter' },
          { text: 'Вар', link: '/pages/guides/classes/warrior' },
          { text: 'Берсерк', link: '/pages/guides/classes/berserker' },
          { text: 'Целитель', link: '/pages/guides/classes/prophet' },
          { text: 'Демон', link: '/pages/guides/classes/darklord' },
        ],
      },
    ],
    sidebar: {
      '/pages/calculators/': {
        base: '/pages/calculators',
        items: [
          { text: 'Расчёт урона с руки', link: '/base-atk' },
          { text: 'Расчёт урона с навыков', link: '/skill-atk' },
          { text: 'Расчёт урона партнёров', link: '/pal-atk' },
          {
            text: 'Расчёт бонусов атрибутов летающих питомцев',
            link: '/flying-pets/attributes-bonuses',
          },
          {
            text: 'Расчёт шансов выпадения атрибутов летающих питомцев',
            link: '/flying-pets/attributes-chances',
          },
        ],
      },
      '/guides/classes/': {
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
