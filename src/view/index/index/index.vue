<template>
  <div>
    你好 {{ testStore.username }}
    {{ store.state.userInfo.username }}
  </div>
</template>

<script lang="ts" setup>
import { useTestPinia  } from '../../../pinia/index'
import store from '../../../store';
const testStore = useTestPinia()
</script>