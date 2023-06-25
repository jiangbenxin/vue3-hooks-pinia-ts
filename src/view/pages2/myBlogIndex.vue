<template>
    <div>
        <theTitle>
                <template #title>
                        <h2 class="title">我的我的我的我的</h2>
                </template>
                <template #inner> 
                <div style="color: #000;">
                        classificationId2
                </div>
                </template>
        </theTitle>
        <div class="articles">
                <div class="article" @click="articleDetail(item.id)" v-for="(item,index) in articleList">
                        <img class="article-img" src='src/assets/images/bg1.jpg' alt="">
                        <div class="article-title">{{ item.articleTitle }}</div>
                        <div class="article-tab">{{  item.classificationId }}</div>
                </div>
                <div class="blog-footer">
                    <div class="blog-footer-left">左边</div>
                    <div class="blog-footer-center">1/10</div>
                    <div class="blog-footer-right">右边</div>
                </div>
        </div>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store/index';
import { useTestPinia  } from '../../pinia/index'
import { getArtcateList } from '../../api/article'
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()
let articleList:any = ref([
        {articleTitle:'tcp/ip/http/https',id:0,articleTab:'传输',date:'2023-10-24',classificationId:3},
        {articleTitle:'webpack',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
        {articleTitle:'nvm',id:0,articleTab:'npm',date:'2023-10-24',classificationId:3},
        {articleTitle:'npm',id:0,articleTab:'npm',date:'2023-10-24',classificationId:3},
        {articleTitle:'vite',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
        {articleTitle:'websocket',id:0,articleTab:'html',date:'2023-10-24',classificationId:3},
        {articleTitle:'微信小程序',id:0,articleTab:'uniapp',date:'2023-10-24',classificationId:3},
        {articleTitle:'vue2',id:0,articleTab:'vue',date:'2023-10-24',classificationId:3},
        {articleTitle:'vue3',id:0,articleTab:'vue3',date:'2023-10-24',classificationId:3},
        {articleTitle:'articleTabscript',id:0,articleTab:'vue3',date:'2023-10-24',classificationId:3},
        {articleTitle:'vite',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
        // {articleTitle:'双向绑定',id:0,articleTab:'vue3',date:'2023-10-24',classificationId:3},
        // {articleTitle:'双向绑定',id:0,articleTab:'vue2',date:'2023-10-24',classificationId:3},
        // {articleTitle:'语法性能优化',id:0,articleTab:'vue',date:'2023-10-24',classificationId:3},
        // {articleTitle:'关于',id:0,articleTab:'工程化',date:'2023-10-24',classificationId:3},
        // {articleTitle:'框架选型',id:0,articleTab:'工程化',date:'2023-10-24',classificationId:3},
        // {articleTitle:'echarts大屏',id:0,articleTab:'vue2',date:'2023-10-24',classificationId:3},
        // {articleTitle:'背景图',id:0,articleTab:'css',date:'2023-10-24',classificationId:3},
        // {articleTitle:'布局',id:0,articleTab:'css',date:'2023-10-24',classificationId:3},
        // {articleTitle:'git',id:0,articleTab:'代码管理',date:'2023-10-24',classificationId:3},
        // {articleTitle:'规范',id:0,articleTab:'规范',date:'2023-10-24',classificationId:3},
        // {articleTitle:'axios',id:0,articleTab:'传输',date:'2023-10-24',classificationId:3},
        // {articleTitle:'MYSQL',id:0,articleTab:'数据库',date:'2023-10-24',classificationId:3},
        // {articleTitle:'闭包',id:0,articleTab:'javascript',date:'2023-10-24',classificationId:3},
        // {articleTitle:'微前端',id:0,articleTab:'微前端',date:'2023-10-24',classificationId:3},
        // {articleTitle:'安全',id:0,articleTab:'安全',date:'2023-10-24',classificationId:3},
        // {articleTitle:'express',id:0,articleTab:'nodejs后端',date:'2023-10-24',classificationId:3},
        // {articleTitle:'ES6',id:0,articleTab:'ECMAscript',date:'2023-10-24',classificationId:3},
        // {articleTitle:'数据处理',id:0,articleTab:'javascript',date:'2023-10-24',classificationId:3},
        // {articleTitle:'code',id:0,articleTab:'传输',date:'2023-10-24',classificationId:3},
        // {articleTitle:'code',id:0,articleTab:'移动端',date:'2023-10-24',classificationId:3},
])
onMounted(async()=>{
        let obj ={
                curPage:1,
                pageSize:12,
        }
        const res = await getArtcateList(obj)
        articleList.value = res.data
})
const articleDetail = (id:number)=>{
        const url =  router.resolve(`/articleDetail?id=${id}`)
        window.open(url.href);
}
</script>
<style lang="less" scoped>
.title{
        margin-bottom: 20px;
        color:#000;
}
.articles{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-between;
        .article{
                flex: 1;
                height: 220px;
                border-radius: 10px;
                margin-bottom: 10px;
                box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
                cursor:pointer;
                .article-img{
                        width: 100%;
                        height: 160px;
                        border-radius: 10px;
                }
                .article-title{
                        color: #000;
                        padding-left: 10px;
                        border-bottom: 1px solid #000;
                }
                .article-tab {
                        height: 16px;
                        width: 40px;
                        background-image: v-bind(themeColor);;
                        border-radius: 8px;
                        text-align: center;
                        line-height: 16px;
                        font-size: 12px;
                        margin-left: 10px;
                        margin-top: 10px;
                        color: v-bind(themeFzColor);
                }
        }
}
.blog-footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .blog-footer-left,.blog-footer-right{
        text-align: center;
        height: 50px;
        line-height: 50px;
        background-image: v-bind(themeColor);;
        border-radius: 50%;
        width: 50px;
        color: v-bind(themeFzColor);
        cursor:pointer;
    }
    .blog-footer-center{
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 50px;
        color: #000;
    }
}
@media screen and (max-width:640px){
        .articles{
                width: 290px;
                min-width: 290px;
                .article{
                        min-width: 290px;
                }
        }
}
@media screen and (min-width:640px) and (max-width:1100px) {
        .articles{
                width: 600px;
                        .article{
                        max-width: 47%;
                        min-width: 49%;
                }
        }
}
@media screen and (min-width:1100px) {
        .articles{
                width: 1000px;
                .article{
                        max-width: 30%;
                        min-width: 290px;
                }
        }
}
</style>