<script>
import HelpArticle from '@/components/Help/HelpArticle.vue'
import stake from '@/stake.js'
import { reactive } from 'vue'

export default {
  name: 'StakeContainer',
  props: ['show'],
  components: {
    HelpArticle
  },
  data() {
    return {
      childMessage: false,
      stake: false,
      deposit: false,
      purchase: false,
      benefits: false
    }
  },
  methods: {
    updateShow() {
      this.$emit('update:parent', this.childMessage)
    }
  },
  setup() {
    const data = reactive(stake)
    return { data }
  }
}
</script>

<template>
  <div v-if="show == true" class="stake-container">
    <div class="stake-header">
      <img src="@/assets/stake.svg" alt="" />
      <h2>Stake</h2>
    </div>
    <div class="stake-content">
      <div v-on:click="updateShow" @click="stake = true">How to stake?</div>
      <div v-on:click="updateShow" @click="deposit = true">How to Deposit EGC?</div>
      <div v-on:click="updateShow" @click="purchase = true">How to Purchase EGC?</div>
      <div v-on:click="updateShow" @click="benefits = true">What are the Benefits of Staking?</div>
    </div>
  </div>
  <div class="article" v-if="stake == true">
    <HelpArticle
      :title="data.stake.title"
      :date="data.stake.date"
      :info="data.stake.info"
      @update:parent="stake = $event"
    />
  </div>
  <div class="article" v-if="deposit == true">
    <HelpArticle
      :title="data.deposit.title"
      :date="data.deposit.date"
      :info="data.deposit.info"
      @update:parent="deposit = $event"
    />
  </div>
  <div class="article" v-if="purchase == true">
    <HelpArticle
      :title="data.purchase.title"
      :date="data.purchase.date"
      :info="data.purchase.info"
      @update:parent="purchase = $event"
    />
  </div>
  <div class="article" v-if="benefits == true">
    <HelpArticle
      :title="data.benefits.title"
      :date="data.benefits.date"
      :info="data.benefits.info"
      @update:parent="benefits = $event"
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
.stake-container {
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
.stake-header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}
.stake-header > img {
  width: 32px;
}
.stake-header > h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 800;
}
.stake-content {
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
