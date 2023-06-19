<template>
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="Date" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="id" label="id" show-overflow-tooltip />
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >Toggle selection status of second and third rows</el-button
      >
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'
  
  interface User {
    date: string
    name: string
    id: number
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
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      id: 22,
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      id: 22,
    },
  ]
  </script>
  