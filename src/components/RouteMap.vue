<template>
  <div class="h-100 d-flex flex-column">
    <TabsHeader @setDirection="setDirection" @back="emit('back')"></TabsHeader>
    <div class="position-relative flex-grow-1">
      <div id="route-map" ref="map" class="h-100"></div>
      <UpdateTimer class="position-absolute top-0 end-0 z-400" />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onUnmounted,
  watch,
  inject,
  onMounted,
  nextTick
} from 'vue'
import useEventBus from '@/composables/useEventBus'
import { useRouteMap, useRouteMapInfo } from '@/composables/bus'
import TabsHeader from './TabsHeader.vue'
import UpdateTimer from './UpdateTimer.vue'

const eventBus = useEventBus('timer')
const emit = defineEmits(['back'])
const { routeName, city } = inject('busLabel')

const direction = ref('forward')
const map = ref(null)
//  地圖資料與 fetch 地圖資料的函式
const { mapInfo, fetchNewMapInfo } = useRouteMapInfo(routeName, city)
// 建立 leaflet 地圖函式與更新公車/客運路線地圖函式
const { initMap, renderRouteMap, isMapReady } = useRouteMap('route-map')

const routeDirectionInfo = computed(() => {
  return direction.value === 'forward' ? mapInfo.forward : mapInfo.backward
})

const setDirection = (newDirection) => {
  direction.value = newDirection
}

watch(routeDirectionInfo, (value) => {
  renderRouteMap(value)
})

async function updateInfoAndMap() {
  await fetchNewMapInfo()
  renderRouteMap(routeDirectionInfo.value)
}

eventBus.on(updateInfoAndMap)
await fetchNewMapInfo()

onMounted(() => {
  nextTick(async () => {
    if (map.value && !isMapReady.value) {
      await initMap()
      renderRouteMap(routeDirectionInfo.value)
    }
  })
})

onUnmounted(() => {
  eventBus.off(updateInfoAndMap)
})
</script>
