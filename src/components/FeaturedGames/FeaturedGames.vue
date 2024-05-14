<script setup>
import VerticalCarousel from './VerticalCarousel.vue'
import FeaturedGamesBg from './FeaturedGamesBg.vue'
</script>

<template>
  <div style="position: relative; overflow: hidden">
    <FeaturedGamesBg />
    <div class="featured-games-container">
      <div class="carousel-container">
        <VerticalCarousel />
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-games-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin: 210px auto;
}
.carousel-container {
  width: 80%;
  height: 80vh;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 4px 4px 20px 0px #ffffff4d;
}
</style>
