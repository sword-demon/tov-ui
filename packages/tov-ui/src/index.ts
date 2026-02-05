import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

export * from './components'
export default {
  install(app: App) {
    // 注册所有的组件
    Object.keys(components).forEach(([_name, comp]) => {
      if (comp.install) {
        app.use (comp as any)
      }
    })
  },
  version: pkg.version,
} as Plugin

// app.use(TovUI)
