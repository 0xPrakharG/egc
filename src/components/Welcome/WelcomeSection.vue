<template>
  <div style="position: relative; overflow: hidden">
    <div class="welcome-container">
      <img src="@/assets/welcomestars.png" alt="" class="welcome-stars" />
      <img src="@/assets/planets.png" alt="" class="planets" />
      <div class="welcome-articles">
        <div class="welcome-article-1">
          <div class="welcome-article-inner">
            <div class="welcome-article-front">
              <h3 class="welcome-article-header">No KYC Login</h3>
              <div class="more-detail-btn">
                <a>
                  <img src="@/assets/arrowdown.svg" alt="" />
                  <p>More Detail</p>
                </a>
              </div>
            </div>
            <div class="welcome-article-back">
              <p class="welcome-article-info">
                Your Privacy, Our Commitment - Enjoy an anonymous gaming experience without the need
                for KYC
              </p>
            </div>
          </div>
        </div>
        <div class="welcome-article-2">
          <div class="welcome-article-inner">
            <div class="welcome-article-front">
              <h3 class="welcome-article-header">Security & Privacy</h3>
              <div class="more-detail-btn">
                <a>
                  <img src="@/assets/arrowdown.svg" alt="" />
                  <p>More Detail</p>
                </a>
              </div>
            </div>
            <div class="welcome-article-back">
              <p class="welcome-article-info">
                Safety is our top priority - Utilizing advanced technology to protect your privacy
                and assets
              </p>
            </div>
          </div>
        </div>
        <div class="welcome-article-3">
          <div class="welcome-article-inner">
            <div class="welcome-article-front">
              <h3 class="welcome-article-header">User Guide</h3>
              <div class="more-detail-btn">
                <a>
                  <img src="@/assets/arrowdown.svg" alt="" />
                  <p>More Detail</p>
                </a>
              </div>
            </div>
            <div class="welcome-article-back">
              <p class="welcome-article-info">
                Easy to get started, enjoy gaming - We provide comprehensive guidance and support
                for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="welcome">
        <p>Welcome</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  position: sticky;
  background: linear-gradient(0.04deg, #31035f 15.52%, #121115 50.49%, #141217 90.97%);
  overflow: hidden;
}
.welcome-stars {
  width: 100%;
  height: 100%;
}
.planets {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  animation: rotate 30s linear infinite;
}
@keyframes rotate {
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(72deg);
  }
  30% {
    transform: rotate(108deg);
  }
  40% {
    transform: rotate(144deg);
  }
  50% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(216deg);
  }
  70% {
    transform: rotate(252deg);
  }
  80% {
    transform: rotate(288deg);
  }
  90% {
    transform: rotate(324deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.welcome-articles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 140px;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
}
.welcome-article-1,
.welcome-article-2,
.welcome-article-3 {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.welcome-article-1:hover .welcome-article-inner,
.welcome-article-2:hover .welcome-article-inner,
.welcome-article-3:hover .welcome-article-inner {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.welcome-article-1,
.welcome-article-2,
.welcome-article-3,
.welcome-article-front,
.welcome-article-back {
  width: 280px;
  height: 280px;
  border-radius: 50%;
}
.welcome-article-inner {
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.welcome-article-front,
.welcome-article-back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.welcome-article-1 .welcome-article-front {
  background: linear-gradient(109.84deg, #1b0d24 20.96%, #07005b 79.04%);
  box-shadow: 0px 4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-2 .welcome-article-front {
  background: linear-gradient(109.84deg, #0d240d 20.96%, #490000 79.04%);
  box-shadow: 0px -4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-3 .welcome-article-front {
  background: linear-gradient(109.84deg, #530045 20.96%, #04002d 79.04%);
  box-shadow: 0px 4px 4px 0px #ffffff;
  z-index: 2;
}
.welcome-article-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.welcome-article-front > h3 {
  margin-top: 100px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5px;
}
.more-detail-btn {
  margin-top: 50px;
}
.more-detail-btn > a {
  color: #999999;
  font-size: 15px;
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.welcome-article-back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome-article-info {
  width: 85%;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  background: #ffffff;
  background: linear-gradient(0deg, #592d92 0%, #1a003d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.welcome {
  position: absolute;
  color: #ffffff8a;
  bottom: 0;
  width: 80%;
  margin-bottom: 100px;
  margin-left: 140px;
  font-size: 100px;
  font-weight: 200;
  line-height: 21px;
  letter-spacing: 5px;
  text-align: left;
}
@media screen and (min-width: 1101px) {
  .welcome {
    margin-bottom: 140px;
    font-size: 128px;
  }
}
</style>
