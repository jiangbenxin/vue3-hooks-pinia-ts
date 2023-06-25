<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="文章标题">
    <el-input v-model="formInline.articleTitle" placeholder="请输入文章标题"></el-input>
    </el-form-item>
    <el-form-item label="文章id">
    <el-input v-model="formInline.id" placeholder="请输入文章id"></el-input>
    </el-form-item>
    <el-form-item label="文章标签">
      <el-select v-model="formInline.articleTab" placeholder="请选择文章标签">
        <el-option v-for="(item,index) in articleTabList" :label="item.tabName" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-select v-model="formInline.classificationId" placeholder="请选择文章分类">
        <el-option v-for="item in classificationList" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="getArtcateListfn()">查询</el-button>
    <el-button type="primary" @click="clear">重置</el-button>
  </el-form-item>
</el-form>
<div style="margin-top: 20px">
    <el-button @click="batchDelete()">批量删除</el-button>
    <el-button @click="toggleSelection(tableData)">反选</el-button>
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
    <el-table-column property="articleTitle" label="文章名称" width="120" />
    <el-table-column property="articleTab" label="文章标签" width="120" />
    <el-table-column property="classificationId" label="文章分类" width="120" />
    <el-table-column property="date" label="发表时间" width="120" />
    <el-table-column property="id" label="文章id" show-overflow-tooltip />
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
    <el-dialog title="编辑信息" v-model="dialogFormVisible" >
  <el-form :model="dialogForm">
    <el-form-item label="文章名称：" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.articleTitle" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="文章标签：" :label-width="formLabelWidth">
      <el-select v-model="dialogForm.articleTab" placeholder="请选择文章标签">
        <el-option v-for="(item,index) in articleTabList" :label="item.tabName" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章分类：" :label-width="formLabelWidth">
      <el-select v-model="dialogForm.classificationId" placeholder="请选择文章分类">
        <el-option v-for="item in classificationList" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章内容：" :label-width="formLabelWidth">
      <div class="titleText" v-for="item in dialogForm.articleText" >
        <el-form-item label="小标题" label-width = '83px' style="margin-bottom: 5px;">
        <el-input v-model="item.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="小标题内容" style="margin-bottom: 5px;">
        <el-input type="textarea" v-model="item.text" autocomplete="off"></el-input>
      </el-form-item>
      <div class="addtext" @click="addtext()">+</div>
      </div>
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
import { addArtcate,getArtcateDetail,updateArtcates,getArtcateList, deleteArtcates } from '../../../api/article'
import { getArtcate } from '../../../api/artcate'
import { getarticleTabs } from '../../../api/articleTabs'
import { ref,inject, onMounted } from 'vue'
import { ElTable } from 'element-plus'
const testtest =  inject('$ElMessage') as any
const tableData:any = ref()
let dialogForm:any =ref({
  articleTitle: null,
  id: null,
  articleTab:null,
  articleText:[
    {title:null,text:null},
    {title:null,text:null},
    {title:null,text:null},
  ],
  classificationId:null
})
const formInline = ref({
  articleTitle: null,
  id: null,
  curPage:1,
  pageSize:5,
  articleTab:null,
  classificationId:null
})
const total = ref(5)
const formLabelWidth = ref('120px')
const dialogFormVisible = ref(false)
const edit = ref(false)
const clear = ()=>{
  formInline.value = {
    articleTitle: null,
    id: null,
    curPage:1,
    pageSize:5,
    articleTab:null,
    classificationId:null,
  }
  getArtcateListfn()
}
const clear2 = ()=>{
  dialogForm.value ={
    articleTitle: null,
    id: null,
    articleTab:null,
    articleText:[
      {title:null,text:null},
      {title:null,text:null},
      {title:null,text:null},
    ],
    classificationId:null
  }
}
const addtext = ()=>{
  dialogForm.value.articleText.push({title:null,text:null})
}
const classificationList:any = ref([])
const articleTabList:any = ref([])
onMounted(()=>{
  getArtcateListfn()
  getSelection()
})
const getSelection = async()=>{
  const res1 = await getarticleTabs()
  const res2 = await getArtcate()
  articleTabList.value = res1.data
  classificationList.value = res2.data
  console.log(classificationList.value);
  
}
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
  console.log(dialogForm.value);
  let obj = {
  articleTitle: dialogForm.value.articleTitle,
  id: dialogForm.value.id,
  articleTab:dialogForm.value.articleTab,
  articleText:JSON.stringify(dialogForm.value.articleText),
  classificationId:dialogForm.value.classificationId
}
  const res:any = await addArtcate(obj)
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
  articleTitle: dialogForm.value.articleTitle,
  id: dialogForm.value.id,
  articleTab:dialogForm.value.articleTab,
  articleText:JSON.stringify(dialogForm.value.articleText),
  classificationId:dialogForm.value.classificationId
}
  await updateArtcates(dialogForm.value).then((res:any)=>{
    if(res.status == 0){
      testtest.success(res.message)
      dialogFormVisible.value = !dialogFormVisible.value
      getArtcateListfn()
    }
  })
}
const handleEdit =async (index: number, row: any) => {
  edit.value = true
  const res:any = await getArtcateDetail(row.id)
  if(res.status==0){
    setTimeout(()=>{
      dialogForm.value = res.data
      dialogForm.value.articleText = JSON.parse(res.data.articleText)
      console.log(dialogForm.value);
      testtest.success(res.message)
    },100)
    dialogFormVisible.value = !dialogFormVisible.value
  }
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
const toggleSelection = (rows: any) => {
  if (rows) {
    rows.forEach((row:any) => multipleTableRef.value!.toggleRowSelection(row, undefined))
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
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
.titleText{
  width: 90%;
  position: relative;
  .addtext{
    background-color: aquamarine;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    color: aliceblue;
    position: absolute;
    right: -30px;
    top: 5px;
    cursor: pointer;
  }
}
</style>
  