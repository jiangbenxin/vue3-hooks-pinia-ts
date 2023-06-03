import { defineStore } from 'pinia'
import { adminLogin, adminLogout } from '../api/user'
import Cookie from 'js-cookie'
import store from '../store'

// 在此约束类型不管编写或使用都可有较好的提示
export const useTestPinia = defineStore<string, TestState, TestGetters, TestActions>('TestId', {
  state: () => ({
    theToken:22,
    count: 10,
    user: {
      age: 18,
      name: '小明'
    },
  }),
  getters: {
    doubleCount: (state:any) => state.count * 2,
    username: (state:any) => state.user.name,
    theToken2: (state:any) => state.theToken,
  },
  actions: {
    adminLogin(loginForm:any){
      return new Promise((resolve:any,reject:any)=>{
        adminLogin(loginForm).then(res=>{
            if(res.code == 200){
              this.theToken =res.token
              resolve(res)
            }else{
                reject(res)
            }            
        })
      })
    },
    adminLogout(){
      let username = store.state.userInfo.username
      return new Promise((resolve:any,reject:any)=>{
        adminLogout({username}).then(res=>{
          if(res.code == 200){
            Cookie.remove('token')
            this.theToken = undefined
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    }
  }
})