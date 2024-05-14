import { onMounted, onUnmounted, reactive, toRefs } from 'vue'

export function useMonitorSize() {
  const sizes = reactive({
    browserWidth: window.innerWidth,
    deviceWidth: screen.width,
    isMobile: true
  })

  const browserResized = () => {
    sizes.browserWidth = window.innerWidth
    sizes.deviceWidth = screen.width
    sizes.isMobile = isMobile()
  }

  onMounted(() => {
    window.addEventListener('resize', browserResized)
    browserResized()
  })

  onUnmounted(() => {
    document.removeEventListener('resize', browserResized)
  })

  const isMobile = () => {
    return window.innerWidth <= 960 ? true : false
  }

  return {
    ...toRefs(sizes)
  }
}
