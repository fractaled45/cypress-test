<template>
  <label :for="name" v-if="label">{{ label }}</label>
  <component v-for="option in options" :key="option" :is="vertical ? 'div' : 'span'">
    <BaseRadio
      class="mt-2 ml-2"
      :title="option.name"
      :label="option.name"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script setup lang="ts">
import BaseRadio from './BaseRadio.vue'
export interface NameValue {
  name: string;
  value: string | number;
}

withDefaults(
  defineProps<{
    label?: string;
    modelValue?: string | number;
    options?: NameValue[];
    name?: string;
    vertical?: boolean;
  }>(),
  {
    label: "",
    vertical: false,
  }
);
</script>
