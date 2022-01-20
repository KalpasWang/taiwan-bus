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
        <!-- 顯示站牌名稱與方向 -->
        <h4 class="fs-6 text-light mt-5">
          {{ station.StationName.Zh_tw }}({{
            getBearingLabel(station.Bearing)
          }})
        </h4>
        <ul class="list-group">
          <li
            v-for="(station, i) in state.stationsList"
            :key="station.StationID"
            class="list-group-item list-group-item-action"
            :class="{ 'bg-secondary': i % 2 === 0 }"
          >
            <!-- 每個站牌可以連結到公車路線 -->
            <router-link
              :to="{
                name: 'StayionPage',
                params: {
                  city: getCity(station.LocationCityCode),
                  stationId: station.StationID
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
      <div v-else class="list-group">
        <router-link
          v-for="item in state.stationsList"
          :key="item.StationID"
          :to="{
            name: 'StationPage',
            params: {
              city: getCity(item.LocationCityCode),
              groupId: item.StationGroupID
            }
          }"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h4>{{ item.StationName.Zh_tw }}</h4>
              <p>{{ item.Stops.length }} 個站牌</p>
            </div>
            <p>{{ item.Distance }} 公尺</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/loading.vue'
import logo from '@/components/logo.vue'
import bus from '@/composables/useCityBus'
import { getCity } from '@/composables/useUtilities'

const router = useRouter()
const mapShow = ref(false)
const mapHasShown = ref(false)
const { state } = bus

onMounted(() => {
  bus.fetchNearByStations(500)
})
</script>

<style lang=""></style>
