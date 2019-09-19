// vue.use 可以接受一个方法也可以接受一个对象，执行这个方法或者对象的install属性
// 如果没有定义install就会执行方法本身
// module.exports = function(){
// }
/* eslint-disable*/
class HistoryRoute {
  constructor () {
    this.current = null
  }
}
class vueRouter {
  constructor (options){
    this.history = new HistoryRoute
    this.mode = options.mode || 'hash'
    this.routes = options.routes || [] // 传进来的路由规则
    this.routesMap = this.createMap(this.routes)
    console.log('aa', this.routesMap)
    this.init()
  }
  init () {
    // mode 是vueRouter的属性
    if (this.mode === 'hash') {
      // 如果咩有# 自动加上#
      location.hash ? '' : location.hash = '/'
      // 监听hash的改变
      window.addEventListener('load', () => {
        // 去掉# 单独拿掉路径
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashChange', () => {
        // 去掉# 单独拿掉路径
        this.history.current = location.hash.slice(1)
      })
      // hash必须有#才能获取
    } else {
      location.pathname? '': location.pathname = '/'
      // 监听hash的改变
      window.addEventListener('load', () => {
        // 去掉# 单独拿掉路径
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        // 去掉# 单独拿掉路径
        this.history.current = location.pathname
      })
    }
  } // 完成对监听事件的注册
  // 把路由和组件形成对象匹配上
  // [{path: '/A', component: a}] => {'/A': a}
  createMap (routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component
      return memo
    })
  }
}
vueRouter.install = function (Vue) {
  // vue的类 vue的构造函数
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.router) {
        // 把当前实例挂载在_root上
        this._root = this
        // this.$router
        this._router = this.$options.router
        // this指向当前组件实例
        Vue.util.defineReactive(this, 'current', this._route.history) // vue处理双向绑定 defineReactive对defineProperty()  进行了封装
        // 定义属性标签 get set
        // defineProperty()
      }
      // 设置一个引用只可读引用
      // 为什么设置的是this._router 却可以使用 this.$router取值
      // defineProperty定义一个引用
      Object.defineProperty(this, '$router', {
        get () {
          return this._router
        }
        // this.$router只可读不可更改
      })
      Object.defineProperty(this, '$route', {
        get () {
          return this._root._router.history.current
        }
        // this.$router只可读不可更改
      })
    }
  })
  Vue.components('router-view',{
    render (r) {
      // this指向的是当前组件的proxy代理对象_self(proxy自带的) 拿到组件的对象 当前组件实例
      // 拿到当前组件是哪个实例
      let current = this._self._root._router.history.current
      let routeMap = this._self._root._router.routesMap
      return r(routeMap[current])
      // r('<div>123</div>')
    }
  })
}
module.exports = vueRouter
// module.exports = vueRouter
// export default {
//   vueRouter
// }
