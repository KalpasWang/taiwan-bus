<template>
  <div class="text-center">
    <img :src="loadingIconUrl" :width="width" alt="loading..." />
  </div>
</template>

<script setup>
import loadingIconUrl from '@/assets/loading.svg'

const props = defineProps({
  width: {
    type: Number,
    default: 70
  }
})
const { width } = props
</script>
