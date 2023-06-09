<template>
    <div>
        pinia
        <!-- <div>{{ testStore.count }}</div> -->
        <!-- <div>{{ testStore.user.name }}</div> -->
        <!-- <div>计算属性{{ testStore.doubleCount }}</div> -->
        <!-- <div>{{ testStore.username }}</div> -->
        <div><el-button type="primary" @click="fn1()">修改state1</el-button></div>
        <div><el-button type="primary" @click="fn2()">修改state2</el-button></div>
        <!-- <div><el-button type="primary" @click="fn4()">修改state4(建议)</el-button></div> -->
        <div><el-button type="primary" @click="fn5()">修改state5</el-button></div>
        <div><el-button type="primary" @click="fn6()">修改state6</el-button></div>
        vuex
        <div>{{ store.state.userInfo.username }}</div>
    </div>
</template>
<script lang='ts' setup>
import store from '../../../store';
import { useTestPinia  } from '../../../pinia/index'
const testStore = useTestPinia()
// // 修改state数据方式1
const fn5 = ()=>testStore.count = 11
const fn6 = ()=>testStore.$state.count = 11222
// 修改state数据方式2
const fn1 = ()=>testStore.$patch({
  count: 12
})
const fn2 = ()=>testStore.$patch(state => {
  state.count = 11
})
// 修改state数据方式4（建议）
// const fn4 = ()=>testStore.setCount(213)
</script>