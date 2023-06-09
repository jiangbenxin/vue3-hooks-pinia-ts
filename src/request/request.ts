import axios from 'axios'
import Cookie from 'js-cookie'

const instance = axios.create({
    // baseURL:'http://120.24.64.5:8088/mall-admin',
    // baseURL:'http://192.168.50.96:3336/',
    baseURL:'https://originalheart.love/',
    // baseURL:'https://101.132.17.94:3334/',
    timeout:15000
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    let token = Cookie.get('token')
    // console.log(token);
    // config.headers['Content-Type']="application/json"
    // config.headers['Content-Type']="multipart/form-data"
    // config.headers['Content-Type']="text/xml"
    config.headers['Content-Type']="application/x-www-form-urlencoded; charset=UTF-8"
    if(token){
        // console.log(config.headers);
        config.headers = config.headers || {}
        config.headers.Authorization = token
    }
    return config
},err=>{
    return Promise.reject(err)
})
// 响应拦截器
instance.interceptors.response.use(result =>{
    return result.data
},err=>{
    return Promise.reject(err)
})

export default instance