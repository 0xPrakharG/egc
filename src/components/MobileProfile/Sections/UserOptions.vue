<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="user-options">
    <div class="options">
      <div class="option-item">
        <div>
          <img src="@/assets/edit-profile.svg" alt="" />
        </div>
        <RouterLink to="/profile">Edit Profile</RouterLink>
      </div>
      <div class="option-item">
        <div>
          <img src="@/assets/switch-acc.svg" alt="" />
        </div>
        <RouterLink to="/profile">Switch Account</RouterLink>
      </div>
      <div class="option-item">
        <div>
          <img src="@/assets/logout.svg" alt="" />
        </div>
        <RouterLink to="/profile">Log Out</RouterLink>
      </div>
    </div>
    <div class="user-options-border"></div>
    <div class="wallet-connect-container">
      <div class="wallet-connect-header">
        <p>Wallet Connected</p>
        <div>
          <img src="@/assets/wallet-connect.svg" alt="" />
        </div>
      </div>
      <div class="wallet-connect-info">
        <div class="wallet-connect">
          <img src="@/assets/coinbase-logo.svg" alt="" />
          <img src="@/assets/coinbase.svg" alt="" />
        </div>
        <div class="wallet-connect-options">
          <div>
            <img src="@/assets/wallet-option.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-options {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.options {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.option-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.option-item > div {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.option-item > div > img {
  width: 100%;
  height: 100%;
}
.option-item > a {
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 1.5749999284744263px;
  text-align: left;
  color: #dedede;
}
.user-options-border {
  width: 1px;
  height: 80px;
  border-right: 0.31px solid #ffffff;
}
.wallet-connect-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}
.wallet-connect-header {
  display: flex;
  align-items: center;
  gap: 8px;
}
.wallet-connect-header > p {
  font-family: Oxanium;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.5749999284744263px;
  text-align: left;
  color: #fff;
}
.wallet-connect-header > div {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallet-connect-header > img {
  width: 100%;
  height: 100%;
}
.wallet-connect-info {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  background: #d9d9d938;
  border-radius: 6px;
}
.wallet-connect {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
}
.wallet-connect-options > div {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallet-connect-options > div > img {
  width: 100%;
  height: 100%;
}
</style>
