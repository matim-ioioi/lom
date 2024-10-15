<template>
  <section>
    <el-row :gutter="32">
      <el-col :sm="24" :md="12">
        <blade-duo-view :level="+bladeDuoLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="bladeDuoLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <bloodstained-blade-view :level="+bloodstainedBladeLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="bloodstainedBladeLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <excellent-companion-view :level="+excellentCompanionLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="excellentCompanionLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <eye-of-the-abyss-view :level="+eyeOfTheAbyssLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="eyeOfTheAbyssLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <forgiving-horns-view :level="+forgivingHornsLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="forgivingHornsLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <guardian-star-view :level="+guardianStarLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="guardianStarLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <immortal-spirit-view :level="+immortalSpiritLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="immortalSpiritLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <wildfire-piercer-view :level="+wildfirePiercerLevel" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="wildfirePiercerLevel" placeholder="Уровень" type="level" />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import BladeDuoView from '@/entities/souls/BladeDuo/ui/BladeDuoView.vue'
import BloodstainedBladeView from '@/entities/souls/BloodstainedBlade/ui/BloodstainedBladeView.vue'
import ExcellentCompanionView from '@/entities/souls/ExcellentCompanion/ui/ExcellentCompanionView.vue'
import EyeOfTheAbyssView from '@/entities/souls/EyeOfTheAbyss/ui/EyeOfTheAbyssView.vue'
import ForgivingHornsView from '@/entities/souls/ForgivingHorns/ui/ForgivingHornsView.vue'
import GuardianStarView from '@/entities/souls/GuardianStar/ui/GuardianStarView.vue'
import ImmortalSpiritView from '@/entities/souls/ImmortalSpirit/ui/ImmortalSpiritView.vue'
import WildfirePiercerView from '@/entities/souls/WildfirePiercer/ui/WildfirePiercerView.vue'

const bladeDuoLevel = ref('1')
const bloodstainedBladeLevel = ref('1')
const excellentCompanionLevel = ref('1')
const eyeOfTheAbyssLevel = ref('1')
const forgivingHornsLevel = ref('1')
const guardianStarLevel = ref('1')
const immortalSpiritLevel = ref('1')
const wildfirePiercerLevel = ref('1')
</script>
