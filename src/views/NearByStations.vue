<template>
  <h1>附近站牌</h1>
  <p>5秒前更新</p>
  <h3 v-if="state.pending" class="mt-5 text-center">Loading...</h3>
  <h3 v-else-if="state.error" class="mt-5 text-center">{{ state.error }}</h3>
  <div v-else class="list-group">
    <router-link
      :to="{
        name: 'StationPage',
        params: {
          city: getCity(item.LocationCityCode),
          stationId: item.StationID
        }
      }"
      v-for="item in state.stationsList"
      :key="item.StaionUID"
      class="list-group-item list-group-item-action"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h4>{{ item.StationName.Zh_tw }}({{ item.BearingZh_tw }})</h4>
          <p>{{ item.Stops.length }} 個站牌</p>
        </div>
        <p>{{ item.Distance }} 公尺</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import bus from '@/composables/useCityBus'

const { state } = bus

const getCity = (code) => {
  // console.log(state)
  const city = state.citysList.find((item) => item.CityCode === code)
  return city.City
}

onMounted(() => {
  bus.fetchNearByStations(500)
})
</script>

<style lang=""></style>
