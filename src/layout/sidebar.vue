<template>
      <div class="homepage_menu">
        <el-menu
          active-text-color="#000"
          background-color="#transparent"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :unique-opened="true"
          :router="true"
        >
          <el-sub-menu :index="menu.id + ''" v-for="menu in newMenus" :key="menu.id">
              <template #title>
              <span>{{ menu.title }}</span>
            </template>
            <template v-for="submenu in menu.children"> 
              <el-menu-item
                :index="'/' + menu.name + '/' + submenu.name"
                v-if="!submenu.hidden"
                :key="submenu.id"
              >{{ submenu.title }}</el-menu-item>
            </template>
          </el-sub-menu>
        </el-menu>
      </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

// [{title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}, {。。。}]
//{ 一级菜单id: {title: '一级菜单标题', children: [{二级菜单对象}, {二级菜单对象}]}}
interface MenuObj {
    parentId: number;
    id: number;
    title: string;
    hidden: 0 | 1;
    children?: MenuObj[];
    name: string;
}
interface NewMenus {
    [key: number]: MenuObj
}
const store = useStore();
const newMenus = computed<NewMenus>(() => store.getters.getNewMenus);

</script>
<style lang='less' scoped>
.homepage_menu {
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  width: 250px;
  background: #1c92d2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #f2fcfe, #1c92d2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #f2fcfe, #1c92d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

:v-deep .el-sub-menu__title:hover{
  background: #74ebd5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.el-menu-item.is-active{
  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  color: transparent;
}
.el-menu-item:hover{
  background: #74ebd5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
  </style>