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
    })
  },
  enhanceApp({ app, router: _router, siteData: _siteData }) {
    app.use(ElementPlus)
    screenVariablesPlugin(app)
  },
} satisfies Theme
