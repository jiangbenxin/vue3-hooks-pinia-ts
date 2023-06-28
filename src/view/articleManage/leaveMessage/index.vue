<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="留言昵称">
    <el-input v-model="formInline.name" placeholder="请输入留言昵称"></el-input>
  </el-form-item>
  <el-form-item label="留言id">
    <el-input v-model="formInline.id" placeholder="请输入留言id"></el-input>
  </el-form-item>
  <el-form-item label="留言时间">
    <el-input v-model="formInline.date" placeholder="请输入留言时间"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="getArtcateListfn()">查询</el-button>
    <el-button type="primary" @click="clear">重置</el-button>
  </el-form-item>
</el-form>
<div style="margin-top: 20px">
    <el-button @click="batchDelete()">批量删除</el-button>
    <!-- <el-button @click="toggleSelection(tableData)">反选</el-button> -->
    <el-button @click="addaddadd">添加</el-button>
  </div>
<el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="name" label="留言名称" width="120" />
    <el-table-column property="date" label="留言时间">
    <template #default="scope">{{  dayjs(scope.row.date).format('YYYY-MM-DD HH:mm:ss')}}</template>
    </el-table-column>
    <el-table-column property="id" label="留言id" show-overflow-tooltip />
    <el-table-column label="操作">
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button
      >
      <el-button
        size="small"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button
      >
    </template>
  </el-table-column>
  </el-table>
 
  <div class="pagination-container"><el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="formInline.curPage"
      :page-sizes="[5, 7, 9, 11]"
      :page-size="formInline.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination></div>
    <el-dialog title="编辑信息" v-model="dialogFormVisible">
  <el-form :model="dialogForm">
    <el-form-item label="留言昵称" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="留言内容" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.text" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="留言作者" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.link" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="!edit?addaddArtcate():updateArtcate()">确 定</el-button>
    </span>
  </template>
</el-dialog>
</template>
<script lang="ts" setup>
import { addArtcate,getArtcateDetail,updateArtcates,getArtcateList, deleteArtcates } from '../../../api/leaveMessage'
import { ref,inject, onMounted } from 'vue'
import { ElTable,dayjs } from 'element-plus'
const testtest =  inject('$ElMessage') as any
const tableData:any = ref()
let dialogForm:any =ref({
  name: null,
  id: null,
  text:null,
  link:null
})
const formInline = ref({
  name: null,
  id: null,
  curPage:1,
  pageSize:5,
  text:null,
  date:null
})
const total = ref(5)
const formLabelWidth = ref('120px')
const dialogFormVisible = ref(false)
const edit = ref(false)
const clear = ()=>{
  formInline.value = {
    name: null,
    id: null,
    curPage:1,
    pageSize:5,
    date:null,
    text:null,
  }
  getArtcateListfn()
}
onMounted(()=>{
  getArtcateListfn()
})
const getArtcateListfn = async()=>{
  const res:any =  await getArtcateList(formInline.value)
  tableData.value = res.data
  total.value =res.total
}

const addaddadd = ()=>{
  dialogFormVisible.value = true
  edit.value = false
}
const addaddArtcate =async ()=>{
  const res:any = await addArtcate(dialogForm.value)
  if(res.status ==0){
    getArtcateListfn()
    testtest.success(res.message)
    dialogFormVisible.value = !dialogFormVisible.value
  }else{
    testtest.success(res.message)
  }
}
const updateArtcate =async ()=>{
  let obj = {
    id: dialogForm.value.id,
    tabName: dialogForm.value.tabName,
  }
  await updateArtcates(dialogForm.value).then((res:any)=>{
    if(res.status == 0){
      testtest.success(res.message)
      dialogFormVisible.value = !dialogFormVisible.value
      getArtcateListfn()
    }
  })
}
const handleEdit = (index: number, row: any) => {
  edit.value = true
  getArtcateDetail(row.id)
  .then((res:any)=>{
    if(res.status==0){
      dialogForm.value = res.data
      testtest.success(res.message)
      dialogFormVisible.value = !dialogFormVisible.value
    }
  })
}
const handleDelete =async (index: number, row: any) => {
  let ids = [row.id]
  let ids2:any = JSON.stringify(ids)
  const res:any = await deleteArtcates({ids:ids2})
  if( res.status ==0){
    testtest.success(res.message)
    getArtcateListfn()
  }
}
const batchDelete = async() => {
  let ids:any = []
  multipleSelection?.value.forEach((item:any)=>{
    ids.push(item.id)
  })
  let ids2:any = JSON.stringify(ids)
  const res:any = await deleteArtcates({ids:ids2})
  getArtcateListfn()
}
const handleSizeChange = (val:any)=>{
  formInline.value.pageSize = val
  getArtcateListfn()
}
const handleCurrentChange = (val:any)=> {
  formInline.value.curPage = val
  getArtcateListfn()
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<any>([])
// const toggleSelection = (rows: any) => {
//   if (rows) {
//     rows.forEach((row:any) => multipleTableRef.value!.toggleRowSelection(row, undefined))
//   } else {
//     multipleTableRef.value!.clearSelection()
//   }
// }
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
</script>
<style lang="less" scoped>
.pagination-container{
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>
  