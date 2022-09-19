<template>
  <div class="h-100">
    <div v-if="loading" class="h-100 flex-center">
      <Loading />
    </div>
    <h4 v-else-if="error" class="h-100 flex-center text-light">
      {{ error }}
    </h4>
    <div v-else>
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
            <p v-else-if="route.Headsign" class="text-light fs-7">
              {{ route.Headsign }}
            </p>
            <p v-else class="text-light fs-7">
              {{ route.DepartureStopNameZh }}→{{ route.DestinationStopNameZh }}
            </p>
          </router-link>
        </li>
      </ul>
      <div v-if="!isEnd" class="h-6rem flex-center">
        <Loading v-if="isFetching" :width="40" />
        <button v-else @click="fetchMore" class="btn btn-primary"
          >載入更多</button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoutes } from '@/composables/bus'
import { getCityNameByEnName } from '@/composables/utilities'
import Loading from './Loading.vue'

const props = defineProps({
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
const isFetching = ref(false)
const { fetchNewRoutes, fetchRemainingRoutes, clearRoutes, routes, isEnd } =
  useRoutes()
const cityName = computed(() => getCityNameByEnName(props.city))

watchEffect(async () => {
  if (!props.routeName && !props.city) {
    clearRoutes()
    return
  }
  try {
    loading.value = true
    await fetchNewRoutes(props.routeName, props.city)
    error.value = null
    loading.value = false
  } catch (e) {
    error.value = e.message
    loading.value = false
  }
})

async function fetchMore() {
  isFetching.value = true
  await fetchRemainingRoutes()
  isFetching.value = false
}

const getParams = (route) => {
  const params = {
    routeName: route.RouteName.Zh_tw,
    ...(route.IsSubRoute && { subRouteName: route.SubRouteName.Zh_tw }),
    ...(props.type === 'city' && { city: route.City })
  }
  // if (route.IsSubRoute) {
  //   params.subRouteName = route.SubRouteName.Zh_tw
  // }
  // if (props.type === 'city') {
  //   params.city = route.City
  // }
  return params
}
</script>
