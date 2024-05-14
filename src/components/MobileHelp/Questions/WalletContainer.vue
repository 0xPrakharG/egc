<script>
import HelpArticle from '@/components/MobileHelp/HelpArticle.vue'
import wallet from '@/wallet.js'
import { reactive } from 'vue'

export default {
  name: 'WalletContainer',
  props: ['show'],
  components: {
    HelpArticle
  },
  data() {
    return {
      childMessage: false,
      connect: false,
      chain: false,
      recharge: false,
      withdraw: false
    }
  },
  methods: {
    updateShow() {
      this.$emit('update:parent', this.childMessage)
    }
  },
  setup() {
    const data = reactive(wallet)
    return { data }
  }
}
</script>

<template>
  <div v-if="show == true" class="wallet-container">
    <div class="wallet-header">
      <img src="@/assets/wallet.svg" alt="" />
      <h2>Wallet</h2>
    </div>
    <div class="wallet-content">
      <a v-on:click="updateShow" @click="connect = true">How to Connect Wallet?</a>
      <a v-on:click="updateShow" @click="chain = true">How to Switch to Polygon Chain?</a>
      <a v-on:click="updateShow" @click="recharge = true">How to Recharge?</a>
      <a v-on:click="updateShow" @click="withdraw = true">How to Withdraw?</a>
    </div>
  </div>
  <div class="article" v-if="connect == true">
    <HelpArticle
      :title="data.connect.title"
      :date="data.connect.date"
      :info="data.connect.info"
      @update:parent="connect = $event"
    />
  </div>
  <div class="article" v-if="chain == true">
    <HelpArticle
      :title="data.chain.title"
      :date="data.chain.date"
      :info="data.chain.info"
      @update:parent="chain = $event"
    />
  </div>
  <div class="article" v-if="recharge == true">
    <HelpArticle
      :title="data.recharge.title"
      :date="data.recharge.date"
      :info="data.recharge.info"
      @update:parent="recharge = $event"
    />
  </div>
  <div class="article" v-if="withdraw == true">
    <HelpArticle
      :title="data.withdraw.title"
      :date="data.withdraw.date"
      :info="data.withdraw.info"
      @update:parent="withdraw = $event"
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
.wallet-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  width: 98%;
  height: 160px;
  background: linear-gradient(
    109.84deg,
    rgba(255, 255, 255, 0.2) 20.96%,
    rgba(204, 200, 255, 0.2) 79.04%
  );
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid #ffffff1a;
}
.wallet-header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.wallet-header > img {
  width: 20px;
}
.wallet-header > h2 {
  color: #fff;
  font-size: 20px;
  font-weight: 800;
}
.wallet-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: self-start;
  text-decoration: underline;
  cursor: pointer;
  color: #dcdcdc;
  font-size: 11px;
  font-weight: 400;
}
.article {
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100vh - 80px);
  margin-top: 60px;
  background: #ffffff5e;
  backdrop-filter: blur(12.9px);
  -webkit-backdrop-filter: blur(12.9px);
  display: flex;
  justify-content: start;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  align-items: end;
  overflow: hidden;
}
</style>
