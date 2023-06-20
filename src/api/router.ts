import request from '../request/request'
// import qs from 'qs'
// getAdminLists, getRoleListAll, getAdminRoleById
// 登录返回token
export const adminLogin = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.post('/api/login',data)
