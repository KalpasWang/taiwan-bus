<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
    <!-- Header -->
    <TabsHeader
      @setDirection="setDirection"
      :routeName="props.routeName"
      :forwardLabel="forwardStopName"
      :backwardLabel="backwardStopName"
    >
      <img
        @click="toggleFareInquiry()"
        :src="fareIcon"
        class="pe-3"
        alt="票價查詢"
        title="票價查詢"
        role="button"
        height="23"
      />
      <img
        @click="toggleTimeTable()"
        :src="timetableIcon"
        class="pe-3"
        alt="時刻表"
        title="時刻表"
        role="button"
        height="23"
      />
      <img
        @click="toggleMap()"
        :src="getMapIcon"
        alt="地圖"
        title="地圖"
        role="button"
        height="23"
      />
    </TabsHeader>
    <!-- 預估到站時間 -->
    <div v-show="mapShow" id="stops-map" class="flex-grow-1"></div>
    <div v-show="!mapShow" class="flex-grow-1 container overflow-auto">
      <h3 v-if="state.pending" class="mt-5 text-center">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <div v-else>
        <RealTimeArrivalInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, provide } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import Loading from '@/components/Loading.vue'
import bus from '@/composables/useInterCityBus'
import map from '@/composables/useMap'
import mapIcon from '@/assets/map.svg'
import mapActiveIcon from '@/assets/map-active.svg'
import timetableIcon from '@/assets/timetable.svg'
import fareIcon from '@/assets/fare.svg'

const props = defineProps({
  routeName: String
})
const { state } = bus
const direction = ref('forward')
const mapShow = ref(false)
const mapHasShown = ref(false)
const currentStops = computed(() =>
  direction.value === 'forward'
    ? state.forwardStopsList
    : state.backwardStopsList
)

// 取得新 stops 狀態
const fetchNewStops = async () => {
  await bus.fetchStopsAndBusArrivalTime(props.routeName)
}

provide('stops', { currentStops, fetchNewStops })

// 取得去程最後一站的名稱
const forwardStopName = computed(() => {
  const len = state.forwardStopsList.length
  if (len === 0) {
    return '去程'
  }
  return state.forwardStopsList[len - 1].StopName.Zh_tw
})

// 取得回程最後一站的名稱
const backwardStopName = computed(() => {
  const len = state.backwardStopsList.length
  if (len === 0) {
    return '返程'
  }
  return state.backwardStopsList[len - 1].StopName.Zh_tw
})

// map切換與tab切換時決定要繪製的地圖
watch([mapShow, direction], (newVal) => {
  const isMap = newVal[0]
  const tab = newVal[1]
  const stops =
    tab === 'forward' ? state.forwardStopsList : state.backwardStopsList
  const busList =
    tab === 'forward' ? state.forwardBusList : state.backwardBusList
  const shape =
    tab === 'forward' ? state.forwardRouteShape : state.backwardRouteShape
  if (isMap) {
    nextTick(() => {
      if (!mapHasShown.value) {
        // init map
        map.mapInit('stops-map')
        mapHasShown.value = true
      }
      map.drawStopsPathAndMarkers(stops, busList, shape)
    })
  }
})

// 根據地圖開啟與否決定用哪一個圖示
const getMapIcon = computed(() => (mapShow.value ? mapActiveIcon : mapIcon))

const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
}

const setDirection = (newDirection) => {
  direction.value = newDirection
}

// bus.fetchSchedule(props.routeName)
bus.fetchStopsAndBusArrivalTime(props.routeName)
</script>
