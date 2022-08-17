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
  }
})

const { stages, fetchData, getStageFare } = useRouteFare(props.routeName)
await fetchData()
// const fares = getStageFare()
</script>

<style lang="scss" scoped></style>
