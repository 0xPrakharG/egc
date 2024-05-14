<script>
export default {
  name: 'RecordContainer',
  data() {
    return {
      selected: 1,
      selectedCard: 1
    }
  },
  methods: {
    border1() {
      this.selected = 1
    },
    border2() {
      this.selected = 2
    },
    border3() {
      this.selected = 3
    },
    border4() {
      this.selected = 4
    },
    select1() {
      this.selectedCard = 1
    },
    select2() {
      this.selectedCard = 2
    },
    select3() {
      this.selectedCard = 3
    }
  }
}
</script>
<template>
  <div class="profile-middle">
    <div class="container-header">
      <h4>Game Record</h4>
    </div>
    <div class="profile-middle-container">
      <div class="table-cards-container">
        <div class="table-cards">
          <div
            class="table-card"
            @click="select1"
            :style="selectedCard === 1 ? 'border-bottom: 4px solid #FF00F5;' : ''"
          >
            <img src="@/assets/table-card-1.png" alt="" />
            <h5>One Dollar Journey</h5>
            <p>Last played</p>
          </div>
          <div
            class="table-card"
            @click="select2"
            :style="selectedCard === 2 ? 'border-bottom: 4px solid #FF00F5;' : ''"
          >
            <img src="@/assets/table-card-2.png" alt="" />
            <h5>Rocket</h5>
            <p>Last played</p>
          </div>
          <div
            class="table-card"
            @click="select3"
            :style="selectedCard === 3 ? 'border-bottom: 4px solid #FF00F5;' : ''"
          >
            <img src="@/assets/table-card-3.png" alt="" />
            <h5>Mines</h5>
            <p>Last played</p>
          </div>
        </div>
        <span class="blt1"></span>
        <span class="blt2"></span>
      </div>
      <div class="table-container">
        <span class="bt1"></span>
        <span class="bt2"></span>
        <div class="table-header">
          <p @click="border1" :style="selected === 1 ? 'border-bottom: 3px solid #801AE5;' : ''">
            Game Introduction
          </p>
          <p @click="border2" :style="selected === 2 ? 'border-bottom: 3px solid #801AE5;' : ''">
            My Record
          </p>
          <p @click="border3" :style="selected === 3 ? 'border-bottom: 3px solid #801AE5;' : ''">
            Biggest Win
          </p>
          <p @click="border4" :style="selected === 4 ? 'border-bottom: 3px solid #801AE5;' : ''">
            The Luckiest Winner
          </p>
        </div>
        <div class="table-info">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
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
.profile-middle {
  width: 100%;
  margin: 0 auto;
  outline: none;
  border: none;
  background: none;
}
.container-header {
  padding: 10px 50px 5px 30px;
  width: 55%;
  background: linear-gradient(90deg, rgba(41, 33, 201, 0.62) 0%, #9566fa 116.77%);
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
}
.container-header > h4 {
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.24696002900600433px;
  text-align: left;
  color: #fff;
}
.profile-middle-container {
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.14) 0%, rgba(115, 115, 115, 0.26) 100%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(12.9px);
}
.table-cards-container {
  outline: none;
  border: none;
  position: relative;
  background: none;
}
.table-cards-container > span {
  position: absolute;
  background: linear-gradient(90deg, #073dfb 0%, #4d0495 100%);
  border-radius: 40px;
}
.blt1 {
  bottom: 0;
  right: 0;
  width: 4px;
  height: 55%;
}
.blt2 {
  bottom: 0;
  right: 0;
  width: 32%;
  height: 4px;
}
.table-cards {
  width: 100%;
  height: 160px;
  padding: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
.table-card {
  padding: 5px;
  background: #d9d9d942;
  border-radius: 5px;
  height: 145px;
  width: 115px;
}
.table-card > img {
  width: 105px;
}
.table-card > h5 {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.table-card > p {
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.table-card:hover {
  border-bottom: 4px solid #d12acb;
  scale: 1.05;
  box-shadow:
    0px 4px 4px 0px #00000040,
    5px 5px 20px 0px #801ae554,
    -5px 4px 20px 0px #7d00ff54;
}
.table-container {
  position: relative;
}
.table-container > span {
  position: absolute;
  z-index: 20;
  background: linear-gradient(90deg, #073dfb 0%, #4d0495 100%);
  border-radius: 40px;
}
.bt1 {
  top: 0;
  left: 0;
  width: 4px;
  height: 30%;
}
.bt2 {
  top: 0;
  left: 0;
  width: 35%;
  height: 4px;
}
.table-header {
  display: flex;
  justify-content: space-around;
  padding: 10px 10px 0;
  margin-top: 10px;
}
.table-header > p {
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.20999999344348907px;
  color: #ffffff;
  text-shadow: 0px 4px 10px #7d00ff;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  border-bottom: 3px solid #fff;
}
.table-info {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  padding: 0 10px;
}
.table-info > hr {
  border: none;
  border-top: 1px solid #ffffff5c;
}
.table-info > hr:nth-child(1) {
  border-top: 1px solid #ffffff;
}
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
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
@media screen and (min-width: 561px) {
  .container-header{
    width: 50%;
  }
  .table-cards {
    height: 180px;
    gap: 15px;
  }
  .table-card {
    padding: 5px;
    height: 165px;
    width: 135px;
  }
  .table-card > img {
    width: 125px;
  }
  .table-card > h5 {
    font-size: 11px;
  }
  .table-card > p {
    font-size: 10px;
  }
}
@media screen and (min-width: 651px){
  .table-header > p {
  font-size: 15px;
}
}
</style>
