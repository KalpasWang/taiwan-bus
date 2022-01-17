<template>
  <img :src="loadingIconUrl" :width="width" alt="loading..." />
</template>

<script setup>
import loadingIconUrl from '@/assets/loading.svg'

const props = defineProps({
  width: {
    type: 'String',
    default: '70'
  }
})
const { width } = props
</script>
