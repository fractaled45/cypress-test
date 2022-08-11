<template>
  <div>
    <div class="flex flex-start">
      <div class="flex items-center h-5">
        <input
          :id="uuid"
          v-bind="$attrs"
          :checked="modelValue ?? false"
          :title="label"
          type="checkbox"
          class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          @change="onCheckchanged($event)"
          :disabled="disabled"
        />
      </div>
      <div class="ml-3 text-sm">
        <label
          :for="uuid"
          v-if="label"
          v-html="label"
          class="font-medium text-gray-700"
        ></label>
      </div>
    </div>
    <div>
      <p :id="`${uuid}-error`" class="text-red-800" v-if="error" aria-live="assertive">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UniqueId } from "../helpers";
const uuid = UniqueId().getId();

const emit = defineEmits(["update:modelValue"]);

function onCheckchanged(event: Event) {
  var inputElement = event.target as HTMLInputElement;
  if (inputElement) {
    //console.log(`BaseCheckbox Check Changed to ${inputElement.checked} `);
    emit("update:modelValue", inputElement.checked);
  } else {
    console.warn("BaseCheckbox: Cant find Checked property on element", event.target);
  }
}

withDefaults(
  defineProps<{
    label?: string;
    modelValue: boolean;
    error?: string;
    disabled?: boolean;
  }>(),
  {
    modelValue: false,
    disabled: false,
  }
);
</script>
