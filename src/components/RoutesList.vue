<template>
  <div>
    <h4 v-if="cityName" class="fs-6 text-light mt-5">
      {{ cityName }}
    </h4>
    <ul class="list-group">
      <li
        v-for="(route, idx) in routes"
        :key="route.RouteName.Zh_tw"
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
          <h6 class="mb-0" v-if="route.IsSubRoute">
            {{ route.SubRouteName.Zh_tw }}
          </h6>
          <h6 class="mb-0" v-else>{{ route.RouteName.Zh_tw }}</h6>
          <p v-if="type === 'city'" class="text-light fs-7">
            {{ route.DepartureStopNameZh }}
            <span class="text-primary mx-1">往</span>
            {{ route.DestinationStopNameZh }}
          </p>
          <div v-else class="text-light fs-7">
            {{ route.Headsign }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoutes } from '@/composables/city'

defineProps({
  type: {
    type: String,
    required: true,
    default: 'city'
  },
  city: {
    type: String,
    required: false
  },
  routeName: {
    type: String,
    required: true,
    default: ''
  }
})

const loading = ref(false)
const error = ref(null)
const { fetchTopRoutes, fetchRemaingRoutes, routes, isEnd } = useRoutes()

watch([routeName, city], async ([newRouteName, newCity]) => {
  try {
    loading.value = true
    await fetchTopRoutes(newRouteName, newCity)
    error.value = null
    loading.value = false
  } catch (e) {
    error.value = e.message
    loading.value = false
  }
})

const getParams = (route) => {
  const params = { routeName: route.RouteName.Zh_tw }
  if (type === 'city') {
    params.city = route.City
  }
  return params
}
</script>
