<template>
  <v-form ref="formRef">
    <v-container direction="vertical" :gap="32" divided>
      <div>
        <!-- base stats -->
        <v-container direction="vertical" :gap="8">
          <div>
            <v-form-item v-model="hp" name="hp">
              <template #default="{ model }">
                <v-stats-input v-bind="model" placeholder="Конечное здоровье, ед." />
              </template>
            </v-form-item>
            <v-form-item v-model="attack" name="attack">
              <template #default="{ model }">
                <v-stats-input v-bind="model" placeholder="Конечная атака, ед." />
              </template>
            </v-form-item>
          </div>
          <div>
            <v-form-item v-model="defense" name="defense">
              <template #default="{ model }">
                <v-stats-input v-bind="model" placeholder="Конечная защита, ед." />
              </template>
            </v-form-item>
            <v-form-item v-model="attackSpeed" name="attackSpeed">
              <template #default="{ model }">
                <v-stats-input v-bind="model" placeholder="Скорость атаки, ед." />
              </template>
            </v-form-item>
          </div>
        </v-container>
        <!-- base stats -->
      </div>

      <div>
        <!-- attack -->
        <v-form-item v-model="critRate" name="critRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс крита, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="comboRate" name="comboRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс комбо, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="counterRate" name="counterRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс контратаки, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="baseAttackMultiplier" name="baseAttackMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. обычной атаки, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="critMultiplier" name="critMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. крита, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="comboMultiplier" name="comboMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. комбо, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="counterMultiplier" name="counterMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. контратаки, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="baseAttackResistance" name="baseAttackResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ обычной атаки, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="critResistance" name="critResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ крита, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="comboResistance" name="comboResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ комбо, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="counterResistance" name="counterResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ контратаки, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="damageResistance" name="damageResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />
          </template>
        </v-form-item>

        <v-form-item v-model="comboIgnoreRate" name="comboIgnoreRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс игнорирования комбо, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />
          </template>
        </v-form-item>
        <v-form-item v-model="counterIgnoreRate" name="counterIgnoreRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс игнорирования контратаки, %" hint="Пока что значение этого атрибута может меняться только в бою с помощью скиллов, маунтов, крыльев и т.д." />
          </template>
        </v-form-item>
        <!-- attack -->
      </div>

      <div>
        <!-- skill -->
        <v-form-item v-model="skillCritRate" name="skillCritRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс крита навыков, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="skillMultiplier" name="skillMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. навыков, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="skillCritMultiplier" name="skillCritMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. крита навыков, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="skillResistance" name="skillResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ навыков, %" />
          </template>
        </v-form-item>
        <!-- skill -->
      </div>

      <div>
        <!-- control -->
        <v-form-item v-model="stunRate" name="stunRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс оглушения, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="evasionRate" name="evasionRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс уклонения, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="launchRate" name="launchRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс подбрасывания, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="regenRate" name="regenRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс восстановления, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="stunIgnoreRate" name="stunIgnoreRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс игнорирования оглушения, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="evasionIgnoreRate" name="evasionIgnoreRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс игнорирования уклонения, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="launchIgnoreRate" name="launchIgnoreRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс игнорирования подбрасывания, %" />
          </template>
        </v-form-item>
        <!-- control -->
      </div>

      <div>
        <!-- boss -->
        <v-form-item v-model="bossMultiplier" name="bossMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. урона боссу, %" />
          </template>
        </v-form-item>

        <v-form-item v-model="bossResistance" name="bossResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ урона босса, %" />
          </template>
        </v-form-item>
        <!-- boss -->
      </div>

      <div>
        <!-- pal -->
        <v-form-item v-model="palCritRate" name="palCritRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс крита партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит'" />
          </template>
        </v-form-item>
        <v-form-item v-model="palComboRate" name="palComboRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс комбо партнёра, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Комбо'" />
          </template>
        </v-form-item>

        <v-form-item v-model="palMultiplier" name="palMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. урона всех партнёров, %" />
          </template>
        </v-form-item>
        <v-form-item v-model="palCritMultiplier" name="palCritMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. крита всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Крит. урон'" />
          </template>
        </v-form-item>
        <v-form-item v-model="palComboMultiplier" name="palComboMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. комбо всех партнёров, %" hint="Чтобы посмотреть, нажмите просмотр любого из питомцев, там есть 'Коэффициент комбо'" />
          </template>
        </v-form-item>

        <v-form-item v-model="palResistance" name="palResistance">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="СУ урону партнёров, %" />
          </template>
        </v-form-item>
        <!-- pal -->
      </div>

      <div>
        <!-- heal -->
        <v-form-item v-model="healRate" name="healRate">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Шанс лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />
          </template>
        </v-form-item>
        <v-form-item v-model="healMultiplier" name="healMultiplier">
          <template #default="{ model }">
            <v-stats-input v-bind="model" placeholder="Коэф. лечения, %" hint="На самом деле это вампиризм (т.е. шанс и коэф. считаются относительно атак)" />
          </template>
        </v-form-item>
        <!-- heal -->
      </div>

      <div>
        <el-button @click="downloadStats">Экспортировать статы (json-файл)</el-button>
        <el-button @click="saveStatsToLocalStorage">Сохранить статы в браузере</el-button>
      </div>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import {onMounted, Ref} from 'vue'
import { ref } from 'vue'
import VContainer from '@/components/common/VContainer.vue'
import VStatsInput from '@/components/common/VStatsInput.vue'
import VForm from '@/components/validation/VForm.vue'
import VFormItem from '@/components/validation/VFormItem.vue'
import {downloadObjectAsJSON} from "@/utils/downloadObjectAsJSON";

// <!-- base stats -->
const hp = ref('0')
const attack = ref('0')
const defense = ref('0')
const attackSpeed = ref('0')
// <!-- base stats -->

// <!-- attack -->
const critRate = ref('0')
const comboRate = ref('0')
const counterRate = ref('0')

const baseAttackMultiplier = ref('0')
const critMultiplier = ref('0')
const comboMultiplier = ref('0')
const counterMultiplier = ref('0')

const baseAttackResistance = ref('0')
const critResistance = ref('0')
const comboResistance = ref('0')
const counterResistance = ref('0')
const damageResistance = ref('0')

const comboIgnoreRate = ref('0')
const counterIgnoreRate = ref('0')
// <!-- attack -->

// <!-- skill -->
const skillCritRate = ref('0')

const skillMultiplier = ref('0')
const skillCritMultiplier = ref('0')

const skillResistance = ref('0')
// <!-- skill -->

// <!-- control -->
const stunRate = ref('0')
const evasionRate = ref('0')
const regenRate = ref('0')
const launchRate = ref('0')

const stunIgnoreRate = ref('0')
const evasionIgnoreRate = ref('0')
const launchIgnoreRate = ref('0')
// <!-- control -->

// <!-- boss -->
const bossMultiplier = ref('0')

const bossResistance = ref('0')
// <!-- boss -->

// <!-- pal -->
const palCritRate = ref('0')
const palComboRate = ref('0')

const palMultiplier = ref('0')
const palCritMultiplier = ref('0')
const palComboMultiplier = ref('0')

const palResistance = ref('0')
// <!-- pal -->

// <!-- heal -->
const healRate = ref('0')
const healMultiplier = ref('0')
// <!-- heal -->

const formRef = ref<InstanceType<typeof VForm>>() as Ref<InstanceType<typeof VForm>>

onMounted(() => {
  const heroStatsFromLocalStorage = localStorage.getItem('heroStats')

  if (heroStatsFromLocalStorage) {
    formRef.value.validation.setValues(JSON.parse(heroStatsFromLocalStorage))
  }
})

const saveStatsToLocalStorage = () => {
  localStorage.setItem('heroStats', JSON.stringify(formRef.value.validation.values))
}

const downloadStats = () => {
  downloadObjectAsJSON(formRef.value.validation.values, 'hero-stats')
}
</script>
