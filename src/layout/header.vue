<template>
  <div style="display: flex;">
      <Logo></Logo>
    <div class="homepage_header">
      <el-dropdown>
      <span class="el-dropdown-link">
        <img class="userAvatar" :src="user_pic" alt="">
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>23</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item @click="logout()">LOGOUT</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang='ts' setup>
import Logo from './logo.vue'
import { useTestPinia } from '../pinia/index';
import { useRouter} from 'vue-router'
import store from '../store';
import avatar from '../assets/images/me.jpg'
import { ref, computed } from 'vue'
const user_pic = computed(()=>{
  return store.state.userInfo.user_pic|| avatar
})
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
  display: flex;
  justify-content: right;
  align-items: center;
}
.userAvatar{
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>