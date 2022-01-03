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
    <div class="container">
      <div v-show="mapShow" id="station-map" class="flex-grow-1 w-100"></div>
      <div v-show="!mapShow">
        <h3 v-if="state.pending" class="mt-5">
          <Loading />
        </h3>
        <h3 v-else-if="state.error" class="mt-5 text-center text-light">
          {{ state.error }}
        </h3>
        <perfect-scrollbar v-else>
          <h4 class="fs-6 text-light mt-5">
            {{ station.StationName.Zh_tw }}
          </h4>
          <ul class="list-group">
            <li
              v-for="(stop, i) in station.Stops"
              :key="stop.StopID"
              class="list-group-item list-group-item-action"
              :class="{ 'bg-secondary': idx % 2 === 0 }"
            >
              <router-link
                :to="{
                  name: 'RoutePage',
                  params: { city: props.city, routeName: stop.RouteName.Zh_tw }
                }"
                class="d-block link-primary text-decoration-none"
              >
                {{ stop.RouteName.Zh_tw }}
                <p v-if="route.DepartureStopNameZh" class="text-light fs-7">
                  {{ route.DepartureStopNameZh }}
                  <span class="text-primary mx-1">往</span>
                  {{ route.DestinationStopNameZh }}
                </p>
              </router-link>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
  <div class="row">
    <!-- 地圖 -->
    <div class="col-md-7 pb-4">
      <div id="station-map" class="map"></div>
    </div>
    <!-- 站序與預估時間 -->
    <div class="col-md-5">
      <ul class="nav nav-tabs">
        <li v-for="(item, i) in state.stationGroup" :key="i" class="nav-item">
          <button
            class="nav-link"
            :class="{ active: activeItem === item.StationID }"
            @click="setTab(item.StationID)"
          >
            {{ getBearingLabel(item.Bearing) }}
          </button>
        </li>
      </ul>
      <h4 v-if="state.error" class="p-3">{{ state.error }}</h4>
      <div v-else class="tab-content">
        <div
          v-for="(item, i) in state.stationGroup"
          :key="i"
          class="tab-pane"
          :class="{ active: activeItem === item.StationID }"
        >
          <div class="list-group">
            <router-link
              v-for="(stop, idx) in item.Stops"
              :key="idx"
              :to="{
                name: 'RoutePage',
                params: {
                  city: getCity(item.LocationCityCode),
                  routeName: stop.RouteName.Zh_tw
                }
              }"
              class="
                list-group-item list-group-item-action
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ stop.RouteName.Zh_tw }}
              <span class="badge" :class="stop.BgColor">{{
                stop.TimeLabel
              }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from 'vue'
import Loading from '@/components/loading.vue'
import logo from '@/components/logo.vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity, getBearingLabel } from '@/composables/useUtilities'

const props = defineProps({
  city: String,
  stationId: String
})

const mapShow = ref(false)
const mapHasShown = ref(false)
const { state } = bus
const station = toRef(state, 'station')

bus.fetchStationGroup(props.city, props.groupId).then(() => {
  activeItem.value = state.stationGroup[0].StationID
  stationName.value = state.stationGroup[0].StationName.Zh_tw
})
</script>
