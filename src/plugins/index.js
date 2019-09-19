import msg from './msg/msg'

let plugin = {}

plugin.install = function (Vue) {
  // 添加全局属性或方法
  Vue.prototype.$msg = 'i`m msg'
  Vue.prototype.$myFunc = function () {
    console.log('myFunc')
  }
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    }
  })
  Vue.component(msg.name, msg)
}
export default plugin
