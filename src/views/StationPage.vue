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
  </div>
  <h1>{{ stationName }}</h1>
  <h4 v-if="state.pending">Loading...</h4>
  <h4 v-else-if="state.error">{{ state.error }}</h4>
  <div v-else class="row">
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
import { ref } from 'vue'
import logo from '@/components/logo.vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity, getBearingLabel } from '@/composables/useUtilities'

const props = defineProps({
  city: String,
  stationId: String
})

const activeTab = ref('')
const stationName = ref('')
const { state } = bus

const setTab = (tabName) => {
  activeTab.value = tabName
}

bus.fetchStationGroup(props.city, props.groupId).then(() => {
  activeItem.value = state.stationGroup[0].StationID
  stationName.value = state.stationGroup[0].StationName.Zh_tw
})
</script>

<style lang="scss">
.map {
  height: 840px;
}
</style>
