<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="footer-container">
      <footer class="footer">
        <div class="footer-text">
          <RouterLink to="/">EasyGetCoin</RouterLink>
        </div>
        <div class="footer-center">
          <p>18+和版权所有@EGC Team</p>
        </div>
        <div class="footer-links">
          <RouterLink to="/help" class="footer-help">
            <div class="help-img">
              <img src="@/assets/help-icon.svg" alt="" />
            </div>
            <div class="help-text">
              <h5>Helping Center</h5>
              <p>We&apos;re here to help</p>
            </div>
          </RouterLink>
          <div class="socials">
            <div class="discord">
              <a target="_blank" href="https://discord.gg/h3uSTnwkK2">
                <p>Discord</p>
                <img src="@/assets/discord.svg" alt="" />
              </a>
            </div>
            <div class="twitter">
              <a target="_blank" href="https://x.com/easygetcoin?s=11">
                <p>Twitter</p>
                <img src="@/assets/twitter.svg" alt="" />
              </a>
            </div>
            <div class="telegram">
              <a target="_blank" href="https://t.me/+exiRYFC5Cc1jOGQ0">
                <p>Telegram</p>
                <img src="@/assets/telegram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(1, 1, 1, 0.45);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(8.5px);
  z-index: 700;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px 5px 10px;
}
.footer-text {
  display: flex;
  align-items: center;
  width: 27%;
}
.footer-text > a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  line-height: 21px;
  letter-spacing: 0.20999999344348907px;
  text-align: left;
}
.footer-center > p {
  font-size: 10px;
  font-weight: 200;
  line-height: 40px;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.footer-help {
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
}
.help-img {
  background: #302938;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.help-img > img {
  width: 24px;
  height: 24px;
}
.help-text {
  color: #fff;
}
.help-text > h5 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.help-text > p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #ab9eb8;
}
.footer-links {
  display: flex;
  align-items: center;
  gap: 50px;
}
.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
  width: 150px;
}
.discord > a,
.twitter > a,
.telegram > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  text-decoration: underline;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  cursor: pointer;
}
.discord > a {
  color: #9841f0;
}
.twitter > a {
  color: #419cf0;
}
.telegram > a {
  color: #a8e5ff;
}
.discord > a > img,
.twitter > a > img,
.telegram > a > img {
  width: 15px;
  height: 15px;
}
</style>
