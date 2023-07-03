// src/hooks/useMousePosition.ts
import { ref, onMounted, onUnmounted, Ref } from 'vue'

interface MousePosition {
  x: Ref<number>,
  y: Ref<number>
}
function useMousePosition(): MousePosition {
  const x = ref(0)
  const y = ref(0)

  const updateMouse = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })

  return { x, y }
}

export const useDefer = (maxCount:any = 100)=>{
  const frameCount = ref (0)
  let rafId:any
  const updateFrameCount = ()=>{
    rafId = requestAnimationFrame(()=>{
      frameCount.value++
      if(frameCount.value >= maxCount) return
      updateFrameCount()
    })
  }
  updateFrameCount()
  onUnmounted(() => {
    cancelAnimationFrame(rafId)
  })
  const defer = (n:any)=>{
    return frameCount.value >= n
  }
  return defer
}

export default useMousePosition