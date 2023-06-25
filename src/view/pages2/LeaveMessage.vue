<template>
    <div>
        <theTitle>
            <template #title>
                <h2 style="color: #000;">
                    留言
                </h2>
            </template>
        </theTitle>
        <theTitle>
            <template #inner>
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请留言"
                    v-model="textarea2"
                >
                </el-input>
                <div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div><div style="color: #000;">
                    test22
                </div>  
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref, onMounted } from 'vue'
import {getArtcateList} from '../../api/leaveMessage'
onMounted(async()=>{
        let obj ={
                curPage:1,
                pageSize:12,
        }
        const res = await getArtcateList(obj)
})
const textarea2 = ref()
</script>
<style lang="less" scoped>
</style>