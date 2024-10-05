<template>
  <label for="vFileUploaderInput" class="v-file-uploader">
    <el-button class="v-file-uploader__trigger" @click.prevent.stop.self>{{ props.triggerText }}</el-button>
    <input id="vFileUploaderInput" type="file" name="vFileUploaderInput" class="v-file-uploader__input" :onchange="handleUploadedFile" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  triggerText?: string
}>()

const emit = defineEmits<{
  (e: 'change', file: File): void
}>()

const handleUploadedFile = (event: InputEvent) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- если файла не будет, пользователь увидит уведомление
  const uploadedFile = (event.target as HTMLInputElement).files!.item(0)!

  emit('change', uploadedFile)
}
</script>

<style scoped lang="scss">
.v-file-uploader {
  position: relative;
  display: block;

  &__trigger {
    width: 100%;
  }

  &__input {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }
}
</style>
