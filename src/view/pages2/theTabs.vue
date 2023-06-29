<template>
    <div>
        <theTitle>
            <template #title>
                <h2 style="color: #000;">
                    标签2
                </h2>
            </template>
            <template #inner>
                    <div class="tab-box">
                        <div :style="{'background-color': getRandomColor()}" v-for="(item,index) in tabList2" class="allTabs">
                       {{ item.tabName }}
                    </div>
                    </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '@/components/theTitle.vue'
import {getRandomColor} from '@/utils/niceFun'
import { ref, onMounted } from 'vue'
import { getarticleTabs } from '@/api/articleTabs'
onMounted(async()=>{
    const res = await getarticleTabs()
    tabList2.value = res.data
})
const tabList2:any = ref([
])
</script>
<style lang="less" scoped>
.tab-box{
    .allTabs{
        margin: 10px 15px;
        padding: 19px 14px;
        display: inline-block;
        line-height: 0;
        border-radius: 5px;
        color: #34495e;
        cursor: pointer;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .12);
    }
    .allTabs:hover {
        color: #fff;
        background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%) !important;
    }
}

</style>