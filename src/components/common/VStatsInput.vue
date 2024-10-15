<template>
  <client-only>
    <div>
      <el-text v-if="screen.isXs" type="info">{{ props.placeholder }}</el-text>
      <el-input v-model="model" v-maska="props.type === 'stat' ? statMaska : levelMaska" :type="'text'" :placeholder="props.placeholder" :disabled="props.disabled ?? ''">
        <template v-if="!screen.isXs" #prepend>{{ props.placeholder }}</template>
        <template #append><v-copy :text="model" /></template>
        <template v-if="hint" #suffix>
          <el-tooltip placement="top">
            <template #content><span v-html="hint" /></template>
            <el-icon><question-filled /></el-icon>
          </el-tooltip>
        </template>
        <template #prefix><slot name="prefix" /></template>
      </el-input>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import type { MaskOptions } from 'maska'
import { QuestionFilled } from '@element-plus/icons-vue'
import { vMaska } from 'maska/vue'
import VCopy from '@/components/common/VCopy.vue'
import { useScreen } from '@/composable/useScreen'

const screen = useScreen()

const props = withDefaults(
  defineProps<{
    placeholder: string
    hint?: string
    disabled?: boolean
    type?: 'level' | 'stat'
  }>(),
  { type: 'stat' }
)

const statMaska: MaskOptions = {
  mask: ['0W', '0.9W'],
  tokens: {
    0: { pattern: /[0-9]/, multiple: true },
    '.': { pattern: /\./, optional: true },
    9: { pattern: /[0-9]/, optional: true, multiple: true },
    W: { pattern: /[KMBTQPE]/, optional: true },
  },
}
const levelMaska: MaskOptions = {
  mask: '0',
  tokens: {
    0: { pattern: /[0-9]/, multiple: true },
  },
}

const model = defineModel<string>({ required: true })
</script>
