<template>
  <div style="display: flex;">
      <Logo></Logo>
    <div class="homepage_header"><div @click="logout()">LOGOUT</div></div>
  </div>
</template>
<script lang='ts' setup>
import Logo from './logo.vue'
import { useTestPinia } from '../pinia/index';
import { useRouter} from 'vue-router'
let router = useRouter()

const pinia = useTestPinia() as any
// 点击登录按钮触发
const logout = ()=>{
  pinia.adminLogout().then((res:any)=>{
    if(res.code == 200) router.push('/login')
  })
}
</script>
<style lang='less' scoped>
.logo{
  width: 250px;
}
.homepage_header {
  width: calc(100vw - 250px);
  height: 70px;
  background-color: antiquewhite;
}
</style>