<template>
    <div>
       <el-button @click="updateUser()">修改个人用户信息</el-button>
       <el-button @click="updateUserPwd()">修改密码</el-button>
    </div>
</template>
<script lang='ts' setup>
import  { updateUserInfo,updateUserPassword } from '../../../api/user'
import { useRouter } from 'vue-router';
import { ref , reactive} from 'vue'
const router = useRouter()
console.log(router);
const form:any = reactive({
    id:5,
    nickname:'111',
    email:'111@qq.com',
    menuRouters:[1,2,3]
})
const form2 = reactive({
    id:5,
    newPwd:'1234567',
    oldPwd:'123456'
})
const updateUser = async ()=>{
    form.menuRouters = JSON.stringify(form.menuRouters)
    const data = await updateUserInfo(form)
}
const updateUserPwd = async ()=>{
    const data = await updateUserPassword(form2)
    console.log(data);
}
</script>