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
    <div class="article-close-btn" @click="updateArticleShow">
      <img src="@/assets/article-back.svg" alt="" />
    </div>
    <div class="article-content">
      <div class="article-header">
        <h1>{{ title }}</h1>
        <p>Edited by {{ date }}</p>
      </div>
      <p class="article-info">{{ info }}</p>
    </div>
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
.article-container {
  width: 100%;
  height: 100%;
  padding: 15px 15px 65px;
  margin-bottom: 0;
  overflow: hidden;
}
.article-close-btn {
  display: flex;
  justify-content: start;
  cursor: pointer;
}
.article-close-btn > img {
  width: 25px;
}
.article-content {
  margin: 30px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 85%;
  overflow-y: scroll;
}
.article-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.article-header > h1 {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.21px;
  line-height: 30px;
  color: #ffffff;
}
.article-header > p {
  font-size: 15px;
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
  line-height: 17px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffffcc;
  text-align: justify;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-right: 30px;
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
