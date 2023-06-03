<template>
    <Header></Header>
    <div class="homepage_container">
      <SideBar></SideBar>
      <div class="homepage_content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script lang='ts' setup>
import { useTestPinia  } from '../../pinia/index'
import Header from '../../layout/header.vue'
import SideBar from '../../layout/SideBar.vue'
// [{title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}, {。。。}]
//{ 一级菜单id: {title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}}
const testStore = useTestPinia()


// console.log(testStore.count)
// console.log(testStore.user.name)
// console.log(testStore.doubleCount)
// console.log(testStore.username)
// 修改state数据方式1
testStore.count = 11
testStore.$state.count = 11
// 修改state数据方式2
testStore.$patch({
  count: 11
})
testStore.$patch(state => {
  state.count = 11
})
// 修改state数据方式3（不建议）
// testStore.$state = {
//   count: 11
// }
// 修改state数据方式4（建议）
// testStore.setCount(11)
// console.log(testStore.count)
// console.log(testStore.user.name)
// console.log(testStore.doubleCount)
// console.log(testStore.username)
</script>
<style lang='less' scoped>
.homepage_container {
  position: relative;
  height: calc(100% - 70px);
  .sidBar{
    height: 100%;
  }
  .homepage_content {
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0;
    left: 250px;
    bottom: 0;  
  }
}
</style>