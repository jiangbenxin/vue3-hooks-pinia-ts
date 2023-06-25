<template>
    <div style="display: flex;height: 100%;">
      <div class="homepage_container">
        <sideBar></sideBar>
      </div>
      <div class="homepage_header">
        <Header></Header>
        <div class="homepage_content">
          <router-view></router-view>
        </div>
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

}
.homepage_header{
  .homepage_content {
    padding: 10px;
    overflow-y: auto;
    height: calc(100% - 70px);
    width: calc(100vw - 250px);
  }
}
</style>