<template>
    <div id="mainmmm" class="main pop-box">
        <div v-if="route.name == 'articleDetail'" class="img-title">文章内容并不饱满，想全面的学习请前往官网查看</div>
        <div v-if="route.name != 'articleDetail'" class="img-title">
            <div>vue3+vite+ts个人博客兼备忘录管理系统(已开源)</div>
        </div>
        <div class="indexIcons"><img @click="gotonext(item.link,index)" class="indexIcon" v-for="(item,index) in tabList" :src="item.icon" alt=""></div>

        <img class="the-img" src="@/assets//images/bg1.jpg" alt="">
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/niceFun'
import { useRoute } from 'vue-router'
const route = useRoute()
const tabList:any = ref([
    {icon: getAssetsFile('github.png'),link:'github.com/jiangbenxin/vue3-hooks-pinia-ts.git'},
    {icon: getAssetsFile('gitee.png'),link:'gitee.com/jiangbenxin/vue3'},
    {icon: getAssetsFile('facebook.png'),link:''},
    {icon: getAssetsFile('wx.png'),link:''},
    {icon: getAssetsFile('QQ.png'),link:''},
    {icon: getAssetsFile('email.png'),link:''},
]) 

const gotonext = (url:string,index:number)=>{
    if(index == 0 ||index ==1){
        let path = window.location.protocol +  "//" + url
        window.open(path)
    }
}
</script>
<style lang='less' scoped>
    .indexIcons{
        position: absolute;
        bottom: 20%;
        left: 50%;;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        cursor: pointer;
        .indexIcon{
            width: 7%;
            height: 7%;
            min-height: 30px;
            min-width: 30px;
            margin: 0 5px;
        }
    }
</style>