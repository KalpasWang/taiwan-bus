<template>
  <div class="h-100" id="route-map"></div>
</template>

<script setup>
import { useRouteMap, useRouteMapInfo } from '@/composables/bus'
import { computed, onMounted } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    required: true,
    default: 'forward'
  },
  routeName: {
    type: String,
    required: true,
    default: ''
  },
  city: {
    type: String,
    required: false
  }
})

const { mapInfo, fetchNewMapInfo } = useRouteMapInfo(
  props.routeName,
  props.city
)
const routeDirectionInfo = computed(() => {
  return props.direction === 'forward' ? mapInfo.forward : mapInfo.backward
})

await fetchNewMapInfo()
const { initMap } = useRouteMap('route-map', routeDirectionInfo)

onMounted(() => {
  initMap()
})
</script>
