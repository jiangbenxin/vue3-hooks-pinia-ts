import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import VueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(VueRouter)
// Vue2 use : 强调的是参数上的install方法，或者是直接调用参数，Vue.propertype.$router/$route
import { App } from 'vue'
import store from '../store'
import Cookies from 'js-cookie'
import { useTestPinia } from '../pinia/index'
// const testsss = useTestPinia()

// const router = new VueRouter({})
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/login/index.vue'),
    redirect: '/myBlogIndex',
    children: [
      {
        path: '/myBlogIndex',
        name: 'myBlogIndex',
        component: () => import('../view/pages2/myBlogIndex.vue'),
      },
      {
        path: '/Classification',
        name: 'Classification',
        component: () => import('../view/pages2/Classification.vue'),
      },
      {
        path: '/theTabs',
        name: 'theTabs',
        component: () => import('../view/pages2/theTabs.vue'),
      },
      {
        path: '/FriendChain',
        name: 'FriendChain',
        component: () => import('../view/pages2/FriendChain.vue'),
      },
      {
        path: '/LeaveMessage',
        name: 'LeaveMessage',
        component: () => import('../view/pages2/LeaveMessage.vue'),
      },
      {
        path: '/About',
        name: 'About',
        component: () => import('../view/pages2/About.vue'),
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../view/pages2/login.vue'),
      },
      {
        path: '/articleDetail',
        name: 'articleDetail',
        component: () => import('../view/pages2/articleDetail.vue'),
      },
    ]
  },
  // {
  //     path: '/',
  //     name: 'homepage',
  //     component: () => import('../view/homepage/homepage.vue'),
  //     redirect: '/index',
  //     children: [
  //       {
  //         path: 'index',
  //         name: 'index',
  //         component: () => import('../view/index/index/index.vue'),
  //       }
  //     ]
  // }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const genRoutes = () => {
  const menus = store.getters.getNewMenus
  // const newRoutes:RouteRecordRaw[] = []
  // 循环菜单对象
  for (const key in menus) {
    const newRoute: any = {
      path: '/' + menus[key].name,
      name: menus[key].name,
      component: () => import('../view/homepage/homepage.vue'),
      redirect: '/' + menus[key].name + '/' + menus[key].children[0].name,
      children: []
    }
    for (let i = 0; i < menus[key].children.length; i++) {
      newRoute.children.push({
        path: menus[key].children[i].name,
        name: menus[key].children[i].name,
        component: () => import(`../view/${menus[key].name}/${menus[key].children[i].name}/index.vue`)
      })
    }
    // console.log(newRoute)
    // 动态添加addRoute路由规则
    router.addRoute(newRoute)
  }
}
const whiteList = ['/myBlogIndex', '/articleDetail', '/Classification', '/theTabs', '/FriendChain', '/LeaveMessage', '/About', '/admin'] // no redirect whitelist
const userWhiteList = ['admin','admin2','admin3','admin4','admin5',] // no redirect whitelist

// 前置路由守卫
router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  let username = store.state.userInfo.username
  let menusLength = store.state.menus.length
  if (store.state.articleTabs == null) {
    store.dispatch('getSelect')
  }
  if (token && menusLength === 0) {
    // 异步
    store.dispatch('getAdminInfo').then(() => {
      genRoutes()
      next(to)
    })
  } else if (token && menusLength !== 0 && userWhiteList.indexOf(username) != -1 &&to.path !=='/') {
    next()
  } else if (token && menusLength !== 0 && userWhiteList.indexOf(username) != -1 &&to.path =='/') {
    next('index')
  } else if (token && menusLength !== 0 && userWhiteList.indexOf(username) == -1 && whiteList.indexOf(to.path) == -1) {
    next('admin')
  } else if (token && menusLength !== 0 && userWhiteList.indexOf(username) == -1 && whiteList.indexOf(to.path)) {
    next()
  } else if (!token && whiteList.indexOf(to.path) == -1) {
    next('/myBlogIndex')
  } else if (!token && whiteList.indexOf(to.path)!=-1) {
    next()
  } else {
    next()
  }

})
export const initRouter = (app: App<Element>) => {
  app.use(router)
}
