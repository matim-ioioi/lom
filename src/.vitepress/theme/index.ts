// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { screenVariablesPlugin } from '@/.vitepress/plugins/screenVariables'

import './style.css'
import './snippets/_index.scss'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/display.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-title-after': () => {
        const dateOpening = new Date('2024-04-23T00:00:00.000Z')
        const dateNow = new Date()

        const dateDifference = dateNow.getTime() - dateOpening.getTime()

        return h('span', { class: 'ml-8' }, `| ${Math.floor(dateDifference / (1000 * 3600 * 24) / 7)} неделя сервера`)
      },
    })
  },
  enhanceApp({ app, router: _router, siteData: _siteData }) {
    app.use(ElementPlus)
    screenVariablesPlugin(app)
  },
} satisfies Theme
