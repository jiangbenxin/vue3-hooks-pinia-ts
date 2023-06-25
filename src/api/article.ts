import request from '../request/request'

// 获取文章分类列表数据的路由
export const getArtcate = ():PromiseRes<any> => request.get('/my/article/article')
// 新增文章分类的路由
export const addArtcate = (data:any):PromiseRes<any> => request.post('/my/article/addarticle',data)
// 根据 Ids 删除文章分类的路由
export const deleteArtcates = (data:any) => request.post(`/my/article/deletearticle/`,data)
// 根据 Id 获取文章分类的路由
export const getArtcateDetail = (id:any) => request.get(`/my/article/article/${id}`)
// 根据 Id 更新文章分类的路由
export const updateArtcates = (data:any) => request.post('/my/article/updatearticle',data) 
// 根据
export const getArtcateList = (data:any) => request.post('/my/article/articlelist',data)