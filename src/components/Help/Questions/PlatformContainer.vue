<script>
import HelpArticle from '@/components/Help/HelpArticle.vue'
import platform from '@/platform.js'
import { reactive } from 'vue'

export default {
  name: 'PlatformContainer',
  props: ['show'],
  components: {
    HelpArticle
  },
  data() {
    return {
      childMessage: false,
      platform: false,
      governance: false,
      allocated: false,
      plans: false
    }
  },
  methods: {
    updateShow() {
      this.$emit('update:parent', this.childMessage)
    }
  },
  setup() {
    const data = reactive(platform)
    return { data }
  }
}
</script>

<template>
  <div v-if="show == true" class="platform-container">
    <div class="platform-header">
      <img src="@/assets/platform.svg" alt="" />
      <h2>Platform</h2>
    </div>
    <div class="platform-content">
      <div v-on:click="updateShow" @click="platform = true">What is the Platform for?</div>
      <div v-on:click="updateShow" @click="governance = true">
        What is the Governance Token of the Platform?
      </div>
      <div v-on:click="updateShow" @click="allocated = true">
        How is the Governance Token Allocated?
      </div>
      <div v-on:click="updateShow" @click="plans = true">
        What are the Future Plans of the Platform?
      </div>
    </div>
  </div>
  <div class="article" v-if="platform == true">
    <HelpArticle
      :title="data.platform.title"
      :date="data.platform.date"
      :info="data.platform.info"
      @update:parent="platform = $event"
    />
  </div>
  <div class="article" v-if="governance == true">
    <HelpArticle
      :title="data.governance.title"
      :date="data.governance.date"
      :info="data.governance.info"
      @update:parent="governance = $event"
    />
  </div>
  <div class="article" v-if="allocated == true">
    <HelpArticle
      :title="data.allocated.title"
      :date="data.allocated.date"
      :info="data.allocated.info"
      @update:parent="allocated = $event"
    />
  </div>
  <div class="article" v-if="plans == true">
    <HelpArticle
      :title="data.plans.title"
      :date="data.plans.date"
      :info="data.plans.info"
      @update:parent="plans = $event"
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
.platform-container {
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
.platform-header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}
.platform-header > img {
  width: 32px;
}
.platform-header > h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 800;
}
.platform-content {
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
