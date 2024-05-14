<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import LoginPage from '@/components/Login/LoginPage.vue'
import MobileLoginPage from '@/components/MobileLogin/MobileLoginPage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileLoginPage />
  </main>
  <main v-else>
    <LoginPage />
  </main>
</template>
