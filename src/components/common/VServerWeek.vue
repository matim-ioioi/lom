<template>
  <div class="v-server-week">
    <span>Сейчас {{ serverWeek }}&nbsp;неделя сервера</span>
  </div>
</template>

<script setup lang="ts">
const dateOpening = new Date('2024-04-23T00:00:00.000Z')
const dateNow = new Date()

const serverWeek = Math.floor((dateNow.getTime() - dateOpening.getTime()) / (1000 * 3600 * 24) / 7)
</script>

<style scoped lang="scss">
.v-server-week {
  text-align: center;
  margin: 16px 0;
}
</style>
