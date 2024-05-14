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
          <input placeholder="Connect your wallet" required="" type="text" />
        </div>
        <div class="signup-btn"><RouterLink to="/profile">SIGNUP</RouterLink></div>
      </div>
    </div>
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
.signup-header {
  margin-bottom: 50px;
}
.signup-header h3 {
  font-family: 'Quantico', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  text-align: left;
  color: #d9d9d9;
}
.signup-input {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin: 0 auto 70px;
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
.signup-input > input {
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
.signup-input > input:focus {
  outline: none;
}
.signup-wallet-input {
  position: relative;
}
.signup-btn {
  width: 40%;
  margin: 0 auto;
  text-align: center;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  background: #d9d9d924;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 4px 4px 20px 0px #00000026;
}
.signup-btn > a {
  font-family: 'Prosto One', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 1.5px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
</style>
