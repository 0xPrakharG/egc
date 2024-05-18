<script setup>
import { RouterLink } from 'vue-router'
</script>
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
          <RouterLink to="/login">Forget password?</RouterLink>
        </div>
        <div class="login-btn"><RouterLink to="/profile">LOGIN</RouterLink></div>
        <div class="login-signup">
          <RouterLink to="/signup">Don&apos;t have and account?</RouterLink>
        </div>
      </div>
    </div>
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
  margin: 130px auto;
  width: 50%;
  padding: 25px;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.34) 0%, rgba(115, 115, 115, 0.46) 100%);
  border-radius: 16px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 0.01px solid rgba(255, 255, 255, 0.3);
}
.login-header {
  margin-bottom: 50px;
}
.login-header h3 {
  font-family: 'Quantico', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  text-align: left;
  color: #d9d9d9;
}
.login-input {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin: 0 auto;
}
::placeholder {
  color: #a8a8a8;
  opacity: 1;
  letter-spacing: 1.5px;
  line-height: 50px;
  font-size: 16px;
}
::-ms-input-placeholder {
  color: #a8a8a8;
  letter-spacing: 1.5px;
  line-height: 50px;
  font-size: 16px;
}
.login-wallet-input > input,
.login-input > input {
  width: 100%;
  color: #a8a8a8;
  font-family: 'Prosto One', sans-serif;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  width: 100%;
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
  width: 80%;
  margin: 0 auto;
  text-align: right;
}
.login-forget > a {
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
}
.login-btn {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  background: #d9d9d924;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 4px 4px 20px 0px #00000026;
}
.login-btn > a {
  font-family: 'Prosto One', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.login-signup {
  width: 100%;
  text-align: right;
  margin-top: 15px;
}
.login-signup > a {
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #3e188f;
  text-decoration: underline;
}
</style>
