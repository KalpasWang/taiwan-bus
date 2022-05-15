<template>
  <perfect-scrollbar>
    <h4 class="fs-6 text-light mt-5">
      {{ props.cityName }}
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
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  cityName: String
})

const routesList = inject('routesList')
</script>
