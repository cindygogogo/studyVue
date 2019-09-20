// 第一种方法
// import msg from './msg/msg'
//
// let plugin = {}
//
// plugin.install = function (Vue) {
// 添加全局属性或方法
// Vue.prototype.$msg = 'i`m msg'
// Vue.prototype.$myFunc = function () {
//   console.log('myFunc')
// }
// Vue.directive('focus', {
//   inserted: function (el) {
//     el.focus()
//   }
// })
//   Vue.component(msg.name, msg)
// }
// export default plugin

// 第二种方法
/* eslint-disable*/
// 批量导出组件
// import msg from './msg/msg'
// import btn from './button/button'
// let components = [msg, btn]
// const install = (Vue) => {
//   if (install.installed) return
//   install.installed
//   components.map(component => {
//     Vue.component(component.name, component)
//   })
// }

// 第三种方法
const  requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) return
  install.installed
  requireComponent.keys().map(component => {
    const config = requireComponent(component)
    console.log(config)
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })
  // console.log(requireComponent.keys())
}
export default {
  install,
  // ...components
}
