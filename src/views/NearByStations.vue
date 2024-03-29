<template>
  <div class="bg-dark vh-100 d-flex flex-column" data-testid="nearby">
    <!-- Header -->
    <div class="header-shadow bg-dark">
      <div
        class="container d-flex justify-content-between align-items-center px-3 py-4"
      >
        <IconButton
          @click="mapShow ? toggleMap() : router.go(-1)"
          :imgUrl="backIcon"
          title="回上一頁"
        />
        <Logo />
        <div>
          <IconButton
            v-if="!mapShow"
            @click="toggleMap()"
            :imgUrl="mapIcon"
            title="地圖"
          />
        </div>
      </div>
    </div>
    <!-- 地圖 -->
    <div
      v-show="mapShow"
      data-testid="nearby-map"
      id="nearby-map"
      class="flex-grow-1"
    >
      <h3
        v-if="state.hasError || mapHasError"
        class="mt-5 text-center text-light position-relative z-900"
        >對不起，發生錯誤...</h3
      >
    </div>
    <!-- 站位列表 -->
    <div v-show="!mapShow" class="flex-grow-1 container overflow-auto">
      <h3 v-if="state.isLoading" class="mt-5">
        <Loading data-testid="loader" />
      </h3>
      <h3
        v-else-if="state.hasError"
        class="mt-5 text-center position-relative z-900"
        >對不起，發生錯誤...</h3
      >
      <ul v-else class="list-group" data-testid="nearby-list">
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
                city:
                  getCityByCityCode(station.StationUID.slice(0, 3)) ||
                  'intercity',
                stationId: station.StationID
              }
            }"
            class="d-block link-primary text-decoration-none"
            :data-testid="`station-link${i + 1}`"
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
                  <span v-for="(stop, i) in station.Stops" :key="stop.StopID"
                    >{{ stop.RouteName.Zh_tw
                    }}<span v-if="i < station.Stops.length - 1">, </span>
                  </span>
                </p>
              </div>
              <p>{{ station.Distance }} 公尺</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/Loading.vue'
import Logo from '@/components/Logo.vue'
import IconButton from '@/components/IconButton.vue'
import backIcon from '@/assets/back.svg'
import mapIcon from '@/assets/map.svg'
import { useNearBy, useNearByMap, state } from '@/composables/bus'
import { getCityByCityCode, getBearingLabel } from '@/composables/utilities'

const router = useRouter()
const watchNearBy = useNearBy()
const { map, isMapReady, initMap, renderNearByMap } = useNearByMap()

const mapShow = ref(false)
const mapIsDrawed = ref(false)
const mapHasError = ref(false)
const mapErrorMsg = ref('')

const clearWatch = watchNearBy(500)

// 切換 map 的顯示與隱藏
const toggleMap = async () => {
  try {
    mapShow.value = !mapShow.value
    if (mapShow.value && !mapIsDrawed.value) {
      await nextTick()
      await initMap('nearby-map')
      mapIsDrawed.value = true
      renderNearByMap()
    }
  } catch (error) {
    mapHasError.value = true
    mapErrorMsg.value = error.message
  }
}

watch(
  () => state.userPosition,
  () => {
    renderNearByMap()
  }
)

onUnmounted(() => {
  clearWatch()
})
</script>
