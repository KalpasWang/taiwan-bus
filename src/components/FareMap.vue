<template>
  <div>票價查詢</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouteFare } from '@/composables/bus'

const props = defineProps({
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

const { fareMap, fetchRouteFare } = useRouteFare(props.routeName)
await fetchRouteFare()
</script>

<style lang="scss" scoped></style>
