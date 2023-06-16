<template>
        <div :class="['testColor','tabs']">
                <div class="left">originalheart</div>   
                <div class="center"><div class="tabs-item" v-for="(item,index) in tabList" :key="index" @click="setActiveItem(index,item.route)"><img class="theIcon" :src="item.icon" alt="" srcset="">{{ item.title }} </div></div>
                <div class="right"><img class="avatar" src="src/assets/images/me.jpg"></div>
        </div>
        <el-carousel  indicator-position="none" ref="remarkCaruselUp" :autoplay="false" :interval="1000" arrow="never">
                <el-carousel-item v-for="(item,index) in tabList" :name="`${index}`" :key="item">
                        <myBlogIndex v-if="index==0"></myBlogIndex>
                        <Classification v-if="index==1"></Classification>
                        <theTabs v-if="index==2"></theTabs>
                        <FriendChain v-if="index==3"></FriendChain>
                        <LeaveMessage v-if="index==4"></LeaveMessage>
                        <Admin v-if="index==5"></Admin>
                        <About v-if="index==6"></About>
                        <div class="containerBody"><router-view></router-view></div>
                        <div class="footer" v-if="index!==5">
                                <div class="footer-left"> test</div>
                                <div class="goScollTop">back</div>
                                <div class="footer-right">
                                        <img class="theIcon" src="src/assets/icon/QQ.png" alt="">
                                        <img class="theIcon" src="src/assets/icon/QQ.png" alt="">
                                        <img class="theIcon" src="src/assets/icon/QQ.png" alt="">
                                        <img class="theIcon" src="src/assets/icon/QQ.png" alt="">
                                        <img class="theIcon" src="src/assets/icon/QQ.png" alt="">
                                </div>
                        </div>
                </el-carousel-item>
        </el-carousel> 
</template>
<script lang='ts' setup>
import myBlogIndex from './components/myBlogIndex/index.vue'
import Classification from './components/Classification/index.vue'
import theTabs from './components/theTabs/index.vue'
import FriendChain from './components/FriendChain/index.vue'
import LeaveMessage from './components/LeaveMessage/index.vue'
import Admin from './components/login/index.vue'
import About from './components/About/index.vue'
import { ref, nextTick, reactive} from 'vue'
import { useRouter , useRoute} from 'vue-router'
const router = useRouter()
const tabList = reactive([
        {title:'首页',icon:'/src/assets/icon/QQ.png',route:'myBlogIndex'},
        {title:'分类',icon:'/src/assets/icon/github.png',route:'Classification'},
        {title:'标签',icon:'/src/assets/icon/邮箱.png',route:'theTabs'},
        {title:'友链',icon:'/src/assets/icon/邮箱.png',route:'FriendChain'},
        {title:'留言',icon:'/src/assets/icon/微信.png',route:'LeaveMessage'},
        {title:'管理',icon:'/src/assets/icon/微信.png',route:'admin'},
        {title:'关于',icon:'/src/assets/icon/friend.png',route:'About'},])
const remarkCaruselUp:any = ref(null)
// 点击查看图片
const setActiveItem = (index:number,route:string) => {
        //查看对应name的图片
                router.push({path:route})
                if(whiteList1.indexOf(route)==0){
                        windowHeight1.value = '260vh'
                        windowHeight2.value = '315vh'
                        windowHeight3.value = '482vh'
                        containerBodyMarginTop.value = '0px'
                }else if(whiteList1.indexOf(route)==1){
                        windowHeight1.value = '240vh'
                        windowHeight2.value = '290vh'
                        windowHeight3.value = '350vh'
                        containerBodyMarginTop.value = '-200px'
                }else if(whiteList1.indexOf(route)==3){
                        windowHeight1.value = '200vh'
                        windowHeight2.value = '270vh'
                        windowHeight3.value = '370vh'
                        containerBodyMarginTop.value = '-200px'
                }else if(whiteList1.indexOf(route)==5){
                        windowHeight1.value = '100vh'
                        windowHeight2.value = '100vh'
                        windowHeight3.value = '100vh'
                        containerBodyMarginTop.value = '-200px'

                }else{
                        windowHeight1.value = '190vh'
                        windowHeight2.value = '190vh'
                        windowHeight3.value = '190vh'
                        containerBodyMarginTop.value = '-200px'
                }
        nextTick(() => {
                remarkCaruselUp.value.setActiveItem(index)
        })
}
const topMenuScroll:any = ref('')
window.addEventListener('scroll', function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop==0){
                topMenuScroll.value = ''
        }else{
                topMenuScroll.value = 'linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)'

        }
})
const windowHeight1 = ref('260vh')
const windowHeight2 = ref('315vh')
const windowHeight3 = ref('482vh')
const containerBodyMarginTop = ref('-100px')
const whiteList1 = ['myBlogIndex', 'Classification','theTabs','FriendChain','LeaveMessage','admin','About']

</script>
<style lang='less' scoped>
.containerBody{
        padding-top: 40px;
        margin-top: v-bind(containerBodyMarginTop);
        // z-index: 99999999;
}
.testColor{
        background-image: v-bind(topMenuScroll);
}
.tabs{  
        display: flex;
        align-items: center;
        z-index: 99999999;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 100vw;
        .left{
                margin-left: 20vw;
        }
        .center{
                display: flex;
                justify-content: center;
                flex: 1;
                .tabs-item{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 90px;
                        height: 50px;
                        cursor:pointer;
                }
                .tabs-item:hover {
                        background: linear-gradient(to right, #4cbf30  0%,#0f9d58 100%) !important;
                }
        }
        .right{
                display: flex;
                align-items: center;
                margin-right: 20vw;
                .avatar{
                        width: 40px;
                        height: 40px;
                }
        }
}
@media screen and (max-width:640px){
        :deep(.el-carousel__container) {
                height: v-bind(windowHeight3);
        }
}
@media screen and (min-width:640px) and (max-width:1100px) {
        :deep(.el-carousel__container) {
                height: v-bind(windowHeight2);
        }
}
@media screen and (min-width:1100px){
        :deep(.el-carousel__container) {
                height: v-bind(windowHeight1);
        }
}
.footer{
        position: fixed;
        bottom: 0px;
        width: 100vw;
        height: 80px;
        background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20vw;
        padding-right: 20vw;
        .footer-left{
        }
        .footer-right{
        }
        .goScollTop{
                position: fixed;
                bottom: 100px;
                right: 20px;

                text-align: center;
                height: 50px;
                line-height: 50px;
                background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
                border-radius: 50%;
                width: 50px;
                cursor:pointer
        }
}
</style>