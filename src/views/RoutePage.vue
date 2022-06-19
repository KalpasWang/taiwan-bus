<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
    <!-- Header -->
    <div class="header-shadow bg-dark">
      <div class="d-flex justify-content-between align-items-center px-3 py-4">
        <img
          @click="router.go(-1)"
          :src="backIcon"
          alt="回上一頁"
          role="button"
          width="6"
        />
        <logo />
        <img
          @click="toggleMap()"
          :src="mapIcon"
          :class="{ 'map-active': mapShow }"
          alt="地圖"
          role="button"
          width="23"
        />
      </div>
      <div class="container">
        <div class="row">
          <div
            @click="setTab('forward')"
            class="col tab pb-3 text-center position-relative"
            :class="{ active: activeTab === 'forward' }"
            role="button"
          >
            <span class="text-primary">往</span> {{ forwardLabel }}
          </div>
          <div
            @click="setTab('backward')"
            class="col tab pb-3 text-center position-relative"
            :class="{ active: activeTab === 'backward' }"
            role="button"
          >
            <span class="text-primary">往</span> {{ backwardLabel }}
          </div>
        </div>
      </div>
    </div>
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
import { computed, ref, watch, provide, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import logo from '@/components/Logo.vue'
import Loading from '@/components/Loading.vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import backIcon from '@/assets/back.svg'
import mapIcon from '@/assets/map.svg'

const props = defineProps({
  city: String,
  routeName: String
})

const router = useRouter()

const activeTab = ref('forward')
// const stopsList = ref(null)
const mapShow = ref(false)
const mapHasShown = ref(false)
const { state } = bus

// 取得目前要顯示的 stops of route
const currentStops = computed(() => {
  if (activeTab.value === 'forward') {
    return state.forwardStopsList
  }
  if (activeTab.value === 'backward') {
    return state.backwardStopsList
  }
})

// 取得新 stops 狀態
const fetchNewStops = async () => {
  await bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
}

provide('stops', { currentStops, fetchNewStops })

const forwardLabel = computed(() => {
  const len = state.forwardStopsList.length
  if (len === 0) {
    return '去程'
  }
  const finalStop = state.forwardStopsList[len - 1].StopName.Zh_tw
  return finalStop
})

const backwardLabel = computed(() => {
  const len = state.backwardStopsList.length
  if (len === 0) {
    return '返程'
  }
  const finalStop = state.backwardStopsList[len - 1].StopName.Zh_tw
  return finalStop
})

// map切換與tab切換時決定要繪製的地圖
watch([mapShow, activeTab], (newVal) => {
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

const setTab = (tabName) => {
  activeTab.value = tabName
}

const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
}

// fetch 公車站牌與預估到達時間
bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom-variables';

.map-active {
  filter: hue-rotate(48deg) saturate(97%) brightness(58%);
}

.tab {
  &::after {
    content: '';
    width: 100%;
    height: 2.43px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50px;
    background: transparent;
    box-shadow: none;
  }

  &.active::after {
    background: $primary;
    box-shadow: 0px 0px 6px $primary, 0px 0px 2px $primary;
  }
}

.time-label {
  min-width: 79px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
}

.label-border {
  border: 1px solid $primary;
  box-shadow: 0px 0px 5px $primary;
}

.station-badge {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: $secondary;
  border: 2px solid $primary;
  z-index: 20;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -52px;
    width: 1.4px;
    height: 51px;
    background: $primary;
    // box-shadow: 0px 0px 5px $primary;
    z-index: -1;
  }

  &.active {
    background: $primary;
  }

  &.noafter::after {
    width: 0;
    height: 0;
  }
}

.plate {
  color: $primary;
  font-style: 14px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 12px;
  }
}
</style>
