<template>
        <div>
                <theTitle>
                        <template #title>
                                <h2 class="title">分类</h2>
                        </template>
                        <template #inner> 
                                <div class="tab-box">
                                        <div :style="{'background-color': getRandomColor()}" v-for="(item,index) in tabList" class="allTabs" @click="classificationList(item.id)">
                                                {{ item.name }}
                                        </div>
                                </div>
                        </template>
                </theTitle>
                <div class="articles">
                <div class="article" @click="articleDetail(item.id)" v-for="(item,index) in articleList">
                        <img class="article-img" :src="item.imgUrl||imgBg" alt="">
                        <div class="article-title">
                                <div>{{ item.articleTitle }}</div>
                                <div>{{ dayjs(item.date).format('YYYY-MM-DD') }}</div>
                        </div>
                        <div class="article-tabs">
                                <div class="classification">{{  classification2(item.classificationId) }}</div>
                                <div class="tab">{{  articleTab2(item.articleTab) }}</div>
                        </div>
                </div>
                <div class="blog-footer">
                        <div class="blog-footer-left" @click="addOrReduce('-')"><img class="blog-footer-left-icon" src="../../assets/icon/left.png" alt=""></div>
                        <div class="blog-footer-center">{{ form.curPage }} / {{ totals }}</div>
                        <div class="blog-footer-right" @click="addOrReduce('+')"><img class="blog-footer-left-icon" src="../../assets/icon/right.png" alt=""></div>
                </div>
        </div>
        <div class="blog-footer">
        
        </div>
</div>
</template>
<script lang='ts'  setup>
import { getArtcateList } from '../../api/article'
import {getRandomColor} from '../../utils/niceFun'
import { useRouter } from 'vue-router'
import theTitle from '../../components/theTitle.vue'
import { ref , computed, onMounted } from 'vue'
import { useTestPinia  } from '../../pinia/index'
import store from '../../store/index';
import { dayjs } from 'element-plus';
import imgBg from '../../assets/images/bg1.jpg'
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()
let articleList:any = ref([])
const tabList:any = ref(store.state.Artcate)
onMounted(()=>{
        getList()
})
const articleDetail = (id:number)=>{
        const url =  router.resolve(`/articleDetail?id=${id}`)
        window.open(url.href);
}
const form = ref({
        curPage:1,
        pageSize:12,
        classificationId:null,
})
const classificationList = (id:any)=>{
        form.value.classificationId = id
        getList()
}
const getList = async()=>{
        const res:any = await getArtcateList(form.value)
        articleList.value = res.data
        total.value = res.total
}
const addOrReduce = (flag:any)=>{
        if(flag == '+' && form.value.curPage<totals.value){
                form.value.curPage++
                getList()
        }else if(flag == '-' && form.value.curPage>=totals.value  &&form.value.curPage > 1){
                form.value.curPage--
                getList()
        }
}
let total:any = ref()
const totals:any =computed(()=>{
        let totalcom = total.value / form.value.pageSize
        return Math.ceil(totalcom)
})
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
        position: relative;
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
                                font-size: 10px;
                                line-height: 20px;
                                border-radius: 14px;
                                height: 20px;
                                width: 60px;
                                background-image: v-bind(themeColor);;
                                color: v-bind(themeFzColor);
                        }
                        .tab{
                                width: 60px;
                                background-image: v-bind(themeColor);;
                        }
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
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .blog-footer-left-icon{
                width: 60%;
                height: 60%;
        }
    }
    .blog-footer-left{
        padding-left: 0px;
        padding-right: 5px;

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