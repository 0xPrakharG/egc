<script>
export default {
  name: 'ProfileMid',
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
    <span class="bt1"></span>
    <span class="bt2"></span>
    <span class="bb3"></span>
    <span class="bb4"></span>
    <div class="profile-middle-container">
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
      </div>
      <div class="table-cards-container">
        <span class="blt1"></span>
        <span class="blt2"></span>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-middle {
  margin-top: 20px;
  width: 47%;
  outline: none;
  border: none;
  position: relative;
  background: none;
}
.profile-middle > span {
  position: absolute;
  z-index: 20;
  background: linear-gradient(90deg, #073dfb 0%, #4d0495 100%);
  border-radius: 40px;
}
.bt1 {
  top: 0;
  left: 0;
  width: 4px;
  height: 15%;
}
.bt2 {
  top: 0;
  left: 0;
  width: 35%;
  height: 4px;
}
.bb3 {
  bottom: 0;
  right: 0;
  width: 4px;
  height: 28%;
}
.bb4 {
  bottom: 0;
  right: 0;
  width: 32%;
  height: 4px;
}
.profile-middle-container {
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.14) 0%, rgba(115, 115, 115, 0.26) 100%);
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(12.9px);
  border: 0.1px solid rgba(255, 255, 255, 0.3);
}
.table-header {
  display: flex;
  justify-content: space-around;
  padding: 10px 10px 0;
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
  gap: 45px;
  padding: 0 10px;
}
.table-info > hr {
  border: none;
  border-top: 1px solid #ffffff5c;
}
.table-info > hr:nth-child(1) {
  border-top: 1px solid #ffffff;
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
  top: 0;
  left: 0;
  width: 4px;
  height: 55%;
}
.blt2 {
  top: 0;
  left: 0;
  width: 32%;
  height: 4px;
}
.table-cards {
  margin-top: 50px;
  width: 100%;
  height: 200px;
  background: #d9d9d93d;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}
.table-card {
  padding: 5px;
  background: #d9d9d942;
  border-radius: 5px;
  height: 170px;
  width: 130px;
}
.table-card > img {
  width: 120px;
}
.table-card > h5 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.table-card > p {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.table-card:hover {
  border-bottom: 4px solid #d12acb;
  scale: 1.1;
  box-shadow:
    0px 4px 4px 0px #00000040,
    5px 5px 20px 0px #801ae554,
    -5px 4px 20px 0px #7d00ff54;
}
@media screen and (min-width: 1051px) {
  .table-card {
    width: 140px;
    height: 180px;
  }
  .table-card > img {
    width: 130px;
  }
  .table-info {
    margin-top: 50px;
    gap: 50px;
  }
}
@media screen and (min-width: 1201px) {
  .profile-middle {
    margin-top: 10px;
  }
  .table-header {
    padding: 15px 15px 0;
  }
  .table-cards {
    margin-top: 45px;
    height: 220px;
    padding: 15px;
    gap: 15px;
  }
  .table-card {
    width: 160px;
    height: 195px;
  }
  .table-card > img {
    width: 150px;
  }
}
@media screen and (min-width: 1351px) {
  .profile-middle {
    margin-top: 0px;
  }
  .table-header {
    padding: 20px 20px 0;
  }
  .table-header > p {
    font-size: 15px;
  }
  .table-info {
    margin-top: 50px;
    gap: 50px;
    padding: 0 20px;
  }
  .table-cards {
    margin-top: 50px;
    height: 240px;
    padding: 15px;
    gap: 20px;
  }
  .table-card {
    width: 170px;
    height: 215px;
  }
  .table-card:hover {
    scale: 1.05;
  }
  .table-card > img {
    width: 160px;
  }
  .table-card > h5 {
    font-size: 15px;
  }
  .table-card > p {
    font-size: 12px;
  }
}
</style>
