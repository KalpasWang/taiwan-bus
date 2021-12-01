<template>
  <div class="container vh-100">
    <HeaderSearch tyype="city" />
    <div class="position-relative h-100">
      <h4 v-if="input.city.CityName" class="fs-6 text-light mt-5">
        {{ input.city.CityName }}
      </h4>
      <h4 v-else class="fs-7 text-light mt-5">請先選擇縣市</h4>
      <KeyBoard type="city" class="position-absolute w-100 bottom-0" />
    </div>
  </div>
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
import KeyBoard from '@/components/KeyBoard.vue'
import bus from '@/composables/useCityBus'
import input from '@/composables/useInput'

const { state } = bus
const { routeName } = input
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
