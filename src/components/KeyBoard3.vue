<template>
  <div class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4">
    <!-- 選擇縣市 -->
    <div class="row row-cols-5 g-2">
      <div v-for="city in citys" :key="city.City" class="col">
        <KeyItem
          :class="{ active: city.City === selectedCity }"
          @click="setTempCity(city)"
          >{{ city.CityName }}</KeyItem
        >
      </div>
      <div class="col flex-grow-1">
        <KeyItem @click="update()">設定</KeyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import KeyItem from '@/components/KeyItem.vue'
import { citys } from '@/composables/constant'

// inject states and mutations from parent
const { currentCity, updateCurrentCity } = inject('currentCity')

// states
const initialState = {
  City: '',
  CityCode: '',
  CityName: ''
}
const tempCity = ref(initialState)
const selectedCity = computed(
  () => tempCity.value.City || currentCity.value.City
)

// methods
const setTempCity = (cityObj) => {
  tempCity.value = cityObj
}
const update = () => {
  updateCurrentCity(tempCity.value)
  tempCity.value = initialState
}
</script>
