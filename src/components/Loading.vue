<template>
  <div class="text-center" data-testid="loader">
    <img :src="loadingIcon" :width="props.width" alt="loading..." />
  </div>
</template>

<script setup>
import loadingIcon from '@/assets/loading.svg'

const props = defineProps({
  width: {
    type: Number,
    required: false,
    default: 70
  }
})
</script>
