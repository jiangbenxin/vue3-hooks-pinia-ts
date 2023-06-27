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
                                <!-- <button class="light-btn" @click.native="loginFn()" >{{ register?'register':'login' }}</button> -->
                                <el-button  @click.native="loginFn()" >{{ register?'register':'login' }}</el-button>
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
import { useRouter} from 'vue-router'
import {useStore} from 'vuex'
import { ElMessage} from 'element-plus'
import Cookie from 'js-cookie'
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
                if(!register.value){
                       store.dispatch('adminLogin',ruleForm.value).then((res: { code: number; token: string })=>{
                        // pinia.adminLogin(loginForm).then((res: { code: number; token: string })=>{
                                if(res.code == 200){
                                                console.log(ruleForm.value.username);
                                                if(ruleForm.value.username == 'admin'){
                                                        console.log(ruleForm.value.username);
                                                        setTimeout(()=>{
                                                                router.push('/')
                                                        },500)
                                                }else{
                                                        ElMessage.success('登录成功，管理系统不对外开放')
                                                }
                                }
                        })
                }else{
                        const res =  await adminResgiter(ruleForm.value)
                        ElMessage.success('注册成功')
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