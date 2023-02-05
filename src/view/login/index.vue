<template>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
                <el-form-item prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>    
                <el-form-item prop="pwd">
                        <el-input v-model="ruleForm.pwd" type="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item >
                        <el-button type="primary" @click="loginFn()" >login</el-button>
                </el-form-item>    
        </el-form>
</template>
<script lang='ts' setup>
import {reactive,toRefs,ref,toRef} from 'vue'
import {adminLoginApi,getAdminInfoApi} from '../../request/api'
import Cookie from 'js-cookie'
import { useRouter} from 'vue-router'
import {useStore} from 'vuex'

const state = reactive({
        ruleForm:{
                username:'admin',
                pwd:'123456'
        }
})
let { ruleForm} = toRefs(state)
let ruleFormRef = ref()
let router = useRouter()
let store = useStore()
const validatePwd = (rule:unknown,value:string|undefined,cb:(msg?:string)=>void)=>{
        if(!value){
                cb('密码不能为空')
        }else{
                cb()
        }
}
// 校验规则
const rules = reactive({
        username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
        pwd:[{required:validatePwd,trigger:'blur'}]
})
// 点击登录按钮触发
const loginFn = ()=>{
        ruleFormRef.value.validate().then(()=>{
                console.log('校验通过');
                adminLoginApi({
                        password:ruleForm.value.pwd,
                        username:ruleForm.value.username
                }).then(res=>{
                        if(res.code === 200){
                                // console.log(res);
                                
                                // 使用js-cookie储存token
                                Cookie.set('token',res.data.tokenHead + res.data.token,{expires:7})
                                store.dispatch('getAdminInfo').then(res=>{
                                        router.push('/index')
                                })
                        }
                })
                
        }).catch(()=>{
                console.log('校验不通过');
        })
}
</script>
<style lang='less' scoped>
    
</style>