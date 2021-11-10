<template>
  <select v-model="selectedCity" class="form-select">
    <option value="-1" selected>選擇縣市</option>
    <option v-for="city in state.citysList" :key="city.City" :value="city.City">
      {{ city.CityName }}
    </option>
  </select>
  <input
    ref="busInput"
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
          >{{ route.RouteName.Zh_tw }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import bus from '@/composables/useInterCityBus'

const { state } = bus
const selectedCity = ref(-1)

const onSubmit = async () => {
  await bus.fetchRoutesByCityAndRouteName(selectedCity.value)
  console.log(state.routesList)
}
</script>

<style></style>
