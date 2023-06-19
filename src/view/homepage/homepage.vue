<template>
    <Header></Header>
    <div class="homepage_container">
      <sideBar></sideBar>
      <div class="homepage_content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script lang='ts' setup>
import Header from '../../layout/header.vue'
import sideBar from '../../layout/sideBar.vue'
// [{title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}, {。。。}]
//{ 一级菜单id: {title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}}
</script>
<style lang='less' scoped>
.homepage_container {
  // position: relative;
  height: calc(100% - 70px);
  .sidBar{
    height: 100%;
  }
  .homepage_content {
    padding: 10px;
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0;
    left: 250px;
    bottom: 0;
    overflow-y: auto;
  }
}
</style>