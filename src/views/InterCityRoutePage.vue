<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
    <!-- Header -->
    <TabsHeader
      @setDirection="setDirection"
      @back="switchComponent('RealTimeArrivalInfo')"
      :routeName="props.routeName"
      :forwardLabel="forwardStopName"
      :backwardLabel="backwardStopName"
      :isSubview="cIndex !== 'RealTimeArrivalInfo'"
    >
      <img
        @click="switchComponent('FareMap')"
        :src="fareIcon"
        class="pe-3"
        alt="票價查詢"
        title="票價查詢"
        role="button"
        height="23"
      />
      <img
        @click="switchComponent('TimeTable')"
        :src="timetableIcon"
        class="pe-3"
        alt="時刻表"
        title="時刻表"
        role="button"
        height="23"
      />
      <img
        :src="mapIcon"
        @click="switchComponent('RouteMap')"
        alt="地圖"
        title="地圖"
        role="button"
        height="23"
      />
    </TabsHeader>
    <!-- 預估到站時間 -->
    <div class="flex-grow-1 overflow-auto">
      <div v-if="error" class="container">
        <h3 class="mt-5 text-center text-light">
          {{ error }}
        </h3>
      </div>
      <div v-else :class="mapClass">
        <keep-alive>
          <Suspense>
            <component
              :is="children[cIndex]"
              :routeName="props.routeName"
              :direction="direction"
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
import { computed, ref, provide, onErrorCaptured } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import TimeTable from '@/components/TimeTable.vue'
import FareMap from '@/components/FareMap.vue'
import RouteMap from '@/components/RouteMap.vue'
import Loading from '@/components/Loading.vue'
import mapIcon from '@/assets/map.svg'
import timetableIcon from '@/assets/timetable.svg'
import fareIcon from '@/assets/fare.svg'

const props = defineProps({
  routeName: String
})
const direction = ref('forward')
const error = ref(null)
const children = {
  RealTimeArrivalInfo,
  TimeTable,
  FareMap,
  RouteMap
}
const cIndex = ref('RealTimeArrivalInfo')
const mapClass = computed(() => ({
  container: cIndex.value !== 'RouteMap',
  'h-100': cIndex.value === 'RouteMap'
}))
const forwardStopName = ref('去程')
const backwardStopName = ref('回程')

provide('stopsLabel', { forwardStopName, backwardStopName })

// 動態切換元件，在即時公車路線、時刻表、票價查詢與地圖
// 等元件中切換
const switchComponent = (index) => {
  cIndex.value = index
}

const setDirection = (newDirection) => {
  direction.value = newDirection
}

onErrorCaptured((e) => {
  console.log(e)
  error.value = e.message
})
</script>
