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
                        <img class="article-img" src='../../assets/images/bg1.jpg' alt="">
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
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store/index';
import { useTestPinia  } from '../../pinia/index'
import { getArtcateList } from '../../api/article'
import { dayjs } from 'element-plus';
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()
let articleList:any = ref([
])
const form = ref({
        curPage:1,
        pageSize:12,
})
const addOrReduce = (flag:any)=>{
        if(flag == '+' && form.value.curPage<totals.value ){
                form.value.curPage++
                getList()
        }else if(flag == '-' && form.value.curPage>=totals.value &&form.value.curPage > 1){
                form.value.curPage--
                getList()
        }
        
}
let total:any = ref()
const totals:any =computed(()=>{
        let totalcom = total.value / form.value.pageSize
        return Math.ceil(totalcom)
})
onMounted(()=>{
        getList()
})
const getList = async()=>{
        const res:any = await getArtcateList(form.value)
        articleList.value = res.data
        total.value = res.total
}
const articleDetail = (id:number)=>{
        const url =  router.resolve(`/articleDetail?id=${id}`)
        window.open(url.href);
}
const classification2:any =computed(()=>{
        return (id:any)=>{
                let str:any =''
                store.state.Artcate?.forEach((item:any) => {
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
                store.state.articleTabs?.forEach((item:any) => {
                        if(item.id == id) str = item.tabName 
                });
                return str
        }
})
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
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;
        padding-left: 5px;
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