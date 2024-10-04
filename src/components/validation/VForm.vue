<template>
  <component :is="tagName" class="s-validation">
    <slot :form-validation="validation" />
  </component>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { useForm } from 'vee-validate'
import { defineComponent, toRef } from 'vue'

type VFormOptions = {
  initialValues?: Record<string, any>
  initialErrors?: Record<string, string>
  initialTouched?: Record<string, boolean>
  validateOnMount?: boolean
}

export default defineComponent({
  name: 'VForm',
  props: {
    tagName: {
      type: String as PropType<string>,
      default: 'form',
    },
    schema: {
      type: Object as PropType<object>,
      default: undefined,
    },
    options: {
      type: Object as PropType<VFormOptions>,
      default: () => ({}),
    },
  },
  setup(props) {
    const validationSchema = toRef(props, 'schema')

    const validation = useForm({
      validationSchema: validationSchema.value ? validationSchema : undefined,
      ...props.options,
    })

    return {
      validation,
    }
  },
})
</script>
