<template>
        <div class="tabs">
                <div class="tabs-item" v-for="(item,index) in list" :key="item" @click="setActiveItem(index)"> {{ item }} </div>
        </div>
        <el-carousel indicator-position="none" ref="remarkCaruselUp" :autoplay="false" :interval="1000" arrow="always" class="thecontainer">
                <el-carousel-item v-for="(item,index) in 10" :name="`${index}`" :key="item">
                        <!-- <tabThree v-if="index==2"></tabThree> -->
                        <HomePage v-if="index==0"></HomePage>
                        <About v-if="index==4"></About>
                        <LeaveMessage v-if="index==3"></LeaveMessage>
                        <FriendChain v-if="index==2"></FriendChain>
                        <Admin v-if="index==5"></Admin>
                        <Classification v-if="index==1"></Classification>
                        <Memorandum v-if="index==6"></Memorandum>
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

const list = ref(['首页','分类','友链','留言','关于','后台管理','个人备忘录'])
const remarkCaruselUp:any = ref(null)
// 点击查看图片
const setActiveItem = (index:number) => {
//查看对应name的图片
        nextTick(() => {
                remarkCaruselUp.value.setActiveItem(index)
        })
}
</script>
<style lang='less' scoped>
@import url("./style.css");
.tabs{
        z-index: 99999999;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%,0);
        width: 100vw;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e4e7ed;
        background-color: transparent;
        .tabs-item{
                width: 80px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-left: 1px solid #e4e7ed;
        }
        .tabs-item:last-child{
                border-right: 1px solid #e4e7ed;

        }
}
:deep(.el-carousel__container) {
        height: 100vh !important;
}
</style>