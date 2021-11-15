<template>
  <h1>{{ stationName }}</h1>
  <h4 v-if="state.pending">Loading...</h4>
  <h4 v-else-if="state.error">發生錯誤</h4>
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
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'
import { getCity, getBearingLabel } from '@/composables/useUtilities'

const props = defineProps({
  city: String,
  groupId: String
})

const activeItem = ref('')
const stationName = ref('')
const { state } = bus

const setTab = (tabName) => {
  activeItem.value = tabName
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
