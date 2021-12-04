<template>
  <div class="container vh-100 d-flex flex-column">
    <HeaderSearch type="city" />
    <div class="flex-grow-1 overflow-auto">
      <h4 v-if="!inputs.city.CityName" class="fs-7 text-light mt-5">
        請先選擇縣市
      </h4>
      <h3 v-if="state.pending" class="mt-5 text-center text-light">
        Loading...
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <div v-else class="overflow-auto">
        <ul class="list-group">
          <li
            v-for="route in state.routesList"
            :key="route.RouteUID"
            class="list-group-item list-group-item-action list-group-item-dark"
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
    </div>
    <KeyBoard type="city" class="position-relative" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import bus from '@/composables/useCityBus'
import input from '@/composables/useInput'

const { state } = bus
const { inputs } = input

const watchCB = () => {
  if (!inputs.city.City) {
    alert('set city')
  } else {
    bus.fetchRoutesByCityAndRouteName(inputs.city.City, inputs.routeName)
  }
}

watch(() => inputs.routeName, watchCB)

watch(() => inputs.city, watchCB)

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
