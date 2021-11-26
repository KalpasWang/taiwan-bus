<template>
  <div class="btn btn-outline-primary d-block" :class="textWhite">
    <slot></slot>
  </div>
</template>
<script setup>
import { useSlots, computed } from 'vue'

const props = defineProps({
  white: Boolean
})
const slots = useSlots()

const textWhite = computed(() => {
  return {
    'text-light': props.white
  }
})
</script>

<style lang=""></style>
