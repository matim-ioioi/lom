<template>
  <el-container class="v-container" :class="[{ 'v-container--divided': divided }, `v-container--${direction}`]" :direction="direction">
    <slot />
  </el-container>
</template>

<script setup lang="ts">
const {
  direction = 'horizontal',
  gap,
  divided = false,
  align = 'start',
  justify = 'start',
} = defineProps<{
  direction?: 'vertical' | 'horizontal'
  gap?: number
  divided?: boolean
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
}>()
</script>

<style scoped lang="scss">
.v-container {
  $self: &;

  position: relative;
  gap: v-bind('(gap || 0) + "px"');
  align-items: v-bind(align);
  justify-content: v-bind(justify);

  &#{$self}--divided {
    &#{$self}--horizontal {
      & > *:not(:last-child) {
        &::after {
          content: '';
          width: 1px;
          height: 100%;
          position: absolute;
          display: block;
          background-color: var(--vp-c-divider);
          transform: translateX(calc(v-bind('(gap || 0)') / 2 * 100%));
        }
      }
    }

    &#{$self}--vertical {
      & > *:not(:last-child) {
        &::after {
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          display: block;
          background-color: var(--vp-c-divider);
          transform: translateY(calc(v-bind('(gap || 0)') / 2 * 100%));
        }
      }
    }
  }
}
</style>
