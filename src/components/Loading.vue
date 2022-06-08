<template>
  <div class="text-center">
    <img :src="loadingIcon" :width="width" alt="loading..." />
  </div>
</template>

<script setup>
import loadingIcon from '@/assets/loading.svg'

const props = defineProps({
  width: {
    type: Number,
    default: 70
  }
})
const { width } = props
</script>
