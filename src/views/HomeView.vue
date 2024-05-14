<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import HeroComponent from '@/components/Hero/HeroComponent.vue'
import HeroMobileComponent from '@/components/HeroMobile/HeroMobileComponent.vue'
import FeaturedGames from '@/components/FeaturedGames/FeaturedGames.vue'
import MobileFeaturedGames from '@/components/MobileFeaturedGames/MobileFeaturedGames.vue'
import VerifiableSection from '@/components/Verifiable/VerifiableSection.vue'
import MobileVerifiableSection from '@/components/MobileVerifiable/MobileVerifiableSection.vue'
import WelcomeSection from '@/components/Welcome/WelcomeSection.vue'
import MobileWelcomeSection from '@/components/MobileWelcome/MobileWelcomeSection.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'

const sizes = useMonitorSize()
</script>

<template>
  <main v-if="sizes.isMobile.value">
    <div style="height: 100vh; scroll-snap-align: start">
      <HeroMobileComponent />
    </div>
    <div style="height: 100vh; scroll-snap-align: start">
      <MobileFeaturedGames />
    </div>
    <div style="height: 100vh; scroll-snap-align: start">
      <MobileVerifiableSection />
    </div>
    <div style="height: 100vh; scroll-snap-align: start">
      <MobileWelcomeSection />
    </div>
  </main>
  <main v-else>
    <HeroComponent />
    <FeaturedGames />
    <VerifiableSection />
    <WelcomeSection />
    <FooterComponent />
  </main>
</template>

<style scoped>
main {
  position: relative;
}
</style>
