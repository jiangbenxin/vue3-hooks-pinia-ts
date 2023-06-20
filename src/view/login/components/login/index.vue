<template>
        <div class="login-container">
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                        <el-form-item label="账号:" prop="username">
                        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                        </el-form-item>    
                        <el-form-item label="密码:" prop="password" style="margin-bottom: 50px;">
                                <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                                <button class="light-btn" @click="loginFn()" >{{ register?'register':'login' }}</button>
                        </el-form-item>
                        <div style="text-align: right;padding-right: 40px;margin-top: 40px;">
                                <el-link type="primary" :underline="false" @click="register=!register">{{ register?'去登录':'去注册' }}</el-link>
                        </div>
                </el-form> 
        </div>
</template>
<script lang='ts' setup>
import { useTestPinia } from '../../../../pinia/index'
import { storeToRefs } from 'pinia'
import {reactive,toRefs,ref} from 'vue'
import {adminResgiter} from '../../../../api/user'
import Cookie from 'js-cookie'
import { useRouter} from 'vue-router'
import {useStore} from 'vuex'

const data = reactive({
        ruleForm:{
                username:'',
                password:''
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
        ruleFormRef.value.validate().then( async()=>{
        let loginForm = {
                        username:ruleForm.value.username,
                        password:ruleForm.value.password,
                }
                if(!register.value){
                        pinia.adminLogin(loginForm).then((res: { code: number; token: string })=>{
                        if(res.code == 200){
                                // 使用js-cookie储存token
                                Cookie.set('token',res.token,{expires:7})
                                store.dispatch('getAdminInfo').then(res=>{
                                        router.push('index')
                                })
                        }
                })
                
                }else{
                const res =  await adminResgiter(loginForm)
                }
        }).catch(()=>{
                console.log('校验不通过');
        })
}

</script>
<style lang='less' scoped>
.login-container{
        background-image: url('../../../../assets//images//bg1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
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
.light-btn {
  text-decoration: none;
  /* position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%); */
  font-size: 24px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  width: 100%;
  height: 50px;
  /* line-height:100px; */
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50px;
  z-index: 1;
}

.light-btn:hover::before,
.light-btn:hover {
  animation: sun 8s infinite;
}

.light-btn::before {
  content: '';
  position: absolute;
  left: -5px;
  right: -5px;
  top: -5px;
  bottom: -5px;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 50px;
  filter: blur(10px);
  z-index: -1;
}

@keyframes sun {
  100%{
    background-position: -400% 0;
  }
}
</style>