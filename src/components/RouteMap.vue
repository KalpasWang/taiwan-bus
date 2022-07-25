<template>
  <div class="h-100" id="route-map"></div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import useEventBus from '@/composables/useEventBus'
import { useRouteMap, useRouteMapInfo } from '@/composables/bus'

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

const bus = useEventBus('timer')
//  地圖資料與 fetch 地圖資料的函式
const { mapInfo, fetchNewMapInfo } = useRouteMapInfo(
  props.routeName,
  props.city
)
// 建立 leaflet 地圖函式與更新公車/客運路線地圖函式
const { initMap, renderRouteMap } = useRouteMap('route-map')

const routeDirectionInfo = computed(() => {
  return props.direction === 'forward' ? mapInfo.forward : mapInfo.backward
})

async function updateInfoAndMap() {
  await fetchNewMapInfo()
  renderRouteMap(routeDirectionInfo.value)
}

bus.on(updateInfoAndMap)
await fetchNewMapInfo()

onMounted(async () => {
  await initMap()
  renderRouteMap(routeDirectionInfo.value)
})

onUnmounted(() => {
  bus.off(updateInfoAndMap)
})
</script>
