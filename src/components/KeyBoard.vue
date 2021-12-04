<template>
  <!-- 路線選擇模式 -->
  <div v-if="boardState === 1" class="bg-grey-900 px-1 py-4">
    <!-- 第一排 -->
    <div class="row g-3 mb-3">
      <div class="col-6">
        <KeyItem @click="boardState = 2" :white="true">
          <img :src="markerUrl" width="13" height="15.89" class="me-2" />
          <span v-if="inputs.city.CityName">{{ inputs.city.CityName }}</span>
          <span v-else>選擇縣市</span>
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
        <KeyItem @click="inputRouteName(1)" :white="true">1</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(2)" :white="true">2</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(3)" :white="true">3</KeyItem>
      </div>
      <!-- 第三排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">綠</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">棕</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(4)" :white="true">4</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(5)" :white="true">5</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(6)" :white="true">6</KeyItem>
      </div>
      <!-- 第四排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">橘</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">小</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(7)" :white="true">7</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(8)" :white="true">8</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(9)" :white="true">9</KeyItem>
      </div>
      <!-- 第五排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('藍')">幹線</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="boardState = 3">更多</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="input.removeRouteName()">C</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(0)" :white="true">0</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="input.deleteLastChar()"
          ><img :src="deleteIconUrl" alt="delete"
        /></KeyItem>
      </div>
    </div>
  </div>
  <!-- 選擇縣市 -->
  <div v-else-if="boardState === 2" class="bg-grey-900 px-4 py-5">
    <div class="row row-cols-5 g-2">
      <div v-for="city in citys" :key="city.CityCode" class="col">
        <KeyItem
          :class="{ active: city.CityName === activeCity }"
          @click="setTempCity(city)"
          >{{ city.CityName }}</KeyItem
        >
      </div>
      <div class="col flex-grow-1">
        <KeyItem @click="setCityAndBoardState()">設定</KeyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import input from '@/composables/useInput'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'
import deleteIconUrl from '@/assets/delete-icon.svg'
import { citys } from '@/composables/constant'

const props = defineProps({
  type: String
})

const { inputs, inputRouteName } = input
const boardState = ref(1)
const temp = ref({
  CityName: ''
})
const activeCity = ref('')

const setTempCity = (city) => {
  temp.value = city
  activeCity.value = city.CityName
}

const setCityAndBoardState = () => {
  input.setCity(temp.value)
  boardState.value = 1
}
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.bg-grey-900 {
  background-color: $gray-900;
}
</style>
