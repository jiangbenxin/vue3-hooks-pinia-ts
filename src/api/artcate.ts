import request from '../request/request'

// 获取文章分类列表数据的路由
export const getArtcate = ():PromiseRes<any> => request.get('/my/article/cates')
// 新增文章分类的路由
export const addArtcate = (data:any):PromiseRes<any> => request.post('/my/article/addcates',data)
// 根据 Id 删除文章分类的路由
export const deleteArtcate = (id:any) => request.get(`/my/article/deletecate/${id}`)
// 根据 Id 获取文章分类的路由
export const getArtcateAll = (id:any) => request.get(`/my/article/cates/${id}`,id)
// 根据 Id 更新文章分类的路由
export const updateArtcates = (data:any) => request.post('/my/article/updatecate',data) 