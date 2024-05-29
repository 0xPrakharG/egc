<script setup>
import { useMonitorSize } from '@/composables/monitor-size.js'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const sizes = useMonitorSize()
const navOpen = ref(false)
const openIntroNav = ref(false)
const openMobileIntro = ref(false)
const open = computed(() => {
  return { display: openIntroNav.value ? 'flex' : 'none' }
})
const close = computed(() => {
  return { display: navOpen.value ? 'flex' : 'none' }
})
const openMobileIntroNav = computed(() => {
  return { display: openMobileIntro.value ? 'flex' : 'none' }
})
</script>

<template>
  <header>
    <div class="header-mobile-content" v-if="sizes.isMobile.value">
      <div class="header-mobile-fixed">
        <div class="header-mobile-left" @click="navOpen = !navOpen">
          <img src="@/assets/mobile-nav-menu.svg" alt="" @click="openMobileIntro = false" />
        </div>
        <div>
          <RouterLink to="/" class="header-mobile-title">
            <img src="@/assets/egc-mobile.svg" alt="" />
            <span>EasyGetCoin</span>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/login" class="profile-mobile-img">
            <img src="" alt="" />
          </RouterLink>
        </div>
      </div>
      <div class="mobile-nav" :style="close">
        <div class="mobile-nav-container">
          <div class="wallet-connect">
            <div class="wallet-dp" @click="navOpen = !navOpen">
              <RouterLink to="/profile">
                <img src="@/assets/nav-man.svg" alt="" />
              </RouterLink>
            </div>
            <button>Connect wallet</button>
          </div>
          <div class="info">
            <div class="bets">
              <p>100</p>
              <p>BETS</p>
            </div>
            <div class="center-line"></div>
            <div class="asset">
              <div class="asset-info">
                <div>
                  <img src="@/assets/tether-nav.svg" alt="" />
                </div>
                <p>100</p>
              </div>
              <p>TOTAL ASSET</p>
            </div>
          </div>
          <nav class="navbar-mobile">
            <div @click="navOpen = !navOpen">
              <RouterLink to="/">HOME</RouterLink>
            </div>
            <div class="mobile-intro">
              <div @click="openMobileIntro = !openMobileIntro" class="right-nav-link">
                INTRODUCTION
              </div>
              <div :style="openMobileIntroNav" class="mobile-intro-nav">
                <a href="#introduction" @click="navOpen = !navOpen">Game Introduction</a>
                <RouterLink to="/verification" @click="navOpen = !navOpen"
                  >Verifiability</RouterLink
                >
                <RouterLink to="/help" @click="navOpen = !navOpen">Help Center</RouterLink>
              </div>
            </div>
            <div @click="navOpen = !navOpen">
              <RouterLink to="/record">GAME RECORD</RouterLink>
            </div>
            <div @click="navOpen = !navOpen">
              <RouterLink to="/staking">STAKING</RouterLink>
            </div>
            <div @click="navOpen = !navOpen">
              <RouterLink to="/whitepaper">WHITEPAPER</RouterLink>
            </div>
            <div @click="navOpen = !navOpen">
              <RouterLink to="/login">LOGOUT</RouterLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="header-content" v-else>
      <RouterLink to="/" class="header-title">EasyGetCoin</RouterLink>
      <div class="navbar-container">
        <nav class="navbar">
          <div @click="openIntroNav = !openIntroNav">
            <p>Introduction</p>
          </div>
          <div>
            <a target="_blank" href="https://www.easygetcoin.com/home">Game Platform</a>
          </div>
          <div>
            <RouterLink to="/staking">Staking</RouterLink>
          </div>
          <div>
            <RouterLink to="/whitepaper">Whitepaper</RouterLink>
          </div>
        </nav>
        <RouterLink to="/login" class="profile-img">
          <img src="" alt="" />
        </RouterLink>
      </div>
      <div :style="open" class="intro-nav">
        <a href="#introduction" @click="openIntroNav = !openIntroNav">Game Introduction</a>
        <RouterLink to="/verification" @click="openIntroNav = !openIntroNav"
          >Verifiability</RouterLink
        >
        <RouterLink to="/help" @click="openIntroNav = !openIntroNav">Help Center</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  position: fixed;
  padding: 10px 20px;
  z-index: 999;
  background: #eee8e80a;
}
.header-mobile-fixed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.header-mobile-left > img {
  width: 30px;
  height: 30px;
}
.header-mobile-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
}
.header-mobile-title > span {
  font-size: 22px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.header-mobile-title > img {
  width: 45px;
}
.profile-mobile-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #9e9e9e;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profile-mobile-img > img {
  width: 100%;
  height: 100%;
  display: none; /* remove when img added */
}

.mobile-nav {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 66px;
  width: 300px;
  height: calc(100vh - 66px);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(49, 16, 92, 0.38) 55.33%);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  padding: 20px;
  z-index: 990;
}
.mobile-nav-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.wallet-connect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  background: #fae2ff1a;
  width: 100%;
}
.wallet-dp {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wallet-dp > a {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.wallet-dp > a > img {
  width: 100%;
  height: 100%;
}
.wallet-connect > button {
  background: #9036ef;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24.2px;
  color: #fff;
  cursor: pointer;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background: #fae2ff1a;
  width: 100%;
}
.bets {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20.2px;
  color: #fff;
  padding-left: 20px;
}
.center-line {
  width: 3px;
  height: 30px;
  padding-left: 30px;
  border-right: 3px solid #9036ef;
}
.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20.2px;
  color: #fff;
}
.asset-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.asset-info > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.asset-info > div > img {
  width: 18px;
  height: 18px;
}
.navbar-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
}
.navbar-mobile > div {
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-mobile > div > a,
.navbar-mobile > div > div {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 36.31px;
  color: #ffffff80;
  text-decoration: none;
  width: 100%;
  text-align: center;
  padding: 5px;
}
.navbar-mobile > div > a.router-link-exact-active {
  color: #ffffff;
  background: linear-gradient(
    90deg,
    rgba(211, 136, 254, 0.41) 0%,
    rgba(150, 81, 245, 0.54) 50.22%,
    rgba(75, 176, 253, 0.63) 100%
  );
  border-radius: 30px;
}
.navbar-mobile > div:nth-child(6) > a.router-link-exact-active {
  color: #ffffff80;
  background: none;
  border-radius: 30px;
}
.mobile-intro {
  display: flex;
  flex-direction: column;
}
.mobile-intro-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
}
.mobile-intro-nav > a {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff80;
  text-decoration: none;
  line-height: 20px;
  cursor: pointer;
  padding: 5px 0;
}
.mobile-intro-nav > a.router-link-exact-active {
  color: #ffffff;
  background: linear-gradient(
    90deg,
    rgba(211, 136, 254, 0.41) 0%,
    rgba(150, 81, 245, 0.54) 50.22%,
    rgba(75, 176, 253, 0.63) 100%
  );
  border-radius: 30px;
}
@media screen and (min-width: 551px) {
  .mobile-nav {
    width: 400px;
    margin-top: 70px;
    height: calc(100vh - 70px);
  }
  .info {
    padding: 10px 30px;
  }
  .bets,
  .asset {
    font-size: 16px;
  }
  .wallet-connect {
    padding: 10px 30px;
  }
  .header-mobile-left > img {
    width: 40px;
    height: 40px;
  }
  .header-mobile-title {
    gap: 10px;
  }
  .header-mobile-title > span {
    font-size: 26px;
  }
  .header-mobile-title > img {
    width: 50px;
    height: 50px;
  }
  .profile-mobile-img {
    width: 40px;
    height: 40px;
  }
}
@media screen and (min-width: 961px) {
  header {
    padding: 10px 20px;
    background: #00000030;
  }
  .header-mobile-fixed {
    display: none;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    background: transparent;
    font-weight: 800;
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
  }
  .navbar-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-size: 15px;
  }
  .navbar > div > a {
    color: #ffffff;
    text-decoration: none;
  }
  .navbar > div > p {
    color: #ffffff;
    text-decoration: none;
  }
  .intro-nav {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50px;
    left: 40%;
    background: #00000030;
  }
  .intro-nav > a {
    color: #fff;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 15px;
  }
  .intro-nav > a:hover {
    background: #000;
  }
  .profile-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile-img > img {
    width: 100%;
    height: 100%;
    display: none; /* remove when img added */
  }
}
@media screen and (min-width: 1051px) {
  .intro-nav {
    left: 45%;
  }
}
@media screen and (min-width: 1151px) {
  .intro-nav {
    left: 50%;
  }
}
@media screen and (min-width: 1251px) {
  .intro-nav {
    left: 54%;
  }
}
@media screen and (min-width: 1351px) {
  .intro-nav {
    left: 57%;
  }
}
@media screen and (min-width: 1451px) {
  .intro-nav {
    left: 60%;
  }
}
@media screen and (min-width: 1551px) {
  .intro-nav {
    left: 63%;
  }
}
</style>
