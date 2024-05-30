<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import WhitepaperPage from '@/components/Whitepaper/WhitepaperPage.vue'
import MobileWhitepaperPage from '@/components/MobileWhitepaper/MobileWhitepaperPage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileWhitepaperPage />
  </main>
  <main v-else>
    <WhitepaperPage />
  </main>
</template>
