<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { EffectCoverflow, Navigation } from 'swiper/modules'

export default {
  methods: {
    Navigation() {
      return Navigation
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [EffectCoverflow],
      isActive: null,
      rocketSection: 1,
      minefieldSection: 1,
      journeySection: 1,
      rocketSection1: 1,
      minefieldSection1: 1,
      journeySection1: 1
    }
  },
  setup() {
    const swiperInstance = ref()

    function onSwiper(swiper) {
      swiperInstance.value = swiper
    }
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext()
    }
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev()
    }
    return {
      swiperPrevSlide,
      swiperNextSlide,
      onSwiper
    }
  }
}
</script>

<template>
  <swiper
    ref="swiperRef"
    effect="coverflow"
    :grab-cursor="false"
    :allow-touch-move="false"
    :centered-slides="true"
    :loop="true"
    @swiper="onSwiper"
    :space-between="'50'"
    :slides-per-view="'auto'"
    :coverflow-effect="{
      rotate: 80,
      depth: -100,
      modifier: 0.2,
      slideShadows: false
    }"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide>
      <div class="slide slide-1">
        <div class="slide-front" :class="{ animate: isActive === 1 }">
          <h2>Rocket</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 1 }" @click="isActive = 1"></div>
        <div class="slide-content">
          <div class="rocket" v-show="rocketSection === 1">
            <div class="rocket-text">
              <h5>All participants&apos; timestamps combination</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container"></div>
              <div class="rocket-navigation-right-container" @click="rocketSection = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>
                  Latest transaction<br />
                  hash on polygon
                </p>
              </div>
            </div>
          </div>
          <div class="rocket" v-show="rocketSection === 2">
            <div class="rocket-text">
              <h5>Latest transaction hash on Polygon</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container" @click="rocketSection = 1">
                <p>
                  All participants'<br />
                  timestamps<br />
                  combination
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="rocket-navigation-right-container" @click="rocketSection = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation details</p>
              </div>
            </div>
          </div>
          <div class="rocket" v-show="rocketSection === 3">
            <div class="rocket-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container" @click="rocketSection = 2">
                <p>
                  Latest transaction<br />
                  hash on polygon
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="rocket-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-2">
        <div class="slide-front slide-1" :class="{ animate: isActive === 2 }">
          <h2>Minefield</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 2 }" @click="isActive = 2"></div>
        <div class="slide-content">
          <div class="minefield" v-show="minefieldSection === 1">
            <div class="minefield-text">
              <h5>Client Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container"></div>
              <div class="minefield-navigation-right-container" @click="minefieldSection = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Server Seed</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection === 2">
            <div class="minefield-text">
              <h5>Server Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection = 1">
                <p>Client Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Nonce</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection === 3">
            <div class="minefield-text">
              <h5>Nonce</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection = 2">
                <p>Server Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection = 4">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Mines</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection === 4">
            <div class="minefield-text">
              <h5>Mines</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection = 3">
                <p>Nonce</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection = 5">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation Details</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection === 5">
            <div class="minefield-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection = 4">
                <p>Mines</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-3">
        <div class="slide-front slide-1" :class="{ animate: isActive === 3 }">
          <h2>One Dollar Journey</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 3 }" @click="isActive = 3"></div>
        <div class="slide-content">
          <div class="journey" v-show="journeySection === 1">
            <div class="journey-text">
              <h5>Hash Data</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container"></div>
              <div class="journey-navigation-right-container" @click="journeySection = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Seed</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection === 2">
            <div class="journey-text">
              <h5>Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection = 1">
                <p>Hash Data</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Nonce</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection === 3">
            <div class="journey-text">
              <h5>Nonce</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection = 2">
                <p>Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection = 4">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>
                  Latest transaction<br />
                  hash on Polygon
                </p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection === 4">
            <div class="journey-text">
              <h5>Latest transaction hash on Polygon</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection = 3">
                <p>Nonce</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection = 5">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation Details</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection === 5">
            <div class="journey-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection = 4">
                <p>
                  Latest transaction<br />
                  hash on Polygon
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-1">
        <div class="slide-front" :class="{ animate: isActive === 1 }">
          <h2>Rocket</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 1 }" @click="isActive = 1"></div>
        <div class="slide-content">
          <div class="rocket" v-show="rocketSection1 === 1">
            <div class="rocket-text">
              <h5>All participants&apos; timestamps combination</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container"></div>
              <div class="rocket-navigation-right-container" @click="rocketSection1 = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>
                  Latest transaction<br />
                  hash on polygon
                </p>
              </div>
            </div>
          </div>
          <div class="rocket" v-show="rocketSection1 === 2">
            <div class="rocket-text">
              <h5>Latest transaction hash on Polygon</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container" @click="rocketSection1 = 1">
                <p>
                  All participants'<br />
                  timestamps<br />
                  combination
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="rocket-navigation-right-container" @click="rocketSection1 = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation details</p>
              </div>
            </div>
          </div>
          <div class="rocket" v-show="rocketSection1 === 3">
            <div class="rocket-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="rocket-navigation">
              <div class="rocket-navigation-left-container" @click="rocketSection1 = 2">
                <p>
                  Latest transaction<br />
                  hash on polygon
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="rocket-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-2">
        <div class="slide-front slide-1" :class="{ animate: isActive === 2 }">
          <h2>Minefield</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 2 }" @click="isActive = 2"></div>
        <div class="slide-content">
          <div class="minefield" v-show="minefieldSection1 === 1">
            <div class="minefield-text">
              <h5>Client Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container"></div>
              <div class="minefield-navigation-right-container" @click="minefieldSection1 = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Server Seed</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection1 === 2">
            <div class="minefield-text">
              <h5>Server Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection1 = 1">
                <p>Client Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection1 = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Nonce</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection1 === 3">
            <div class="minefield-text">
              <h5>Nonce</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection1 = 2">
                <p>Server Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection1 = 4">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Mines</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection1 === 4">
            <div class="minefield-text">
              <h5>Mines</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection1 = 3">
                <p>Nonce</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container" @click="minefieldSection1 = 5">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation Details</p>
              </div>
            </div>
          </div>
          <div class="minefield" v-show="minefieldSection1 === 5">
            <div class="minefield-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="minefield-navigation">
              <div class="minefield-navigation-left-container" @click="minefieldSection1 = 4">
                <p>Mines</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="minefield-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide slide-3">
        <div class="slide-front slide-1" :class="{ animate: isActive === 3 }">
          <h2>One Dollar Journey</h2>
        </div>
        <div class="slide-back" :class="{ animate: isActive === 3 }" @click="isActive = 3"></div>
        <div class="slide-content">
          <div class="journey" v-show="journeySection1 === 1">
            <div class="journey-text">
              <h5>Hash Data</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container"></div>
              <div class="journey-navigation-right-container" @click="journeySection1 = 2">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Seed</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection1 === 2">
            <div class="journey-text">
              <h5>Seed</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection1 = 1">
                <p>Hash Data</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection1 = 3">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Nonce</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection1 === 3">
            <div class="journey-text">
              <h5>Nonce</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection1 = 2">
                <p>Seed</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection1 = 4">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>
                  Latest transaction<br />
                  hash on Polygon
                </p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection1 === 4">
            <div class="journey-text">
              <h5>Latest transaction hash on Polygon</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection1 = 3">
                <p>Nonce</p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container" @click="journeySection1 = 5">
                <img src="@/assets/chev-right.svg" alt="" />
                <p>Calculation Details</p>
              </div>
            </div>
          </div>
          <div class="journey" v-show="journeySection1 === 5">
            <div class="journey-text">
              <h5>Calculation Details</h5>
              <p>
                contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext
              </p>
            </div>
            <div class="journey-navigation">
              <div class="journey-navigation-left-container" @click="journeySection1 = 4">
                <p>
                  Latest transaction<br />
                  hash on Polygon
                </p>
                <img src="@/assets/chev-left.svg" alt="" />
              </div>
              <div class="journey-navigation-right-container"></div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="navigation-btns">
      <div class="prev-btn" @click="isActive = null">
        <button @click="swiperPrevSlide">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35" cy="35" r="34.5" stroke="white" />
            <path
              d="M17.5858 33.5858C16.8047 34.3668 16.8047 35.6332 17.5858 36.4142L30.3137 49.1421C31.0948 49.9232 32.3611 49.9232 33.1421 49.1421C33.9232 48.3611 33.9232 47.0948 33.1421 46.3137L21.8284 35L33.1421 23.6863C33.9232 22.9052 33.9232 21.6389 33.1421 20.8579C32.3611 20.0768 31.0948 20.0768 30.3137 20.8579L17.5858 33.5858ZM52 33L19 33L19 37L52 37L52 33Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="next-btn" @click="isActive = null">
        <button @click="swiperNextSlide">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35" cy="35" r="34.5" stroke="white" />
            <path
              d="M53.4142 36.4142C54.1953 35.6332 54.1953 34.3668 53.4142 33.5858L40.6863 20.8579C39.9052 20.0768 38.6389 20.0768 37.8579 20.8579C37.0768 21.6389 37.0768 22.9052 37.8579 23.6863L49.1716 35L37.8579 46.3137C37.0768 47.0948 37.0768 48.3611 37.8579 49.1421C38.6389 49.9232 39.9052 49.9232 40.6863 49.1421L53.4142 36.4142ZM19 37L52 37L52 33L19 33L19 37Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 90%;
  height: 80%;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 80px;
  margin: auto !important;
}
.swiper-slide {
  width: 280px;
  height: 340px;
}
.swiper-slide-active {
  scale: 0.96;
  transition: all 0.4s !important;
  height: 320px;
}
.slide {
  position: relative;
  width: 280px;
  height: 320px;
  z-index: -2;
}
.swiper-slide-active .slide {
  overflow: hidden;
}
.slide-1 .slide-front {
  height: 100%;
  width: 100%;
  background: url(@/assets/carousel-rocket.png) no-repeat;
  background-size: 100% auto;
  background-position: center top;
  background-attachment: fixed;
  opacity: 1;
}
.slide-2 .slide-front {
  height: 100%;
  width: 100%;
  background: url(@/assets/carousel-mines.png) no-repeat;
  background-size: 100% auto;
  background-position: center top;
  background-attachment: fixed;
  opacity: 1;
}
.slide-3 .slide-front {
  height: 100%;
  width: 100%;
  background: url(@/assets/carousel-journey.png) no-repeat;
  background-size: 100% auto;
  background-position: center top;
  background-attachment: fixed;
  opacity: 1;
}
.swiper-slide-active .slide .slide-front.animate {
  animation: opacity 0.1s linear forwards;
  animation-delay: 0.1s;
}
@keyframes opacity {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
.slide-front {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.slide-front > h2 {
  font-size: 29px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.swiper-slide-prev .slide .slide-front > h2,
.swiper-slide-next .slide .slide-front > h2 {
  height: 100%;
  width: 100%;
  background: #00000050;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide-active .slide .slide-back {
  bottom: -235%;
  right: 0;
  left: 66%;
  position: absolute;
  width: 500px;
  height: 700px;
  background: #fff;
  transform: rotate(15deg);
}
.swiper-slide-active .slide:hover .slide-back {
  bottom: -228%;
  left: 58%;
  transition: all 0.7s ease;
}
.slide-back.animate {
  animation: peel 0.4s ease both;
}
@keyframes peel {
  0% {
    left: 58%;
    bottom: -228%;
  }
  100% {
    right: 90%;
    bottom: 0%;
    left: -182%;
    transform: rotate(30deg);
  }
}
.slide-content {
  opacity: 0;
}
.swiper-slide-prev .slide .slide-content,
.swiper-slide-next .slide .slide-content {
  opacity: 0;
}
.swiper-slide-active .slide .slide-content {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(102, 102, 102, 0.1128) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 1;
  z-index: -1;
}
.rocket,
.journey,
.minefield {
  width: 98%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px auto 0;
  text-align: center;
}
.rocket-text > h5,
.journey-text > h5,
.minefield-text > h5 {
  font-family: 'Syncopate', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #fff;
  text-decoration: underline;
}
.rocket-text > p,
.journey-text > p,
.minefield-text > p {
  font-family: 'Syncopate', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #fff;
  width: 80%;
  display: flex;
  word-break: break-all;
  white-space: normal;
  margin: 10px auto;
}
.rocket-navigation,
.journey-navigation,
.minefield-navigation {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.rocket-navigation-right-container,
.journey-navigation-right-container,
.minefield-navigation-right-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.rocket-navigation-right-container > p,
.journey-navigation-right-container > p,
.minefield-navigation-right-container > p {
  font-family: 'Tajawal', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.20999999344348907px;
  text-align: right;
  text-decoration: underline;
  color: #fff;
}
.rocket-navigation-left-container,
.journey-navigation-left-container,
.minefield-navigation-left-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.rocket-navigation-left-container > p,
.journey-navigation-left-container > p,
.minefield-navigation-left-container > p {
  font-family: 'Tajawal', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.20999999344348907px;
  text-align: left;
  text-decoration: underline;
  color: #fff;
}
.navigation-btns {
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 65px;
  margin-left: -40px;
}
.prev-btn,
.next-btn {
  z-index: 1;
}
.prev-btn > button,
.next-btn > button {
  background: transparent;
  border: none;
  cursor: pointer;
  width: 65px;
  height: 65px;
}
.prev-btn > button > img,
.next-btn > button > img {
  width: 100%;
  height: 100%;
}
.prev-btn:hover > button > svg > circle,
.next-btn:hover > button > svg > circle {
  fill: #fff;
}
.prev-btn:hover > button > svg > path,
.next-btn:hover > button > svg > path {
  fill: #7d00ff;
}
@media screen and (min-width: 1151px) {
  .swiper {
    width: 85%;
    padding-left: 50px;
  }
}
@media screen and (min-width: 1240px) {
  .swiper {
    width: 80%;
  }
}
@media screen and (min-width: 1320px) {
  .swiper {
    width: 75%;
  }
}
@media screen and (min-width: 1410px) {
  .swiper {
    width: 70%;
  }
}
@media screen and (min-width: 1510px) {
  .swiper {
    width: 65%;
  }
}
</style>
