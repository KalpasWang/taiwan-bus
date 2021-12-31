<template>
  <div class="container vh-100 d-flex flex-column">
    <HeaderSearch type="city" />
    <div ref="routesList" class="flex-grow-1 overflow-hidden">
      <h4 v-if="!inputs.city.CityName" class="fs-7 text-light mt-5">
        請先選擇縣市
      </h4>
      <div v-else>
        <h3 v-if="state.pending" class="mt-5 text-center text-light">
          <img :src="loadingIconUrl" width="70" alt="loading..." />
        </h3>
        <h3 v-else-if="state.error" class="mt-5 text-center text-light">
          {{ state.error }}
        </h3>
        <perfect-scrollbar v-else>
          <h4 class="fs-6 text-light mt-5">
            {{ inputs.city.CityName }}
          </h4>
          <ul class="list-group">
            <li
              v-for="(route, idx) in state.routesList"
              :key="route.RouteUID"
              class="list-group-item list-group-item-action"
              :class="{ 'bg-secondary': idx % 2 === 0 }"
            >
              <router-link
                :to="{
                  name: 'RoutePage',
                  params: { city: route.City, routeName: route.RouteName.Zh_tw }
                }"
                class="d-block link-primary text-decoration-none"
              >
                {{ route.RouteName.Zh_tw }}
                <p v-if="route.DepartureStopNameZh" class="text-light fs-7">
                  {{ route.DepartureStopNameZh }}
                  <span class="text-primary mx-1">往</span>
                  {{ route.DestinationStopNameZh }}
                </p>
              </router-link>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </div>
    <KeyBoard type="city" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import HeaderSearch from '@/components/HeaderSearch.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import bus from '@/composables/useCityBus'
import input from '@/composables/useInput'
import loadingIconUrl from '@/assets/loading.svg'

const { state } = bus
const { inputs } = input
const routesList = ref(null)

const watchCB = () => {
  if (inputs.city.City) {
    bus.fetchRoutesByCityAndRouteName(inputs.city.City, inputs.routeName)
  }
}

watch(() => inputs.routeName, watchCB)
watch(() => inputs.city, watchCB)

onMounted(() => {
  const height = routesList.value.getBoundingClientRect().height + 'px'
  document.documentElement.style.setProperty('--h', height)
})
</script>
