<script setup>
import ProfileLeft from '@/components/Profile/Sections/ProfileLeft.vue'
import ProfileMid from '@/components/Profile/Sections/ProfileMid.vue'
import ProfileRight from '@/components/Profile/Sections/ProfileRight.vue'
</script>

<template>
  <div>
    <div class="profile-container">
      <div class="profile">
        <ProfileLeft />
        <ProfileMid />
        <ProfileRight />
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 90%;
}
.profile {
  margin-top: 73px;
  display: flex;
  gap: 10px;
}
@media screen and (min-width: 1051px) {
  .profile {
    margin-top: 65px;
  }
}
</style>
