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
    <div v-show="mapShow" id="stations-map" class="flex-grow-1"></div>
    <!-- 站位列表 -->
    <div v-show="!mapShow" ref="stationsList" class="flex-grow-1 container">
      <h3 v-if="state.pending" class="mt-5">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center">
        {{ state.error }}
      </h3>
      <!-- 使用套件取代 scrollbar -->
      <perfect-scrollbar v-else>
        <ul class="list-group">
          <li
            v-for="(station, i) in state.nearByStations"
            :key="station.StationID"
            class="list-group-item list-group-item-action"
            :class="{ 'bg-secondary': i % 2 === 0 }"
          >
            <!-- 每個站牌可以連結到公車路線 -->
            <router-link
              :to="{
                name: 'StationPage',
                params: {
                  citys: getCity(station.LocationCityCode),
                  stationId: station.StationID
                }
              }"
              class="d-block link-primary text-decoration-none"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <!-- 顯示站牌名稱與方向 -->
                  <h4 class="fs-6">
                    {{ station.StationName.Zh_tw }}({{
                      getBearingLabel(station.Bearing)
                    }})
                  </h4>
                  <p class="text-light fs-7">
                    {{ station.Stops.length }} 個站牌
                  </p>
                </div>
                <p>{{ station.Distance }} 公尺</p>
              </div>
            </router-link>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/loading.vue'
import logo from '@/components/logo.vue'
import backIconUrl from '@/assets/back.svg'
import mapIconUrl from '@/assets/map.svg'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity, getBearingLabel } from '@/composables/useUtilities'

const router = useRouter()
const mapShow = ref(false)
const stationsList = ref(null)
const { state } = bus

// 切換 map 的顯示與隱藏
const toggleMap = () => {
  const v = mapShow.value
  mapShow.value = !v
  if (mapShow.value) {
    nextTick(() => {
      map.mapInit('stations-map').then(() => {
        // unwrappiing
        const userPosition = state.userPosition
        const nearByStations = state.nearByStations
        map.drawNearByMarkers(userPosition, nearByStations)
      })
    })
  }
}

watch(
  () => state.nearByStations,
  (newPositions) => {
    // unwrapping
    const userPosition = state.userPosition
    map.redrawNearByMarkers(userPosition, newPositions)
  }
)

onMounted(() => {
  // set scroll region height
  const height = stationsList.value.getBoundingClientRect().height + 'px'
  document.documentElement.style.setProperty('--h', height)

  bus.fetchNearByStations(500)
})
</script>

<style lang=""></style>
