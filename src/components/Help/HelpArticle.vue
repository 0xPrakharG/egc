<script>
export default {
  props: {
    title: String,
    date: String,
    info: String
  },
  data() {
    return {
      childMessage: false
    }
  },
  methods: {
    updateArticleShow() {
      this.$emit('update:parent', this.childMessage)
      location.reload()
    }
  }
}
</script>
<template>
  <div class="article-container">
    <div class="article-close-btn" v-on:click="updateArticleShow">
      <img src="@/assets/article-close.svg" alt="" />
    </div>
    <div class="article-content">
      <div class="article-header">
        <h1>{{ title }}</h1>
        <p>Edited by {{ date }}</p>
      </div>
      <p class="article-info">{{ info }}</p>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
}
.article-close-btn {
  display: flex;
  justify-content: end;
  cursor: pointer;
}
.article-close-btn > img {
  width: 37px;
}
.article-content {
  margin: 80px 50px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 85%;
  overflow-y: scroll;
}
.article-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.article-header > h1 {
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0.21px;
  line-height: 64px;
  color: #ffffff;
}
.article-header > p {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.21px;
  line-height: 21px;
  color: #ffffff40;
}
.article-info {
  width: 100%;
  display: flex;
  word-break: break-all;
  white-space: normal;
  line-height: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffffcc;
  text-align: justify;
}
</style>
