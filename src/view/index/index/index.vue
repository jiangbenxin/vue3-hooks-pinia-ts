<template>
  <div>
    <!-- 你好 {{ testStore.username }} -->
    <el-button @click="handleUserInfo()">修改个人用户信息</el-button>
      <el-button @click=handleUpdateUserPwd()>修改密码</el-button>
      <div>用户头像：<img class="userAvatar"  :src="store.state.userInfo.user_pic|| avatar" alt=""></div>
      <div>用户昵称:{{ store.state.userInfo.nickname }}</div>
      <div>用户联系方式:{{ store.state.userInfo.email }}</div>
      <div>用户账号：{{ store.state.userInfo.username }}</div>
      <el-dialog v-model="dialogFormVisible" title="信息修改">
        <el-form v-if="!editrPwd" ref="form" :model="formInfo" label-width="80px">
          <el-form-item label="头像:" :label-width="labelWidth">
            <img class="userAvatar" :src="imageUrl" alt="" srcset="">
            <el-upload
              ref="uploadRef"
              class="upload-demo"
              action="#"
              :auto-upload="false"
              :show-file-list="false"
              :name="'avatar'"
              :on-change="handleChange"
            >
              <template #trigger>
                <el-button type="primary">选择头像</el-button>
              </template>
            </el-upload>
          </el-form-item>
          <el-form-item label="用户昵称:" :label-width="labelWidth">
            <el-input v-model="formInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="用户联系方式:"  :label-width="labelWidth">
            <el-input v-model="formInfo.email"></el-input>
          </el-form-item>
      </el-form>
      <el-form v-else ref="form" :model="formInfo" label-width="80px">
        <el-form-item label="旧密码:" :label-width="labelWidth">
            <el-input v-model="formPwd.oldPwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码:" :label-width="labelWidth">
            <el-input v-model="formPwd.newPwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码:"  :label-width="labelWidth">
            <el-input v-model="formPwd.newPwd"></el-input>
          </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editrPwd?updateUserPwd():updateUserInfoFn()">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import  { updateUserInfo,updateUserPassword } from '@/api/user'
import store from '@/store';
import avatar from '@/assets/images/me.jpg'
import { ref, inject, reactive} from 'vue'
import type { UploadProps} from 'element-plus'
import type { UploadInstance } from 'element-plus'
const imageUrl:any = ref( store.state.userInfo.user_pic|| avatar)

const formInfo:any = reactive({
    id:store.state.userInfo.id,
    nickname:store.state.userInfo.nickname,
    email:store.state.userInfo.email,
    user_pic:store.state.userInfo.user_pic
})
const formPwd = reactive({
    id:store.state.userInfo.id,
    newPwd:null,
    oldPwd:null
})
const ElMessage =  inject('$ElMessage') as any
const labelWidth = ref('120px')
const editrPwd = ref(false)
const dialogFormVisible = ref(false)
const handleUserInfo = ()=>{
  editrPwd.value = false
  dialogFormVisible.value = !dialogFormVisible.value
}
const uploadRef = ref<UploadInstance>()
// const submitUpload = async() => {
//   // uploadRef.value!.submit()
//   const res:any = await updateUserAvatar({avatar:imageUrl.value})
//   if(res.status ==0){
//     ElMessage.success(res.message)
//   }
// }
const updateUserInfoFn = async()=>{
  const res:any = await updateUserInfo(formInfo)
  if(res.status == 0){
    ElMessage.success(res.message)
    store.dispatch('getAdminInfo')
    dialogFormVisible.value = !dialogFormVisible.value
  }
}
const handleChange: UploadProps['onChange'] = (uploadFile:any) => {
  tobase64(uploadFile).then((res:any)=>{
    imageUrl.value = res
    formInfo.user_pic = imageUrl.value
  })
}
const handleUpdateUserPwd = ()=>{
  editrPwd.value = true
  dialogFormVisible.value = !dialogFormVisible.value
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

const updateUserPwd = async ()=>{
    const res:any = await updateUserPassword(formPwd)
    if(res.status == 0){ 
      dialogFormVisible.value = !dialogFormVisible.value
      ElMessage.success(res.message)
    }
}
</script>
<style lang="less" scoped>
.userAvatar{
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
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
}
</style>