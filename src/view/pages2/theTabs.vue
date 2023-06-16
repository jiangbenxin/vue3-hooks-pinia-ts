<template>
    <div>
        <theTitle>
            <template #title>
                <div style="color: #000;">
                    标签
                </div>
            </template>
            <template #inner>
                    <div class="tabBox">
                        <div :style="{'background-color': colorArr[getRandomColor()]}" v-for="(item,index) in tabList" class="allTabs">
                       {{ item.name }}
                    </div>
                    </div>
            </template>
        </theTitle>
        <theTitle>
            <template #title>
                <div style="color: #000;">
                    标签2
                </div>
            </template>
            <template #inner>
                    <div class="tabBox">
                        <div :style="{'background-color': colorArr[getRandomColor()]}" v-for="(item,index) in tabList" class="allTabs">
                       {{ item.name }}
                    </div>
                    </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import {getRandomColor} from '../../utils/niceFun'
import { ref } from 'vue'

const tabList:any = ref([
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    {name:'1213',},
    ])
const colorArr:any = ref([
    '#d7bde2',
    '#f9ebea',
    '#f5eef8',
    '#d5f5e3',
    '#e8f8f5',
    '#f8f9f9',
    '#82e0aa',
    '#d7bde2',
    '#a3e4d7',
    '#85c1e9',
    '#f8c471',
    '#00FF66',
    '#6600ff',
    '#ff0000',
    '#6600ff',
    '#ffffcc',
])
</script>
<style lang="less" scoped>
.tabBox{
    padding: 0 100px;
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