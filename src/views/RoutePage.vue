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
        <router-link :to="{ name: 'Home' }">
          <img :src="logoUrl" alt="回首頁" class="logo-header-size" />
        </router-link>
        <img
          @click="setTab('map')"
          :src="mapIconUrl"
          alt="地圖"
          role="button"
          width="23"
        />
      </div>
      <div class="container">
        <div class="row">
          <div
            @click="setTab('forward')"
            class="col tab active pb-3 text-center position-relative"
            role="button"
          >
            <span class="text-primary">往</span> {{ forwardLabel }}
          </div>
          <div
            @click="setTab('backward')"
            class="col tab pb-3 text-center position-relative"
            role="button"
          >
            <span class="text-primary">往</span> {{ backwardLabel }}
          </div>
        </div>
      </div>
    </div>
    <!-- 預估到站時間 -->
    <div ref="stopsList" class="container flex-grow-1">
      <h3 v-if="state.pending" class="mt-5 text-center text-light">
        <img :src="loadingIconUrl" width="70" alt="loading..." />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <perfect-scrollbar v-else>
        <p
          v-if="timeAfterUpdate < 60"
          class="pt-4 mb-0 text-end text-primary ls-1"
        >
          *於 {{ timeAfterUpdate }} 前更新
        </p>
        <p v-else class="pt-4 mb-0 text-end text-primary ls-1">
          *更新中...
          <img :src="loadingIconUrl" width="25" alt="loading..." />
        </p>
        <ul class="list-unstyled">
          <li
            v-for="(item, i) in state.forwardStopsList"
            :key="i"
            class="py-2 flex-between"
          >
            <div class="d-flex justify-content-start align-items-center">
              <span
                class="flex-center time-label"
                :class="[item.Border ? 'label-border' : '', item.BgColor]"
              >
                <span :class="item.Color">{{ item.TimeLabel }}</span>
              </span>
              <span
                class="text-decoration-none fs-7 ls-1 ms-2"
                :class="item.LinkColor"
                >{{ item.StopName.Zh_tw }}</span
              >
            </div>
            <div v-if="i > 0" class="circle me-4"></div>
            <div v-else class="circle noafter me-4"></div>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>

  <div class="row">
    <!-- 地圖 -->
    <div class="col-md-7 pb-4">
      <div id="stops-map" class="map"></div>
    </div>
    <!-- 站序與預估時間 -->
    <div class="col-md-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button
            class="nav-link"
            :class="{ active: activeItem === 'forward' }"
            @click="setTab('forward')"
          >
            {{ forwardLabel }}
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            :class="{ 'show active': activeItem === 'backward' }"
            @click="setTab('backward')"
          >
            {{ backwardLabel }}
          </button>
        </li>
      </ul>
      <h4 v-if="state.error" class="p-3">{{ state.error }}</h4>
      <div v-else class="tab-content">
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeItem === 'forward' }"
        >
          <div class="list-group">
            <a
              v-for="stop in state.forwardStopsList"
              :key="stop.StopID"
              class="
                list-group-item list-group-item-action
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ stop.StopName.Zh_tw }}
              <span class="badge" :class="stop.Color">{{
                stop.TimeLabel
              }}</span>
            </a>
          </div>
        </div>
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeItem === 'backward' }"
        >
          <ul class="list-group">
            <li
              v-for="stop in state.backwardStopsList"
              :key="stop.StopID"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ stop.StopName.Zh_tw }}
              <span class="badge" :class="stop.Color">{{
                stop.TimeLabel
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity } from '@/composables/useUtilities'
import backIconUrl from '@/assets/back.svg'
import logoUrl from '@/assets/Logo.png'
import mapIconUrl from '@/assets/map.svg'
import loadingIconUrl from '@/assets/loading.svg'

const props = defineProps({
  city: String,
  routeName: String
})

const router = useRouter()
const activeItem = ref('forward')
const stopsList = ref(null)
const timeAfterUpdate = ref(0)
const { state } = bus
let timer = null

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

const setTab = (tabName) => {
  activeItem.value = tabName
}

onMounted(async () => {
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

  // 地圖初始化
  map.mapInit('stops-map')
  await bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
  map.drawStopsPathAndMarkers(state.forwardStopsList)
})

onUnmounted(() => clearInterval(timer))
</script>

<style lang="scss" scoped>
@import '../assets/scss/all.scss';

.map {
  height: 840px;
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
  padding: 8px;
  border-radius: 12px;
}

.label-border {
  border: 1px solid $primary;
  box-shadow: 0px 0px 5px $primary;
}

.circle {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: $secondary;
  border: 1.4px solid $primary;
  z-index: 20;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -52px;
    width: 1.4px;
    height: 51px;
    background: $primary;
    box-shadow: 0px 0px 5px $primary;
    z-index: -1;
  }

  &.noafter::after {
    width: 0;
    height: 0;
  }
}
</style>
