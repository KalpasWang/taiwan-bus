<template>
  <div class="bg-dark vh-100 d-flex flex-column" data-testid="station-page">
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
      data-testid="station-map"
      id="station-map"
      class="flex-grow-1"
    >
      <h3
        v-if="state.hasError || mapHasError"
        class="mt-5 text-center position-relative z-900"
        >{{ state.errorMsg || '對不起，發生錯誤...' }}</h3
      >
    </div>
    <!-- 站牌列表 -->
    <div v-show="!mapShow" class="flex-grow-1 container">
      <h3 v-if="state.isLoading" class="mt-5">
        <Loading data-testid="loader" />
      </h3>
      <h3
        v-else-if="state.hasError"
        class="mt-5 text-center text-light position-relative z-900"
      >
        {{ state.errorMsg || '對不起，發生錯誤...' }}
      </h3>
      <div class="overflow-auto" v-else>
        <!-- 顯示站牌名稱與方向 -->
        <h4 class="h5 text-center text-light mt-5">
          {{ state.station?.StationName?.Zh_tw }}({{
            getBearingLabel(state.station.Bearing)
          }})
        </h4>
        <ul class="list-group">
          <li
            v-for="(route, i) in state.station.routes"
            :key="route.RouteUID"
            class="list-group-item list-group-item-action"
            :class="{ 'bg-secondary': i % 2 === 0 }"
          >
            <!-- 每個站牌可以連結到公車路線 -->
            <router-link
              :to="getlinkConfig(route)"
              class="d-block link-primary text-decoration-none"
            >
              {{ route.RouteName.Zh_tw }}
              <p class="text-light fs-7">
                <span class="text-primary mx-1">往</span>
                {{ route.DestinationStopNameZh }}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import bus from '@/composables/bus'
import IconButton from '@/components/IconButton.vue'
import Loading from '@/components/Loading.vue'
import Logo from '@/components/Logo.vue'
import { getBearingLabel } from '@/composables/utilities'
import backIcon from '@/assets/back.svg'
import mapIcon from '@/assets/map.svg'

const props = defineProps({
  city: String,
  stationId: String
})

const { city, stationId } = props
const router = useRouter()
const { state } = bus
const getStationAndRoutes = bus.useStation()
const { map, isMapReady, initMap, renderStationMap } = bus.useStationMap()
const mapShow = ref(false)
const mapIsDrawed = ref(false)
const mapHasError = ref(false)
const mapErrorMsg = ref('')

// 切換 map 的顯示與隱藏
const toggleMap = async () => {
  try {
    mapShow.value = !mapShow.value
    if (mapShow.value && !mapIsDrawed.value) {
      await nextTick()
      await initMap('station-map')
      mapIsDrawed.value = true
      renderStationMap()
    }
  } catch (error) {
    mapHasError.value = true
    mapErrorMsg.value = error.message
  }
}

function getlinkConfig(route) {
  const name = route.City ? 'RoutePage' : 'InterCityRoutePage'
  const city = route.City
  const routeName = route.RouteName.Zh_tw
  return {
    name,
    params: {
      routeName,
      ...(city && { city })
    }
  }
}

getStationAndRoutes(stationId, city)
</script>
