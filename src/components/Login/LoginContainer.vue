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
        <div class="login-btn"><RouterLink to="/profile">Connet Wallet</RouterLink></div>
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
  margin: 230px auto;
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
  margin-bottom: 30px;
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
.login-btn {
  width: 50%;
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
  font-size: 18px;
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
  margin-top: 30px;
}
.login-signup > a {
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #3e188f;
  text-decoration: underline;
}
</style>
