<template>
  <button
    type="button"
    role="button"
    :title="title"
    class="btn btn-secondary btn-lg rounded-0 px-7 fs-6"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '按鈕'
  }
})
</script>
