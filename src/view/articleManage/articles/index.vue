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
        <el-option v-for="(item, index) in articleTabList" :label="item.tabName" :value="item.id"></el-option>
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
    <!-- <el-button @click="toggleSelection(tableData)">反选</el-button> -->
    <el-button @click="addaddadd">添加</el-button>
  </div>
  <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>

    <el-table-column type="selection" width="55" />
    <el-table-column property="articleTitle" label="文章名称" width="120" />
    <el-table-column property="articleTab" label="文章标签" width="120">
      <template #default="scope">{{ articleTab2(scope.row.articleTab) }}</template>
    </el-table-column>

    <el-table-column property="classificationId" label="文章分类" width="120">
      <template #default="scope">{{ classification2(scope.row.classificationId) }}</template>
    </el-table-column>
    <el-table-column property="date" label="发表时间">
      <template #default="scope">{{ dayjs(scope.row.date).format('YYYY-MM-DD HH:mm:ss') }}</template>
    </el-table-column>
    <el-table-column property="id" label="文章id" show-overflow-tooltip />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-container"><el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="formInline.curPage" :page-sizes="[5, 7, 9, 11]" :page-size="formInline.pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination></div>
  <el-dialog width="90%" top="5vh" title="编辑信息" v-model="dialogFormVisible">
    <el-form :model="dialogForm">
      <el-form-item label="文章名称：" :label-width="formLabelWidth">
        <el-input v-model="dialogForm.articleTitle" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章标签：" :label-width="formLabelWidth">
        <el-select filterable v-model="dialogForm.articleTab" placeholder="请选择文章标签">
          <el-option v-for="(item, index) in articleTabList" :label="item.tabName" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章分类：" :label-width="formLabelWidth">
        <el-select filterable v-model="dialogForm.classificationId" placeholder="请选择文章分类">
          <el-option v-for="item in classificationList" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="头像:" :label-width="formLabelWidth">
            <!-- <img class="userAvatar" :src="dialogForm.imgUrl" alt="" srcset="">
            <el-upload
              class="upload-demo"
              action="#"
              :auto-upload="false"
              :show-file-list="false"
              :name="'avatar'"
              :on-change="handleChange"
            >
            </el-upload> -->
            <el-upload
              action="#"
              :on-change="handleChange"
              class="upload-demo"
              :auto-upload="false"
              :show-file-list="false"
              list-type='picture'
            >
            <img v-if="dialogForm.imgUrl" :src="dialogForm.imgUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
      <el-form-item label="文章内容：" :label-width="formLabelWidth">
        <div class="titleText" v-for="(item, index) in dialogForm.articleText" :key="item">
          <el-form-item label="小标题"  style="margin-bottom: 5px;display: flex;">
            <el-input v-model="item.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="小段落" style="margin-bottom: 5px;" v-for="(item2, index) in item.text || []">
            <el-input type="textarea" autosize  v-model="item.text[index]" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="小代码" style="margin-bottom: 5px;" v-if="item.code != undefined">
            <Codemirror style="text-align: left;" :value="item.code" :options="cmOptions" border ref="cmRef"
              @change="(val, cm) => onChange(val, cm, index)" @input="onInput" @ready="onReady">
            </Codemirror>
          </el-form-item>
        </div>
        <el-form-item style="margin-bottom: 5px;" label-width="120px">
          <span class="add-Ipt" @click="reducetext(0)">添加小标题</span>
          <span class="add-Ipt" @click="reducetext(1)">添加小正文</span>
          <span class="add-Ipt" @click="reducetext(2)">添加小代码</span>
          <span class="add-Ipt" @click="reducetext(3)">删除最后小标题</span>
          <span class="add-Ipt" @click="reducetext(4)">删除最后小正文</span>
          <span class="add-Ipt" @click="reducetext(5)">删除最后小代码</span>

        </el-form-item>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="!edit ? addaddArtcate() : updateArtcate()">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { addArtcate, getArtcateDetail, updateArtcates, getArtcateList, deleteArtcates } from '@/api/article'
import { ref, inject, onMounted, computed } from 'vue'
import { ElForm,ElTable, dayjs, UploadInstance,UploadProps  } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import "codemirror/mode/javascript/javascript.js"
import Codemirror from "codemirror-editor-vue3"
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/neo.css";
import store from '@/store'
import { getJSonParse } from '@/utils/niceFun'
import { Buffer } from 'buffer';
const cmOptions = ref({
  mode: "text/javascript",
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 2, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true, // Display the style of the selected row
  readOnly: false,
})
const onChange = (val: any, cm: any, index: number) => {
  dialogForm.value.articleText[index].code = val
}

const onInput = (val: any) => {
}

const onReady = (cm: any) => {
  // console.log(cm.focus())
}
const testtest = inject('$ElMessage') as any
const tableData: any = ref()
let dialogForm: any = ref({
  articleTitle: null,
  imgUrl:null,
  id: null,
  articleTab: null,
  articleText: [
    {
      title: '', text: [''], code: ''
    },
  ],
  classificationId: null
})

const formInline = ref({
  articleTitle: null,
  id: null,
  curPage: 1,
  pageSize: 5,
  articleTab: null,
  classificationId: null
})
const total = ref(5)
const formLabelWidth = ref('120px')
const dialogFormVisible = ref(false)
const edit = ref(false)
const clear = () => {
  formInline.value = {
    articleTitle: null,
    id: null,
    curPage: 1,
    pageSize: 5,
    articleTab: null,
    classificationId: null,
  }
  getArtcateListfn()
}
const reducetext: any = (flag: number) => {
  let length = dialogForm.value.articleText.length - 1
  let lastFormText = dialogForm.value.articleText[length]
  if (flag == 0) {
    dialogForm.value.articleText.push({ title: null })
  } else if (flag == 1) {
    if (!lastFormText.text) {
      lastFormText.text = []
      lastFormText.text?.push(null)
    } else {
      lastFormText.text?.push(null)
    }
  } else if (flag == 2 && !lastFormText.code) {
    lastFormText.code = ''
  } else if (flag == 3) {
    dialogForm.value.articleText.splice(length, 1)
  } else if (flag == 4) {
    let text = lastFormText.text
    let length2 = text.length - 1
    if (text) {
      if (length2 > -1) {
        text.splice(length2, 1)
      }
    }
  } else if (flag == 5) {
    Reflect.deleteProperty(lastFormText, 'code')
  }
}
const handleChange: UploadProps['onChange'] = (uploadFile:any) => {
  // dialogForm.value.imgUrl =  URL.createObjectURL(uploadFile.raw)
  tobase64(uploadFile).then((res:any)=>{
    dialogForm.value.imgUrl = res
  })
}
const tobase64 = (uploadFile:any)=>{
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    let imgResult:any = null;
    reader.readAsDataURL(uploadFile.raw);
    reader.onload = function () {
      imgResult = reader.result;
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onloadend = function () {
      resolve(imgResult);
    };
  });
}
const classificationList: any = ref(store.state.Artcate)
const articleTabList: any = ref(store.state.articleTabs)
onMounted(() => {
  getArtcateListfn()
})
const getArtcateListfn = async () => {
  const res: any = await getArtcateList(formInline.value)
  tableData.value = res.data
  total.value = res.total
}
const addaddadd = () => {
  dialogForm.value = {
  articleTitle: null,
  imgUrl:null,
  id: null,
  articleTab: null,
  articleText: [
    {
      title: '', text: [''], code: ''
    },
  ],
  classificationId: null
}
  dialogFormVisible.value = true
  edit.value = false
}
const addaddArtcate = async () => {
  // let obj:any = JSON.stringify(JSON.parse(dialogForm.value))
  // console.log(obj);

  // obj.articleText = JSON.stringify(dialogForm.value.articleText)
  let obj = {
    articleTitle: dialogForm.value.articleTitle,
    id: dialogForm.value.id,
    articleTab: dialogForm.value.articleTab,
    articleText: JSON.stringify(dialogForm.value.articleText),
    classificationId: dialogForm.value.classificationId,
    imgUrl:dialogForm.value.imgUrl
  }
  const res: any = await addArtcate(obj)
  if (res.status == 0) {
    getArtcateListfn()
    testtest.success(res.message)
    dialogFormVisible.value = !dialogFormVisible.value

  } else {
    testtest.success(res.message)
  }
}
const reader = new FileReader();
const updateArtcate = async () => {
  // 解码 Base64 图片为二进制数据
  let data = {
    articleTitle: dialogForm.value.articleTitle,
    id: dialogForm.value.id,
    articleTab: dialogForm.value.articleTab,
    articleText: JSON.stringify(dialogForm.value.articleText),
    classificationId: dialogForm.value.classificationId,
    imgUrl: dialogForm.value.imgUrl
  }
  await updateArtcates(data).then((res: any) => {
    if (res.status == 0) {
      testtest.success(res.message)
      dialogFormVisible.value = !dialogFormVisible.value
      getArtcateListfn()
      
    }
  })
}
const handleEdit = async (index: number, row: any) => {
  edit.value = true
  const res: any = await getArtcateDetail(row.id)
  if (res.status == 0) {
      dialogForm.value = res.data[1]
      dialogForm.value.articleText = getJSonParse(res.data[1].articleText)
      testtest.success(res.message)
    dialogFormVisible.value = !dialogFormVisible.value
  }
}
const handleDelete = async (index: number, row: any) => {
  let ids = [row.id]
  let ids2: any = JSON.stringify(ids)
  const res: any = await deleteArtcates({ ids: ids2 })
  if (res.status == 0) {
    testtest.success(res.message)
    getArtcateListfn()
  }
}
const batchDelete = async () => {
  let ids: any = []
  multipleSelection?.value.forEach((item: any) => {
    ids.push(item.id)
  })
  let ids2: any = JSON.stringify(ids)
  const res: any = await deleteArtcates({ ids: ids2 })
  getArtcateListfn()
}
const handleSizeChange = (val: any) => {
  formInline.value.pageSize = val
  getArtcateListfn()
}
const handleCurrentChange = (val: any) => {
  formInline.value.curPage = val
  getArtcateListfn()
}
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<any>([])
// const toggleSelection = (rows: any) => {
//   if (rows) {
//     rows.forEach((row: any) => multipleTableRef.value!.toggleRowSelection(row, undefined))
//   } else {
//     multipleTableRef.value!.clearSelection()
//   }
// }
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
}
const classification2: any = computed(() => {
  return (id: any) => {
    let str: any = ''
    classificationList.value.forEach((item: any) => {
      if (item.id == id) {
        str = item.name
      }
    });
    return str
  }
})
const articleTab2: any = computed(() => {
  return (id: any) => {
    let str: any = ''
    articleTabList.value.forEach((item: any) => {
      if (item.id == id) str = item.tabName
    });
    return str
  }
})
</script>
<style lang="less" scoped>
.add-Ipt {
  font-size: 0.8rem;
  background-color: #1b7eb4;
  color: #fff;
  border-radius: 5px;
  width: 6rem;
}

.pagination-container {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}

.titleText {
  width: 90%;
  position: relative;

}

.addtext {
  background-color: aquamarine;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: aliceblue;
  right: -30px;
  cursor: pointer;
}
.userAvatar{
  max-height: 300px;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #000;
}
.avatar{
  max-height: 200px;
}
</style>
  