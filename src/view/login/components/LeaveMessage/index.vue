<template>
    <div class="bg"></div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
 .bg {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(-45deg, #dae, #f66, #3c9, #09f, #66f);
        background-size: 200% 200%;
        animation: gradient 8s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0 12%;
        }

        50% {
            background-position: 100% 100%;
        }

        100% {
            background-position: 0 12%;
        }
    }
</style>