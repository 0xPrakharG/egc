<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<template>
  <swiper
    :slidesPerView="'auto'"
    :initialSlide="1"
    :centeredSlides="true"
    :spaceBetween="10"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="welcome-article-1">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">No KYC Login</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Your Privacy, Our Commitment - Enjoy an anonymous gaming experience without the need
              for KYC
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="welcome-article-2">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">Security & Privacy</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Safety is our top priority - Utilizing advanced technology to protect your privacy and
              assets
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="welcome-article-3">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">User Guide</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Easy to get started, enjoy gaming - We provide comprehensive guidance and support for
              you.
            </p>
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="welcome-article-1">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">No KYC Login</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Your Privacy, Our Commitment - Enjoy an anonymous gaming experience without the need
              for KYC
            </p>
          </div>
        </div>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="welcome-article-2">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">Security & Privacy</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Safety is our top priority - Utilizing advanced technology to protect your privacy and
              assets
            </p>
          </div>
        </div>
      </div></swiper-slide
    ><swiper-slide
      ><div class="welcome-article-3">
        <div class="welcome-article-inner">
          <div class="welcome-article-front">
            <h3 class="welcome-article-header">User Guide</h3>
            <div class="more-detail-btn">
              <a>
                <img src="@/assets/arrowdown.svg" alt="" />
                <p>More Detail</p>
              </a>
            </div>
          </div>
          <div class="welcome-article-back">
            <p class="welcome-article-info">
              Easy to get started, enjoy gaming - We provide comprehensive guidance and support for
              you.
            </p>
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.swiper-slide-prev {
  left: 40%;
}
.swiper-slide-next {
  left: -40%;
}
.welcome-article-1,
.welcome-article-2,
.welcome-article-3 {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.welcome-article-1:hover .welcome-article-inner,
.welcome-article-2:hover .welcome-article-inner,
.welcome-article-3:hover .welcome-article-inner {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.welcome-article-1,
.welcome-article-2,
.welcome-article-3,
.welcome-article-front,
.welcome-article-back {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.welcome-article-inner {
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.welcome-article-front,
.welcome-article-back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.welcome-article-1 .welcome-article-front {
  background: linear-gradient(109.84deg, #1b0d24 20.96%, #07005b 79.04%);
  box-shadow: 0px 4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-2 .welcome-article-front {
  background: linear-gradient(109.84deg, #0d240d 20.96%, #490000 79.04%);
  box-shadow: 0px -4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-3 .welcome-article-front {
  background: linear-gradient(109.84deg, #04002d 20.96%, #530045 79.04%);
  box-shadow: 0px 4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.welcome-article-front > h3 {
  margin-top: 70px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 5px;
}
.more-detail-btn {
  margin-top: 30px;
}
.more-detail-btn > a {
  color: #999999;
  font-size: 11px;
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.more-detail-btn > a > img {
  height: 20px;
}
.welcome-article-back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome-article-info {
  width: 85%;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  background: #ffffff;
  background: linear-gradient(0deg, #592d92 0%, #1a003d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media screen and (min-width: 501px) {
  .welcome-article-1,
  .welcome-article-2,
  .welcome-article-3,
  .welcome-article-front,
  .welcome-article-back {
    width: 250px;
    height: 250px;
  }
  .welcome-article-front > h3 {
    margin-top: 90px;
    font-size: 18px;
  }
  .more-detail-btn {
    margin-top: 40px;
  }
  .more-detail-btn > a {
    font-size: 14px;
  }
  .more-detail-btn > a > img {
    height: 23px;
  }
  .welcome-article-info {
    font-size: 18px;
  }
}
@media screen and (min-width: 601px) {
  .swiper-slide-prev {
    left: 45%;
  }
  .swiper-slide-next {
    left: -45%;
  }
}
@media screen and (min-width: 751px) {
  .swiper-slide-prev {
    left: 50%;
  }
  .swiper-slide-next {
    left: -50%;
  }
}
@media screen and (min-width: 851px) {
  .swiper-slide-prev {
    left: 55%;
  }
  .swiper-slide-next {
    left: -55%;
  }
}
@media screen and (min-width: 901px) {
  .swiper-slide-prev {
    left: 60%;
  }
  .swiper-slide-next {
    left: -60%;
  }
}
</style>
