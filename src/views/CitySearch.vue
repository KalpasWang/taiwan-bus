<template>
  <select v-model="selectedCityModel" class="form-select">
    <option value="-1" selected>選擇縣市</option>
    <option v-for="city in citysList" :key="city.City" :value="city.City">
      {{ city.CityName }}
    </option>
  </select>
  <input
    ref="busInput"
    type="text"
    class="form-control"
    placeholder="搜尋公車路線"
  />
  <h3 v-if="error" class="mt-5 text-center">{{ error }}</h3>
  <div v-else>
    <ul class="list-group">
      <li
        v-for="route in cityRoutesList"
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

<script>
import { ref, computed, toRefs } from 'vue'
import bus from '@/composables/useCityBus'

export default {
  name: 'CitySearch',
  setup() {
    const { busState, fetchCityRoutes } = bus
    const selectedCity = ref(-1)
    // console.log(busState)

    const selectedCityModel = computed({
      get() {
        return selectedCity.value
      },
      set(value) {
        // console.log(value)
        if (value !== -1) {
          fetchCityRoutes(value)
        }
        selectedCity.value = value
      }
    })

    return {
      selectedCity,
      selectedCityModel,
      ...toRefs(busState)
    }
  }
}
</script>

<style></style>
