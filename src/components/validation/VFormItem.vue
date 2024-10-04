<template>
  <div>
    <slot
      :validation="validation"
      :model="{
        modelValue: validation.value.value,
        ['onUpdate:modelValue']: handelUpdateValue,
      }"
      @change="handelUpdateValue"
    />
  </div>
</template>

<script lang="ts">
import type { InputType } from 'vee-validate'
import type { PropType, Ref } from 'vue'
import { useField } from 'vee-validate'
import { defineComponent, toRef } from 'vue'

type VFormFunctionRule = () => string | boolean
type VFormValue = { [key: string]: any } | any[] | string | number | boolean | null | undefined
type VeeValidateRules = string | Record<string, any> | VFormFunctionRule
type VeeValidateOptions<T = unknown> = {
  initialValue?: Ref<T> | T
  validateOnValueUpdate: boolean
  validateOnMount?: boolean
  bails?: boolean
  type?: InputType
  valueProp?: Ref<T> | T
  standalone?: boolean
  checkedValue?: Ref<T> | T
  uncheckedValue?: Ref<T> | T
}

export default defineComponent({
  name: 'VFormItem',
  props: {
    modelValue: [Object, Array, String, Number, Boolean, null] as PropType<VFormValue>,
    name: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      default: ' ',
    },
    rules: [String, Object, Function] as PropType<VeeValidateRules>,
    options: {
      type: Object as PropType<VeeValidateOptions<VFormValue>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (_value: VFormValue) => true,
  },
  setup(props, { emit }) {
    const name = toRef(props, 'name')
    const label = toRef(props, 'label')
    const rules = toRef(props, 'rules')

    const validation = useField<VFormValue>(name, rules, {
      initialValue: props.modelValue ?? '',
      label,
      syncVModel: true,
      ...props.options,
    })

    const handelUpdateValue = (value: VFormValue) => {
      emit('update:modelValue', value)
    }

    return {
      validation,
      handelUpdateValue,
    }
  },
})
</script>
