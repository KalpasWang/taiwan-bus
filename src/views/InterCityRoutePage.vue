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
        @click="switchComponent('fare')"
        :src="fareIcon"
        class="pe-3"
        alt="票價查詢"
        title="票價查詢"
        role="button"
        height="23"
      />
      <img
        @click="switchComponent('timetable')"
        :src="timetableIcon"
        class="pe-3"
        alt="時刻表"
        title="時刻表"
        role="button"
        height="23"
      />
      <img
        @click="toggleMap()"
        :src="mapIcon"
        alt="地圖"
        title="地圖"
        role="button"
        height="23"
      />
    </TabsHeader>
    <!-- 預估到站時間 -->
    <!-- <div v-show="mapShow" id="stops-map" class="flex-grow-1"></div> -->
    <div class="flex-grow-1 container overflow-auto">
      <!-- <h3 v-if="state.pending" class="mt-5 text-center">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3> -->
      <h3 v-if="error" class="mt-5 text-center text-light">
        {{ error }}
      </h3>
      <div v-else>
        <keep-alive>
          <Suspense>
            <component
              :is="children[cIndex]"
              v-bind="childrenProps"
            ></component>

            <template #fallback>
              <Loading class="mt-4" />
            </template>
          </Suspense>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, provide, onErrorCaptured } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import TimeTable from '@/components/TimeTable.vue'
import Loading from '@/components/Loading.vue'
import bus from '@/composables/useInterCityBus'
import map from '@/composables/useMap'
import mapIcon from '@/assets/map.svg'
import timetableIcon from '@/assets/timetable.svg'
import fareIcon from '@/assets/fare.svg'

const props = defineProps({
  routeName: String
})
const { state } = bus
const direction = ref('forward')
const error = ref(null)
const children = {
  arrival: RealTimeArrivalInfo,
  timetable: TimeTable
}
const childrenProps = computed(() => {
  return {
    ...(cIndex.value === 'arrival' && { direction: direction.value }),
    routeName: props.routeName
  }
})
const cIndex = ref('arrival')
const mapShow = ref(false)
const mapHasShown = ref(false)
const forwardStopName = ref('去程')
const backwardStopName = ref('回程')

provide('stopsLabel', { forwardStopName, backwardStopName })

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

// 動態切換元件，在即時公車路線、時刻表、票價查詢與地圖
// 等元件中切換
const switchComponent = (index) => {
  cIndex.value = index
}

const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
}

const setDirection = (newDirection) => {
  direction.value = newDirection
}

// bus.fetchStopsAndBusArrivalTime(props.routeName)

onErrorCaptured((e) => {
  console.log(e)
  error.value = e.message
})
</script>
