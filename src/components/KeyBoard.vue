<template>
  <div class="bg-grey-900 p-4">
    <div class="row g-3 mb-3">
      <div class="col-6">
        <div class="btn btn-outline-primary d-block text-light">
          <img :src="markerUrl" width="13px" height="15.89px" class="me-2" />
          <span>選擇縣市</span>
        </div>
      </div>
      <div class="col-4">
        <div class="btn btn-outline-primary d-block">
          <span>手動輸入</span>
        </div>
      </div>
    </div>
    <div class="row row-cols-5 g-2">
      <!-- 第一排 -->
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
      <!-- 第二排 -->
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
</template>

<script setup>
import { ref } from 'vue'
import input from '@/composables/useInput'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'

const props = defineProps({
  type: String
})

const board = ref('routes')

const inputCityValue = (value) => {
  if (input.checkCityInput(value)) {
    input.city.value = value
  }
}

const inputRouteName = (value) => {
  console.log(value)
  input.routeName.value += value
}

const deleteRouteNameLastChar = () => {
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
