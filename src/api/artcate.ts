import request from '../request/request'

// 获取文章分类列表数据的路由
export const getArtcate = ():PromiseRes<any> => request.get('/my/article/cates')
// 新增文章分类的路由
export const addArtcate = (data:any):PromiseRes<any> => request.post('/my/article/addcates',data)
// 根据 Ids 删除文章分类的路由
export const deleteArtcates = (data:any) => request.post(`/my/article/deletecates/`,data)
// 根据 Id 获取文章分类的路由
export const getArtcateDetail = (id:any) => request.get(`/my/article/cates/${id}`)
// 根据 Id 更新文章分类的路由
export const updateArtcates = (data:any) => request.post('/my/article/updatecate',data) 
// 根据
export const getArtcateList = (data:any) => request.post('/my/article/cateslist',data)