<template>
  <div>
    <!-- 你好 {{ testStore.username }} -->
    <el-button @click="updateUser()">修改个人用户信息</el-button>
       <el-button @click="updateUserPwd()">修改密码</el-button>
    <img class="userAvatar" @click="handleUserInfo()" :src="user_pic" alt="">
    该账号无权限
    {{ store.state.userInfo.username }}
    <el-dialog v-model="dialogFormVisible" title="头像上传">
    <img class="userAvatar" :src="imageUrl||user_pic" alt="" srcset="">
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
      <el-button type="primary">select file</el-button>
    </template>
    <el-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </el-button>
  </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import  { updateUserInfo,updateUserPassword, updateUserAvatar } from '../../../api/user'
import { useRouter } from 'vue-router';

import store from '../../../store';
import avatar from '../../../assets/images/me.jpg'
import { ref, computed, inject, reactive } from 'vue'
import type { UploadProps} from 'element-plus'
import type { UploadInstance } from 'element-plus'
import Cookie from 'js-cookie'
const testtest =  inject('$ElMessage') as any

const headers = {Authorization:Cookie.get('token')}
const user_pic = computed(()=>{
  return store.state.userInfo.user_pic|| avatar
})
const dialogFormVisible = ref(false)
const handleUserInfo = ()=>{
  dialogFormVisible.value = !dialogFormVisible.value
}

const uploadRef = ref<UploadInstance>()
const submitUpload = async() => {
  // uploadRef.value!.submit()
  const res:any = await updateUserAvatar({avatar:imageUrl.value})
  if(res.status ==0){
    testtest.success(res.message)
  }
}
const imageUrl:any = ref()
const handleChange: UploadProps['onChange'] = (uploadFile:any) => {
   tobase64(uploadFile).then((res:any)=>{
    imageUrl.value = res
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
const router = useRouter()
console.log(router);
const form:any = reactive({
    id:5,
    nickname:'111',
    email:'111@qq.com',
    menuRouters:[1,2,3]
})
const form2 = reactive({
    id:5,
    newPwd:'1234567',
    oldPwd:'123456'
})
const updateUser = async ()=>{
    form.menuRouters = JSON.stringify(form.menuRouters)
    const data = await updateUserInfo(form)
}
const updateUserPwd = async ()=>{
    const data = await updateUserPassword(form2)
    console.log(data);
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