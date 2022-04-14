<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
    <!-- Header -->
    <div class="header-shadow bg-dark">
      <div class="d-flex justify-content-between align-items-center px-3 py-4">
        <img
          @click="router.go(-1)"
          :src="backIconUrl"
          alt="回上一頁"
          role="button"
          width="6"
        />
        <logo />
        <img
          @click="toggleMap()"
          :src="mapIconUrl"
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
    <div v-show="!mapShow" ref="stopsList" class="flex-grow-1 container">
      <h3 v-if="state.pending" class="mt-5 text-center">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <div v-else class="position-relative overflow-hidden">
        <!-- 使用套件取代 scrollbar -->
        <perfect-scrollbar ref="ps">
          <!-- 每60秒更新一次 -->
          <p
            v-if="timeAfterUpdate < 60"
            class="me-4 pt-4 mb-0 text-end text-primary ls-1"
          >
            *於 {{ timeAfterUpdate }} 秒前更新
          </p>
          <p v-else class="me-4 pt-4 mb-0 text-end text-primary ls-1">
            *更新中...
            <Loading :width="25" class="d-inline-block" />
          </p>
          <!-- 所有站牌與公車預計抵達時間 -->
          <ul class="list-unstyled">
            <li
              v-for="(item, i) in currentStops"
              :key="i"
              class="py-2 flex-between"
            >
              <!-- 顯示預估到站時間badge與站牌名稱 -->
              <div class="d-flex justify-content-start align-items-center">
                <span
                  class="flex-center time-label"
                  :class="[item.Border ? 'label-border' : '', item.BgColor]"
                >
                  <span
                    :class="[
                      item.Color,
                      item.TimeLabel.length > 3 ? 'fs-8' : ''
                    ]"
                    >{{ item.TimeLabel }}</span
                  >
                </span>
                <!-- params 的 citys 包含站牌在city與公車路線所屬的city -->
                <router-link
                  :to="{
                    name: 'StationPage',
                    params: {
                      city: getCity(item.LocationCityCode),
                      stationId: item.StationID
                    }
                  }"
                  :class="item.LinkColor"
                  class="text-decoration-none fs-7 ls-1 ms-2"
                  >{{ i + 1 }}. {{ item.StopName.Zh_tw }}</router-link
                >
              </div>
              <div class="me-4 d-flex justify-content-end align-items-center">
                <img
                  v-if="item.accessible"
                  :src="wheelchairUrl"
                  alt="無障礙公車"
                />
                <span v-if="item.hasBus" class="plate">{{ item.plate }}</span>
                <div
                  v-if="item.hasBus && i > 0"
                  class="station-badge active"
                ></div>
                <div
                  v-else-if="item.hasBus && i === 0"
                  class="station-badge active noafter"
                ></div>
                <div v-else-if="i > 0" class="station-badge"></div>
                <div v-else class="station-badge noafter"></div>
              </div>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/components/logo.vue'
import Loading from '@/components/loading.vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity } from '@/composables/useUtilities'
import backIconUrl from '@/assets/back.svg'
import mapIconUrl from '@/assets/map.svg'
import wheelchairUrl from '@/assets/wheelchair.svg'

const props = defineProps({
  city: String,
  routeName: String
})

const router = useRouter()

const activeTab = ref('forward')
const stopsList = ref(null)
const ps = ref(null)
const timeAfterUpdate = ref(0)
const mapShow = ref(false)
const mapHasShown = ref(false)
const { state } = bus
let timer = null

// 取得目前要顯示的 stops of route
const currentStops = computed(() => {
  if (activeTab.value === 'forward') {
    return state.forwardStopsList
  }
  if (activeTab.value === 'backward') {
    return state.backwardStopsList
  }
})

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
  nextTick(() => {
    ps.value.$el.scrollTop = 0
  })
}

const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
}

// fetch 公車站牌與預估到達時間
bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)

onMounted(() => {
  // set scroll region height
  const height = stopsList.value.getBoundingClientRect().height + 'px'
  document.documentElement.style.setProperty('--h', height)

  // 每隔60秒 refresh 一次
  timer = setInterval(async () => {
    if (timeAfterUpdate.value >= 60) {
      await bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
      timeAfterUpdate.value = 0
    } else {
      const v = timeAfterUpdate.value
      timeAfterUpdate.value = v + 1
    }
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
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
