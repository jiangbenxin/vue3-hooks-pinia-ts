<template>
        <div class="container" :first="first">
                <div class="artile-detail-tabs">
                        <div class="article-tab">{{articleDetails.articleTab}}</div>
                        <div class="article-tab">{{articleDetails.classificationId}}</div>
                </div>
                <div class="artile-detail-time">{{articleDetails.classificationId}}</div>
                <div class="artile-detail-line"></div>
                <div class="artile-details" v-for="item in articleDetails.articleText">
                        <div class="artile-details-title" >{{ item.title }}</div>
                        <div class="artile-details-text" v-html="item.text"></div>
                        <Codemirror
                                :value="item.code"
                                :options="cmOptions"
                                border
                                ref="cmRef"
                                @change="onChange"
                                @input="onInput"
                                @ready="onReady">
                        </Codemirror>
                </div>
        </div>
        <div class="footer-articles">
                        <div class="footer-article" @click="articleDetail(item.id)" v-for="(item,index) in articlePreviousNext">
                                <img class="footer-article-img" src='src/assets/images/bg1.jpg' alt="">
                                <div class="footer-article-title">{{ item.title }}</div>
                                <div class="footer-article-tab">{{  item.type }}</div>
                        </div>
                </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted,onUnmounted } from 'vue'
import store from '../../store';
import { useTestPinia  } from '../../pinia/index'
import { useRouter, useRoute  } from 'vue-router'
import "codemirror/mode/javascript/javascript.js"
import Codemirror from "codemirror-editor-vue3"
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/neo.css";
import { getArtcateDetail } from '../../api/article'
const testStore = useTestPinia()
const router = useRouter()
const route = useRoute()
const themeFzColor = testStore.themeFzColor
const themeColor = ref(store.state.userInfo.topMenuScroll)
const first = ref('relative')
const cmRef = ref()
const cmOptions = reactive({
    mode: "text/javascript",
    lineNumbers: true, // Show line number
    smartIndent: true, // Smart indent
    indentUnit: 4, // The smart indent unit is 2 spaces in length
    foldGutter: true, // Code folding
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true, // Display the style of the selected row
    readOnly:true,
})
onMounted(async()=>{
        const res = await getArtcateDetail(route.query.id)
        setTimeout(()=>{
                articleDetails.value = res.data
        articleDetails.value.articleText = JSON.parse(res.data.articleText)
        console.log(articleDetails.value);
        },1000)
        
})
const onChange = (val:any, cm:any) => {
    console.log(val)
    console.log(cm.getValue())
}
 
const onInput = (val:any) => {
    console.log(val)
}
 
const onReady = (cm:any) => {
    console.log(cm.focus())
}
// onMounted(() => {
//     setTimeout(() => {
//         cmRef.value?.refresh()
//     }, 1000)
 
//     setTimeout(() => {
//         // cmRef.value?.resize(300, 200)
//     }, 2000)
 
//     setTimeout(() => {
//         cmRef.value?.cminstance.isClean()
//     }, 3000)
// })
 
// onUnmounted(() => {
//     cmRef.value?.destroy()
// })
const articleDetails:any = ref([
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
])
let articlePreviousNext:any = ref([
                {title:'tcp/ip/http/https',id:0,type:'传输',time:'2023-10-24',test:1,test2:3},
                {title:'webpack',id:0,type:'打包',time:'2023-10-24',test:1,test2:3},
        ])
const articleDetail = (id:number)=>{
        articleDetails.value = [
        {title:'标题',text:'<div>正文</div><div>正文</div>',code: `for (let i = 0; i < 9; i++) {
     console.log(i);
}`},
]
        articlePreviousNext.value = [
                {title:'tcp/ip/http/https',id:0,type:'传输',time:'2023-10-24',test:1,test2:3},
                {title:'webpack',id:0,type:'打包',time:'2023-10-24',test:1,test2:3},
        ]
}
</script>
<style lang="less" scoped>
.container{
        width: 80%;
        position: relative;
        border-radius: 20px;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
        padding: 10px 3%;
        background-color: #fff;
        margin-top: -20%;
        .artile-detail-tabs{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 3%;
                .article-tab {
                        height: 16px;
                        width: 40px;
                        background-image: v-bind(themeColor);;
                        border-radius: 8px;
                        text-align: center;
                        line-height: 16px;
                        font-size: 12px;
                        color: v-bind(themeFzColor);
                }
        }
        .artile-detail-time{
                text-align: left;
                margin-top: 10px;
                padding: 0 3%;
        }
        .artile-detail-line{
                border-bottom: 1px solid #000;
        }
        .artile-details{
                text-align: left;
                padding: 10px 3%;
                .artile-details-title{

                }
                .artile-details-text{
                        border-left: 4px solid #9833ee;
                        padding-left: 10px;
                        background-color: #e5d2ec77;
                        color: #666;
                        font-size: 14px;
                        margin-bottom: 10px;
                        margin-top: 5px;
                }
                .artile-details-code{

                }
        }
       
}
.footer-articles{
                width: 80%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 10px 3%;
                margin: 0 auto;
                .footer-article{
                        height: 220px;
                        border-radius: 10px;
                        margin-bottom: 10px;
                        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
                        cursor:pointer;
                        .footer-article-img{
                                width: 100%;
                                height: 160px;
                                border-radius: 10px;
                        }
                        .footer-article-title{
                                text-align-last: left;
                                color: #000;
                                padding-left: 10px;
                                width: 100%;
                                height: 20px;
                                line-height: 20px;
                                border-bottom: 1px solid #000;
                        }
                        .footer-article-tab {
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
</style>