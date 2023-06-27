import request from '../request/request'
// import qs from 'qs'
// getAdminLists, getRoleListAll, getAdminRoleById
// 登录返回token
export const getuserRouter = ():PromiseRes<AdminLoginRes> => request.get('/my/allRouter/allRouter')
