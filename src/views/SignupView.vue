<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import SignupPage from '@/components/Signup/SignupPage.vue'
import MobileSignupPage from '@/components/MobileSignup/MobileSignupPage.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileSignupPage />
  </main>
  <main v-else>
    <SignupPage />
  </main>
</template>
