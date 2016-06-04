import Vue from 'vue'
import Utils from './utils'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Utils)
Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  history: process.env.NODE_ENV !== 'development'
})

router.map({
  '/': {
    name: 'home',
    component: require('views/Home')
  },
  '/today': {
    name: 'today',
    component: require('views/Today')
  },
  '/archive': {
    name: 'archive',
    component: require('views/Archive')
  },
  '/galleries/:gallery_id': {
    name: 'gallery',
    component: require('views/Gallery')
  },
  '/items/:item_id': {
    name: 'item',
    component: require('views/Item')
  },
  '/login/account': {
    name: 'login_account',
    component: require('./views/login/Account')
  },
  '/login/oauth': {
    name: 'login_oauth',
    component: require('./views/login/Oauth')
  },
  '/mine': {
    name: 'mine',
    component: require('./views/mine/Home')
  },
  '/mine/settings': {
    name: 'mine_settings',
    component: require('./views/mine/Settings')
  },
  '/mine/galleries/new': {
    name: 'mine_new_gallery',
    component: require('views/mine/NewGallery')
  },
  '/mine/galleries/:gallery_id': {
    name: 'mine_gallery',
    component: require('views/mine/Gallery')
  },
  '/mine/items/new': {
    name: 'mine_new_item',
    component: require('views/mine/NewItem')
  },
  '/mine/items/:item_id': {
    name: 'mine_item',
    component: require('views/mine/Item')
  }
})

router.redirect({
  '*': '/'
})

router.beforeEach(function (transition) {
  if (/^\/mine/.test(transition.to.path) && !router.app.isLoggedIn) {
    transition.redirect({ name: 'login_oauth' })
  } else if (/^\/login/.test(transition.to.path) && router.app.isLoggedIn) {
    transition.redirect({ name: 'mine' })
  } else {
    transition.next()
  }
})

router.afterEach(function (transition) {
  window._hmt.push(['_trackPageview', window.location])
})

router.start(require('./App.vue'), '#app')
