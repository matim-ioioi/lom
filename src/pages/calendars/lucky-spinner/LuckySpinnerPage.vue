<template>
  <section class="lucky-spinner">
    <v-server-week />
    <el-table :data="luckySpinnerData" stripe :show-header="false" :row-class-name="isRowPredicted">
      <el-table-column prop="week" width="120">
        <template #default="{ row }">
          <span class="mr-8">Неделя {{ row.week }}</span>
          <el-tooltip v-if="'prediction' in row" placement="top">
            <template #content>
              <span>Это не точная информация, выведенная на основе предыдущих недель</span>
            </template>
            <el-icon><question-filled /></el-icon>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="items">
        <template #default="{ row }">
          <el-table :data="row.items" :show-header="false">
            <el-table-column prop="image" width="100">
              <template #default="scope">
                <img :src="scope.row.image" :alt="scope.row.name" width="80" height="80" />
              </template>
            </el-table-column>
            <el-table-column prop="name" width="200">
              <template #default="scope">
                <p>{{ scope.row.name }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="equipmentEffect" min-width="200">
              <template #default="scope">
                <p>{{ scope.row.equipmentEffect }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="permanentEffect">
              <template #default="scope">
                <p>{{ scope.row.permanentEffect }}</p>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import VServerWeek from '@/components/common/VServerWeek.vue'

interface LuckySpinnerDataItem {
  week: number
  items: {
    image: string
    name: string
    equipmentEffect: string
    permanentEffect: string
  }[]
}
interface PredictedLuckySpinnerDataItem extends LuckySpinnerDataItem {
  prediction: true
}

const CHAOTIC_HAMMER = {
  image: '/assets/artifacts/chaotic-hammer.png',
  name: 'Громовой гнев',
  equipmentEffect: 'Обычные атаки и комбо наносят дополнительные 30% урона в области',
  permanentEffect: 'Урон от обычной атаки +10%',
}
const WHITE_TIGER = {
  image: '/assets/mounts/white-tiger.png',
  name: 'Белый тигр',
  equipmentEffect: 'Цель, чьё здоровье ниже, чем у вас, получает увеличение входящего урона на 15%. Атака цели, чьё здоровье выше, чем у вас, получает уменьшение атаки на 10%',
  permanentEffect: 'Урон от обычной атаки +10%',
}
const RED_SOUL_2 = {
  image: '/assets/souls/red-soul-2.png',
  name: 'Выбор души 2',
  equipmentEffect: 'Можно выбрать любую душу-2 для слияния души',
  permanentEffect: '',
}
const BLUE_OX = {
  image: '/assets/mounts/blue-ox.png',
  name: 'Синий бык',
  equipmentEffect: 'Сопротивление урона (СУ) +10%, сокращение времени контроля +30%',
  permanentEffect: 'Крит урон партнёров +25%',
}
const MOONLIT_WISP = {
  image: '/assets/wings/moonlit-wisp.png',
  name: 'Лунный дым',
  equipmentEffect: 'После начала битвы, каждое использование активного навыка увеличивает урон навыков на 1.5%, суммируется до 10 раз',
  permanentEffect: 'Глобальное здоровье +10%',
}
const BLUE_QUEEN = {
  image: '/assets/mounts/blue-queen.png',
  name: 'Голубая королева',
  equipmentEffect: 'Во время входящего урона, наносит целям вокруг (до 5-ти, включая главную) 10% распределённого урона от исходного',
  permanentEffect: 'Бонус крит урона+40%',
}
const EMERALD_EMBRACE = {
  image: '/assets/wings/emerald-embrace.png',
  name: 'Голубые горы',
  equipmentEffect: 'После начала боя, каждая комбо-атака увеличивает урон от комбоатак на 0.5%, суммируется до 60-ти раз',
  permanentEffect: 'Глобальное здоровье +10%',
}
const ROUND_FROG = {
  image: '/assets/mounts/round-frog.png',
  name: 'Жаба',
  equipmentEffect: 'Каждые 10 сек. убивает 1 вражескую цель и в течение 5 сек. повышается атака на 15% (если цель - босс или игрок, то он обездвиживается на 1 секунду)',
  permanentEffect: 'Бонус антикрита +40%',
}
const BLADE_PURSUIT = {
  image: '/assets/wings/blade-pursuit.png',
  name: 'Разрезание ветра',
  equipmentEffect: 'После начала битвы, каждая контратака увеличивает урон от контратак на 0.5%, суммируется до 60-ти раз',
  permanentEffect: 'Глобальное здоровье +10%',
}
const PURPLE_WING = {
  image: '/assets/mounts/purple-wing.png',
  name: 'Пурпурные крылья',
  equipmentEffect: 'После начала боя сразу же наносит 5000% урона по области, подбрасывает цели в радиусе на 0.5 сек. Срабатывает каждые 11 сек.',
  permanentEffect: 'Глобальное здоровье +10%',
}
const MAGIC_CARPET = {
  image: '/assets/mounts/magic-carpet.png',
  name: 'Ковёр-самолёт',
  equipmentEffect: 'После каждого 6 (шестого) использования навыка полностью восстанавливает энергию для 1 случайного навыка',
  permanentEffect: 'Глобальная атака +10%',
}
const KOI_PAPER_KITE = {
  image: '/assets/mounts/koi-paper-kite.png',
  name: 'Бумажный змей',
  equipmentEffect: 'Каждая 3 комбоатака наносит дополнительные 500% урона целям по области',
  permanentEffect: 'Глобальная атака +10%',
}
const MINI_MOTORCYCLE = {
  image: '/assets/mounts/mini-motorcycle.png',
  name: 'Мини-мотоцикл',
  equipmentEffect: 'При каждом срабатывании контратаки увеличивается урон от контратаки на 10%, длится 3 сек. (максимум 30%). Длительность обновляется с каждым новым срабатыванием',
  permanentEffect: 'Глобальное здоровье +10%',
}

const luckySpinnerData = reactive<(LuckySpinnerDataItem | PredictedLuckySpinnerDataItem)[]>([
  // 1 iteration
  { week: 1, items: [CHAOTIC_HAMMER] },
  { week: 2, items: [WHITE_TIGER] },
  { week: 3, items: [RED_SOUL_2] },
  { week: 4, items: [BLUE_OX] },
  // 2 iteration
  { week: 5, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 6, items: [BLUE_QUEEN] },
  { week: 7, items: [EMERALD_EMBRACE, RED_SOUL_2] },
  { week: 8, items: [ROUND_FROG] },
  { week: 9, items: [BLADE_PURSUIT, RED_SOUL_2] },
  { week: 10, items: [PURPLE_WING] },
  // 3 iteration
  { week: 11, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 12, items: [MAGIC_CARPET] },
  { week: 13, items: [EMERALD_EMBRACE, RED_SOUL_2] },
  { week: 14, items: [KOI_PAPER_KITE] },
  { week: 15, items: [BLADE_PURSUIT, RED_SOUL_2] },
  { week: 16, items: [MINI_MOTORCYCLE] },
  // 1 repeat iteration
  { week: 17, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 18, items: [CHAOTIC_HAMMER, WHITE_TIGER, BLUE_OX] },
  // 2 repeat iteration
  { week: 19, items: [EMERALD_EMBRACE, RED_SOUL_2] },
  { week: 20, items: [BLUE_QUEEN, ROUND_FROG, PURPLE_WING] },
  // 3 repeat iteration
  { week: 21, items: [BLADE_PURSUIT, RED_SOUL_2] },
  { week: 22, items: [MAGIC_CARPET, KOI_PAPER_KITE, MINI_MOTORCYCLE] },
  // 1 repeat iteration
  { week: 23, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 24, items: [CHAOTIC_HAMMER, WHITE_TIGER, BLUE_OX] },
  // 2 repeat iteration
  { week: 25, items: [EMERALD_EMBRACE, RED_SOUL_2] },
  { week: 26, items: [BLUE_QUEEN, ROUND_FROG, PURPLE_WING] },
  // 3 repeat iteration
  { week: 27, items: [BLADE_PURSUIT, RED_SOUL_2] },
  { week: 28, items: [MAGIC_CARPET, KOI_PAPER_KITE, MINI_MOTORCYCLE] },
  // 1 repeat iteration
  { week: 29, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 30, items: [CHAOTIC_HAMMER, WHITE_TIGER, BLUE_OX] },
  // 2 repeat iteration
  { week: 31, items: [EMERALD_EMBRACE, RED_SOUL_2] },
  { week: 32, prediction: true, items: [BLUE_QUEEN, ROUND_FROG, PURPLE_WING] },
  // 3 repeat iteration
  { week: 33, prediction: true, items: [BLADE_PURSUIT, RED_SOUL_2] },
  { week: 34, prediction: true, items: [MAGIC_CARPET, KOI_PAPER_KITE, MINI_MOTORCYCLE] },
  // 1 repeat iteration
  { week: 35, prediction: true, items: [MOONLIT_WISP, RED_SOUL_2] },
  { week: 36, prediction: true, items: [CHAOTIC_HAMMER, WHITE_TIGER, BLUE_OX] },
])

const isRowPredicted = ({ row }: { row: any }) => {
  if ('prediction' in row) {
    return 'lucky-spinner-prediction'
  }

  return ''
}
</script>

<style scoped lang="scss">
.lucky-spinner {
  padding: 60px 0;
}

:deep(.lucky-spinner-prediction) {
  opacity: 0.3;
}
</style>
