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
      <div class="learn-more-container">
        <RouterLink to="/verification">
          <span> Learn more </span>
          <img src="@/assets/arrowright.svg" alt="" />
        </RouterLink>
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
.verifiable-header-shadow-2 {
  width: 100%;
  font-family: 'Zen Tokyo Zoo', sans-serif;
  font-size: 128px;
  font-weight: 400;
  margin: 0 auto;
  position: absolute;
}
.verifiable-header {
  top: 0;
  left: calc(50% - 440px);
  width: 800px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.88) 0%, rgba(111, 0, 253, 0.93) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-header-shadow-1 {
  top: 80px;
  left: calc(50% - 380px);
  width: 800px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.36) 0%, rgba(111, 0, 253, 0.4) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-header-shadow-2 {
  top: 160px;
  left: calc(50% - 320px);
  width: 800px;
  background: #ffffff;
  background: linear-gradient(90deg, rgba(0, 111, 146, 0.15) 0%, rgba(111, 0, 253, 0.1725) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.verifiable-articles {
  margin: 320px auto 0;
  width: 95%;
  display: flex;
  justify-content: space-between;
}
.verifiable-article {
  display: flex;
  flex-direction: column;
  width: 33%;
}
.verifiable-article-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.article-header-img {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.verifiable-article-header > img {
  width: 100%;
  height: 100%;
}
.verifiable-article-header > h3 {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}
.verifiable-article-info {
  color: #bbbbbb;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 400;
}
.learn-more-container {
  display: flex;
  justify-content: end;
  margin-top: 50px;
  margin-right: 10px;
}
.learn-more-container > a {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  color: #ffffff;
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
}
.learn-more-container > a > img {
  width: 40px;
  height: 40px;
  padding-top: 5px;
}
@media screen and (min-width: 1101px) {
  .verifiable-article {
    width: 32%;
  }
  .verifiable-article-header {
    font-size: 20px;
  }
  .verifiable-article-info {
    font-size: 19px;
  }
  .learn-more-container {
    margin-top: 30px;
  }
  .learn-more-container > a {
    font-size: 20px;
  }
}
</style>
