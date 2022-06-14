<template></template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import bus from '@/composables/useInterCityBus'

const props = defineProps({
  routeName: String
})
const { state } = bus

onMounted(() => {
  bus.fetchSchedule(props.routeName)
})
</script>

<style lang="scss"></style>
