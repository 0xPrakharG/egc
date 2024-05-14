<script setup>
import { RouterLink } from 'vue-router'
import VerifiableBg from './VerifiableBg.vue'
</script>
<template>
  <div style="position: relative; overflow: hidden">
    <VerifiableBg />
    <div class="verifiable-content">
      <div class="header">
        <h1 class="verifiable-header">VERIFIABLE</h1>
        <h1 class="verifiable-header-shadow-1">VERIFIABLE</h1>
        <h1 class="verifiable-header-shadow-2">VERIFIABLE</h1>
        <h1 class="verifiable-header-shadow-3">VERIFIABLE</h1>
      </div>
      <div class="learn-more-container">
        <RouterLink href="/verification">
          <p>Learn more</p>
          <img src="@/assets/arrowright.svg" alt="" />
        </RouterLink>
      </div>
      <div class="verifiable-articles">
        <div class="verifiable-article">
          <div class="verifiable-article-header">
            <div class="article-header-img">
              <img src="@/assets/gamefairness.png" alt="" />
            </div>
            <h3>Game Fairness</h3>
          </div>
          <p class="verifiable-article-info">
            Through our advanced technology, the fairness of every game is verifiable.
          </p>
        </div>
        <div class="verifiable-article">
          <div class="verifiable-article-header">
            <div class="article-header-img">
              <img src="@/assets/technicalassurance.svg" alt="" />
            </div>
            <h3>Technical Assurance</h3>
          </div>
          <p class="verifiable-article-info">
            Our system is meticulously designed to verify the outcome of every round.
          </p>
        </div>
        <div class="verifiable-article">
          <div class="verifiable-article-header">
            <div class="article-header-img">
              <img src="@/assets/securitygaurantee.svg" alt="" />
            </div>
            <h3>Security Gaurantee</h3>
          </div>
          <p class="verifiable-article-info">
            Our technology ensures the fairness and transparency of game results. Your safety is our
            top priority.
          </p>
        </div>
      </div>
      <div class="arrow">
        <img src="@/assets/scroll-arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.verifiable-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  margin: 70px auto 0px;
}
.header {
  width: 90%;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.verifiable-header,
.verifiable-header-shadow-1,
.verifiable-header-shadow-2,
.verifiable-header-shadow-3 {
  width: 100%;
  font-family: 'Zen Tokyo Zoo', sans-serif;
  font-size: 35px;
  font-weight: 400;
  margin: 0 auto;
  position: absolute;
}
.verifiable-header {
  top: 0;
  left: calc(50% - 110px);
  width: 220px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.88) 0%, rgba(111, 0, 253, 0.93) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-header-shadow-1 {
  top: 22px;
  left: calc(50% - 95px);
  width: 220px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.704) 0%, rgba(111, 0, 253, 0.744) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-header-shadow-2 {
  top: 44px;
  left: calc(50% - 80px);
  width: 220px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.528) 0%, rgba(111, 0, 253, 0.558) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-header-shadow-3 {
  top: 66px;
  left: calc(50% - 65px);
  width: 220px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.352) 0%, rgba(111, 0, 253, 0.372) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.learn-more-container {
  display: flex;
  justify-content: end;
  margin-top: 100px;
}
.learn-more-container > a {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  color: #ffffff;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
}
.learn-more-container > a > img {
  width: 40px;
  height: 40px;
  padding-top: 5px;
}
.verifiable-articles {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.verifiable-article {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.verifiable-articles .verifiable-article:nth-child(1) {
  align-items: flex-start;
  text-align: left;
}
.verifiable-articles > .verifiable-article:nth-child(2) {
  align-items: flex-end;
  text-align: right;
}
.verifiable-articles > .verifiable-article:nth-child(3) {
  align-items: flex-start;
  text-align: left;
}
.verifiable-article-header {
  display: flex;
  align-items: center;
}
.article-header-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
.article-header-img > img {
  width: 100%;
  height: 100%;
}
.verifiable-article-header > h3 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}
.verifiable-article-info {
  color: #bbbbbb;
  padding-left: 12px;
  font-size: 14px;
  font-weight: 400;
  width: 80%;
}
.arrow {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}
.arrow > img {
  height: 60px;
}
@media screen and (min-width: 551px) {
  .verifiable-header,
  .verifiable-header-shadow-1,
  .verifiable-header-shadow-2,
  .verifiable-header-shadow-3 {
    font-size: 50px;
  }
  .verifiable-header {
    top: 0;
    left: calc(50% - 155px);
    width: 310px;
  }
  .verifiable-header-shadow-1 {
    top: 30px;
    left: calc(50% - 135px);
    width: 310px;
  }
  .verifiable-header-shadow-2 {
    top: 60px;
    left: calc(50% - 115px);
    width: 310px;
  }
  .verifiable-header-shadow-3 {
    top: 90px;
    left: calc(50% - 95px);
    width: 310px;
  }
  .learn-more-container {
    margin-top: 140px;
  }
  .learn-more-container > a {
    font-size: 18px;
  }
  .verifiable-articles {
    gap: 6px;
  }
  .verifiable-article {
    width: 80%;
  }
  .verifiable-article-header > h3 {
    font-size: 20px;
  }
  .verifiable-article-info {
    font-size: 16px;
    width: 70%;
  }
}
</style>
