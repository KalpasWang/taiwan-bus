<template>
  <div class="wrapper vh-100 container-lg">
    <!-- header -->
    <header class="header header-shadow bg-dark p-3 px-lg-0">
      <div class="row">
        <div class="col-auto d-flex justify-content-center align-items-center">
          <IconButton
            @click="router.go(-1)"
            :imgUrl="backIcon"
            title="回上一頁"
          />
        </div>
        <div class="col">
          <Logo />
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
          <IconButton @click="swapCitys" :imgUrl="swapIcon" title="交換縣市" />
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
    <main class="main-content overflow-auto px-3 px-lg-0 minh-100">
      <RoutesList
        type="intercity-from-to"
        :from="city1.city.City"
        :to="city2.city.City"
      />
    </main>
    <KeyBoard3 />
  </div>
</template>

<script setup>
import { ref, reactive, computed, provide } from 'vue'
import { useRouter } from 'vue-router'
import RoutesList from '@/components/RoutesList.vue'
import KeyBoard3 from '@/components/KeyBoard3.vue'
import Logo from '@/components/Logo.vue'
import backIcon from '@/assets/back.svg'
import swapIcon from '@/assets/swap.svg'
import IconButton from '../components/IconButton.vue'

const router = useRouter()
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
  // bus.fetchRoutesByCitys(city1.city.City, city2.city.City)
  // fetchRoutesByCitys(city1.city.City, city2.city.City)
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
provide('currentCity', {
  currentCity,
  updateCurrentCity
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
