<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import ProfilePage from '@/components/Profile/ProfilePage.vue'
import MobileProfilePage from '@/components/MobileProfile/MobileProfilePage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileProfilePage />
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
