<template>
  <div class="wrapper vh-100 container-lg">
    <!-- header -->
    <header class="header header-shadow bg-dark p-3 px-lg-0">
      <div class="row">
        <div class="col-auto d-flex justify-content-center align-items-center">
          <img
            @click="router.go(-1)"
            :src="backIcon"
            alt="回上一頁"
            role="button"
            width="6"
          />
        </div>
        <div class="col">
          <logo />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            ref="input1"
            :value="city1.city.CityName"
            @click="focusInput1"
            type="text"
            class="form-control bg-secondary text-center ls-1"
            role="button"
            placeholder="選擇出發縣市"
            readonly
          />
        </div>
        <div class="col-auto d-flex justify-content-center align-items-center">
          <img
            :src="swapIcon"
            @click="swapCitys"
            alt="交換縣市"
            role="button"
          />
        </div>
        <div class="col">
          <input
            ref="input2"
            :value="city2.city.CityName"
            @click="focusInput2"
            type="text"
            class="form-control bg-secondary text-center ls-1"
            role="button"
            placeholder="選擇到達縣市"
            readonly
          />
        </div>
      </div>
    </header>
    <main ref="routesList" class="main-content overflow-hidden px-3">
      <h3 v-if="state.pending" class="mt-5 text-center text-light">
        <img :src="loadingIcon" width="70" alt="loading..." />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <RoutesList type="intercity-from-to" v-else />
    </main>
    <KeyBoard3 />
  </div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  reactive,
  computed,
  provide,
  toRef
} from 'vue'
import { useRouter } from 'vue-router'
import bus from '@/composables/useInterCityBus'
import RoutesList from '@/components/RoutesList.vue'
import KeyBoard3 from '@/components/KeyBoard3.vue'
import logo from '@/components/logo.vue'
import backIcon from '@/assets/back.svg'
import loadingIcon from '@/assets/loading.svg'
import swapIcon from '@/assets/swap.svg'

const router = useRouter()
const { state } = bus
const routesList = ref(null)
const input1 = ref(null)
const input2 = ref(null)
const city1 = reactive({
  city: {
    CityName: '',
    CityCode: '',
    City: ''
  }
})
const city2 = reactive({
  city: {
    CityName: '',
    CityCode: '',
    City: ''
  }
})
let iscity1 = ref(true)
const currentCity = computed(() => (iscity1.value ? city1.city : city2.city))

const focusInput1 = () => {
  iscity1.value = true
  input1.value.focus()
}

const focusInput2 = () => {
  iscity1.value = false
  input2.value.focus()
}

const fetchData = () => {
  bus.fetchRoutesByCitys(city1.city.City, city2.city.City)
}

const swapCitys = () => {
  const temp = city1.city
  city1.city = city2.city
  city2.city = temp
  fetchData()
}

const updateCurrentCity = (temp) => {
  const city = iscity1.value ? city1 : city2
  city.city = temp
  if (city2.city.City && city1.city.City) {
    fetchData()
  }
}

// provide 響應式 states 給子元件
provide('routesList', toRef(state, 'routesList'))
provide('currentCity', {
  currentCity,
  updateCurrentCity
})

// 在 mount, resize 時調整 perfect scrollbar 區域高度
const setScrollAreaHeight = () => {
  const height = routesList.value.offsetHeight + 'px'
  document.documentElement.style.setProperty('--h', height)
}

// 監聽 resize event
function callback() {
  setScrollAreaHeight()
}

onMounted(() => {
  setScrollAreaHeight()
  focusInput1()
  window.addEventListener('resize', callback)
})

onUnmounted(() => {
  window.removeEventListener('resize', callback)
})
</script>

<style lang="scss" scoped>
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
    grid-template-columns: 1fr 1fr;
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
</style>
