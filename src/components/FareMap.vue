<template>
  <div>票價查詢</div>
</template>

<script setup>
defineProps({
  routeName: {
    type: String,
    required: true,
    default: ''
  },
  direction: {
    type: String,
    required: true,
    default: 'forward'
  }
})
</script>

<style lang="scss" scoped></style>
