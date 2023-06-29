<template>
    <div>
        <theTitle>
            <template #title>
                <h2 style="color: #000;padding-top: 30px;">
                    留言
                </h2>
            </template>
        </theTitle>
        <theTitle>
            <template #inner>
                <div class="container">
                    <div class="container-login">
                        <span style="background-color: #12b7f5;color: #fff;font-size: 0.6rem;padding: 2px 3px;" @click="token?'':gologin()">{{token?'已登录':'登录/注册'}}</span>
                    </div>
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请前往管理页面登录之后即可留言(登录注册很简单，只需要账号密码)"
                        v-model="textarea2"
                    >
                    </el-input>
                    <div class="ipt-footer">
                        <div class="publish" @click="addArtcateFn(false)">匿名评论</div>
                        <div class="publish" @click="addArtcateFn(true)">{{ !token?'登录后发表评论':'发表评论' }}</div>
                    </div>
                    <div class="comments">
                        <div class="comments-title">评论{{ total }}</div>
                        <div class="comment" v-for="item in leaveMessage">
                            <img src="@/assets/images/me.jpg" class="comment-avatar"/>
                            <div class="comment-right">
                                <div class="comment-msg">
                                    <div class="comment-author">{{ item.name }}</div>
                                    <div class="comment-date">{{ dayjs(item.date).format('YYYY-MM-DD HH:mm:ss') }}</div>
                                </div>
                                <div class="comment-text">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '@/components/theTitle.vue'
import { ref, onMounted } from 'vue'
import {getArtcateList} from '@/api/leaveMessage'
import { dayjs, ElMessage } from 'element-plus'
import { addArtcate } from '@/api/leaveMessage'
import store from '@/store'
import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'
const token = Cookie.get('token')
const router = useRouter()
onMounted(()=>{
    getFn()
})
const total:any = ref()
const gologin = ()=>{
    localStorage.setItem('carouselIndex',`4`)
    router.push('admin')
}
let form =ref({
        curPage:1,
        pageSize:5,
    })
const addArtcateFn = async(flag:any)=>{
    if(flag){
        if(token){
            const userInfo = store.state.userInfo
            let obj ={
                link:userInfo.username,
                text:textarea2.value,
                name:userInfo.nickname
            }
            const res:any = await addArtcate(obj)
            form.value.pageSize++
            getFn()
            ElMessage.success('成功')
        }else{
            ElMessage.success('请前往的管理页面登录')

        }
    }else{
        let obj2 ={
            link:'一个匿名大佬',
            text:textarea2.value,
            name:'一个匿名大佬'
        }
        const res:any = await addArtcate(obj2)
        form.value.pageSize++
        getFn()
        ElMessage.success('匿名发言成功')
    }
}
const getFn = async()=>{
    const res:any = await getArtcateList(form.value)
    // let arr = leaveMessage.value.concat(res.data)
    total.value = res.total
    leaveMessage.value = res.data
}
const leaveMessage:any =ref([])
const textarea2 = ref()
</script>
<style lang="less" scoped>
.container{
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 3% 50px 3%;
    .container-login{
        height: 30px;
        display: flex;
        justify-content: left;
        align-items: center;
        cursor: pointer;
        .loginType{
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
    .ipt-footer{
        border-bottom: 1px solid #d3d6de;
        border-left: 1px solid #d3d6de;
        border-right: 1px solid #d3d6de;
        display: flex;
        justify-content: space-between;
        height: 30px;
        .publish{
            background-color: #12b7f5;
            color: #fff;
            height: 30px;
            width: 80px;
            font-size: 12px;
            line-height: 30px;
            cursor: pointer;
        }
    }
    .comments{
        overflow-y: auto;
        .comments-title{
            width: 100%;
            min-height: 30px;
            text-align: left;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #dedede;

        }
        .comment{
            width: 100%;
            min-height: 100px;
            border-bottom: 1px solid #dedede;
            display: flex;
            justify-content: left;
            .comment-avatar{
                width: 3rem;
                height: 3rem;
                min-width: 10px;
                min-height: 10px;
                border-radius: 50%;
                margin: 10px;
                margin-right: 20PX;
            }
            .comment-right{
                flex: 1;
                display: flex;
                flex-direction: column;
                padding-top: 10px;
                .comment-msg{
                    display: flex;
                    justify-content: left;
                    .comment-author{
                        color: #222222;
                        font-weight: bold;
                        font-size: 0.6rem;
                    }
                    .comment-date{
                        color: #757575;
                        font-size: 0.5rem;
                        margin-left: 10PX;
                    }
                }
                .comment-text{
                    flex: 1;
                    text-align: left;
                    font-size: 1rem;
                }
            }
        }
    }
}
 ::v-deep(.el-input__wrapper){
    border-radius: 0 !important;
}
.el-input,::v-deep(.el-textarea__inner) {
    height: 100px !important;
}
</style>