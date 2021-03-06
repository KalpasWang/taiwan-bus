<template>
  <div class="bg-dark vh-100 d-flex flex-column">
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
    </div>
    <!-- 地圖 -->
    <div v-show="mapShow" id="station-map" class="flex-grow-1"></div>
    <!-- 站牌列表 -->
    <div v-show="!mapShow" ref="routesList" class="flex-grow-1 container">
      <h3 v-if="state.pending" class="mt-5">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <!-- 使用套件取代 scrollbar -->
      <perfect-scrollbar v-else>
        <!-- 顯示站牌名稱與方向 -->
        <h4 class="fs-6 text-light mt-5">
          {{ station.StationName.Zh_tw }}({{
            getBearingLabel(station.Bearing)
          }})
        </h4>
        <ul class="list-group">
          <li
            v-for="(route, i) in station.PassThrough"
            :key="route.RouteUID"
            class="list-group-item list-group-item-action"
            :class="{ 'bg-secondary': i % 2 === 0 }"
          >
            <!-- 每個站牌可以連結到公車路線 -->
            <router-link
              :to="{
                name: 'InterCityRoutePage',
                params: {
                  routeName: route.RouteName.Zh_tw
                }
              }"
              class="d-block link-primary text-decoration-none"
            >
              {{ route.RouteName.Zh_tw }}
              <p class="text-light fs-7">
                <span class="text-primary mx-1">往</span>
                {{ route.finalStop.StopName.Zh_tw }}
              </p>
            </router-link>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/loading.vue'
import logo from '@/components/logo.vue'
import cityBus from '@/composables/useCityBus'
import intercityBus from '@/composables/useInterCityBus'
import map from '@/composables/useMap'
import { getBearingLabel } from '@/composables/useUtilities'
import backIcon from '@/assets/back.svg'
import mapIcon from '@/assets/map.svg'

const props = defineProps({
  city: String,
  stationId: String
})

const { city, stationId } = props
const router = useRouter()
const mapShow = ref(false)
const routesList = ref(null)
let state = { pending: true }
let station = null

// 切換 map 的顯示與隱藏
const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
  if (mapShow.value) {
    nextTick(() => {
      map.mapInit('station-map').then(() => {
        map.drawStationMarker(station)
      })
    })
  }
}

if (city === 'intercity') {
  intercityBus.fetchStation(stationId)
  state = intercityBus.state
  station = toRef(state, 'station')
} else {
  cityBus.fetchStation(city, stationId)
  state = cityBus.state
  station = toRef(state, 'station')
}

onMounted(() => {
  // set scroll region height
  const height = routesList.value.getBoundingClientRect().height + 'px'
  document.documentElement.style.setProperty('--h', height)
})
</script>
