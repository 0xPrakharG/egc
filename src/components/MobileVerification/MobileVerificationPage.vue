<script setup>
import VerificationBg from './VerificationBg.vue'
import VerificationContainer from './VerificationContainer.vue'
</script>

<template>
  <div class="verification-page" style="position: relative">
    <VerificationBg />
    <div class="verification-container">
      <div class="verification-header">
        <h4>Trust in Transparency</h4>
        <p>Verify Your Game, Play with Confidence!</p>
      </div>
      <div class="verification-header-2">
        <img src="@/assets/rocket-emote.svg" alt="" />
        <h4>How we verify our games?</h4>
      </div>
      <VerificationContainer />
    </div>
    <footer>
      <div class="footer-top">
        <p>TEAM</p>
        <div class="footer-socials">
          <a target="_blank" href="https://t.me/+exiRYFC5Cc1jOGQ0" class="social-link">
            <img src="@/assets/telegram-mobile.svg" alt="" />
          </a>
          <a target="_blank" href="https://discord.gg/h3uSTnwkK2" class="social-link">
            <img src="@/assets/discord-mobile.svg" alt="" />
          </a>
          <a target="_blank" href="https://x.com/easygetcoin?s=11" class="social-link">
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
.verification-page {
  height: 100%;
  width: 100%;
}
.verification-header {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}
.verification-header > h4 {
  font-family: 'Oxygen', sans-serif;
  font-size: 35px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #fff;
}
.verification-header > p {
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.20999999344348907px;
  text-align: center;
  color: #ffffff99;
}
.verification-header-2 {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  width: 100%;
}
.verification-header-2 > img {
  width: 30px;
  height: 30px;
  opacity: 0.7;
}
.verification-header-2 > h4 {
  font-size: 20px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.20999999344348907px;
  color: #efefefa8;
}
footer {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 10px;
  height: 100vh;
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
</style>
