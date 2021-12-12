<template>
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
      <img @click="" :src="mapIconUrl" alt="地圖" role="button" width="23" />
    </div>
    <div class="row">
      <div class="col tab active pb-3 text-center position-relative">
        <span class="text-primary">往</span> {{ forwardLabel }}
      </div>
      <div class="col tab pb-3 text-center position-relative">
        <span class="text-primary">往</span> {{ backwardLabel }}
      </div>
    </div>
  </div>
  <!-- 預估到站時間 -->
  <perfect-scrollbar>
    <div class="bg-secondary">
      <div class="container">
        <p class="pt-4 mb-0 text-end text-primary ls-05">
          *於 {{ updateTime }} 秒前更新
        </p>
        <ul class="list-unstyled">
          <li
            v-for="(item, i) in state.forwardStopsList"
            :key="i"
            class="py-2 flex-between"
          >
            <div
              class="flex-center time-label"
              :class="[item.border ? 'label-border' : '', item.BgColor]"
            >
              <span :class="item.Color">{{ item.TimeLabel }}</span>
            </div>
            <div v-if="i > 0" class="circle"></div>
            <div v-else class="circle noafter"></div>
          </li>
        </ul>
      </div>
    </div>
  </perfect-scrollbar>
  <p>{{ updateTime }}秒前更新</p>
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
            <router-link
              v-for="stop in state.forwardStopsList"
              :key="stop.StopID"
              :to="{
                name: 'StationPage',
                params: {
                  city: getCity(stop.LocationCityCode),
                  groupId: stop.StationGroupID
                }
              }"
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
            </router-link>
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

const props = defineProps({
  city: String,
  routeName: String
})

const router = useRouter()
const activeItem = ref('forward')
const updateTime = ref(0)
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
  map.mapInit('stops-map')
  await bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
  map.drawStopsPathAndMarkers(state.forwardStopsList)
  timer = setInterval(() => {
    if (updateTime.value >= 60) {
      updateTime.value = '更新中'
      bus
        .fetchStopsAndBusArrivalTime(props.city, props.routeName)
        .then(() => (updateTime.value = 0))
    } else {
      updateTime.value = updateTime.value + 1
    }
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style lang="scss">
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
  // background: $dark;
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

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -52px;
    width: 1.4px;
    height: 51px;
    background: $primary;
    box-shadow: 0px 0px 5px $primary;
  }

  &.noafter::after {
    width: 0;
    height: 0;
  }
}
</style>
