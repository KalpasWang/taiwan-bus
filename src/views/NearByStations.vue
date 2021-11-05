<template>
  <div class="list-group">
    <router-link
      :to="{
        name: 'StationPage',
        params: {
          city: getCity(item.LocationCityCode),
          stationId: item.StationUID
        }
      }"
      v-for="item in busState.stationsList"
      :key="item.StaionUID"
      class="list-group-item list-group-item-action"
    >
      <h4>{{ item.StationName.Zh_tw }}{{ item.Bearing }}</h4>
    </router-link>
  </div>
</template>

<script setup>
import bus from '@/composables/useCityBus'

const { busState, error } = bus

const getCity = (code) => {
  // console.log(busState)
  const city = busState.citysList.find((item) => item.CityCode === code)
  return city.City
}

bus.fetchNearByStations(500)
</script>

<style lang=""></style>
