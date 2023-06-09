<template>
        <div class="tabs" :style="{backgroundColor:!scrollTop2?'transparent':'#3db73a'}">
                <div class="left">originalheart</div>
                <div class="center"><div class="tabs-item" v-for="(item,index) in list" :key="item" @click="setActiveItem(index)"> {{ item }} </div></div>
                <div class="right"><img class="avatar" src="../../assets/images/me.jpg" alt="" srcset=""></div>
        </div>
        <el-carousel indicator-position="none" ref="remarkCaruselUp" :autoplay="false" :interval="1000" arrow="always" class="thecontainer">
                <el-carousel-item v-for="(item,index) in 10" :name="`${index}`" :key="item">
                        <!-- <tabThree v-if="index==2"></tabThree> -->
                        <HomePage v-if="index==6"></HomePage>
                        <About v-if="index==4"></About>
                        <LeaveMessage v-if="index==3"></LeaveMessage>
                        <FriendChain v-if="index==2"></FriendChain>
                        <Admin v-if="index==5"></Admin>
                        <Classification v-if="index==1"></Classification>
                        <Memorandum v-if="index==0"></Memorandum>
    </el-carousel-item>
  </el-carousel>
</template>
<script lang='ts' setup>
import FriendChain from './components/FriendChain/index.vue'
import About from './components/About/index.vue'
import HomePage from './components/HomePage/index.vue'
// import tabThree from './components/tab3/index.vue'
import LeaveMessage from './components/LeaveMessage/index.vue'
// import tabSix from './components/tab6/index.vue'
import Classification from './components/Classification/index.vue'
import Memorandum from './components/Memorandum/index.vue'
import Admin from './components/login/index.vue'
import { ref, nextTick} from 'vue'

const list = ref(['首页','分类','tools','友链','留言','管理','关于'])
const remarkCaruselUp:any = ref(null)
// 点击查看图片
const setActiveItem = (index:number) => {
//查看对应name的图片
        nextTick(() => {
                remarkCaruselUp.value.setActiveItem(index)
        })
}
let scrollTop2 =ref(0)
window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop2.value = scrollTop
})
</script>
<style lang='less' scoped>
@import url("./style.css");
.tabs{  
        background-color: #3db73a;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        z-index: 99999999;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 100vw;
        // border-bottom: 1px solid #e4e7ed;
        background-color: transparent;
        .left{
                margin-left: 40px;
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
                        // border-left: 1px solid #e4e7ed;
                 }
                .tabs-item:last-child{
                        // border-right: 1px solid #e4e7ed;
                }
        }
        .right{
                display: flex;
                align-items: center;
                .avatar{
                        width: 40px;
                        height: 40px;
                        margin-right: 40px;
                }
        }
}
:deep(.el-carousel__container) {
        height: 160vh !important;
}

</style>