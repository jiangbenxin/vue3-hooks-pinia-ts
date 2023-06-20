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
    <el-button @click="batchDelete()"
      >批量删除</el-button
    ><el-button @click="toggleSelection(tableData)"
      >反选</el-button
    >
  </div>
<el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="留言时间" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="id" label="留言id" show-overflow-tooltip />
    <el-table-column label="操作">
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >查看</el-button
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
  <el-form :model="dialogForm">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="dialogForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >确 定</el-button
      >
    </span>
  </template>
</el-dialog>
</template>

<script lang="ts" setup>
import { ref ,reactive} from 'vue'
import { ElTable } from 'element-plus'
interface User {
  date: string
  articleName: string
  id: number
}
const dialogForm =reactive({
  name:'test',
  region:3
})
const formLabelWidth = ref('120px')
const formInline = reactive({
  user: '',
  region: '',
})
const dialogFormVisible = ref(false)
const onSubmit = () => {
  console.log('submit!')
}
const handleEdit = (index: number, row: User) => {
  dialogFormVisible.value = true
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const batchDelete = () => {
  console.log(multipleSelection?.value[0]?.date);
  tableData.value= [
    {
      date: '2016-05-02',
      articleName: 'Tom',
      id: 1,
    },
    {
      date: '2016-05-04',
      articleName: 'Tom',
      id: 2,
    },
    {
      date: '2016-05-01',
      articleName: 'Tom',
      id: 3,
    },
    {
      date: '2016-05-08',
      articleName: 'Tom',
      id: 4,
    },
    {
      date: '2016-05-06',
      articleName: 'Tom',
      id: 5,
    },
    {
      date: '2016-05-07',
      articleName: 'Tom',
      id: 6,
    },
  ]
}
const  handleSizeChange = (val:any)=>{
        console.log(`每页 ${val} 条`)
      }
const handleCurrentChange = (val:any)=> {
        console.log(`当前页: ${val}`)
      }
  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<User[]>([])
  const toggleSelection = (rows?: User[]) => {
    console.log(multipleSelection.value);
    if (rows) {
      rows.forEach((row) => {
        // TODO: improvement typing when refactor table
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        multipleTableRef.value!.toggleRowSelection(row, undefined)
      })
    } else {
      multipleTableRef.value!.clearSelection()
    }
  }
  const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
  }
  const tableData:any = ref([
    {
      date: '2016-05-03',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-02',
      articleName: 'Tom',
      id: 1,
    },
    {
      date: '2016-05-04',
      articleName: 'Tom',
      id: 2,
    },
    {
      date: '2016-05-01',
      articleName: 'Tom',
      id: 3,
    },
    {
      date: '2016-05-08',
      articleName: 'Tom',
      id: 4,
    },
    {
      date: '2016-05-06',
      articleName: 'Tom',
      id: 5,
    },
    {
      date: '2016-05-07',
      articleName: 'Tom',
      id: 6,
    },
  ])
  </script>
<style lang="less" scoped>
.pagination-container{
  display: flex;
  justify-content: right;
  margin-top: 20px;
}
</style>
  