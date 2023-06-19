<template>
  <div class="pop-box">
    <h1 class="title">看不懂没关系，一天卷1个</h1>
    <img class="theImg" src="src/assets/images/bg1.jpg" alt="">
</div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
.pop-box{
  position: relative
}
.title {
  /* font-size: 6rem; */
  font-size: 16px;
  /* color: #fcc; */
  color: #00ff66;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9999;
}
</style>