<template>
  <el-card>
    <template #header>Конечные ОЗ</template>
    <v-stats-input v-model="heroStats.hp.final" placeholder="Конечные ОЗ, ед." />

    <el-card style="margin-top: 20px">
      <template #header>ОЗ Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.hp.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовые ОЗ Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.hp.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобально здоровье Сумма</template>
      <v-stats-input v-model="heroStats.hp.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.hp.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>Конечная атака</template>
    <v-stats-input v-model="heroStats.atk.final" placeholder="Конечная атака, ед." />

    <el-card style="margin-top: 20px">
      <template #header>Атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.atk.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовая атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.atk.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальная атака Сумма</template>
      <v-stats-input v-model="heroStats.atk.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.atk.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-divider />

  <el-card>
    <template #header>Конечная ЗАЩ</template>
    <v-stats-input v-model="heroStats.def.final" placeholder="Конечная ЗАЩ, ед." />

    <el-card style="margin-top: 20px">
      <template #header>ЗАЩ Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.adventure" placeholder="Рост приключений, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.enchant" placeholder="Зачарование артефакта, ед." />
      <v-stats-input v-model="heroStats.def.stats.total.avian" placeholder="Летучий питомец, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовая защита Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.def.stats.base.skill" placeholder="Навыки, %" />
      <v-stats-input v-model="heroStats.def.stats.base.tech" placeholder="Технология, %" />
      <v-stats-input v-model="heroStats.def.stats.base.relic" placeholder="Реликвия, %" />
      <v-stats-input v-model="heroStats.def.stats.base.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.def.stats.base.artifact" placeholder="Артефакт, %" />
      <v-stats-input v-model="heroStats.def.stats.base.parking" placeholder="Парковочное место, %" />
      <v-stats-input v-model="heroStats.def.stats.base.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.def.stats.base.ring" placeholder="Кольцо, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Глобальная защита Сумма</template>
      <v-stats-input v-model="heroStats.def.stats.global.mount" placeholder="Скакун, %" />
      <v-stats-input v-model="heroStats.def.stats.global.soul" placeholder="Душа, %" />
      <v-stats-input v-model="heroStats.def.stats.global.awakeningSeal" placeholder="Пробуждение печати, %" />
      <v-stats-input v-model="heroStats.def.stats.global.costume" placeholder="Наряд, %" />
      <v-stats-input v-model="heroStats.def.stats.global.accessory" placeholder="Украшение, %" />
      <v-stats-input v-model="heroStats.def.stats.global.ship" placeholder="Корабль, %" />
      <v-stats-input v-model="heroStats.def.stats.global.enchant" placeholder="Зачарование артефакта, %" />
    </el-card>
  </el-card>

  <el-card>
    <template #header>Максимальная скорость атаки</template>
    <v-stats-input v-model="heroStats.atkSpeed.final" placeholder="Максимальная скорость атаки, ед." />

    <el-card style="margin-top: 20px">
      <template #header>Скорость атаки Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.initial" placeholder="Первичные хар-ки, ед." />
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.equipment" placeholder="Снаряжение, ед." />
      <v-stats-input v-model="heroStats.atkSpeed.stats.total.accessory" placeholder="Рост приключений, ед." />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Базовое увеличение процента скорости атаки Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.base.pal" placeholder="Партнер, %" />
      <v-stats-input v-model="heroStats.atkSpeed.stats.base.tech" placeholder="Технология, %" />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>Текущий бонус к скорости атаки в процентах Сумма</template>
      <v-stats-input v-model="heroStats.atkSpeed.stats.global.class" placeholder="Класс, %" />
    </el-card>
  </el-card>

<!--  <v-container direction="vertical" :gap="32" divided>-->
<!--    <div>-->
<!--      &lt;!&ndash; base stats &ndash;&gt;-->
<!--      <v-container direction="vertical" :gap="8">-->
<!--        <div>-->
<!--          <v-stats-input v-model="heroStats.hp" placeholder="Конечное здоровье, ед." />-->
<!--          -->
<!--        </div>-->
<!--        <div>-->
<!--          <v-stats-input v-model="heroStats.defense" placeholder="Конечная защита, ед." />-->
<!--          <v-stats-input v-model="heroStats.attackSpeed" placeholder="Скорость атаки, ед." />-->
<!--        </div>-->
<!--      </v-container>-->
<!--      &lt;!&ndash; base stats &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; attack &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.critRate" placeholder="Шанс крита, %" />-->
<!--      <v-stats-input v-model="heroStats.comboRate" placeholder="Шанс комбо, %" />-->
<!--      <v-stats-input v-model="heroStats.counterRate" placeholder="Шанс контратаки, %" />-->

<!--      <v-stats-input v-model="heroStats.baseAttackMultiplier" placeholder="Коэф. обычной атаки, %" />-->
<!--      <v-stats-input v-model="heroStats.critMultiplier" placeholder="Коэф. крита, %" />-->
<!--      <v-stats-input v-model="heroStats.comboMultiplier" placeholder="Коэф. комбо, %" />-->
<!--      <v-stats-input v-model="heroStats.counterMultiplier" placeholder="Коэф. контратаки, %" />-->

<!--      <v-stats-input v-model="heroStats.baseAttackResistance" placeholder="СУ обычной атаки, %" />-->
<!--      <v-stats-input v-model="heroStats.critResistance" placeholder="СУ крита, %" />-->
<!--      <v-stats-input v-model="heroStats.comboResistance" placeholder="СУ комбо, %" />-->
<!--      <v-stats-input v-model="heroStats.counterResistance" placeholder="СУ контратаки, %" />-->
<!--      <v-stats-input v-model="heroStats.damageResistance" placeholder="СУ, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />-->

<!--      <v-stats-input v-model="heroStats.comboIgnoreRate" placeholder="Шанс игнорирования комбо, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />-->
<!--      <v-stats-input v-model="heroStats.counterIgnoreRate" placeholder="Шанс игнорирования контратаки, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />-->
<!--      &lt;!&ndash; attack &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; skill &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.skillCritRate" placeholder="Шанс крита навыков, %" />-->

<!--      <v-stats-input v-model="heroStats.skillMultiplier" placeholder="Коэф. навыков, %" />-->
<!--      <v-stats-input v-model="heroStats.skillCritMultiplier" placeholder="Коэф. крита навыков, %" />-->

<!--      <v-stats-input v-model="heroStats.skillResistance" placeholder="СУ навыков, %" />-->
<!--      &lt;!&ndash; skill &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; control &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.stunRate" placeholder="Шанс оглушения, %" />-->
<!--      <v-stats-input v-model="heroStats.evasionRate" placeholder="Шанс уклонения, %" />-->
<!--      <v-stats-input v-model="heroStats.launchRate" placeholder="Шанс подбрасывания, %" />-->
<!--      <v-stats-input v-model="heroStats.regenRate" placeholder="Шанс восстановления, %" />-->

<!--      <v-stats-input v-model="heroStats.stunIgnoreRate" placeholder="Шанс игнорирования оглушения, %" />-->
<!--      <v-stats-input v-model="heroStats.evasionIgnoreRate" placeholder="Шанс игнорирования уклонения, %" />-->
<!--      <v-stats-input v-model="heroStats.launchIgnoreRate" placeholder="Шанс игнорирования подбрасывания, %" />-->
<!--      &lt;!&ndash; control &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; boss &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.bossMultiplier" placeholder="Коэф. урона боссу, %" />-->

<!--      <v-stats-input v-model="heroStats.bossResistance" placeholder="СУ урона босса, %" />-->
<!--      &lt;!&ndash; boss &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; pal &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.palCritRate" placeholder="Шанс крита партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит'" />-->
<!--      <v-stats-input v-model="heroStats.palComboRate" placeholder="Шанс комбо партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Комбо'" />-->

<!--      <v-stats-input v-model="heroStats.palMultiplier" placeholder="Коэф. урона всех партнёров, %" />-->
<!--      <v-stats-input v-model="heroStats.palCritMultiplier" placeholder="Коэф. крита всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит. урон'" />-->
<!--      <v-stats-input v-model="heroStats.palComboMultiplier" placeholder="Коэф. комбо всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Коэффициент комбо'" />-->

<!--      <v-stats-input v-model="heroStats.palResistance" placeholder="СУ урону партнёров, %" />-->
<!--      &lt;!&ndash; pal &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      &lt;!&ndash; heal &ndash;&gt;-->
<!--      <v-stats-input v-model="heroStats.healRate" placeholder="Шанс лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />-->
<!--      <v-stats-input v-model="heroStats.healMultiplier" placeholder="Коэф. лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />-->
<!--      &lt;!&ndash; heal &ndash;&gt;-->
<!--    </div>-->

<!--    <div>-->
<!--      <el-row>-->
<!--        <el-col :span="24">-->
<!--          <el-button type="primary" style="width: 100%" @click="saveStats">Сохранить статы в браузере</el-button>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 16px">-->
<!--        <el-col :span="24">-->
<!--          <el-button style="width: 100%" @click="downloadStats">Экспортировать статы (json-файл)</el-button>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row style="margin-top: 16px">-->
<!--        <el-col :span="24">-->
<!--          <v-file-uploader trigger-text="Импортировать статы (json-файл)" @change="handleUploadedFile" />-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
<!--  </v-container>-->
</template>

<script setup lang="ts">
import VContainer from '@/components/common/VContainer.vue'
import VFileUploader from '@/components/common/VFileUploader.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import { useHeroStats } from '@/composable/useHeroStats'
import { downloadObjectAsJSON } from '@/utils/downloadObjectAsJSON'
import { readFileAsJSON } from '@/utils/readFileAsJSON'

const { key, heroStats, saveStats } = useHeroStats()

const downloadStats = () => {
  downloadObjectAsJSON(heroStats.value, key)
}

const handleUploadedFile = async (uploadedFile: File) => {
  const result = await readFileAsJSON<typeof heroStats.value>(uploadedFile)

  if (result) {
    heroStats.value = result
  }
}
</script>
