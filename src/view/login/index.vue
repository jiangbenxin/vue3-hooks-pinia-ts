<template>
        <div class="tabs">
                <div class="tabs-item" v-for="(item,index) in 10" :key="item" @click="setActiveItem(index)"> {{ index }} </div>
        </div>
        <el-carousel indicator-position="none" ref="remarkCaruselUp" :autoplay="false" :interval="1000" arrow="always" class="thecontainer">
                <el-carousel-item v-for="(item,index) in 10" :name="`${index}`" :key="item">
                        <tabThree v-if="index==2"></tabThree>
                        <tabTwo v-if="index==1"></tabTwo>
                        <tabsOne v-if="index==4"></tabsOne>
                        <tabFour v-if="index==3"></tabFour>
                        <stars v-if="index==8"></stars>
                        <toLogin v-if="index==9"></toLogin>
                        <tabEleven v-if="index==5"></tabEleven>
                        <tabbed v-if="index==6"></tabbed>
                        <tabSix v-if="index==4"></tabSix>
    </el-carousel-item>
  </el-carousel>
</template>
<script lang='ts' setup>
import stars from './components/stars/index.vue'
import tabsOne from './components/tab1/index.vue'
import tabTwo from './components/tab2/index.vue'
import tabThree from './components/tab3/index.vue'
import tabFour from './components/tab4/index.vue'
import tabSix from './components/tab6/index.vue'
import tabEleven from './components/tab7/index.vue'
import tabbed from './components/tab8/index.vue'
import toLogin from './components/login/index.vue'
import { ref, nextTick} from 'vue'

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
::v-deep .el-carousel__container{
        height: 100vh !important;
}
</style>