<template>
  <el-button :icon="copied ? Check : CopyDocument" @click="copy()" />
</template>

<script setup lang="ts">
import { Check, CopyDocument } from '@element-plus/icons-vue'
import { useClipboard } from '@vueuse/core'

const props = defineProps<{ text: string }>()

const { copy, copied } = useClipboard({ source: props.text })
</script>
