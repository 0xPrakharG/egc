<script setup>
import VerticalCarousel from './VerticalCarousel.vue'
import FeaturedGamesBg from './FeaturedGamesBg.vue'
</script>

<template>
  <div style="position: relative; overflow: hidden" id="introduction">
    <FeaturedGamesBg />
    <div class="featured-games-container">
      <div class="featured-games-text">
        <h3>Easy Get Coin</h3>
        <p>Featured Games</p>
      </div>
      <div class="carousel-container">
        <VerticalCarousel />
      </div>
    </div>
    <div class="arrow">
      <img src="@/assets/scroll-arrow.svg" alt="" />
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
  margin: 110px auto;
}
.featured-games-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.featured-games-text > h3 {
  font-size: 40px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 25px;
  color: #fff;
}
.featured-games-text > p {
  font-size: 20px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #ffffffcc;
}
.carousel-container {
  width: 280px;
  height: 350px;
  margin: auto;
  z-index: 100;
  position: relative;
  border-radius: 20px;
}
.arrow {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}
.arrow > img {
  height: 60px;
}
@media screen and (min-width: 601px) {
  .featured-games-container {
    margin: 100px auto;
  }
  .featured-games-text {
    margin-bottom: 30px;
  }
  .featured-games-text > h3 {
    font-size: 65px;
    line-height: 21px;
    margin-bottom: 40px;
  }
  .featured-games-text > p {
    font-size: 33px;
    line-height: 21px;
  }
}
</style>
