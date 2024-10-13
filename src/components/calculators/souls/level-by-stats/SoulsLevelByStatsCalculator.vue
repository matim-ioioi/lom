<template>
  <section>
    <el-row :gutter="32">
      <el-col :sm="24" :md="12">
        <blade-duo-view :combo-dmg="+comboDmg" :boss-dmg="+bossDmg" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="comboDmg" :placeholder="BladeDuo.RU_LANG_MAP.comboDmg" :disabled="!!+bossDmg" />
        <v-stats-input v-model="bossDmg" :placeholder="BladeDuo.RU_LANG_MAP.bossDmg" :disabled="!!+comboDmg" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <bloodstained-blade-view :global-atk="+globalAtk" :healing-rate="+healingRate" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="globalAtk" :placeholder="BloodstainedBlade.RU_LANG_MAP.globalAtk" :disabled="!!+healingRate" />
        <v-stats-input v-model="healingRate" :placeholder="BloodstainedBlade.RU_LANG_MAP.healingRate" :disabled="!!+globalAtk" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <excellent-companion-view :counter-dmg="+counterDmg" :pal-dmg="+palDmg" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="counterDmg" :placeholder="ExcellentCompanion.RU_LANG_MAP.counterDmg" :disabled="!!+palDmg" />
        <v-stats-input v-model="palDmg" :placeholder="ExcellentCompanion.RU_LANG_MAP.palDmg" :disabled="!!+counterDmg" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <eye-of-the-abyss-view :crit-dmg-bonus="+critDmgBonus" :skill-crit-dmg="+skillCritDmg" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="critDmgBonus" :placeholder="EyeOfTheAbyss.RU_LANG_MAP.critDmgBonus" :disabled="!!+skillCritDmg" />
        <v-stats-input v-model="skillCritDmg" :placeholder="EyeOfTheAbyss.RU_LANG_MAP.skillCritDmg" :disabled="!!+critDmgBonus" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <forgiving-horns-view :global-def="+globalDef" :boss-dmg-res="+bossDmgRes" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="globalDef" :placeholder="ForgivingHorns.RU_LANG_MAP.globalDef" :disabled="!!+bossDmgRes" />
        <v-stats-input v-model="bossDmgRes" :placeholder="ForgivingHorns.RU_LANG_MAP.bossDmgRes" :disabled="!!+globalDef" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <guardian-star-view :crit-res-bonus="+critResBonus" :pal-crit-rate="+palCritRate" :pal-crit-dmg="+palCritDmg" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="critResBonus" :placeholder="GuardianStar.RU_LANG_MAP.critResBonus" :disabled="!!+palCritRate || !!+palCritDmg" />
        <v-stats-input v-model="palCritRate" :placeholder="GuardianStar.RU_LANG_MAP.palCritRate" :disabled="!!+critResBonus || !!+palCritDmg" />
        <v-stats-input v-model="palCritDmg" :placeholder="GuardianStar.RU_LANG_MAP.palCritDmg" :disabled="!!+critResBonus || !!+palCritRate" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <immortal-spirit-view :global-h-p="+globalHP" :regen-bonus-h-p="+regenBonusHP" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="globalHP" :placeholder="ImmortalSpirit.RU_LANG_MAP.globalHP" :disabled="!!+regenBonusHP" />
        <v-stats-input v-model="regenBonusHP" :placeholder="ImmortalSpirit.RU_LANG_MAP.regenBonusHP" :disabled="!!+globalHP" />
      </el-col>
    </el-row>

    <el-row :gutter="32" class="mt-32">
      <el-col :sm="24" :md="12">
        <wildfire-piercer-view :basic-atk-dmg="+basicAtkDmg" :skill-dmg="+skillDmg" extended />
      </el-col>
      <el-col :sm="24" :md="12">
        <v-stats-input v-model="basicAtkDmg" :placeholder="WildfirePiercer.RU_LANG_MAP.basicAtkDmg" :disabled="!!+skillDmg" />
        <v-stats-input v-model="skillDmg" :placeholder="WildfirePiercer.RU_LANG_MAP.skillDmg" :disabled="!!+basicAtkDmg" />
      </el-col>
    </el-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const comboDmg = ref('0')
const bossDmg = ref('0')
const globalAtk = ref('0')
const healingRate = ref('0')
const counterDmg = ref('0')
const palDmg = ref('0')
const critDmgBonus = ref('0')
const skillCritDmg = ref('0')
const globalDef = ref('0')
const bossDmgRes = ref('0')
const critResBonus = ref('0')
const palCritRate = ref('0')
const palCritDmg = ref('0')
const globalHP = ref('0')
const regenBonusHP = ref('0')
const basicAtkDmg = ref('0')
const skillDmg = ref('0')
</script>
