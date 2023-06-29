import { createStore } from 'vuex'
import { App } from 'vue'
import { getAdminInfo } from '../api/user'
// import { def } from '@vue/shared'
import { getArtcate } from './../api/artcate'
import { getarticleTabs } from './../api/articleTabs'
import { getuserRouter } from './../api/router'
import Cookie from 'js-cookie'
import { adminLogin, adminLogout } from '../api/user'
import { log } from 'console'

interface MenuObj {
    parentId:number
    id:number
    children:MenuObj[]
}
interface State {
    [x: string]: any
    menus:MenuObj[]
}
interface NewMenus {
    [key:number]:MenuObj
}
const getDefaultState = () => {
    return {
        menus:[],
        userInfo:{
            id:null,
            nickname:null,
            email:null,
            username:null,
            user_pic:'test',
            topMenuScroll: 'linear-gradient(to right, #9733EE, #DA22FF)',
            // topMenuScroll: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'
            // topMenuScroll: 'linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)',
            // topMenuScroll: 'linear-gradient(to right, #64b3f4 0%, #00ecbc 100%);',
        },
        articleTabs:null,
        Artcate:null,
        allRouters:null
    }
  }
const store = createStore<State>({
    state(){
        return {
            menus:[],
            userInfo:{
                id:null,
                nickname:null,
                email:null,
                username:null,
                user_pic:'test',
                topMenuScroll: 'linear-gradient(to right, #9733EE, #DA22FF)',
                // topMenuScroll: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'
                // topMenuScroll: 'linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)',
                // topMenuScroll: 'linear-gradient(to right, #64b3f4 0%, #00ecbc 100%);',
                
            },
            articleTabs:null,
            Artcate:null,
            allRouters:null
        }
    },
    getters:{
        getNewMenus(state) {return state.menus}
    },
    mutations:{
        updateMenus(state,menus){
            state.menus = menus
        },
        updateUserInfo(state,userInfo){
            state.userInfo = userInfo
        },
        updatearticleTabs(state,articleTabs){
            state.articleTabs = articleTabs
        },
        updateArtcate(state,Artcate){
            state.Artcate = Artcate
        },
        updateallRouters(state,allRouters){
            state.allRouters = allRouters
        },
        clearState(state,states){
            Object.assign(state, getDefaultState())
        },
    },
    actions:{
        adminLogin({ commit },loginForm:any){
            return new Promise((resolve:any,reject:any)=>{
              adminLogin(loginForm).then((res: any)=>{
                  if(res.code == 200){
                    Cookie.set('token',res.token)
                    resolve(res)
                  }else{
                    reject(res)
                  }            
              })
            })
          },
        getAdminInfo({ commit,dispatch }){
            return new Promise((resolve: (arg0: unknown) => void,reject: (arg0: unknown) => void)=>{
                getAdminInfo().then((res: any)=>{
                    if(res.status == 0){
                        const menuRoutersArr = JSON.parse(res.data.menuRouters)
                        commit('updateUserInfo', res.data)
                        const newMenus:NewMenus = {}
                        menuRoutersArr.forEach((item: MenuObj) => {
                            if(!item.parentId){
                                newMenus[item.id] = {...item,children:newMenus[item.id]?.children || []}
                            }else{
                                let parentId:any = item.parentId //对应的一级菜单id
                                newMenus[parentId] = newMenus[parentId] || {}
                                newMenus[parentId].children = newMenus[parentId].children || []
                                newMenus[parentId].children.push(item)
                            }
                        })
                        console.log(newMenus);
                        
                        commit('updateMenus', newMenus)
                        dispatch('getSelect')
                        resolve(res)
                    }else{
                        reject(res)
                    }            
                })
            })
        },
        getSelect({ commit }){
              const promise1:any = new Promise(()=>{
                getarticleTabs().then((res: any)=>{
                    commit('updatearticleTabs', res.data)
                })
            })
            const promise2:any = new Promise(()=>{
                getArtcate().then((res: any)=>{
                    commit('updateArtcate', res.data)
                })
            })
            const promise3:any = new Promise(()=>{
                getuserRouter().then((res: any)=>{
                    commit('updateallRouters', res.data)
                })
            })
            return Promise.all([promise1,promise2,promise3]).then(function (posts) {
                console.log("ok")
            }).catch(function(){
                console.log('出错了')
            })
            // return new Promise((resolve: (arg0: unknown) => void,reject: (arg0: unknown) => void)=>{
            //     getarticleTabs().then((res: any)=>{
            //         commit('updatearticleTabs', res.data)
            //     })
            //     getArtcate().then((res: any)=>{
            //         commit('updateArtcate', res.data)
            //     })
            //     getuserRouter().then((res: any)=>{
            //         commit('updateallRouters', res.data)
            //     })
            // })
        },
        logout({ commit }){
            let state = {
                menus:[],
                userInfo:{
                    id:null,
                    nickname:null,
                    email:null,
                    username:null,
                    user_pic:'test',
                    topMenuScroll: 'linear-gradient(to right, #9733EE, #DA22FF)',
                    // topMenuScroll: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'
                    // topMenuScroll: 'linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)',
                    // topMenuScroll: 'linear-gradient(to right, #64b3f4 0%, #00ecbc 100%);',
                    
                },
                articleTabs:null,
                Artcate:null,
                allRouters:null
            }
            commit('clearState', state)
            console.log(store.state);
        }
    },
    modules:{}
})

export const initStore = (app:App<Element>)=>{
    app.use(store)
}
export default store