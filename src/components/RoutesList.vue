<template>
  <div ref="container" class="h-100">
    <h4
      v-if="props.type === 'city' && !state.inputCity"
      class="fs-7 text-light px-3 pt-5"
    >
      請先選擇縣市
    </h4>
    <div v-else class="h-100">
      <h4 v-if="state.inputCity" class="fs-6 text-light px-3 pt-5">
        {{ getCityName(state.inputCity) }}
      </h4>
      <div v-if="state.isLoading">
        <Loading :width="70" />
      </div>
      <h4 v-else-if="state.hasError" class="text-center text-light">
        {{ state.errorMsg }}
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
      <div v-show="!isEnd" class="h-7rem flex-center">
        <Loading v-show="isFetching" :width="70" />
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
  }
})
const emit = defineEmits(['onScroll'])

const container = ref(null)
const isFetching = ref(false)
let ticking = false
const { fetchNewRoutes, fetchRemainingRoutes, clearRoutes, isEnd } = useRoutes(
  props.type
)

const arg1 = computed(() => {
  if (props.type.includes('from-to')) {
    return state.from
  }
  return state.inputRouteName
})
const arg2 = computed(() => {
  if (props.type.includes('from-to')) {
    return state.to
  }
  return state.inputCity
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
    state.isLoading = true
    state.hasError = false
    await fetchNewRoutes(arg1.value, arg2.value)
  } catch (e) {
    state.hasError = true
    state.errorMsg = e.message
  } finally {
    state.isLoading = false
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

function scrollHandler(e) {
  if (!ticking) {
    window.requestAnimationFrame(async () => {
      await checkFetchCondition()
      ticking = false
    })
    ticking = true
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
  parent?.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  const parent = container.value?.parentElement
  parent?.removeEventListener('scroll', scrollHandler)
})
</script>
