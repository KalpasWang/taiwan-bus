<template>
  <button
    type="button"
    role="button"
    :title="title"
    class="btn btn-outline-primary border-0"
  >
    <img :src="imgUrl" :alt="title" height="23" />
  </button>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: ''
  },
  title: {
    type: String,
    required: true,
    default: '按鈕'
  }
})
</script>

<style lang="scss" scoped>
img {
  transition: all 0.15s ease-in-out;
}
.btn:hover img {
  filter: brightness(15%);
}
</style>
