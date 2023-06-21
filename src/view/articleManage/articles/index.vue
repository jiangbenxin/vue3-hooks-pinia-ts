<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
<div style="margin-top: 20px">
    <!-- <el-button @click="batchDelete()">批量删除</el-button> -->
    <!-- <el-button @click="toggleSelection(tableData)">反选</el-button> -->
    <el-button @click="addDialog">添加</el-button>

  </div>
<el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="发表时间" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="articleName" label="文章名称" width="120" />
    <el-table-column property="id" label="文章id" />
    <el-table-column property="classificationId" label="文章类别" />
    <el-table-column property="articleTab" label="文章标签" />
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
      :current-page="2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination></div>
    <el-dialog title="收货地址" v-model="dialogFormVisible">
      <el-form-item label="文章名称" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.articleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="文章类别" :label-width="formLabelWidth">
      <el-select v-model="dialogForm.classificationId" placeholder="请选择标签" >
        <el-option v-for="item in tabList" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章标签" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.articleTab" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="文章内容" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="dialogForm.articleText" autocomplete="off"></el-input>
    </el-form-item>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="!edit?addaddArticle():upupdateArticles()">确 定</el-button>
    </span>
  </template>
</el-dialog>
</template>

<script lang="ts" setup>
import { getArtcate } from '../../../api/artcate'
import { addArticle, getArticle, deleteArticle, getArticleDetail, updateArticles} from '../../../api/article'

import { ref ,reactive, onMounted, inject} from 'vue'
import { ElTable } from 'element-plus'
import { fa } from 'element-plus/es/locale'
const testtest =  inject('$ElMessage') as any
const formLabelWidth = ref('120px')
const formInline = reactive({
  user: '',
  region: '',
})
const edit = ref(false)
const dialogForm = ref({
  date: '',
  articleName: '',
  id: 0,
  articleTab:null,
  classificationId:null,
  articleText:null
})
const addaddArticle = async()=>{
  const res:any =  await addArticle(dialogForm.value)
    if(res.status==0){
      testtest.success(res.message)
      dialogFormVisible.value = false
      getArticles()
    }else{
      testtest.info(res?.message)
    }
}
const tabList = ref()
onMounted(()=>{
  getArticles()
})
const getArticles = async()=>{
  const res:any = await getArticle()
  if(res.status==1){
    testtest.success(res.message)
  }else if(res.status==0){
    tableData.value = res.data
  }
}
const getArtcates= async()=>{
  const res = await getArtcate()
  tabList.value = res.data
}
const dialogFormVisible = ref(false)
const onSubmit = () => {
  console.log('submit!')
}
const addDialog = ()=>{
  getArtcates()
  dialogFormVisible.value = true
  edit.value = false
}
const handleEdit = async (index: number, row: any) => {
  dialogFormVisible.value = true
  edit.value = true
  const res = await getArticleDetail(row.id)
  if(res.status ==0 ){
    dialogForm.value = res.data
  }else{
    testtest.info('获取文章详情失败')
  }
}
const handleDelete =async (index: number, row: any) => {
  console.log(index, row)
  const res:any = await deleteArticle(row.id)
    if(res.status==0){
      testtest.success(res.message)
      getArticles()
    }else{
      testtest.success('删除文章失败')
      
    }
}
const upupdateArticles = async()=>{
  const res:any =await updateArticles(dialogForm.value)
  if(res.status==1){
    testtest.success('更新失败')
  }else if(res.status==0){
    testtest.success(res.message)
    dialogFormVisible.value  = false
  }
}
// const batchDelete = () => {
//   console.log(multipleSelection?.value[0]?.date);
// }
const  handleSizeChange = (val:any)=>{
  console.log(`每页 ${val} 条`)
}
const handleCurrentChange = (val:any)=> {
  console.log(`当前页: ${val}`)
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<any>([])
// const toggleSelection = (rows?: any) => {
//   console.log(multipleSelection.value);
//   if (rows) {
//     rows.forEach((row:any) => {
//       // TODO: improvement typing when refactor table
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       multipleTableRef.value!.toggleRowSelection(row, undefined)
//     })
//   } else {
//     multipleTableRef.value!.clearSelection()
//   }
// }
const handleSelectionChange = (val:any) => {
  multipleSelection.value = val
}
const tableData:any = ref()
</script>
<style lang="less" scoped>
.pagination-container{
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>
  