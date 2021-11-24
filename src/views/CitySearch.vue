<template>
  <HeaderSearch />
  <select v-model="selectedCity" class="form-select">
    <option value="" disabled selected>選擇縣市</option>
    <option v-for="city in state.citysList" :key="city.City" :value="city.City">
      {{ city.CityName }}
    </option>
  </select>
  <input
    v-model="busInput"
    type="text"
    class="form-control"
    placeholder="搜尋公車路線"
  />
  <input @click="onSubmit()" type="submit" class="btn btn-primary" />
  <h3 v-if="state.pending" class="mt-5 text-center">Loading...</h3>
  <h3 v-else-if="state.error" class="mt-5 text-center">{{ state.error }}</h3>
  <div v-else>
    <ul class="list-group">
      <li
        v-for="route in state.routesList"
        :key="route.RouteUID"
        class="list-group-item list-group-item-action"
      >
        <router-link
          :to="{
            name: 'RoutePage',
            params: { city: route.City, routeName: route.RouteName.Zh_tw }
          }"
          class="d-block link-primary text-decoration-none"
        >
          {{ route.RouteName.Zh_tw }}
          <p v-if="route.DepartureStopNameZh" class="text-secondary">
            {{ route.DepartureStopNameZh }} -
            {{ route.DestinationStopNameZh }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import bus from '@/composables/useCityBus'

const { state } = bus
const selectedCity = ref('')
const busInput = ref('')
// console.log(state)

const onSubmit = () => {
  console.log(selectedCity.value)
  console.log(busInput.value)
  if (selectedCity.value === '') {
    alert('請選擇縣市')
  } else {
    bus.fetchRoutesByCityAndRouteName(selectedCity.value, busInput.value)
  }
}
</script>

<style></style>
