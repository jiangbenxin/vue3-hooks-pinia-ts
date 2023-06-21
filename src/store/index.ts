import { createStore } from 'vuex'
import { App } from 'vue'
import { getAdminInfo } from '../api/user'
// import { def } from '@vue/shared'

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
            }
        }
    },
    getters:{
        getNewMenus(state){
            // console.log(`------------`);
            const newMenus:NewMenus = {}
            // 获取旧的菜单
            const menus = state.menus
            menus.forEach((item: MenuObj) => {
                if(!item.parentId){
                    newMenus[item.id] = {...item,children:newMenus[item.id]?.children || []}
                }else{
                    let parentId:any = item.parentId //对应的一级菜单id
                    newMenus[parentId] = newMenus[parentId] || {}
                    newMenus[parentId].children = newMenus[parentId].children || []
                    newMenus[parentId].children.push(item)
                }
            })
            // console.log(newMenus);
            
            return newMenus
        }
    },
    mutations:{
        updateMenus(state,menus){
            state.menus = menus
        },
        updateUserInfo(state,userInfo){
            state.userInfo = userInfo
        },
    },
    actions:{
        getAdminInfo({ commit }){
            const id = 5
            return new Promise((resolve: (arg0: unknown) => void,reject: (arg0: unknown) => void)=>{
                getAdminInfo(id).then((res: any)=>{
                    if(res.status == 0){
                        // let routers = res.data.router || [
                        //     {   
                        //         parentId:0,
                        //         title:'index',
                        //         name: 'index',
                        //         hidden:0,
                        //         id:100,
                        //     },
                        //     {   
                        //         hidden:0,
                        //         id:88,
                        //         parentId:100,
                        //         title:'index',
                        //         name: 'index',
                        //     },
                        // ]
                        let routers = [
                            {   
                                parentId:0,
                                title:'index',
                                name: 'index',
                                path: '/index',
                                hidden:0,
                                id:100,
                            },
                            {   
                                hidden:0,
                                id:88,
                                parentId:100,
                                title:'index',
                                name: 'index',
                                path: '/index',
                            },
                            {   
                                parentId:0,
                                title:'router',
                                name: 'router',
                                path: '/router',
                                hidden:0,
                                id:110,
                            },
                            {
                                hidden:0,
                                id:12,
                                parentId:110,
                                title:'router',
                                name: 'router',
                                path: '/router',
                            },
                            {
                                parentId:0,
                                title:'npm',
                                name: 'npm',
                                path: '/npm',
                                hidden:0,
                                id:117,
                            },
                            {
                                parentId:0,
                                title:'articleManage',
                                name: 'articleManage',
                                path: '/articleManage',
                                hidden:0,
                                id:999,
                            },
                            {   
                                hidden:0,
                                id:1000,
                                parentId:999,
                                title:'articleClassification',
                                name: 'articleClassification',
                                path: '/articleClassification',
                            },
                            {   
                                hidden:0,
                                id:1001,
                                parentId:999,
                                title:'articles',
                                name: 'articles',
                                path: '/articles',
                            },
                           
                            {   
                                hidden:0,
                                id:1002,
                                parentId:999,
                                title:'articleTabs',
                                name: 'articleTabs',
                                path: '/articleTabs',
                            },
                            {   
                                hidden:0,
                                id:1003,
                                parentId:999,
                                title:'friendChain',
                                name: 'friendChain',
                                path: '/friendChain',
                            },
                            {   
                                hidden:0,
                                id:1004,
                                parentId:999,
                                title:'leaveMessage',
                                name: 'leaveMessage',
                                path: '/leaveMessage',
                            },

                            {   
                                path: '/components',
                                parentId:0,
                                id:118,
                                name: 'components',
                                hidden:0,
                                title:'components',
                            },
                            {   
                                path: '/map',
                                parentId:0,
                                id:120,
                                name: 'map',
                                hidden:0,
                                title:'map',
                            },
                            {   
                                parentId:120,
                                id:121,
                                name: 'map',
                                hidden:0,
                                title:'map',
                                path: '/map',
                            },
                            {   
                                path: '/vue3',
                                parentId:0,
                                id:121,
                                name: 'vue3',
                                hidden:0,
                                title:'vue3',
                            },
                            {   
                                parentId:121,
                                id:122,
                                name: 'vue3',
                                hidden:0,
                                title:'vue3',
                                path: '/vue3',
                            },
                            {   
                                hidden:0,
                                id:42,
                                parentId:118,
                                title:'piniaAndVuex',
                                name: 'piniaAndVuex',
                                path: '/piniaAndVuex',
                            },
                            {   
                                hidden:0,
                                id:43,
                                parentId:118,
                                title:'hooksUse',
                                name: 'hooksUse',
                                path: '/hooksUse',
                            },
                            {   
                                parentId:117,
                                title:'npm',
                                hidden:0,
                                name: 'npm',
                                id:523,
                                path: '/npm',
                            },
                            
                        ]
                        commit('updateUserInfo', res.data)
                        commit('updateMenus', routers)
                        resolve(res)
                    }else{
                        reject(res)
                    }            
                })
            })
        }
    },
    modules:{}
})

export const initStore = (app:App<Element>)=>{
    app.use(store)
}
export default store