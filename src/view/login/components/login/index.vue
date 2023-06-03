<template>
        <div class="login-container">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                        <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                        </el-form-item>    
                        <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                                <button class="light-btn" @click="loginFn(1)" >{{ register?'register':'login' }}</button>
                        </el-form-item>
                        <div style="text-align: right;padding-right: 40px;">
                                <el-link type="primary" :underline="false" @click="register=!register">{{ register?'去登录':'去注册' }}</el-link>
                        </div>
                </el-form> 
        </div>
</template>
<script lang='ts' setup>
import { useTestPinia } from '../../../../pinia/index'
import { storeToRefs } from 'pinia'
import {reactive,toRefs,ref,toRef,onMounted,nextTick} from 'vue'
import {adminResgiter} from '../../../../api/user'
import Cookie from 'js-cookie'
import { useRouter} from 'vue-router'
import {useStore} from 'vuex'

const data = reactive({
        ruleForm:{
                username:'admin',
                password:'123456'
        },
        register:false,
})
// 点击查看图片
const pinia = useTestPinia() as any

const { token, user ,theToken2} = storeToRefs(pinia)
let { ruleForm ,register } = toRefs(data)
let ruleFormRef = ref()
let router = useRouter()
let store = useStore()
const validatepassword = (rule:unknown,value:string|undefined,cb:(msg?:string)=>void)=>{
        if(!value){
                cb('密码不能为空')
        }else{
                cb()
        }
}
// 校验规则
const rules = reactive({
        username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
        password:[{required:validatepassword,trigger:'blur'}]
})
// 点击登录按钮触发
const loginFn = async()=>{
   
        // ruleFormRef.value.validate().then( async()=>{
                let loginForm = {
                                username:ruleForm.value.username,
                                password:ruleForm.value.password,
                        }
                        if(!register.value){
                                pinia.adminLogin(loginForm).then((res)=>{
                                        if(res.code == 200){
                                                // 使用js-cookie储存token
                                                Cookie.set('token',res.token,{expires:7})
                                                store.dispatch('getAdminInfo').then(res=>{
                                                        router.push('/index')
                                                })
                                        }
                        })
                        
                        }else{
                        const res =  await adminResgiter(loginForm)
                        }
                // }).catch(()=>{
                //         console.log('校验不通过');
                // })
     
        
}

</script>
<style lang='less' scoped>
@import url("./style.css");

.login-container{
        background: linear-gradient(to right, #fbc2eb, #a6c1ee);
        width: 100vw;
        height: 100vh;
        position: relative;
        .loading{
                position: absolute;
                top: 25%;
                left: 50%;
                z-index: 999;
                transform: translate(-50%,0);
        }
        .demo-ruleForm{
                width: 350px;
                height: 500px;
                box-sizing: border-box;
                position: absolute;
                top:50%;
                left: 50%;
                padding: 20px 40px;
                transform: translate(-50%,-50%);
                background-color: #fff; 
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
        }
}

</style>