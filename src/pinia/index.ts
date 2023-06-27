import { defineStore } from 'pinia'
import { adminLogin, adminLogout } from '../api/user'
import Cookie from 'js-cookie'
import store from '../store'

type TestState = {
  theToken:string
  count: number
  user: {
    age: number
    name: string|number,
    id:any
  },
  themeFzColor:string|null
}
// 在此约束类型不管编写或使用都可有较好的提示
export const useTestPinia = defineStore<string, TestState>('TestId', {
  state: () => ({
    theToken:'123',
    count: 10,
    user: {
      age: 18,
      name: '小明',
      id:null
    },
    themeFzColor:'#fff'
  }),
  getters: {
    doubleCount: (state:any) => state.count * 2,
    username: (state:any) => state.user.name,
    theToken2: (state:any) => state.theToken,
  },
  actions: {
    adminLogin(loginForm:any){
      return new Promise((resolve:any,reject:any)=>{
        adminLogin(loginForm).then((res: any)=>{
            if(res.code == 200){
              Cookie.set('token',res.token,{expires:7})
              this.theToken =res.token
              resolve(res)
            }else{
              reject(res)
            }            
        })
      })
    },
    adminLogout(){
      let username:any = store.state.userInfo.username
      return new Promise((resolve:any,reject:any)=>{
        adminLogout({username}).then((res: any)=>{
          if(res.code == 200){
            Cookie.remove('token')
            this.theToken = ''
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    },
    setCount(num:number){this.count = num}
  }
})