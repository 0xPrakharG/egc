<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import VerificationPage from '@/components/Verification/VerificationPage.vue'
import MobileVerificationPage from '@/components/MobileVerification/MobileVerificationPage.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <MobileVerificationPage />
  </main>
  <main v-else>
    <VerificationPage />
    <FooterComponent />
  </main>
</template>

<style scoped></style>
