<template>
  <section>
    <el-row>
      <el-col>
        <v-container direction="vertical" :gap="32">
          <div>
            <v-container :gap="16">
              <div>
                <blade-duo-view :level="bladeDuoLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="bladeDuoLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <bloodstained-blade-view :level="bloodstainedBladeLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="bloodstainedBladeLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <excellent-companion-view :level="excellentCompanionLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="excellentCompanionLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <eye-of-the-abyss-view :level="eyeOfTheAbyssLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="eyeOfTheAbyssLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <forgiving-horns-view :level="forgivingHornsLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="forgivingHornsLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <guardian-star-view :level="guardianStarLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="guardianStarLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <immortal-spirit-view :level="immortalSpiritLevel" extended />
              </div>
              <div>
                <v-stats-input v-model="immortalSpiritLevel" placeholder="Уровень" />
              </div>
            </v-container>
          </div>
          <div>
            <v-container :gap="16">
              <div>
                <wildfire-piercer-view :level="wildfirePiercerLevel" extended />
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
import { BladeDuo } from '@/entities/souls/BladeDuo/BladeDuo'
import BladeDuoView from '@/entities/souls/BladeDuo/ui/BladeDuoView.vue'
import { BloodstainedBlade } from '@/entities/souls/BloodstainedBlade/BloodstainedBlade'
import BloodstainedBladeView from '@/entities/souls/BloodstainedBlade/ui/BloodstainedBladeView.vue'
import { ExcellentCompanion } from '@/entities/souls/ExcellentCompanion/ExcellentCompanion'
import ExcellentCompanionView from '@/entities/souls/ExcellentCompanion/ui/ExcellentCompanionView.vue'
import { EyeOfTheAbyss } from '@/entities/souls/EyeOfTheAbyss/EyeOfTheAbyss'
import EyeOfTheAbyssView from '@/entities/souls/EyeOfTheAbyss/ui/EyeOfTheAbyssView.vue'
import { ForgivingHorns } from '@/entities/souls/ForgivingHorns/ForgivingHorns'
import ForgivingHornsView from '@/entities/souls/ForgivingHorns/ui/ForgivingHornsView.vue'
import { GuardianStar } from '@/entities/souls/GuardianStar/GuardianStar'
import GuardianStarView from '@/entities/souls/GuardianStar/ui/GuardianStarView.vue'
import { ImmortalSpirit } from '@/entities/souls/ImmortalSpirit/ImmortalSpirit'
import ImmortalSpiritView from '@/entities/souls/ImmortalSpirit/ui/ImmortalSpiritView.vue'
import { WildfirePiercer } from '@/entities/souls/WildfirePiercer/WildfirePiercer'
import WildfirePiercerView from '@/entities/souls/WildfirePiercer/ui/WildfirePiercerView.vue'

const bladeDuoLevel = ref(1)
const bloodstainedBladeLevel = ref(1)
const excellentCompanionLevel = ref(1)
const eyeOfTheAbyssLevel = ref(1)
const forgivingHornsLevel = ref(1)
const guardianStarLevel = ref(1)
const immortalSpiritLevel = ref(1)
const wildfirePiercerLevel = ref(1)
</script>
