<template>
  <!-- 路線選擇模式 -->
  <div v-if="boardState === 1" class="bg-grey-900 p-4">
    <!-- 第一排 -->
    <div class="row g-3 mb-3">
      <div class="col-6">
        <KeyItem @click="boardState = 2" :white="true">
          <img :src="markerUrl" width="13" height="15.89" class="me-2" />
          <span>選擇縣市</span>
        </KeyItem>
      </div>
      <div class="col-4">
        <KeyItem @click="">手動輸入</KeyItem>
      </div>
    </div>
    <div class="row row-cols-5 g-2">
      <!-- 第二排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('紅')">紅</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">藍</KeyItem>
      </div>
      <div class="col">
        <KeyItem>1</KeyItem>
      </div>
      <div class="col">
        <KeyItem>2</KeyItem>
      </div>
      <div class="col">
        <KeyItem>3</KeyItem>
      </div>
      <!-- 第三排 -->
      <div class="col">
        <KeyItem>綠</KeyItem>
      </div>
      <div class="col">
        <KeyItem>棕</KeyItem>
      </div>
      <div class="col">
        <KeyItem>4</KeyItem>
      </div>
      <div class="col">
        <KeyItem>5</KeyItem>
      </div>
      <div class="col">
        <KeyItem>6</KeyItem>
      </div>
    </div>
  </div>
  <!-- 選擇縣市 -->
  <div v-else-if="boardState === 2" class="bg-grey-900 px-4 py-5">
    <div class="row row-cols-5 g-2">
      <div v-for="city in citys" :key="city.CityCode" class="col">
        <KeyItem @click="setCity(city.City)">{{ city.CityName }}</KeyItem>
      </div>
      <div class="col flex-grow-1">
        <KeyItem @click="boardState = 1">設定</KeyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import input from '@/composables/useInput'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'
import { citys } from '@/composables/constant'

const props = defineProps({
  type: String
})

const boardState = ref(1)

const setCity = (value) => {
  if (input.checkCityInput(value)) {
    input.city.value = value
  }
}

const setRouteName = (value) => {
  console.log(value)
  input.routeName.value += value
}

const deleteLastChar = () => {
  const name = input.routeName.value
  input.routeName.value = name.slice(0, -1)
}
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.bg-grey-900 {
  background-color: $gray-900;
}
</style>
