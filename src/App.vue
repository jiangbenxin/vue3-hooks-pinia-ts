<template>
    <router-view></router-view>
</template>
<script lang='ts'>
import { defineComponent,onBeforeMount, onMounted} from 'vue'
export default defineComponent({
  setup(){

  }
})
</script>
<style lang='less' >
@import url("./assets/styles/rebase.less");
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>