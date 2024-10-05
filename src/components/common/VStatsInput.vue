<template>
  <client-only>
    <div>
      <el-text v-if="screen.isXs" type="info">{{ props.placeholder }}</el-text>
      <el-input v-model="model" :type="props.disabled ? 'text' : 'number'" :placeholder="props.placeholder" :disabled="props.disabled ?? ''">
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
import { QuestionFilled } from '@element-plus/icons-vue'
import VCopy from '@/components/common/VCopy.vue'
import { useScreen } from '@/composable/useScreen'

const screen = useScreen()

const props = defineProps<{
  placeholder: string
  hint?: string
  disabled?: boolean
}>()

const model = defineModel<string>({ required: true })
</script>
