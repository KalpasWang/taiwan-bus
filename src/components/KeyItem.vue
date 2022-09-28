<template>
  <button
    type="button"
    class="btn btn-outline-primary btn-sm w-100"
    :class="addon"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  white: Boolean
})

const addon = computed(() => {
  return {
    'text-light': props.white
  }
})
</script>
