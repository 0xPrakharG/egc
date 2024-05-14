<template>
  <div>
    <div class="login-container">
      <div class="login">
        <div class="login-header">
          <h3>Login</h3>
        </div>
        <div class="login-input">
          <div class="login-wallet-input">
            <input placeholder="Login with your wallet" required="" type="option" />
            <button>
              <img src="@/assets/chev-down.svg" alt="" />
            </button>
          </div>
          <input placeholder="Password" required="" type="text" />
        </div>
        <div class="login-forget">
          <a>Forget password?</a>
        </div>
        <div class="login-btn"><a href="/profile">LOGIN</a></div>
        <div class="login-signup">
          <a href="/signup">Don&apos;t have and account?</a>
        </div>
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
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
}
.login {
  margin: 120px auto 0;
  width: 90%;
  padding: 20px 15px;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.34) 0%, rgba(115, 115, 115, 0.46) 100%);
  border-radius: 16px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
}
.login-header {
  margin-bottom: 30px;
}
.login-header h3 {
  font-family: 'Quantico', sans-serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  text-align: left;
  color: #d9d9d9;
}
.login-input {
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
.login-wallet-input > input,
.login-input > input {
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
.login-wallet-input > input:focus,
.login-input > input:focus {
  outline: none;
}
.login-wallet-input {
  position: relative;
}
.login-wallet-input > button {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
}
.login-forget {
  width: 90%;
  margin: 0 auto;
  text-align: right;
}
.login-forget > a {
  text-decoration: underline;
  font-family: 'Quantico', sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1.5px;
  color: #fff;
  cursor: pointer;
}
.login-btn {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  background: #d9d9d924;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 4px 4px 20px 0px #00000026;
}
.login-btn > a {
  font-family: 'Prosto One', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.login-signup {
  width: 100%;
  text-align: right;
  margin-top: 40px;
}
.login-signup > a {
  cursor: pointer;
  font-family: 'Prosto One', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #3e188f;
  text-decoration: underline;
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
  .login {
    width: 75%;
  }
}
@media screen and (min-width: 701px) {
  .login {
    width: 65%;
  }
}
@media screen and (min-width: 851px) {
  .login {
    width: 50%;
  }
}
</style>
