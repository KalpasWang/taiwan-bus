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
        @click="toggleMap()"
        :src="mapIcon"
        alt="地圖"
        title="地圖"
        role="button"
        width="23"
      />
    </TabsHeader>
    <!-- 預估到站時間 -->
    <div v-show="mapShow" id="stops-map" class="flex-grow-1"></div>
    <div v-show="!mapShow" class="flex-grow-1 container overflow-auto">
      <h3 v-if="error" class="mt-5 text-center">
        {{ error }}
      </h3>
      <div v-else>
        <keep-alive>
          <Suspense>
            <RealTimeArrivalInfo
              :routeName="props.routeName"
              :city="props.city"
              :direction="direction"
            />

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
import { ref, watch, provide, nextTick, onErrorCaptured } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import Loading from '@/components/Loading.vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import mapIcon from '@/assets/map.svg'

const props = defineProps({
  city: String,
  routeName: String
})

const direction = ref('forward')
const error = ref(null)
const forwardStopName = ref('去程')
const backwardStopName = ref('回程')
const mapShow = ref(false)
const mapHasShown = ref(false)
const { state } = bus

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

const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
}

const setDirection = (newDirection) => {
  direction.value = newDirection
}

onErrorCaptured((e) => {
  error.value = e.message
})
</script>
