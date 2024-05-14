<script setup>
import ProfileLeft from '@/components/MobileProfile/Sections/ProfileLeft.vue'
</script>

<template>
  <div class="profile-block">
    <div class="profile-container">
      <div class="user-info-container">
        <div class="user-profile-picture">
          <div class="profile-picture-circle">
            <img src="" alt="" />
          </div>
          <div class="profile-edit-circle">
            <img src="@/assets/profile-edit.svg" alt="" />
          </div>
        </div>
        <p>@Username</p>
      </div>
      <div>
        <ProfileLeft />
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
  </div>
</template>

<style scoped>
.profile-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.profile-container {
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.14) 0%, rgba(115, 115, 115, 0.26) 100%);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(12.9px);
  position: relative;
}
.user-info-container {
  padding-top: 45px;
}
.user-profile-picture {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%);
}
.profile-picture-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profile-picture-circle > img {
  width: 100%;
  height: 100%;
  display: none; /* remove this when image is added */
}
.profile-edit-circle {
  position: absolute;
  bottom: 0px;
  right: 2px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-edit-circle > img {
  width: 13px;
  height: 13px;
}
.user-info-container > p {
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 1.5px;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer {
  z-index: 200;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
</style>
