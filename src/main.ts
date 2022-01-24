import { PluginFunction } from 'vue'
import Component from './index.vue'

// 本地调试开启代码，打包的时候关闭代码
import Vue from 'vue'
import Demo from './Demo/index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: (h) => h(Demo),
})

// @ts-ignore
Component.install = ((vue) => {
  // @ts-ignore
  vue.component(Component.options.name, Component)
}) as PluginFunction<undefined>

export default Component
