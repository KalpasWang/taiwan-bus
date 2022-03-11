<template>
  <div class="bg-dark vh-100 d-flex flex-column">
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
            v-for="(stop, i) in station.destination"
            :key="stop.StopID"
            class="list-group-item list-group-item-action"
            :class="{ 'bg-secondary': i % 2 === 0 }"
          >
            <!-- 每個站牌可以連結到公車路線 -->
            <router-link
              :to="{
                name: 'RoutePage',
                params: {
                  city: props.citys[0],
                  routeName: stop.RouteName.Zh_tw
                }
              }"
              class="d-block link-primary text-decoration-none"
            >
              {{ stop.RouteName.Zh_tw }}
              <p class="text-light fs-7">
                <span class="text-primary mx-1">往</span>
                {{ stop.StopName.Zh_tw }}
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
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getBearingLabel } from '@/composables/useUtilities'
import backIconUrl from '@/assets/back.svg'
import mapIconUrl from '@/assets/map.svg'

const props = defineProps({
  citys: Array,
  stationId: String
})

const router = useRouter()
const mapShow = ref(false)
const routesList = ref(null)
const { state } = bus
const station = toRef(state, 'station')

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

bus.fetchStation(props.citys, props.stationId)

onMounted(() => {
  // set scroll region height
  const height = routesList.value.getBoundingClientRect().height + 'px'
  document.documentElement.style.setProperty('--h', height)
})
</script>
