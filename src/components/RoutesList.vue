<template>
  <perfect-scrollbar>
    <h4 v-if="cityName" class="fs-6 text-light mt-5">
      {{ cityName }}
    </h4>
    <ul class="list-group">
      <li
        v-for="(route, idx) in routesList"
        :key="route.RouteUID"
        class="list-group-item list-group-item-action"
        :class="{ 'bg-secondary': idx % 2 === 0 }"
      >
        <router-link
          :to="{
            name: type === 'city' ? 'RoutePage' : 'InterCityRoutePage',
            params: getParams(route)
          }"
          class="d-block link-primary text-decoration-none"
        >
          <h6 class="mb-0 font-roboto" v-if="route.UseSubName">
            {{ route.SubRouteName.Zh_tw }}
          </h6>
          <h6 class="mb-0 font-roboto" v-else>{{ route.RouteName.Zh_tw }}</h6>
          <p v-if="route.DepartureStopNameZh" class="text-light fs-7">
            {{ route.DepartureStopNameZh }}
            <span class="text-primary mx-1">往</span>
            {{ route.DestinationStopNameZh }}
          </p>
          <div v-if="type === 'intercity-from-to'">
            <span
              v-for="(stop, i) in route.Stops"
              :key="i"
              class="text-light fs-7"
            >
              <span v-if="i !== 0" class="text-light fs-7"> — </span>
              {{ stop.StopName.Zh_tw }}
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </perfect-scrollbar>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  type: String,
  cityName: String
})
const { type, cityName } = props

const getParams = (route) => {
  if (type === 'city') {
    return { city: route.City, routeName: route.RouteName.Zh_tw }
  } else if (type.includes('intercity')) {
    return { routeName: route.RouteName.Zh_tw }
  } else {
    return {}
  }
}

const routesList = inject('routesList')
</script>
