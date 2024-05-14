<template>
  <div class="profile-right">
    <div class="profile-right-container">
      <h3 class="user-header">User Profile</h3>
      <div class="user-container">
        <div class="user-info-container">
          <div class="user-profile-picture">
            <div class="profile-picture-circle">
              <img src="" alt="" />
            </div>
            <div class="profile-edit-circle">
              <img src="@/assets/profile-edit.svg" alt="" />
            </div>
          </div>
          <p>@Username</p>
        </div>
        <hr />
        <div class="wallet-info-container">
          <div class="wallet-header">
            <p>Wallet Connected</p>
            <img src="@/assets/wallet-connect.svg" alt="" />
          </div>
          <div class="wallet-info">
            <div class="wallet-info-name">
              <img src="@/assets/coinbase-logo.svg" alt="" />
              <img src="@/assets/coinbase.svg" alt="" />
            </div>
            <img src="@/assets/wallet-option.svg" alt="" />
          </div>
        </div>
        <hr />
        <div class="user-options">
          <div class="user-option">
            <img src="@/assets/edit-profile.svg" alt="" />
            <p>Edit Profile</p>
          </div>
          <div class="user-option">
            <img src="@/assets/switch-acc.svg" alt="" />
            <p>Switch Account</p>
          </div>
          <div class="user-option">
            <img src="@/assets/logout.svg" alt="" />
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-right {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.profile-right-container {
  background: linear-gradient(180deg, rgba(217, 217, 217, 0.14) 0%, rgba(115, 115, 115, 0.26) 100%);
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0px #00000026;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(12.9px);
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.user-header {
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.5px;
  background: linear-gradient(90deg, rgba(91, 0, 186, 0.49) 0%, rgba(41, 0, 84, 0.49) 100%);
  color: #ffffff;
}
.user-container {
  padding: 5px;
}
.user-info-container {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 5px 10px 10px;
}
.user-profile-picture {
  position: relative;
}
.profile-picture-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profile-picture-circle > img {
  width: 100%;
  height: 100%;
  display: none; /* remove when img added */
}
.profile-edit-circle {
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-edit-circle > img {
  width: 10px;
  height: 10px;
}
.user-info-container > p {
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.5px;
  color: #fff;
}
.user-container > hr {
  border: none;
  border-top: 0.3px solid #fff;
}
.wallet-info-container {
  padding: 10px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.wallet-header {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
}
.wallet-header > p {
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 1.5px;
  color: #fff;
}
.wallet-header > img {
  width: 20px;
  height: 20px;
}
.wallet-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  background: #d9d9d938;
  border-radius: 5px;
  overflow: hidden;
}
.wallet-info-name {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.wallet-info-name > img:nth-child(1) {
  width: 20px;
  height: 20px;
}
.user-options {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
}
.user-option {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.user-option > p {
  font-size: 12px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 1.5px;
  color: #dedede;
  text-decoration: underline;
}
@media screen and (min-width: 1201px) {
  .user-header {
    padding: 10px 23px;
    font-size: 18px;
    line-height: 50px;
  }
  .user-container {
    padding: 10px;
  }
  .user-info-container {
    gap: 40px;
    padding: 10px 10px 20px;
  }
  .user-info-container > p {
    font-size: 18px;
    line-height: 50px;
  }
  .wallet-info-container {
    padding: 15px 20px 45px;
    gap: 10px;
  }
  .wallet-header {
    gap: 10px;
  }
  .wallet-header > p {
    font-size: 18px;
    line-height: 50px;
  }
  .wallet-header > img {
    width: 25px;
    height: 25px;
  }
  .wallet-info {
    padding-right: 15px;
  }
  .user-options {
    padding: 20px 20px 10px;
  }
  .user-option {
    gap: 15px;
  }
  .user-option > p {
    font-size: 15px;
    line-height: 40px;
  }
}
</style>
