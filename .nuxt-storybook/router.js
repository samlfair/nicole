import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b29f56c = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _1d8286b7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _70b85888 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _6b29f56c,
    name: "prismic-preview"
  }, {
    path: "/",
    component: _1d8286b7,
    name: "index"
  }, {
    path: "/:uid",
    component: _70b85888,
    name: "uid"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
