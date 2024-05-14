<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<template>
  <swiper
    :direction="'vertical'"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/slide-1.jpeg" alt="" />
        </div>
        <div class="bg"></div>
        <div class="slide-content">
          <div class="slide-content-left">
            <p class="slide-content-left-header">Featured Games</p>
            <h3 class="slide-content-left-subheader" style="padding: 0 30px">
              A Dream Journey for One Dollar
            </h3>
            <p class="slide-content-left-info">
              Participate in Easy Get BTC, to win Bitcoin with the smallest investment.
            </p>
            <div class="try-btn-container">
              <a class="try-btn">Try</a>
            </div>
          </div>
          <div class="slide-content-right">
            <a
              ><span>Detail</span>
              <img src="@/assets/arrowright.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/slide-2.jpeg" alt="" />
        </div>
        <div class="bg"></div>
        <div class="slide-content">
          <div class="slide-content-left">
            <p class="slide-content-left-header">Featured Games</p>
            <h3 class="slide-content-left-subheader" style="padding: 0 30px">
              A Dream Journey for One Dollar
            </h3>
            <p class="slide-content-left-info">
              Participate in Easy Get BTC, to win Bitcoin with the smallest investment.
            </p>
            <div class="try-btn-container">
              <a class="try-btn">Try</a>
            </div>
          </div>
          <div class="slide-content-right">
            <a
              ><span>Detail</span>
              <img src="@/assets/arrowright.svg" alt="" />
            </a>
          </div>
        </div></div
    ></swiper-slide>
    <swiper-slide
      ><div class="slide">
        <div class="slide-img">
          <img src="@/assets/slide-3.jpeg" alt="" />
        </div>
        <div class="bg"></div>
        <div class="slide-content">
          <div class="slide-content-left">
            <p class="slide-content-left-header">Featured Games</p>
            <h3 class="slide-content-left-subheader" style="padding: 0 30px">
              A Dream Journey for One Dollar
            </h3>
            <p class="slide-content-left-info">
              Participate in Easy Get BTC, to win Bitcoin with the smallest investment.
            </p>
            <div class="try-btn-container">
              <a class="try-btn">Try</a>
            </div>
          </div>
          <div class="slide-content-right">
            <a
              ><span>Detail</span>
              <img src="@/assets/arrowright.svg" alt="" />
            </a>
          </div>
        </div></div
    ></swiper-slide>
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
}
.slide {
  width: 100%;
  height: 100%;
}
.slide-img {
  height: 100%;
  width: 100%;
}
.slide-img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.slide-content-left {
  padding: 30px 10px 60px;
  width: 31%;
  background: linear-gradient(109.84deg, rgba(82, 0, 255, 0.2) 20.96%, rgba(0, 0, 0, 0.31) 79.04%),
    linear-gradient(104.32deg, rgba(0, 0, 0, 0.31) 20.37%, rgba(47, 5, 215, 0.2) 77.28%),
    radial-gradient(
      150.11% 150.11% at 0.88% 0.98%,
      #13000000 0%,
      #6903725e 63.44%,
      #1c03431a 98.9%,
      #14121700 100%
    );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.slide-content-left-header {
  color: #999999;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
.slide-content-left-subheader {
  color: #fff;
  font-size: 19px;
  font-weight: 800;
  line-height: 30px;
  text-align: center;
}
.slide-content-left-info {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}
.try-btn-container {
  background: linear-gradient(90deg, rgba(64, 0, 104, 0.35) 0%, rgba(12, 20, 210, 0.35) 100%);
  border-radius: 50px;
  border: 1px solid #801ae51c;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 90%;
  box-shadow:
    0px 10px 10px 0px #00000040,
    0px -2px 4px 0px #801ae526;
  cursor: pointer;
}
.try-btn {
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
}
.slide-content-right > a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 20px;
  color: #ffffffa3;
  text-decoration: underline;
  cursor: pointer;
  text-shadow: 0px 0px 10px #7d00ff;
}
.slide-content-right > a > img {
  width: 30px;
}
@media screen and (min-width: 1101px) {
  .slide-content-left-header {
    font-size: 25px;
  }
  .slide-content-left-subheader {
    font-size: 23px;
  }
  .slide-content-left-info {
    font-size: 18px;
  }
  .try-btn {
    font-size: 30px;
  }
}
@media screen and (min-width: 1281px) {
  .slide-content-left-header {
    font-size: 30px;
  }
  .slide-content-left-subheader {
    font-size: 28px;
  }
  .slide-content-left-info {
    font-size: 20px;
  }
  .try-btn {
    font-size: 32px;
  }
}
</style>
