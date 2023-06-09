// @ts-nocheck
import request from '../request/request'
// import qs from 'qs'
// getAdminLists, getRoleListAll, getAdminRoleById
// 登录返回token
export const adminLogin = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.post('/api/login',data)
export const adminResgiter = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.post('/api/register',data)
// 退出登录
export const adminLogout = (data:AdminLogoutData) => request.post('/api/logout',data)

// 获取当前登录用户信息
// export const getAdminInfoApi = ():PromiseRes<AdminInfoRes> => request.get('/admin/info')
export const getAdminInfo = (username:AdminUserInfoData) => request.get('/my/userinfo',username)
// 获取用户数据列表


// export const getAdminLists = (data:AdminListParams):PromiseRes<{ list: {}[] }> => request.get('/admin/list',{ params: data })
// 修改用户信息
// export const updateAdmin = (id:number,data:AdminObjItf):PromiseRes<AdminLoginRes> => request.post('/admin/update/'+id,data)
// 获取所有角色
// export const getRoleListAll = ():PromiseRes<RoleObjItf[]> => request.get('/role/listAll')
// 根据用户id获取角色
// export const getAdminRoleById = (id:number):PromiseRes<RoleObjItf[]> => request.get('/admin/role/'+id)
// 分配用户角色
// export const updateAdminRole = (data:{adminId:number,roleIds:string}):PromiseRes => request.post('/admin/role/update',null,{params:data})
// 分配用户角色的form-data
// export const updateAdminRole = (data:{adminId:number,roleIds:string}):PromiseRes => request.post('/admin/role/update',qs.stringify(data))
// 获取首页数据
// export const getAdminStat = (): PromiseRes<IndexDataItf> => request.get('http://kumanxuan1.f3322.net:8360/admin/stat')