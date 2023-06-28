<template>
        <div class="container" :first="first">
                <div class="artile-detail-tabs">
                        <div class="article-tab">{{articleTab2(articleDetails.articleTab)}}</div>
                        <div class="article-tab">{{classification2(articleDetails.classificationId)}}</div>
                </div>
                <div class="artile-detail-time"><div>{{articleDetails.articleTitle}}</div> <span style="margin-left: 20px;">{{ dayjs(articleDetails.date).format('YYYY-MM-DD HH:mm:ss') }}</span> </div>
                <div class="artile-detail-line"></div>
                <div class="artile-details" v-for="item in articleDetails.articleText">
                        <div class="artile-details-title" >{{ item.title }}</div>
                        <div v-for="(item2,index) in item.text">
                                <div class="artile-details-text"  v-html="item2"></div>
                        </div>
                        <Codemirror
                                v-if="item.code!=''&&item.code != null&& item.code!=undefined"
                                :value="item.code"
                                :options="cmOptions"
                                border
                                ref="cmRef"
                                >
                        </Codemirror>
                </div> 
        </div>
        <div class="footer-articles">
                <div class="footer-article" @click="nextArticle(item.id)" v-for="(item,index) in footerList">
                        <div>
                                <img class="footer-article-img" :src='item.imgUrl||imgBg' alt="">
                                <div class="footer-article-title">
                                        <div>{{ item.articleTitle||'没有上篇或者下篇' }}</div>
                                        <div>{{dayjs(item.date).format('YYYY-MM-DD HH:mm:ss') ||'' }}</div>
                                </div>
                                <div class="footer-article-tabs">
                                        <div class="footer-article-tab">{{  articleTab2(item.articleTab)||'' }}</div>
                                        <div class="footer-article-tab">{{  classification2(item.classificationId)||'' }}</div>
                                </div>
                        </div>
                        <div>{{index==1?'下一篇':'上一篇'}}</div>
                </div>
        </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import store from '../../store';
import { useTestPinia  } from '../../pinia/index'
import { useRouter, useRoute  } from 'vue-router'
import "codemirror/mode/javascript/javascript.js"
import Codemirror from "codemirror-editor-vue3"
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/neo.css";
import { getArtcateDetail } from '../../api/article'
import { dayjs } from 'element-plus'
import { getJSonParse } from '../../utils/niceFun'
import imgBg from '../../assets/images/bg1.jpg'
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
onMounted(()=>{
        const theId = route.query.id
        getDeatil(theId)
})
const getDeatil = async(id:any)=>{
        const res = await getArtcateDetail(id)
        setTimeout(()=>{
                const datalist  = res.data
                datalist.forEach((item:any)=>{
                        if(item.articleText){
                                item.articleText = getJSonParse(item.articleText) 
                        }
                })
                articleDetails.value = datalist[0]
                footerList.value = [datalist[1],datalist[2]]
        })
}
const footerList:any = ref([])
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
const articleDetails:any = ref([])
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
const nextArticle = (id:any)=>{
        if(id){
                getDeatil(id)
        }
}
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
.container{
        width: 80%;
        position: relative;
        border-radius: 20px;
        margin: 0px auto;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
        padding: 30px 3%;
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
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                padding: 0 3%;
        }
        .artile-detail-line{
                border-bottom: 1px solid #000;
        }
        .artile-details{
                text-align: left;
                padding: 0px 3% 0 3%;
                .artile-details-title{
                        margin: 5px 0;
                }
                .artile-details-text{
                        word-wrap: break-word;
                        text-indent: 2em;
                        border-left: 4px solid #9833ee;
                        padding-left: 10px;
                        background-color: #e5d2ec77;
                        color: #666;
                        font-size: 14px;
                }
                .artile-details-code{

                }
        }
       
}
.footer-articles{
        position: relative;
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
                        display: flex;
                        justify-content: space-between;
                        color: #000;
                        align-items: center;
                        padding-left: 10px;
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        border-bottom: 1px solid #000;
                }
                .footer-article-tabs {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 33px;
                        padding: 0 10px;
                        .footer-article-tab {
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
        }
}
:v-deep(.el-dialog){
        margin: 0 !important;
}
</style>