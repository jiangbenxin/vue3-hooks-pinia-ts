<template>
        <div v-for="(item,index) in 10"  >
            <div v-if="defer(index)">
            <theTitle>
            <template #inner>
                <div class="about">
                   <img class="about-img" src="@/assets/images/me.jpg" alt="" srcset="">
                   <div>originalheart</div>
                   <div>年龄：18岁</div>
                   <div>性别：男</div>
                   <div>爱好：摸鱼，学习,打游戏</div>
                   <div>简介：作者是一位前端菜鸡</div>
                   <div class="about-tabs" title="qweqwe">
                        <div title="test"  v-for="(item,index) in list" @click="goto(item.url,index)">
                            <el-tooltip
                                class="item"
                                effect="dark"
                                :content="item.url"
                                placement="top"
                            >
                                <div>
                                    <div class="about-tab" >
                                        <img class="about-tab-img" :src="item.imgUrl||'/src/assets/icon/github.png'">
                                    </div>
                                    <div>{{ item.title }}</div>
                                </div>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="about-info">
                        职业规划：做一名摸鱼菜鸡，在这个高速发展，信息万变的时代，没有人能有最固定的职业规划，我的职业规划也不例外，如果不出意外的话，几年内一定会前端主流技术学好，学到熟练很熟练的程度</div>
                    <p style="text-align: left;margin-top: 10px;">如果有什么好的建议或者分享更好的技术，请您留言或者联系我qq、微信、公众，我一定回复，谢谢</p>
                    <div>关于</div>
                    <div>还没想好写什么，你教我啊</div>
                    <div>还没想好写什么，你教我啊</div>
                    <div>还没想好写什么，你教我啊</div>
                    <div>{{ userAgent }}</div>
                    <div>关于</div>
                </div>
            </template>
            </theTitle>
        </div>
       </div>
</template>
<script lang='ts'  setup>
import theTitle from '@/components/theTitle.vue'
import { ref } from 'vue'
import store from '@/store';
import {getAssetsFile} from '@/utils/niceFun'
import {useDefer} from '../../hooks'
const defer = useDefer()
const themeColor = ref(store.state.userInfo.topMenuScroll)
const list =ref([
    {title:'github',info:'访问我的gitee',url:'www.baidu.com',imgUrl:getAssetsFile('github.png')},
    {title:'gitee',info:'访问我的github',url:'www.baidu.com',imgUrl:getAssetsFile('gitee.png')},
    {title:'小程序',info:'查看我的小程序',url:'前往微信搜索小程序',imgUrl:getAssetsFile('xiaoWX.png')},
    {title:'公众号',info:'查看我的公众号',url:'请前往微信公众搜索',imgUrl:getAssetsFile('wx.png')},
])
const goto = (url:string,index:number)=>{
    if(index == 0 ||index ==1){
        let path = window.location.protocol +  "//" + url
        window.open(path)
    }
}
const  userAgent = ref(navigator.userAgent)
</script>
<style lang="less" scoped>
.about{
    padding: 0 10%;
    .about-info{
        text-align: left;
    }
    .about-img{
        width: 20%;
        height: auto;
        border-radius: 50%;
        margin-top: -10%;
    }
    .about-tabs{
        display: flex;
        justify-content: space-around;
        .about-tab{
            background-image: v-bind(themeColor);
            width: 60px;
            height: 60px;
            line-height: 100px;
            text-align: center;
            border-radius: 50%;
            color: aliceblue;
            cursor:pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            .about-tab-img{
                width: 60%;
                height: 60%;
            }
        }
    }
}


</style>