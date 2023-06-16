<template>
    <div>
        <theTitle>
            <template #title>
                <div style="color: #000;">
                    test22
                </div>
            </template>
        </theTitle>
        <theTitle>
            <template #inner>
                <div style="color: #000;">
                    test22
                </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref } from 'vue'
</script>
<style lang="less" scoped>
</style>