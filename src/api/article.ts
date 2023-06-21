import request from '../request/request'

// 获取文章分类列表数据的路由
export const getArticle = ():PromiseRes<any> => request.get('/my/article/articles')
// 新增文章分类的路由
export const addArticle = (data:any):PromiseRes<any> => request.post('/my/article/addarticle',data)
// 根据 Id 删除文章分类的路由
export const deleteArticle = (id:any) => request.get(`/my/article/deletearticle/${id}`)
// 根据 Id 获取文章分类的路由
export const getArticleDetail = (id:any) => request.get(`/my/article/article/${id}`)
// 根据 Id 更新文章分类的路由
export const updateArticles = (data:any) => request.post('/my/article/updatearticle',data)