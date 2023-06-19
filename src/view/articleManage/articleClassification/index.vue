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
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    border
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="articleName" label="articleName" width="120" />
    <el-table-column property="id" label="id" show-overflow-tooltip />
    <el-table-column label="Operations">
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button
      >
      <el-button
        size="small"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)"
        >Delete</el-button
      >
    </template>
  </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref ,reactive} from 'vue'
import { ElTable } from 'element-plus'

interface User {
  date: string
  articleName: string
  id: number
}
const formInline = reactive({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<User[]>([])
  const toggleSelection = (rows?: User[]) => {
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
  
  const tableData: User[] = [
    {
      date: '2016-05-03',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-02',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-04',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-01',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-08',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-06',
      articleName: 'Tom',
      id: 0,
    },
    {
      date: '2016-05-07',
      articleName: 'Tom',
      id: 0,
    },
  ]
  </script>
  