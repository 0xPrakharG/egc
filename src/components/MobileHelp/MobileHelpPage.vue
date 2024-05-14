<script setup>
import HelpBg from './HelpBg.vue'
import HelpContainer from './HelpContainer.vue'
</script>

<template>
  <div style="position: relative">
    <HelpBg />
    <HelpContainer />
    <footer>
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
footer {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  gap: 5px;
}
.footer-bottom {
  display: flex;
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
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-bottom > div:nth-child(2) > img {
  width: 100%;
  height: 100%;
}
</style>
