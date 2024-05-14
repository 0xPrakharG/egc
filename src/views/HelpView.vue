<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import HelpPage from '@/components/Help/HelpPage.vue'
import MobileHelpPage from '@/components/MobileHelp/MobileHelpPage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileHelpPage />
  </main>
  <main v-else>
    <HelpPage />
  </main>
</template>

<style scoped>
main {
  position: relative;
}
</style>
