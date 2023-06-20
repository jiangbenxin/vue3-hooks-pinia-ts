<template>
  <div>
    <!-- 你好 {{ testStore.username }} -->
    该账号无权限
    {{ store.state.userInfo.username }}
  </div>
</template>

<script lang="ts" setup>
import { useTestPinia  } from '../../../pinia/index'
import store from '../../../store';
const testStore = useTestPinia()
</script>