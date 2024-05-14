<script>
import GameContainer from './Questions/GameContainer.vue'
import WalletContainer from './Questions/WalletContainer.vue'
import StakeContainer from './Questions/StakeContainer.vue'
import PlatformContainer from './Questions/PlatformContainer.vue'

export default {
  name: 'HelpContainer',
  components: {
    GameContainer,
    WalletContainer,
    StakeContainer,
    PlatformContainer
  },
  data() {
    return {
      show: true
    }
  }
}
</script>
<template>
  <div style="position: relative">
    <div class="help-container">
      <div v-if="show == true">
        <div class="help-about">
          <div class="help-image">
            <img src="@/assets/help-elephant.png" alt="" />
          </div>
          <div class="help-info">
            <h4>Help Center</h4>
            <p>We answer all your questions.</p>
          </div>
          <div class="help-socials">
            <div class="discord">
              <a>
                <div class="social-link">
                  <img src="@/assets/discord.svg" alt="" />
                </div>
                <p>Discord</p>
              </a>
            </div>
            <div class="twitter">
              <a>
                <div class="social-link">
                  <img src="@/assets/twitter.svg" alt="" />
                </div>
                <p>Twitter</p>
              </a>
            </div>
            <div class="telegram">
              <a>
                <div class="social-link">
                  <img src="@/assets/telegram.svg" alt="" />
                </div>
                <p>Telegram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="faq-questions-container">
        <GameContainer @update:parent="show = $event" :show="show" />
        <WalletContainer @update:parent="show = $event" :show="show" />
        <StakeContainer @update:parent="show = $event" :show="show" />
        <PlatformContainer @update:parent="show = $event" :show="show" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.help-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  margin: 0 auto;
}
.help-about {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.help-image {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.help-image > img {
  width: 100%;
  height: 100%;
}
.help-info {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.help-info h4 {
  font-family: 'Inknut Antiqua', sans-serif;
  font-weight: 800;
  font-size: 25px;
  color: #fff;
}
.help-info p {
  margin-top: -13px;
  color: #ffffffad;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.21px;
}
.help-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.discord,
.twitter,
.telegram {
  width: 180px;
  padding: 1px;
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(90deg, rgba(219, 0, 255, 0.36) 0%, rgba(65, 156, 240, 0.36) 100%);
}
.discord > a,
.twitter > a,
.telegram > a {
  text-decoration: underline;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 20px;
  display: flex;
  background-image: linear-gradient(0deg, rgba(9, 9, 9, 0.764) 100%, rgba(0, 0, 0, 0.737) 100%);
  filter: opacity(80%);
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  background-clip: padding-box;
  border-radius: 50px;
}
.discord {
  color: #af5fff;
}
.twitter {
  color: #419cf0;
}
.telegram {
  color: #a8e5ff;
}
.social-link {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-link > img {
  width: 100%;
  height: 100%;
}
.faq-questions-container {
  width: 90%;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow: hidden;
}
</style>
