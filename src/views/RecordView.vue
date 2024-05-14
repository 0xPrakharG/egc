<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import MobileRecordPage from '@/components/MobileRecord/MobileRecordPage.vue'
import ProfilePage from '@/components/Profile/ProfilePage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileRecordPage />
  </main>
  <main v-else>
    <ProfilePage />
  </main>
</template>

<style scoped>
main {
  position: relative;
}
</style>
