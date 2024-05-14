<script>
import HelpArticle from '@/components/Help/HelpArticle.vue'
import game from '@/game.js'
import { reactive } from 'vue'

export default {
  name: 'GameContainer',
  props: ['show'],
  components: {
    HelpArticle
  },
  data() {
    return {
      childMessage: false,
      register: false,
      bet: false,
      crash: false,
      mines: false,
      fairness: false
    }
  },
  methods: {
    updateShow() {
      this.$emit('update:parent', this.childMessage)
    }
  },
  setup() {
    const data = reactive(game)
    return { data }
  }
}
</script>

<template>
  <div v-if="show == true" class="game-container">
    <div class="game-header">
      <img src="@/assets/game.svg" alt="" />
      <h2>Game</h2>
    </div>
    <div class="game-content">
      <a v-on:click="updateShow" @click="register = true">How to register?</a>
      <a v-on:click="updateShow" @click="bet = true">How to Play One-Dollar Bet?</a>
      <a v-on:click="updateShow" @click="crash = true">How to Play Crash?</a>
      <a v-on:click="updateShow" @click="mines = true">How to Play Mines?</a>
      <a v-on:click="updateShow" @click="fairness = true">What is Verifiable Fairness?</a>
    </div>
  </div>
  <div class="article" v-if="register == true">
    <HelpArticle
      :title="data.register.title"
      :date="data.register.date"
      :info="data.register.info"
      @update:parent="register = $event"
    />
  </div>
  <div class="article" v-if="bet == true">
    <HelpArticle
      :title="data.bet.title"
      :date="data.bet.date"
      :info="data.bet.info"
      @update:parent="bet = $event"
    />
  </div>
  <div class="article" v-if="crash == true">
    <HelpArticle
      :title="data.crash.title"
      :date="data.crash.date"
      :info="data.crash.info"
      @update:parent="crash = $event"
    />
  </div>
  <div class="article" v-if="mines == true">
    <HelpArticle
      :title="data.mines.title"
      :date="data.mines.date"
      :info="data.mines.info"
      @update:parent="mines = $event"
    />
  </div>
  <div class="article" v-if="fairness == true">
    <HelpArticle
      :title="data.fairness.title"
      :date="data.fairness.date"
      :info="data.fairness.info"
      @update:parent="fairness = $event"
    />
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
  height: 230px;
  background: linear-gradient(
    109.84deg,
    rgba(255, 255, 255, 0.2) 20.96%,
    rgba(204, 200, 255, 0.2) 79.04%
  );
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid #ffffff1a;
}
.game-header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}
.game-header > img {
  width: 32px;
}
.game-header > h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 800;
}
.game-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: self-start;
  text-decoration: underline;
  cursor: pointer;
  color: #dcdcdc;
  font-size: 14px;
  font-weight: 400;
}
.article {
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 30px;
  background: #ffffff5e;
  backdrop-filter: blur(12.9px);
  -webkit-backdrop-filter: blur(12.9px);
  display: flex;
  justify-content: start;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: end;
}
</style>
