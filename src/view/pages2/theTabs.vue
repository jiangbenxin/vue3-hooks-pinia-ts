<template>
    <div>
        <theTitle>
            <template #title>
                <h2 style="color: #000;">
                    标签
                </h2>
            </template>
            <template #inner>
                    <div class="tab-box">
                        <div :style="{'background-color': getRandomColor()}" v-for="(item,index) in tabList" class="allTabs">
                       {{ item.name }}
                    </div>
                    </div>
            </template>
        </theTitle>
        <theTitle>
            <template #title>
                <h2 style="color: #000;">
                    标签2
                </h2>
            </template>
            <template #inner>
                    <div class="tab-box">
                        <div :style="{'background-color': getRandomColor()}" v-for="(item,index) in tabList2" class="allTabs">
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
        {name:'RP',},
        {name:'CRM',},
        {name:'HR',},
        {name:'OA',},
        {name:'EAM',},
        {name:'微前端',},
        {name:'PM',},
    ])
    const tabList2:any = ref([
        {name:'html',},
        {name:'css',},
        {name:'javascript',},
        {name:'typescript',},
        {name:'ES6',},
        {name:'webpack',},
        {name:'vite',},
        {name:'vue2',},
        {name:'vue3',},
        {name:'npm',},
        {name:'nvm',},
        {name:'http/https',},
        {name:'tcp/ip',},
        {name:'websocket',},
        {name:'webworker',},
        {name:'sharedWorker',},
        {name:'echarts',},
        {name:'vue-amap',},
        {name:'vue-baidu-map',},
        {name:'vue-quill-editor',},
        {name:'vue-i18n',},
        {name:'vue-clipboard2',},
        {name:'vue-clipboard',},
        {name:'vue-esign',},
        {name:'vue-router',},
        {name:'vue-uuid',},
        {name:'vuedraggable',},
        {name:'pathToRegexp',},
        {name:'lodash',},
        {name:'DataV',},
        {name:'ramda',},
        {name:'qrcodejs',},
        {name:'less-loader',},
        {name:'sass-loader',},
        {name:'js-beautify',},
        {name:'screenfull',},
        {name:'jquery',},
        {name:'vue-cropper',},
        {name:'vue-count-to',},
        {name:'jsencrypt',},
        {name:'nprogress',},
        {name:'vue-plugin-hiprint',},
        {name:'svg-sprite-loader',},
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