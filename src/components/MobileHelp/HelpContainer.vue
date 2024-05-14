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
  <div>
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
        <div class="first-row">
          <GameContainer @update:parent="show = $event" :show="show" />
          <WalletContainer @update:parent="show = $event" :show="show" />
        </div>
        <div class="second-row">
          <StakeContainer @update:parent="show = $event" :show="show" />
          <PlatformContainer @update:parent="show = $event" :show="show" />
        </div>
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
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.help-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.help-image > img {
  width: 100%;
  height: 100%;
}
.help-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: -20px auto;
}
.help-info h4 {
  font-family: 'Inknut Antiqua', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: #fff;
}
.help-info p {
  margin-top: -10px;
  color: #ffffffad;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.21px;
}
.help-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.discord,
.twitter,
.telegram {
  width: 116px;
  padding: 1px;
  margin-top: 10px;
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
  font-size: 14px;
  display: flex;
  background-image: linear-gradient(0deg, rgba(9, 9, 9, 0.764) 100%, rgba(0, 0, 0, 0.737) 100%);
  filter: opacity(80%);
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
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
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-link > img {
  width: 100%;
  height: 100%;
}
.faq-questions-container {
  width: 95%;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
}
.first-row {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.second-row {
  display: flex;
  justify-content: center;
  gap: 10px;
}
@media screen and (min-width: 601px) {
  .faq-questions-container{
    width: 75%;
  }
}
@media screen and (min-width: 801px) {
  .faq-questions-container{
    width: 55%;
  }
}
</style>
