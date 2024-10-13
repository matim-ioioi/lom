<template>
  <div class="soul">
    <div class="soul__image">
      <img :src="props.image" :alt="props.name" width="100" height="100" />
      <div v-if="props.level" class="soul__level">
        <span>lv. {{ props.level }}</span>
      </div>
    </div>
    <div v-if="props.extended" class="soul__info">
      <div class="soul__name">
        {{ props.name }}
      </div>
      <div v-if="props.stats" class="soul-stats">
        <div v-for="stat in props.stats" :key="`soul-${stat.name}-${stat.value}`" class="soul-stats__item">
          <span class="soul-stats__key">{{ stat.name }}:</span>
          <span class="soul-stats__value">{{ stat.value }} {{ stat.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  image: string
  level?: number | null
  stats?:
    | {
        name: string
        value: number
        unit: string
      }[]
    | null
  extended?: boolean
}>()
</script>

<style scoped lang="scss">
.soul {
  min-width: 350px;
  display: flex;
  text-shadow:
    1px 0 #000,
    -1px 0 #000,
    0 1px #000,
    0 -1px #000,
    1px 1px #000,
    -1px -1px #000,
    1px -1px #000,
    -1px 1px #000;
  color: #fff;

  &__image {
    position: relative;
  }

  &__level {
    top: 0;
    left: 0;
    position: absolute;
    font-weight: 700;
    transform: translate(calc(50px - 50%), calc(100px - 100%));
  }

  &__info {
    flex-grow: 1;
    margin-left: 8px;
  }

  &__name {
    border-bottom: 2px dotted #fff;
    font-weight: 700;
  }

  &-stats {
    font-size: 14px;

    &__item {
      display: flex;
      justify-content: space-between;
    }

    &__value {
      font-weight: 700;
    }
  }
}
</style>
