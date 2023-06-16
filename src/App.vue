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
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color:azure;
}
.pop-box{
  height: 100vh;
  width: auto;
  background-repeat: no-repeat;
  background-size: cover; 
}
.theIcon{
        width:20px;
        height: 20px;
}

</style>