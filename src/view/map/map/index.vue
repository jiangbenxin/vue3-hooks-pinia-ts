<template>
    <div>
        map
      <p>X: {{ x }}</p>
      <p>Y: {{ y }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent} from 'vue'
  // 引入hooks
  import useMousePosition from '@/hooks'
  export default defineComponent({
    setup () {
      // 使用hooks功能
      const { x, y } = useMousePosition()
      return {
        x,
        y
      }
    }
  })
  </script>