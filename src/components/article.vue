<template>
    <div class="article">
        <!-- <div class="article-title">
                <div>{{ item.articleTitle }}</div>
                <div>{{ dayjs(item.date).format('YYYY-MM-DD') }}</div>
        </div>
        <div class="article-tabs">
                <div class="classification">{{  classification2(item.classificationId) }}</div>
                <div class="tab">{{  articleTab2(item.articleTab) }}</div>
        </div>  -->
    </div>
</template>

<script lang="ts" setup>
import { ref,computed,defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { dayjs } from 'element-plus'
import { useTestPinia  } from '../pinia/index'
import store from '../store/index';
const testStore = useTestPinia()
const themeColor = ref(store.state.userInfo.topMenuScroll)
const themeFzColor = testStore.themeFzColor
const props = defineProps({
    item:{
        type:Array,
        default:()=>{}
    }
})
console.log(props.item);

let articleList:any = ref([
        // {articleTitle:'tcp/ip/http/https',id:0,articleTab:'传输',date:'2023-10-24',classificationId:3},
        // {articleTitle:'webpack',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
        // {articleTitle:'nvm',id:0,articleTab:'npm',date:'2023-10-24',classificationId:3},
        // {articleTitle:'npm',id:0,articleTab:'npm',date:'2023-10-24',classificationId:3},
        // {articleTitle:'vite',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
        // {articleTitle:'websocket',id:0,articleTab:'html',date:'2023-10-24',classificationId:3},
        // {articleTitle:'微信小程序',id:0,articleTab:'uniapp',date:'2023-10-24',classificationId:3},
        // {articleTitle:'vue2',id:0,articleTab:'vue',date:'2023-10-24',classificationId:3},
        // {articleTitle:'vue3',id:0,articleTab:'vue3',date:'2023-10-24',classificationId:3},
        // {articleTitle:'articleTabscript',id:0,articleTab:'vue3',date:'2023-10-24',classificationId:3},
        // {articleTitle:'vite',id:0,articleTab:'打包',date:'2023-10-24',classificationId:3},
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
const router = useRouter()
const articleDetail = (id:number)=>{
        const url =  router.resolve(`/articleDetail?id=${id}`)
        window.open(url.href);
}
const classification2:any =computed(()=>{
        return (id:any)=>{
                let str:any =''
                store.state.Artcate.forEach((item:any) => {
                        if(item.id == id){
                                str = item.name 
                        }
                });
                return str
        }
})
const articleTab2:any =computed(()=>{
        return (id:any)=>{
                let str:any =''
                store.state.articleTabs.forEach((item:any) => {
                        if(item.id == id) str = item.tabName 
                });
                return str
        }
})
</script>
<style lang="less" scoped>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        padding: 0 10px;
        border-bottom: 1px solid #000;
}
.article-tabs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        padding: 0 10px;
        height: 16px;
        text-align: center;
        height: 30px;
        .classification ,.tab{
                font-size: 12px;
                line-height: 20px;
                border-radius: 14px;
                width: 60px;
                background-image: v-bind(themeColor);;
                color: v-bind(themeFzColor);
        }
        .tab{
                width: 60px;
                background-image: v-bind(themeColor);;
        }
}}
</style>