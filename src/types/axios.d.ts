interface AdminLoginData {
    password:string
    username:string
}
interface AdminLogoutData {
    username:string
}
interface AdminUserInfoData {
    username:string
}
type PromiseRes<T = {}> = Promise<ManageResult<T>>

interface ManageResult<T = {}>{
    code?:number
    errno?:number
    data?:T
}
// 登录返回接口
interface AdminLoginRes {
    token:string
    message:string
    status:number
}
// 当前用户信息
interface AdminInfoRes{
    menus:[]
}
interface AdminListParams {
    keyword:string
    pageNum:number
    pageSize:number
}