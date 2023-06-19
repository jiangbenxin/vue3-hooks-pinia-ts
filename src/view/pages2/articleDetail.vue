<template>
        <div class="container" :first="first">
                <div class="artileDetail">test</div>
        </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const first = ref('relative')
</script>
<style lang="less" scoped>
.container{
        position: relative;
        border-radius: 20px;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
        padding: 30px 0;
        background-color: #fff;
}
@media screen and (max-width:640px){
        .container{
            width: 290px;
            min-width: 290px;
        }
}
@media screen and (min-width:640px) and (max-width:1100px) {
        .container{
                width: 600px;
                // min-width: 580px;
        }
}
@media screen and (min-width:1100px) {
        .container{
                width: 1000px;
        }
}
</style>