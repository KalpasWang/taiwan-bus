<template>
  <div class="wrapper vh-100 container-lg position-relative">
    <SearchHeader class="header" />
    <div ref="routesList" id="routesList" class="main-content overflow-hidden">
      <h4 v-if="!query.city.City" class="fs-7 text-light px-3 mt-5">
        請先選擇縣市
      </h4>
      <div v-else class="px-3">
        <h3 v-if="state.pending" class="mt-5 text-center text-light">
          <img :src="loadingIconUrl" width="70" alt="loading..." />
        </h3>
        <h3 v-else-if="state.error" class="mt-5 text-center text-light">
          {{ state.error }}
        </h3>
        <RoutesList v-else :cityName="query.city.CityName" />
        <!-- <perfect-scrollbar v-else>
          <h4 class="fs-6 text-light mt-5">
            {{ query.city.CityName }}
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
        </perfect-scrollbar> -->
      </div>
    </div>
    <Transition name="keyboard-slide" @after-leave="setScrollAreaHeight">
      <div v-if="!isManual" class="keyboard">
        <KeyBoard />
      </div>
    </Transition>
    <transition name="badge-fade">
      <div
        v-if="isManual"
        class="keyboard-badge bg-primary shadow-sm"
        @click="isManual = false"
      >
        <img :src="keyboardIconUrl" alt="開啟鍵盤" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, provide, toRef } from 'vue'
import RoutesList from '@/components/RoutesList.vue'
import SearchHeader from '@/components/SearchHeader.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import bus from '@/composables/useCityBus'
import loadingIconUrl from '@/assets/loading.svg'
import keyboardIconUrl from '@/assets/keyboard.svg'

const { state } = bus
const routesList = ref(null)
const query = reactive({
  city: {
    CityID: '',
    CityName: '',
    CityCode: '',
    City: ''
  },
  routeName: ''
})
const isManual = ref(false)

// methods
const updateRouteNameQuery = (key, allKeys = false) => {
  if (allKeys) {
    query.routeName = key
  } else if (typeof key === 'string') {
    const oldName = query.routeName
    query.routeName = oldName + key
  } else if (key === -1) {
    const name = query.routeName
    query.routeName = name.slice(0, -1)
  } else if (!key) {
    query.routeName = ''
  }

  if (query.city.City) {
    bus.fetchRoutesByCityAndRouteName(query.city.City, query.routeName)
  }
}

const updateCityQuery = (newCity) => {
  if (newCity.City) {
    query.city = newCity
    bus.fetchRoutesByCityAndRouteName(query.city.City, query.routeName)
  }
}

const updateIsManual = (val) => {
  isManual.value = +val
}

// 在 mount 與 鍵盤切換時調整 perfect scrollbar 區域高度
const setScrollAreaHeight = () => {
  const height = routesList.value.offsetHeight + 'px'
  // console.log(height)
  document.documentElement.style.setProperty('--h', height)
}

// provide 響應式 states, mutations 給子元件
provide('query', {
  query,
  updateCityQuery,
  updateRouteNameQuery
})

provide('routesList', toRef(state, 'routesList'))

provide('manualInput', {
  isManual,
  updateIsManual
})

onMounted(() => {
  setScrollAreaHeight()
})
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'keyboard';
  column-gap: 42px;
  @media screen and (min-width: 991px) {
    grid-template-columns: 5fr 7fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header main'
      'keyboard main';
  }
}
.header {
  grid-area: header;
}
.main-content {
  grid-area: main;
}
.keyboard {
  grid-area: keyboard;
}

.keyboard-slide-enter-active {
  transition: all 0.25s ease-in;
}

.keyboard-slide-leave-active {
  transition: all 0.25s ease-out;
}

.keyboard-slide-enter-from,
.keyboard-slide-leave-to {
  transform: translateY(120%);
  opacity: 0;
}

.keyboard-badge {
  position: absolute;
  right: 16px;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 991px) {
    top: 108px;
    bottom: auto;
    right: 58.34%;
  }
}

.badge-fade-enter-active {
  transition: all 0.1s 0.25s ease-in;
}

.badge-fade-leave-active {
  transition: all 0.1s ease-out;
}

.badge-fade-enter-from,
.badge-fade-leave-to {
  opacity: 0;
}
</style>
