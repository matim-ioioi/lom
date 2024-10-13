<template>
  <section>
    <el-row>
      <el-col>
        <v-container direction="vertical" :gap="32">
          <div>
            <v-container :gap="16">
              <div>
                <blade-duo-view :level="+bladeDuoLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="bladeDuoLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <bloodstained-blade-view :level="+bloodstainedBladeLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="bloodstainedBladeLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <excellent-companion-view :level="+excellentCompanionLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="excellentCompanionLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <eye-of-the-abyss-view :level="+eyeOfTheAbyssLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="eyeOfTheAbyssLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <forgiving-horns-view :level="+forgivingHornsLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="forgivingHornsLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <guardian-star-view :level="+guardianStarLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="guardianStarLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <immortal-spirit-view :level="+immortalSpiritLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="immortalSpiritLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <wildfire-piercer-view :level="+wildfirePiercerLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="wildfirePiercerLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
        </v-container>
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VContainer from '@/components/common/VContainer.vue'
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
