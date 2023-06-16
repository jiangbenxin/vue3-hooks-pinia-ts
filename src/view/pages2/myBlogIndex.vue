<template>
    <div>
        <theTitle>
                <template #title>
                        <h2 class="title">我的我的我的我的</h2>
                </template>
            <template #inner> 
                <div style="color: #000;">
                    test22
                </div>
            </template>
        </theTitle>
        <div class="articles">
                <div class="article" v-for="(item,index) in articleList">
                        <img class="articleImg" src='src/assets/images/bg1.jpg' alt="">
                        <div class="articleTitle">test</div>
                        <div class="articleTab">axios</div>
                </div>
                <div class="blogFooter">
                    <div class="blogFooter-left">左边</div>
                    <div class="blogFooter-center">1/10</div>
                    <div class="blogFooter-right">右边</div>
                </div>
        </div>
        <div class="blogFooter">
            
        </div>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref } from 'vue'
let articleList:any = ref([
                        {title:'首页',icon:'/src/assets/icon/QQ.png'},
                        {title:'分类',icon:'/src/assets/icon/github.png'},
                        {title:'标签',icon:'/src/assets/icon/邮箱.png'},
                        {title:'友链',icon:'/src/assets/icon/邮箱.png'},
                        {title:'留言',icon:'/src/assets/icon/微信.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                        {title:'关于',icon:'/src/assets/icon/friend.png'},
                ])
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
                
                .articleImg{
                        width: 100%;
                        height: 160px;
                        border-radius: 10px;
                }
                .articleTitle{
                        text-align-last: left;
                        color: #000;
                        padding-left: 10px;
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        border-bottom: 1px solid #000;
                }
                .articleTab {
                        height: 16px;
                        width: 40px;
                        background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
                        border-radius: 8px;
                        text-align: center;
                        line-height: 16px;
                        font-size: 12px;
                        margin-left: 10px;
                        margin-top: 10px;
                }
        }
}
.blogFooter{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .blogFooter-left,.blogFooter-right{
        text-align: center;
        height: 50px;
        line-height: 50px;
        background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
        border-radius: 50%;
        width: 50px;
        cursor:pointer
    }
    .blogFooter-center{
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 50px;
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