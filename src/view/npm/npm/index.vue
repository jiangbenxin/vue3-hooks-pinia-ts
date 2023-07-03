<template>
    <div v-for="item in list " class="test" :style="{height:item.height,'background-color': item.color,}"></div>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const list = ref([
    {height:'50px',color:'red'},
    {height:'70px',color:'aquamarine'},
    {height:'80px',color:'red'},
    {height:'40px',color:'aquamarine'},
    {height:'60px',color:'red'},
    {height:'30px',color:'aquamarine'},
    {height:'50px',color:'red'},
    {height:'70px',color:'aquamarine'},
    {height:'80px',color:'red'},
    {height:'40px',color:'aqua'},
    {height:'60px',color:'red'},
    {height:'30px',color:'aqua'},
])
const router = useRouter()
</script>
<style lang="less" scoped>
.test {
   
    width: 40%;
    color: aquamarine;
}
</style>