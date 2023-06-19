<template>
    <div>
        <theTitle>
                <template #title>
                        <h2 class="title">我的我的我的我的</h2>
                </template>
                <template #inner> 
                <div style="color: #000;">
                        test22
                </div>
                </template>
        </theTitle>
        <div class="articles">
                <div class="article" @click="articleDetail(item.id)" v-for="(item,index) in articleList">
                        <img class="articleImg" src='src/assets/images/bg1.jpg' alt="">
                        <div class="articleTitle">{{ item.title }}</div>
                        <div class="articleTab">{{  item.type }}</div>
                </div>
                <div class="blogFooter">
                    <div class="blogFooter-left">左边</div>
                    <div class="blogFooter-center">1/10</div>
                    <div class="blogFooter-right">右边</div>
                </div>
        </div>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store/index';
import { useTestPinia  } from '../../pinia/index'
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()
let articleList:any = ref([
                        {title:'tcp/ip/http/https',id:0,type:'传输',time:'2023-10-24',test:1,test2:3},
                        {title:'webpack',id:0,type:'打包',time:'2023-10-24',test:1,test2:3},
                        {title:'nvm',id:0,type:'npm',time:'2023-10-24',test:1,test2:3},
                        {title:'npm',id:0,type:'npm',time:'2023-10-24',test:1,test2:3},
                        {title:'vite',id:0,type:'打包',time:'2023-10-24',test:1,test2:3},
                        {title:'websocket',id:0,type:'html',time:'2023-10-24',test:1,test2:3},
                        {title:'微信小程序',id:0,type:'uniapp',time:'2023-10-24',test:1,test2:3},
                        {title:'vue2',id:0,type:'vue',time:'2023-10-24',test:1,test2:3},
                        {title:'vue3',id:0,type:'vue3',time:'2023-10-24',test:1,test2:3},
                        {title:'typescript',id:0,type:'vue3',time:'2023-10-24',test:1,test2:3},
                        {title:'vite',id:0,type:'打包',time:'2023-10-24',test:1,test2:3},
                        // {title:'双向绑定',id:0,type:'vue3',time:'2023-10-24',test:1,test2:3},
                        // {title:'双向绑定',id:0,type:'vue2',time:'2023-10-24',test:1,test2:3},
                        // {title:'语法性能优化',id:0,type:'vue',time:'2023-10-24',test:1,test2:3},
                        // {title:'关于',id:0,type:'工程化',time:'2023-10-24',test:1,test2:3},
                        // {title:'框架选型',id:0,type:'工程化',time:'2023-10-24',test:1,test2:3},
                        // {title:'echarts大屏',id:0,type:'vue2',time:'2023-10-24',test:1,test2:3},
                        // {title:'背景图',id:0,type:'css',time:'2023-10-24',test:1,test2:3},
                        // {title:'布局',id:0,type:'css',time:'2023-10-24',test:1,test2:3},
                        // {title:'git',id:0,type:'代码管理',time:'2023-10-24',test:1,test2:3},
                        // {title:'规范',id:0,type:'规范',time:'2023-10-24',test:1,test2:3},
                        // {title:'axios',id:0,type:'传输',time:'2023-10-24',test:1,test2:3},
                        // {title:'MYSQL',id:0,type:'数据库',time:'2023-10-24',test:1,test2:3},
                        // {title:'闭包',id:0,type:'javascript',time:'2023-10-24',test:1,test2:3},
                        // {title:'微前端',id:0,type:'微前端',time:'2023-10-24',test:1,test2:3},
                        // {title:'安全',id:0,type:'安全',time:'2023-10-24',test:1,test2:3},
                        // {title:'express',id:0,type:'nodejs后端',time:'2023-10-24',test:1,test2:3},
                        // {title:'ES6',id:0,type:'ECMAscript',time:'2023-10-24',test:1,test2:3},
                        // {title:'数据处理',id:0,type:'javascript',time:'2023-10-24',test:1,test2:3},
                        // {title:'code',id:0,type:'传输',time:'2023-10-24',test:1,test2:3},
                        // {title:'code',id:0,type:'移动端',time:'2023-10-24',test:1,test2:3},
        ])
const articleDetail = (id:number)=>{
        router.push(`articleDetail?=${id}`)
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
                .articleImg{
                        width: 100%;
                        height: 160px;
                        border-radius: 10px;
                }
                .articleTitle{
                        text-align-last: left;
                        color: #000;
                        padding-left: 10px;
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        border-bottom: 1px solid #000;
                }
                .articleTab {
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
.blogFooter{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .blogFooter-left,.blogFooter-right{
        text-align: center;
        height: 50px;
        line-height: 50px;
        background-image: v-bind(themeColor);;
        border-radius: 50%;
        width: 50px;
        color: v-bind(themeFzColor);
        cursor:pointer;
    }
    .blogFooter-center{
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