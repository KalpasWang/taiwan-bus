<template>
  <div class="wrapper vh-100 container-lg">
    <!-- header -->
    <div class="header header-shadow bg-dark p-3 px-lg-0">
      <div class="row">
        <div class="col-auto">
          <img
            @click="router.go(-1)"
            :src="backIconUrl"
            alt="回上一頁"
            role="button"
            width="6"
            class=""
          />
        </div>
        <div class="col">
          <logo />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control bg-secondary py-md-3 ls-1"
            placeholder="選擇出發縣市"
            readonly
          />
        </div>
        <div class="col-auto">
          <img :src="swapIcon" alt="交換" role="button" />
        </div>
      </div>
    </div>
    <div ref="routesList" class="main-content overflow-hidden px-3">
      <h3 v-if="state.pending" class="mt-5 text-center text-light">
        <img :src="loadingIconUrl" width="70" alt="loading..." />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <RoutesList type="intercity-from-to" v-else />
    </div>
    <KeyBoard3 />
  </div>
  <!-- <div class="container vh-100 d-flex flex-column">
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
    <KeyBoard2 />
  </div>
  <select v-model="selectedCity" class="form-select">
    <option value="" disabled selected>選擇縣市</option>
    <option v-for="city in state.citysList" :key="city.City" :value="city.City">
      {{ city.CityName }}
    </option>
  </select>
  <input
    v-model="busInput"
    type="text"
    class="form-control"
    placeholder="搜尋公車路線"
  />
  <input @click="onSubmit()" type="submit" class="btn btn-primary" />
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
            name: 'InterCityRoutePage',
            params: { routeName: route.RouteName.Zh_tw }
          }"
          class="d-block link-primary text-decoration-none"
        >
          <h5>{{ route.RouteName.Zh_tw }}</h5>
          <p v-if="route.Stops" class="text-secondary">
            {{ route.Stops[0].StopName.Zh_tw }} -
            {{ route.Stops[route.Stops.length - 1].StopName.Zh_tw }}
          </p>
          <p v-if="route.DepartureStopNameZh" class="text-secondary">
            {{ route.DepartureStopNameZh }} -
            {{ route.DestinationStopNameZh }}
          </p>
        </router-link>
      </li>
    </ul>
  </div> -->
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import bus from '@/composables/useInterCityBus'
import KeyBoard3 from '@/components/KeyBoard3.vue'
import logo from '@/components/logo.vue'
import loadingIconUrl from '@/assets/loading.svg'
import swapIcon from '@/assets/swap.svg'

const router = useRouter()
const { state } = bus

onMounted(() => {
  bus.fetchRoutesByCitys('Taipei', 'YilanCounty')
})
</script>

<style></style>
