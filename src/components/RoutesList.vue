<template>
  <div ref="container" class="h-100">
    <h4
      v-if="props.type === 'city' && !props.city"
      class="fs-7 text-light px-3 pt-5"
    >
      請先選擇縣市
    </h4>
    <div v-else class="h-100">
      <h4 v-if="props.city" class="fs-6 text-light px-3 pt-5">
        {{ getCityName(props.city) }}
      </h4>
      <Loading v-if="isLoading" :width="70" />
      <h4 v-else-if="error" class="text-center text-light">
        {{ error }}
      </h4>
      <ul v-else class="list-group">
        <li
          v-for="(route, idx) in state.routes"
          :key="route.SubRouteID || route.RouteID"
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
      <div v-if="!isEnd" class="h-7rem flex-center">
        <Loading v-if="isFetching" :width="70" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchPostEffect, onMounted, onUnmounted } from 'vue'
import { state, useRoutes } from '@/composables/bus'
import { getCityName } from '@/composables/utilities'
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
    required: false
  },
  from: {
    type: String,
    required: false
  },
  to: {
    type: String,
    required: false
  }
})
const emit = defineEmits(['onScroll'])

const isLoading = ref(false)
const error = ref(null)
const container = ref(null)
const isFetching = ref(false)
const { fetchNewRoutes, fetchRemainingRoutes, clearRoutes, isEnd } = useRoutes(
  props.type
)

const arg1 = computed(() => {
  if (props.type.includes('from-to')) {
    return props.from
  }
  return props.routeName
})
const arg2 = computed(() => {
  if (props.type.includes('from-to')) {
    return props.to
  }
  return props.city
})

watchPostEffect(async () => {
  if (props.type === 'city' && !arg2.value) {
    clearRoutes()
    return
  }
  if (props.type.includes('from-to') && !arg1.value && !arg2.value) {
    clearRoutes()
    return
  }
  if (!arg1.value) {
    clearRoutes()
    return
  }
  try {
    isLoading.value = true
    await fetchNewRoutes(arg1.value, arg2.value)
    error.value = null
    isLoading.value = false
  } catch (e) {
    error.value = e.message
    console.error(e)
    isLoading.value = false
  }
})

async function checkFetchCondition() {
  const target = container.value?.parentElement
  if (!target) return
  emit('onScroll')
  if (
    target.offsetHeight + target.scrollTop >= target.scrollHeight - 150 &&
    !isEnd.value
  ) {
    isFetching.value = true
    await fetchRemainingRoutes()
    isFetching.value = false
  }
}

const getParams = (route) => {
  const params = {
    routeName: route.RouteName.Zh_tw,
    ...(route.IsSubRoute && { subRouteName: route.SubRouteName.Zh_tw }),
    ...(props.type === 'city' && { city: route.City })
  }
  return params
}

onMounted(() => {
  const parent = container.value?.parentElement
  parent?.addEventListener('scroll', checkFetchCondition)
})

onUnmounted(() => {
  const parent = container.value?.parentElement
  parent?.removeEventListener('scroll', checkFetchCondition)
})
</script>
