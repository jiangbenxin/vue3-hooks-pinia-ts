<template>
   <div style="margin-top: 100px;">
    <div class="text1 text">HTML</div>
    <div class="text2 text">CSS</div>
    <div class="text3 text">JavaScript</div>
   </div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
.text {
            width: 800px;
            height: 200px;
            font-size: 120px;
            font-weight: 900;
            margin: auto;
            color: transparent;
            line-height: 200px;
        }
 
        .text1 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 7s infinite alternate linear;
        }
 
        .text2 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 5s infinite alternate linear;
        }
 
        .text3 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 8s infinite alternate linear;
        }
 
        @keyframes moveImg {
            0% {
                background-position: 0%;
            }
 
            50% {
                background-position: 50%;
            }
 
            100% {
                background-position: 100%;
            }
        }
</style>