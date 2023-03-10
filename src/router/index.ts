import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
// import VueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(VueRouter)
// Vue2 use : 强调的是参数上的install方法，或者是直接调用参数，Vue.propertype.$router/$route
import {App} from 'vue'
import store from '../store'
import Cookies from 'js-cookie'
import { getAdminInfoApi } from '../request/api'
// const router = new VueRouter({})
const routes:RouteRecordRaw[] =[
    {
        path:'/login',
        name:'login',
        component:()=>import('../view/login/index.vue')
    },
    {
        path: '/',
        name: 'homepage',
        component: () => import('../view/homepage/homepage.vue'),
        redirect: '/index',
        children: [
          {
            path: 'index',
            name: 'index',
            component: () => import('../view/index/index.vue'),
          }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const genRoutes = ()=>{
    const menus = store.getters.getNewMenus
    // const newRoutes:RouteRecordRaw[] = []
    // 循环菜单对象
    for (const key in menus) {
        const newRoute:RouteRecordRaw = {
            path:'/' + menus[key].name,
            name:menus[key].name,
            component:()=>import('../view/homepage/homepage.vue'),
            redirect:'/' + menus[key].name + '/' + menus[key].children[0].name,
            children:[]
        }
        for (let i = 0; i < menus[key].children.length; i++) {
            newRoute.children?.push({
                path:menus[key].children[i].name,
                name:menus[key].children[i].name,
                component:()=>import(`../view/${menus[key].name}/${menus[key].children[i].name}.vue`)
            })
        }
    // 动态添加addRoute路由规则
    router.addRoute(newRoute)
    }
    // 动态添加首页
//   router.addRoute({
//     path: '/homepage',
//     name: 'homepage',
//     component: () => import('../view/homepage/homepage.vue'),
//     redirect: '/index',
//     children: [
//       {
//         path: 'index',
//         name: 'index',
//         component: () => import('../view/index/index.vue'),
//       }
//     ]
//   });
}
// 前置路由守卫
router.beforeEach((to,from,next)=>{
    const token = Cookies.get('token')
    if(token&&store.state.menus.length === 0){
        console.log('menus为空');
        // 异步
        store.dispatch('getAdminInfo').then(()=>{
            genRoutes()
            next(to)
        })
        
    }else if(token&&store.state.menus.length !== 0 && from.path ==='/login' &&to.path === '/homepage'){
        genRoutes()
        next('/index')
    }else if(!token && to.path !== '/login'){
        next('login')
    }else if(token && to.path == '/login'){
        next(from)
    }else{
        next()
    }
})
export const initRouter = (app:App<Element>)=>{
    app.use(router)
}

// export default router