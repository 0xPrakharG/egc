<script>
export default {
  name: 'ProfileLeft',
  data() {
    return {
      currentDiv: 1,
      eyeOpen: true
    }
  },
  methods: {
    showDiv2() {
      this.currentDiv = 2
    },
    showDiv3() {
      this.currentDiv = 3
    },
    showDiv4() {
      this.currentDiv = 4
    },
    showDiv5() {
      this.currentDiv = 5
    }
  }
}
</script>
<template>
  <div class="profile-left">
    <div class="profile-balance">
      <div class="balance-header">
        <img src="@/assets/balance-wallet.svg" alt="" />
        <h4>Total Balance</h4>
      </div>
      <div class="balance-info">
        <p>
          $ <span v-if="eyeOpen" @click="eyeOpen = !eyeOpen">200,00</span
          ><span v-if="!eyeOpen" @click="eyeOpen = !eyeOpen">***,**</span> USD
        </p>
        <div class="eye">
          <div>
            <img src="@/assets/eye.svg" alt="" v-if="eyeOpen" @click="eyeOpen = !eyeOpen" />
            <img src="@/assets/eye-closed.svg" alt="" v-if="!eyeOpen" @click="eyeOpen = !eyeOpen" />
          </div>
        </div>
      </div>
      <div class="balance-buttons">
        <div class="balance-icon-stroke">
          <div
            class="balance-btn-bg-stroke"
            @click="showDiv2"
            :style="currentDiv === 2 ? 'background: #801AE5;' : ''"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 13.9231V28.2308C33 29.4957 32.4975 30.7087 31.6031 31.6031C30.7087 32.4975 29.4956 33 28.2308 33H6.76923C5.50435 33 4.29128 32.4975 3.39688 31.6031C2.50247 30.7087 2 29.4957 2 28.2308V13.9231C2 12.6582 2.50247 11.4451 3.39688 10.5507C4.29128 9.65634 5.50435 9.15387 6.76923 9.15387H21.1962C21.4326 10.323 22.0143 11.3942 22.8661 12.2292C23.7179 13.0642 24.8005 13.6245 25.9741 13.8376C27.1476 14.0508 28.3582 13.907 29.4491 13.4248C30.5401 12.9427 31.4614 12.1444 32.0938 11.1331C32.6815 11.9448 32.9986 12.921 33 13.9231Z"
                stroke="#DBDBDB"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                :style="currentDiv === 2 ? 'stroke: #fff' : ''"
              />
              <path
                d="M27.0379 5.57692V10.3462M29.4225 7.96154H24.6532M24.6532 17.5H32.9994V24.6538H24.6532C23.7046 24.6538 22.7948 24.277 22.124 23.6062C21.4532 22.9354 21.0763 22.0256 21.0763 21.0769C21.0763 20.1283 21.4532 19.2185 22.124 18.5477C22.7948 17.8768 23.7046 17.5 24.6532 17.5ZM32.9994 7.96154C33.0009 9.43994 32.453 10.8662 31.4621 11.9633C30.4711 13.0605 29.1079 13.7503 27.637 13.8989C26.1661 14.0475 24.6924 13.6442 23.5021 12.7674C22.3118 11.8905 21.4897 10.6027 21.1955 9.15384C21.1134 8.7618 21.0734 8.36209 21.0763 7.96154C21.0763 6.38044 21.7044 4.8641 22.8224 3.74609C23.9404 2.62809 25.4568 2 27.0379 2C28.619 2 30.1353 2.62809 31.2533 3.74609C32.3713 4.8641 32.9994 6.38044 32.9994 7.96154Z"
                stroke="#DBDBDB"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                :style="currentDiv === 2 ? 'stroke: #fff' : ''"
              />
            </svg>
          </div>
          <p :style="currentDiv === 2 ? 'text-decoration: underline;' : ''">Deposit</p>
        </div>
        <div class="balance-icon-fill">
          <div
            class="balance-btn-bg-fill"
            @click="showDiv3"
            :style="currentDiv === 3 ? 'background: #801AE5;' : ''"
          >
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.75 0H5.25C2.35497 0 0 2.35497 0 5.25V7C0 9.89503 2.35497 12.25 5.25 12.25V28C5.25 30.895 7.60498 33.25 10.5 33.25H24.5C27.395 33.25 29.75 30.895 29.75 28V12.25C32.645 12.25 35 9.89503 35 7V5.25C35 2.35497 32.645 0 29.75 0ZM26.25 10.5V28C26.25 28.9648 25.4657 29.75 24.5 29.75H10.5C9.53435 29.75 8.75 28.9648 8.75 28V10.5V8.75H26.25V10.5ZM31.5 7C31.5 7.96478 30.7157 8.75 29.75 8.75V7C29.75 6.03365 28.9672 5.25 28 5.25H7C6.03277 5.25 5.25 6.03365 5.25 7V8.75C4.28435 8.75 3.5 7.96478 3.5 7V5.25C3.5 4.28522 4.28435 3.5 5.25 3.5H29.75C30.7157 3.5 31.5 4.28522 31.5 5.25V7Z"
                fill="#DBDBDB"
                :style="currentDiv === 3 ? 'fill: #fff;' : ''"
              />
              <path
                d="M18.6672 22.75H14C13.0328 22.75 12.25 23.5337 12.25 24.5C12.25 25.4663 13.0328 26.25 14 26.25H15.75C15.75 27.2164 16.5328 28 17.5 28C18.4672 28 19.25 27.2164 19.25 26.25V26.1868C21.2235 25.8806 22.75 24.0735 22.75 21.875C22.75 19.4628 20.9179 17.5 18.6672 17.5H16.3328C16.0577 17.5 15.75 17.1257 15.75 16.625C15.75 16.1243 16.0577 15.75 16.3328 15.75H21C21.9672 15.75 22.75 14.9664 22.75 14C22.75 13.0336 21.9672 12.25 21 12.25H19.25C19.25 11.2836 18.4672 10.5 17.5 10.5C16.5328 10.5 15.75 11.2836 15.75 12.25V12.3132C13.7765 12.6194 12.25 14.4265 12.25 16.625C12.25 19.0372 14.0821 21 16.3328 21H18.6672C18.9423 21 19.25 21.3743 19.25 21.875C19.25 22.3757 18.9423 22.75 18.6672 22.75Z"
                fill="#DBDBDB"
                :style="currentDiv === 3 ? 'fill: #fff;' : ''"
              />
            </svg>
          </div>
          <p :style="currentDiv === 3 ? 'text-decoration: underline;' : ''">Withdrawl</p>
        </div>
        <div class="balance-icon-fill">
          <div
            class="balance-btn-bg-fill"
            @click="showDiv4"
            :style="currentDiv === 4 ? 'background: #801AE5;' : ''"
          >
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6426 18.3992H4.75659C1.24474 18.3992 0 19.6327 0 23.119V29.6787C0 33.1585 1.24474 34.3921 4.75659 34.3921H13.6426C17.1624 34.3921 18.3992 33.1585 18.3992 29.6787V23.119C18.3992 19.6327 17.1544 18.3992 13.6426 18.3992ZM15.9993 29.6787C15.9993 31.8194 15.8233 31.9922 13.6426 31.9922H4.75659C2.57589 31.9922 2.39989 31.8194 2.39989 29.6787V26.498H15.9993V29.6787ZM15.9993 24.0917H2.39989V23.119C2.39989 20.9767 2.57589 20.8039 4.75659 20.8039H13.6426C15.8233 20.8039 15.9993 20.9767 15.9993 23.119V24.0917ZM34.3985 21.999C34.3947 25.2864 33.0871 28.438 30.7625 30.7626C28.438 33.0871 25.2864 34.3947 21.999 34.3985C21.7867 34.3982 21.5783 34.3418 21.3949 34.2348C21.2115 34.1278 21.0597 33.9742 20.955 33.7895C20.8503 33.6048 20.7964 33.3957 20.7988 33.1834C20.8012 32.9711 20.8598 32.7632 20.9687 32.581L22.6486 29.7811C22.8124 29.508 23.0779 29.3112 23.3868 29.234C23.6957 29.1567 24.0227 29.2053 24.2957 29.3691C24.5688 29.5329 24.7656 29.7984 24.8428 30.1073C24.9201 30.4162 24.8715 30.7432 24.7077 31.0162L24.2757 31.7378C26.4714 31.2209 28.4283 29.9782 29.8299 28.2108C31.2314 26.4434 31.9956 24.2547 31.9986 21.999C31.9986 21.6808 32.125 21.3756 32.35 21.1505C32.5751 20.9255 32.8803 20.7991 33.1985 20.7991C33.5168 20.7991 33.822 20.9255 34.047 21.1505C34.272 21.3756 34.3985 21.6808 34.3985 21.999ZM0 12.3995C0.00381095 9.11208 1.3114 5.96045 3.63592 3.63593C5.96044 1.3114 9.11208 0.00381453 12.3994 3.57381e-06C12.6117 0.000231617 12.8202 0.0567057 13.0036 0.163677C13.187 0.270649 13.3387 0.424299 13.4434 0.608986C13.5481 0.793674 13.602 1.0028 13.5996 1.21509C13.5972 1.42738 13.5386 1.63524 13.4298 1.81752L11.7499 4.6174C11.5861 4.89045 11.3205 5.08726 11.0116 5.16452C10.7027 5.24178 10.3758 5.19317 10.1027 5.02938C9.82969 4.86559 9.63289 4.60004 9.55563 4.29114C9.47837 3.98224 9.52698 3.65531 9.69077 3.38225L10.1227 2.66069C7.9271 3.17759 5.97013 4.42032 4.56858 6.18772C3.16702 7.95512 2.40291 10.1438 2.39989 12.3995C2.39989 12.7177 2.27347 13.0229 2.04844 13.2479C1.8234 13.473 1.51819 13.5994 1.19995 13.5994C0.881701 13.5994 0.57649 13.473 0.351456 13.2479C0.126423 13.0229 0 12.7177 0 12.3995ZM27.5988 16.7993C29.2601 16.7996 30.8843 16.3072 32.2658 15.3844C33.6473 14.4617 34.7242 13.1499 35.3602 11.6151C35.9961 10.0803 36.1627 8.3914 35.8388 6.76193C35.5149 5.13245 34.715 3.63563 33.5404 2.46076C32.3657 1.28589 30.8691 0.485749 29.2396 0.161517C27.6102 -0.162714 25.9213 0.0035333 24.3863 0.639234C22.8514 1.27494 21.5395 2.35154 20.6164 3.73288C19.6934 5.11423 19.2007 6.73827 19.2007 8.39963C19.2033 10.6263 20.0888 12.7611 21.6632 14.3357C23.2375 15.9103 25.3721 16.7963 27.5988 16.7993ZM27.5988 2.3999C28.7855 2.39958 29.9456 2.75119 30.9325 3.41026C31.9193 4.06932 32.6886 5.00624 33.1429 6.10252C33.5973 7.1988 33.7163 8.4052 33.485 9.56914C33.2537 10.7331 32.6824 11.8023 31.8434 12.6415C31.0044 13.4808 29.9353 14.0523 28.7714 14.284C27.6076 14.5156 26.4011 14.3969 25.3047 13.9428C24.2083 13.4888 23.2712 12.7198 22.6119 11.7331C21.9526 10.7464 21.6006 9.58633 21.6006 8.39963C21.6028 6.80933 22.2353 5.28474 23.3597 4.16008C24.4841 3.03542 26.0085 2.40244 27.5988 2.3999Z"
                fill="#DBDBDB"
                :style="currentDiv === 4 ? 'fill: #fff;' : ''"
              />
            </svg>
          </div>
          <p :style="currentDiv === 4 ? 'text-decoration: underline;' : ''">Convert</p>
        </div>
        <div class="balance-icon-fill">
          <div
            class="balance-btn-bg-fill"
            @click="showDiv5"
            :style="currentDiv === 5 ? 'background: #801AE5;' : ''"
          >
            <svg
              width="37"
              height="34"
              viewBox="0 0 37 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4384 16.5983C36.4386 20.1052 35.3319 23.5227 33.276 26.3638C31.22 29.2049 28.3198 31.3245 24.9886 32.4207C21.6574 33.5169 18.0652 33.5337 14.7239 32.4687C11.3826 31.4037 8.46271 29.3113 6.38031 26.4895L8.44312 24.9649C10.3251 27.5208 13.0147 29.3667 16.0764 30.2035C19.1381 31.0404 22.3927 30.8193 25.3131 29.5759C28.2335 28.3326 30.6487 26.1399 32.1676 23.3529C33.6865 20.5658 34.2201 17.3477 33.6821 14.2196C33.1442 11.0915 31.566 8.23654 29.2033 6.11712C26.8405 3.99769 23.8315 2.73787 20.6635 2.54167C17.4956 2.34546 14.3541 3.22436 11.7479 5.03604C9.14169 6.84772 7.22331 9.4861 6.30344 12.5239L7.58469 11.6911L9.01969 13.818L5.17594 16.3805C4.94946 16.5332 4.6801 16.6095 4.40719 16.5983C4.19731 16.5986 3.99058 16.5474 3.80515 16.4491C3.61972 16.3508 3.46128 16.2084 3.34375 16.0345L0.78125 12.1908L2.90812 10.7558L3.77938 12.037C4.89102 8.18586 7.3542 4.86474 10.7169 2.68311C14.0796 0.501486 18.1163 -0.394297 22.0862 0.160146C26.0561 0.71459 29.6928 2.68207 32.3292 5.70153C34.9655 8.721 36.4245 12.5899 36.4384 16.5983ZM18.5009 7.62954V16.5983C18.5 16.7669 18.5323 16.9341 18.596 17.0902C18.6598 17.2463 18.7538 17.3883 18.8725 17.508L22.7163 21.3517L24.5356 19.5324L21.0634 16.073V7.62954H18.5009Z"
                fill="#DBDBDB"
                :style="currentDiv === 5 ? 'fill: #fff;' : ''"
              />
            </svg>
          </div>
          <p :style="currentDiv === 5 ? 'text-decoration: underline;' : ''">History</p>
        </div>
      </div>
    </div>
    <div class="profile-hello" v-show="currentDiv === 1">
      <h4>Hello,</h4>
      <p>
        Welcome to your personal profile,<br />
        what do you want to do today?
      </p>
    </div>
    <div class="profile-deposit" v-show="currentDiv === 2">
      <div class="profile-wallet-header">
        <p class="profile-wallet-header-text">Deposit Money</p>
        <div class="header-border"></div>
        <p class="profile-wallet-amount">$ <span>0</span> USD</p>
      </div>
      <div class="profile-wallet-info">
        <p class="profile-wallet-info-header">From</p>
        <div class="profile-wallet-info-input">
          <p>Default Wallet</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
        <p class="profile-wallet-info-header">To</p>
        <div class="profile-wallet-info-input">
          <p>***</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
      </div>
      <button class="profile-wallet-btn">Confirm</button>
    </div>
    <div class="profile-withdraw" v-show="currentDiv === 3">
      <div class="profile-wallet-header">
        <p class="profile-wallet-header-text">Withdrawl Money</p>
        <div class="header-border"></div>
        <p class="profile-wallet-amount">$ <span>0</span> USD</p>
      </div>
      <div class="profile-wallet-info">
        <p class="profile-wallet-info-header">From</p>
        <div class="profile-wallet-info-input">
          <p>Choose a method</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
        <p class="profile-wallet-info-header">To</p>
        <div class="profile-wallet-info-input">
          <p>***</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
      </div>
      <button class="profile-wallet-btn">Confirm</button>
    </div>
    <div class="profile-convert" v-show="currentDiv === 4">
      <div class="profile-wallet-header">
        <p class="profile-wallet-header-text">Convert</p>
        <div class="header-border"></div>
        <p class="profile-wallet-amount">$ <span>0</span> USD</p>
      </div>
      <div class="profile-wallet-info">
        <p class="profile-wallet-info-header">From</p>
        <div class="profile-wallet-info-input">
          <p>Choose a crypto type</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
        <p class="profile-wallet-info-header">To</p>
        <div class="profile-wallet-info-input">
          <p>Choose a crypto type</p>
          <img src="@/assets/chev-right.svg" alt="" />
        </div>
      </div>
      <button class="profile-wallet-btn">Confirm</button>
    </div>
    <div class="profile-history" v-show="currentDiv === 5">
      <div class="profile-wallet-header">
        <p class="profile-wallet-header-text">Transaction History</p>
        <div class="header-border"></div>
      </div>
      <div class="profile-wallet-history">
        <div class="profile-wallet-history-info">
          <p>Today</p>
          <img src="@/assets/chev-down.svg" alt="" />
        </div>
        <div class="history-info"></div>
        <a class="history-view-btn">View More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 25%;
}
.profile-balance {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
}
.balance-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.balance-header > h4 {
  font-size: 20px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 1px;
  color: #9543fc;
}
.balance-header > img {
  width: 30px;
  height: 30px;
}
.balance-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.balance-info > p {
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;
  color: #d9d9d9;
}
.balance-info > p > span {
  color: #ffffffde;
  font-weight: 700;
}
.eye {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.eye > div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.eye > div > img {
  width: 100%;
  height: 100%;
}
.balance-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.balance-icon-stroke,
.balance-icon-fill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.balance-btn-bg-stroke,
.balance-btn-bg-fill {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.04) 0%, rgba(115, 115, 115, 0.25) 100%);
}
.balance-btn-bg-stroke > svg,
.balance-btn-bg-fill > svg {
  width: 30px;
  height: 30px;
}
.balance-icon-stroke > p,
.balance-icon-fill > p {
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.20999999344348907px;
  color: #fff;
}
.balance-btn-bg-stroke:hover,
.balance-btn-bg-fill:hover {
  background: #ffffff94;
}
.balance-btn-bg-stroke:hover > svg > path {
  stroke: #801ae5;
}
.balance-btn-bg-fill:hover > svg > path {
  fill: #801ae5;
}
.profile-hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
}
.profile-hello > h4 {
  font-family: 'Palanquin Dark', sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.20999999344348907px;
  text-align: left;
  background: #ffffff;
  background: linear-gradient(92deg, #1a2ee6 1.59%, #7f00ff 26.16%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.profile-hello > p {
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.20999999344348907px;
  background: #ffffff;
  background: linear-gradient(180deg, #d9d9d9 0%, #737373 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.profile-deposit,
.profile-withdraw,
.profile-convert,
.profile-history {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.profile-wallet-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 95%;
}
.profile-wallet-header-text {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.20999999344348907px;
  color: #c3c3c3;
}
.header-border {
  width: 80%;
  align-self: flex-start;
  border: 0.3px solid rgba(255, 255, 255, 0.4);
}
.profile-wallet-amount {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #d9d9d9;
}
.profile-wallet-amount > span {
  color: #ffffffde;
  font-weight: 300;
}
.profile-wallet-info {
  width: 80%;
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.20999999344348907px;
  color: #d9d9d9;
}
.profile-wallet-info-header {
  color: #d9d9d9;
}
.profile-wallet-info-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 100%;
}
.profile-wallet-btn {
  background: linear-gradient(90deg, rgba(110, 98, 255, 0.24) 0%, rgba(106, 41, 170, 0.39) 100%);
  border: none;
  border-radius: 5px;
  width: 150px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: 0.20999999344348907px;
}
.profile-wallet-history {
  width: 85%;
  font-size: 16px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0.20999999344348907px;
  color: #d9d9d9;
  margin-top: 5px;
}
.profile-wallet-history-info {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
}
.history-info {
  width: 100%;
  height: 120px;
  background: #d9d9d921;
}
.history-view-btn {
  display: flex;
  justify-content: end;
  font-size: 11px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0.20999999344348907px;
  text-decoration: underline;
  padding-right: 10px;
}
@media screen and (min-width: 1201px) {
  .profile-balance {
    width: 85%;
  }
  .balance-header > h4 {
    font-size: 25px;
  }
  .balance-header > img {
    width: 35px;
    height: 35px;
  }
  .balance-info > p {
    font-size: 28px;
    line-height: 35px;
  }
  .eye {
    width: 28px;
    height: 28px;
  }
  .profile-hello {
    padding-left: 40px;
  }
  .profile-hello > h4 {
    font-size: 42px;
    line-height: 70px;
  }
  .profile-hello > p {
    font-size: 18px;
    line-height: 35px;
  }
  .profile-wallet-header {
    width: 90%;
  }
  .profile-wallet-amount {
    font-size: 27px;
  }
  .profile-wallet-info {
    font-size: 18px;
    line-height: 33px;
  }
  .history-view-btn {
    font-size: 12px;
    line-height: 30px;
  }
}
@media screen and (min-width: 1351px) {
  .profile-balance {
    width: 80%;
  }
  .balance-header > h4 {
    font-size: 30px;
  }
  .balance-header > img {
    width: 40px;
    height: 40px;
  }
  .balance-info > p {
    font-size: 32px;
    line-height: 40px;
  }
  .profile-hello {
    padding-left: 50px;
  }
  .profile-hello > h4 {
    font-size: 48px;
  }
  .profile-hello > p {
    font-size: 20px;
  }
  .profile-wallet-header {
    width: 80%;
  }
  .profile-wallet-amount {
    font-size: 30px;
  }
  .profile-wallet-info {
    font-size: 20px;
    line-height: 40px;
  }
}
</style>
