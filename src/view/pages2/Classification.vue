<template>
        <div>
                <theTitle>
                        <template #title>
                                <h2 class="title">分类</h2>
                        </template>
                        <template #inner> 
                                <div class="tab-box">
                                <div :style="{'background-color': getRandomColor()}" v-for="(item,index) in tabList" class="allTabs">
                                        {{ item.name }}
                                </div>
                        </div>
                        </template>
                </theTitle>
        <div class="articles">
                <div @click="articleDetail(item.id)"  class="article" v-for="(item,index) in articleList">
                        <img class="article-img" src='src/assets/images/bg1.jpg' alt="">
                        <div class="article-title">test</div>
                        <div class="article-tab">axios</div>
                </div>
                <div class="blog-footer">
                <div class="blog-footer-left">左边</div>
                <div class="blog-footer-center">1/10</div>
                <div class="blog-footer-right">右边</div>
                </div>
        </div>
        <div class="blog-footer">
        
        </div>
</div>
</template>
<script lang='ts'  setup>
import {getRandomColor} from '../../utils/niceFun'
import { useRouter } from 'vue-router'
import theTitle from '../../components/theTitle.vue'
import { ref ,defineProps,toRefs } from 'vue'
import { useTestPinia  } from '../../pinia/index'
import store from '../../store/index';
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()

const props = defineProps({
	first:{
		type:String,//类型字符串
		default:''//如果没有传递msg参数,默认值是这个
	},
})

// const {first} =toRefs(props)
const articleDetail = (id:number)=>{
        const url =  router.resolve(`/articleDetail?=${id}`)
        window.open(url.href);
}
let articleList:any = ref([
        {title:'首页',icon:'/src/assets/icon/QQ.png'},
        {title:'分类',icon:'/src/assets/icon/github.png'},
        {title:'标签',icon:'/src/assets/icon/邮箱.png'},
        {title:'友链',icon:'/src/assets/icon/邮箱.png'},
        {title:'留言',icon:'/src/assets/icon/微信.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
        {title:'关于',icon:'/src/assets/icon/friend.png'},
])
const tabList:any = ref([
        {name:'移动端',},
        {name:'web端',},
        {name:'打包',},
        {name:'业务',},
        {name:'代码管理',},
        {name:'传输',},
        {name:'数据库',},
        {name:'javascript',},
        {name:'安全',},
        {name:'ECMAscript',},
        {name:'nodejs后端',},
        {name:'css',},
    ])
</script>
<style lang="less" scoped>

.tab-box{
    .allTabs{
        
        margin: 10px 15px;
        padding: 19px 14px;
        display: inline-block;
        line-height: 0;
        border-radius: 5px;
        color: #34495e;
        cursor: pointer;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .12);

    }
    .allTabs:hover {
        color: #fff;
        background: v-bind(themeColor);
    }
}
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
                cursor:pointer;
                flex: 1;
                height: 220px;
                border-radius: 10px;
                margin-bottom: 10px;
                box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
                
                .article-img{
                        width: 100%;
                        height: 160px;
                        border-radius: 10px;
                }
                .article-title{
                        text-align-last: left;
                        color: #000;
                        padding-left: 10px;
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        border-bottom: 1px solid #000;
                }
                .article-tab {
                        height: 16px;
                        width: 40px;
                        background-image: v-bind(themeColor);
                        border-radius: 8px;
                        text-align: center;
                        line-height: 16px;
                        font-size: 12px;
                        margin-left: 10px;
                        margin-top: 10px;
                        color:v-bind(themeFzColor)
                }
        }
}
.blog-footer{
        color: v-bind(themeFzColor);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
.blog-footer-left,.blog-footer-right{
        text-align: center;
        height: 50px;
        line-height: 50px;
        background-image: v-bind(themeColor);
        border-radius: 50%;
        width: 50px;
}
.blog-footer-center{
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 50px;
        color:#000;
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