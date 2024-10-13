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
  width: 350px;
  display: flex;
  color: #fff;
  text-shadow:
    1px 0 #000000,
    -1px 0 #000000,
    0 1px #000000,
    0 -1px #000000,
    1px 1px #000000,
    -1px -1px #000000,
    1px -1px #000000,
    -1px 1px #000000;

  &__image {
    position: relative;
  }

  &__level {
    left: 0;
    font-weight: bold;
    position: absolute;
    top: 0;
    transform: translate(calc(50px - 50%), calc(100px - 100%));
  }

  &__info {
    margin-left: 8px;
    flex-grow: 1;
  }

  &__name {
    font-weight: bold;
    border-bottom: 2px dotted #fff;
  }

  &-stats {
    font-size: 14px;

    &__item {
      display: flex;
      justify-content: space-between;
    }

    &__value {
      font-weight: bold;
    }
  }
}
</style>
