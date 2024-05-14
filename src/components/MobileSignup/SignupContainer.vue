<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="signup-container">
      <div class="signup">
        <div class="signup-header">
          <h3>Sign-up</h3>
        </div>
        <div class="signup-input">
          <input placeholder="Username" required="" type="option" />
          <div class="signup-wallet-input">
            <input placeholder="Connect your wallet" required="" type="text" />
            <button>
              <img src="@/assets/chev-down.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="signup-btn"><RouterLink to="/profile">SIGNUP</RouterLink></div>
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
.signup-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
}
.signup {
  margin: 120px auto 0;
  width: 90%;
  padding: 20px 15px;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.34) 0%, rgba(115, 115, 115, 0.46) 100%);
  border-radius: 16px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
}
.signup-header {
  margin-bottom: 30px;
}
.signup-header h3 {
  font-family: 'Quantico', sans-serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  text-align: left;
  color: #d9d9d9;
}
.signup-input {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
}
::placeholder {
  color: #a8a8a8;
  opacity: 1;
  letter-spacing: 1.5px;
  line-height: 50px;
  font-size: 14px;
}
::-ms-input-placeholder {
  color: #a8a8a8;
  letter-spacing: 1.5px;
  line-height: 50px;
  font-size: 14px;
}
.signup-wallet-input > input,
.signup-input > input {
  width: 100%;
  color: #a8a8a8;
  font-family: 'Prosto One', sans-serif;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  box-sizing: border-box;
  padding-block: 10px;
  border: none;
  border-bottom: 1px solid #fff;
}
.signup-wallet-input > input:focus,
.signup-input > input:focus {
  outline: none;
}
.signup-wallet-input {
  position: relative;
}
.signup-wallet-input > button {
  position: absolute;
  right: 10px;
  bottom: 25%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  transform: rotate(270deg);
}
.signup-btn {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  background: #d9d9d924;
  border-radius: 10px;
  margin-top: 60px;
  margin-bottom: 30px;
  box-shadow: 4px 4px 20px 0px #00000026;
}
.signup-btn > a {
  font-family: 'Prosto One', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
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
@media screen and (min-width: 551px) {
  .signup {
    width: 75%;
  }
}
@media screen and (min-width: 701px) {
  .signup {
    width: 65%;
  }
}
@media screen and (min-width: 851px) {
  .signup {
    width: 50%;
  }
}
</style>
