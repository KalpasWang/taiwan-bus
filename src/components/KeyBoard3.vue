<template>
  <!-- 路線選擇模式 -->
  <div v-if="boardState === 1" class="bg-secondary px-1 py-4">
    <!-- 第一排 -->
    <div class="row g-3 mb-3">
      <div class="col">
        <KeyItem @click="boardState = 2" white>
          <img :src="markerUrl" width="13" height="15.89" class="me-2" />
          <span v-if="inputs.city.CityName">{{ inputs.city.CityName }}</span>
          <span v-else>選擇縣市</span>
        </KeyItem>
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
        <KeyItem @click="inputRouteName(1)" white>1</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(2)" white>2</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(3)" white>3</KeyItem>
      </div>
      <!-- 第三排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('綠')">綠</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('棕')">棕</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(4)" white>4</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(5)" white>5</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(6)" white>6</KeyItem>
      </div>
      <!-- 第四排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('橘')">橘</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('小')">小</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(7)" white>7</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(8)" white>8</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(9)" white>9</KeyItem>
      </div>
      <!-- 第五排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('幹線')">幹線</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="boardState = 3">更多</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="input.removeRouteName()">C</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName(0)" white>0</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="input.deleteLastChar()"
          ><img :src="deleteIconUrl" alt="delete"
        /></KeyItem>
      </div>
    </div>
  </div>
  <!-- 選擇縣市 -->
  <div v-else-if="boardState === 2" class="bg-secondary px-4 py-5">
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
  <!-- 選擇更多 -->
  <div v-else-if="boardState === 3" class="bg-secondary px-4 py-5">
    <div class="row row-cols-5 g-2">
      <!-- 第一排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('F')">F</KeyItem>
      </div>
      <div class="col"><KeyItem @click="inputRouteName('R')">R</KeyItem></div>
      <div class="col"><KeyItem @click="inputRouteName('T')">T</KeyItem></div>
      <div class="col"><KeyItem @click="inputRouteName('快')">快</KeyItem></div>
      <div class="col">
        <KeyItem @click="inputRouteName('內科')">內科</KeyItem>
      </div>
      <!-- 第二排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('跳蛙')">跳蛙</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('通勤')">通勤</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('南軟')">南軟</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('先導')">先導</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('夜間')">夜間</KeyItem>
      </div>
      <!-- 第三排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('市民')">市民</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="inputRouteName('其他')">其他</KeyItem>
      </div>
      <div class="col flex-grow-1">
        <KeyItem @click="boardState = 1">回上一頁</KeyItem>
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
