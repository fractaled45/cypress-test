<template>
  <label :for="name" v-if="label" class="text-black mt-2">{{ label }}</label>
  <div class="mt-1">
    <component v-for="option in options" :key="option" :is="vertical ? 'div' : 'span'">
      <BaseCheckbox
        :title="option.name"
        :label="option.name"
        :modelValue="isChecked(option.value)"
        :name="name"
        :disabled="disabled"
        @update:modelValue="handleUpdate($event, option.value)"
      />
    </component>
  </div>
  <div>
    <p :id="`${name}-error`" class="text-red-800" v-if="error" aria-live="assertive">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import BaseCheckbox from './BaseCheckbox.vue';

export interface NameValue {
  name: string;
  value: string | number;
}

const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update:modelValue", value: string[] | number[]): void;
}>();

function isChecked(optionValue: string | number): boolean {
  return props?.modelValue?.includes(optionValue);
}

var handleUpdate = function (value: boolean, optionValue: string | number) {
  if (value) {
    //if option just checked, add
    // if (props.modelValue == undefined) {
    //   props.modelValue = [] as string[] | number[];
    // }

    if (props.modelValue !== undefined) {
      let selectedItems = props.modelValue as any[];

      if (!selectedItems.includes(optionValue)) {
        selectedItems.push(optionValue);
      }
    } else {
      console.warn("Cannot add value to undefined array");
    }
  } else {
    // if option has just been unchecked, remove
    if (props.modelValue !== undefined) {
      let selectedItems = props.modelValue as any[];
      let existingIndex = selectedItems.indexOf(optionValue);
      if (existingIndex >= 0) {
        props.modelValue.splice(existingIndex, 1);
      }
    }
  }
  emit("update:modelValue", props.modelValue);
  console.log(" Base Checkbox updated", props.modelValue);
};

const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: any[];
    options?: NameValue[];
    name?: string;
    vertical?: boolean;
    error?: string;
    disabled?: boolean;
  }>(),
  {
    label: "",
    //modelValue: [] as any[],
    vertical: false,
    disabled: false,
  }
);
</script>
