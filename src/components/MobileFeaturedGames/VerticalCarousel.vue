<script>
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
  },
  setup() {
    return {
      modules: [EffectCards]
    }
  }
}
</script>

<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :centered-slides="true"
    :loop="true"
    :cards-effect="{
      perSlideRotate: 0,
      perSlideOffset: 30
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/journey.png" alt="" />
        </div>
        <div class="slide-content">
          <div class="slide-content-top">
            <div class="try-btn-container">
              <RouterLink to="/" class="try-btn"
                ><p>Try</p>
                <img src="@/assets/arrow-right.svg" alt="" />
              </RouterLink>
            </div>
          </div>
          <div class="slide-content-bottom">
            <div class="bottom-bg">
              <img src="@/assets/polygon.png" alt="" />
              <div class="bottom-info">
                <div class="bottom-header">
                  <div class="bottom-header-bg">
                    <img src="@/assets/bottom-header-polygon.png" alt="" />
                  </div>
                  <h5 class="content-header">One Dollar Journey</h5>
                </div>
                <div class="content-info">
                  <h4>Dream Journey for One Dollar</h4>
                  <p>Participate in Easy Get BTC, to win Bitcoin with the smallest investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/rocket.png" alt="" />
        </div>
        <div class="slide-content">
          <div class="slide-content-top">
            <div class="try-btn-container">
              <RouterLink to="/" class="try-btn"
                ><p>Try</p>
                <img src="@/assets/arrow-right.svg" alt="" />
              </RouterLink>
            </div>
          </div>
          <div class="slide-content-bottom">
            <div class="bottom-bg">
              <img src="@/assets/polygon.png" alt="" />
              <div class="bottom-info">
                <div class="bottom-header">
                  <div class="bottom-header-bg">
                    <img src="@/assets/bottom-header-polygon.png" alt="" />
                  </div>
                  <h5 class="content-header">Rocket Challenge</h5>
                </div>
                <div class="content-info">
                  <h4>Tension and Thrills</h4>
                  <p>Challenge high-altitude flight in the rocket game.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/minefield.png" alt="" />
        </div>
        <div class="slide-content">
          <div class="slide-content-top">
            <div class="try-btn-container">
              <RouterLink to="/" class="try-btn"
                ><p>Try</p>
                <img src="@/assets/arrow-right.svg" alt="" />
              </RouterLink>
            </div>
          </div>
          <div class="slide-content-bottom">
            <div class="bottom-bg">
              <img src="@/assets/polygon.png" alt="" />
              <div class="bottom-info">
                <div class="bottom-header">
                  <div class="bottom-header-bg">
                    <img src="@/assets/bottom-header-polygon.png" alt="" />
                  </div>
                  <h5 class="content-header">Minefield Challenge</h5>
                </div>
                <div class="content-info">
                  <h4>Tension and Thrills</h4>
                  <p>Avoid Hidden Hazards in the Minefield Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></swiper-slide
    >
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
}
.swiper-slide-prev {
  left: 65px;
  scale: 0.8;
}
.swiper-slide-next {
  right: -50px;
}
.slide-img {
  height: fit-content;
  width: fit-content;
}
.slide-img > img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
}
.slide-content-top {
  display: flex;
  padding: 0 20px;
}
.try-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 3px 15px;
  background: linear-gradient(90deg, #7d00ff 0%, #4b0099 100%);
  border-radius: 30px;
}
.try-btn > p {
  font-size: 14.4px;
  font-weight: 700;
  letter-spacing: 0.23099999129772186px;
  text-align: center;
  color: #fff;
}
.try-btn > img {
  width: 20px;
}
.slide-content-bottom {
  position: relative;
  width: 100%;
  height: 135px;
  bottom: -5px;
}
.bottom-bg {
  width: 100%;
  height: 135px;
}
.bottom-bg > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.bottom-info {
  position: absolute;
  top: 0;
}
.bottom-header {
  position: relative;
  padding-left: 20px;
  top: -5px;
  width: 135px;
}
.bottom-header-bg {
  width: 135px;
}
.bottom-header-bg > img {
  width: 100%;
}
.bottom-header > h5 {
  width: 100%;
  position: absolute;
  top: -5px;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 800;
  line-height: 44px;
  letter-spacing: 0.23099999129772186px;
  text-align: center;
  color: #afe2ff;
}
.content-info {
  width: 90%;
  height: 80px;
  margin: 0 auto;
  position: relative;
  bottom: 10px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content-info > h4 {
  width: 90%;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.23099999129772186px;
  text-align: left;
  color: #fff;
}
.content-info > p {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.23099999129772186px;
  text-align: left;
  color: #fff;
}
</style>
