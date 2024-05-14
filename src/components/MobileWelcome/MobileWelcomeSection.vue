<script setup>
import WelcomeBg from './WelcomeBg.vue'
import ScrollCarousel from './ScrollCarousel.vue'
</script>

<template>
  <div style="position: relative; overflow: hidden">
    <WelcomeBg />
    <div class="welcome-container">
      <div class="welcome-text">
        <h3>For Every Users</h3>
        <p>Access with Ease, Guarded with Vigilance: No KYC, No Worries</p>
      </div>
      <div class="welcome-articles">
        <ScrollCarousel />
      </div>
      <div class="welcome-reminder">
        <div class="welcome-arrows">
          <img src="@/assets/welcome-arrowleft.svg" alt="" />
          <img src="@/assets/welcome-arrowright.svg" alt="" />
        </div>
        <p>Scroll to view more</p>
      </div>
    </div>
    <footer>
      <div class="footer-top">
        <p>TEAM</p>
        <div class="footer-socials">
          <a class="social-link">
            <img src="@/assets/telegram-mobile.svg" alt="" />
          </a>
          <a class="social-link">
            <img src="@/assets/discord-mobile.svg" alt="" />
          </a>
          <a class="social-link">
            <img src="@/assets/twitter-mobile.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <p>18+</p>
        </div>
        <div>
          <img src="@/assets/egc-mobile.svg" alt="" />
        </div>
        <div>
          <p>copyright@EASY GET COIN 2022</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.welcome-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin: 110px auto;
}
.welcome-text {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.welcome-text > h3 {
  font-size: 40px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 25px;
  color: #fff;
}
.welcome-text > p {
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #ffffffcc;
  width: 90%;
}
.welcome-articles {
  top: 0;
  bottom: 0;
  right: 0;
  margin: -5px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 260px;
  z-index: 100;
}
.welcome-reminder {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.welcome-arrows {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.welcome-arrows > img {
  width: 16px;
}
.welcome-reminder > p {
  font-family: Oxanium;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.20999999344348907px;
  text-align: left;
  color: #ffffff;
}
footer {
  position: absolute;
  z-index: 200;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.footer-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.footer-top > p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 30.26px;
  text-align: left;
  color: #fff;
}
.footer-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-link > img {
  width: 100%;
  height: 100%;
}
.footer-bottom {
  display: flex;
  align-items: center;
  align-items: center;
  gap: 5px;
}
.footer-bottom > div {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 30.26px;
  text-align: left;
  color: #fff;
}
.footer-bottom > div:nth-child(2) {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-bottom > div:nth-child(2) > img {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 501px) {
  .welcome-text > p {
    width: 60%;
  }
  .welcome-reminder {
    margin-top: 20px;
  }
  footer {
    gap: 10px;
  }
}
@media screen and (min-width: 751px) {
  .welcome-text > p {
    width: 45%;
  }
}
</style>
