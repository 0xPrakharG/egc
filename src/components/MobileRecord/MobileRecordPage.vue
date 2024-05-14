<script setup>
import RecordBg from '@/components/MobileRecord/RecordBg.vue'
import RecordContainer from '@/components/MobileRecord/RecordContainer.vue'
</script>
<template>
  <div style="position: relative; overflow: hidden">
    <RecordBg />
    <div class="record-container">
      <RecordContainer />
    </div>
  </div>
</template>

<style scoped>
.record-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  z-index: 500;
}
@media screen and (min-width: 451px) {
  .record-container {
    width: 85%;
  }
}
@media screen and (min-width: 551px) {
  .record-container {
    width: 80%;
  }
}
@media screen and (min-width: 651px) {
  .record-container {
    width: 75%;
  }
}
@media screen and (min-width: 751px) {
  .record-container {
    width: 70%;
  }
}
@media screen and (min-width: 801px) {
  .record-container {
    width: 60%;
  }
}
@media screen and (min-width: 901px) {
  .record-container {
    width: 50%;
  }
}
</style>
