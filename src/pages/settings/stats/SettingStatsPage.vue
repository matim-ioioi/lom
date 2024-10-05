<template>
  <el-tabs v-model="currentTab">
    <el-tab-pane label="Статы персонажа" name="hero">
      <v-hero-stats />
    </el-tab-pane>
    <el-tab-pane label="Статы партнёров" name="pals">
      <v-pals-stats />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VHeroStats from '@/components/common/VHeroStats.vue'
import VPalsStats from '@/components/common/VPalsStats.vue'

const currentTab = ref('hero')
</script>
