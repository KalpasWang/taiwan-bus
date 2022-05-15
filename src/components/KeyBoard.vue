<template>
  <div>
    <!-- 路線選擇模式 -->
    <div
      v-if="boardState === 1"
      class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4"
    >
      <!-- 第一排 -->
      <div class="row g-3 mb-3">
        <div class="col-6">
          <KeyItem @click="boardState = 2" white>
            <img :src="markerUrl" width="13" height="15.89" class="me-2" />
            <span v-if="query.city.CityName">{{ query.city.CityName }}</span>
            <span v-else>選擇縣市</span>
          </KeyItem>
        </div>
        <div class="col-4">
          <KeyItem @click="hideKeyboard()">手動輸入</KeyItem>
        </div>
      </div>
      <div class="row row-cols-5 g-2">
        <!-- 第二排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('A')">A</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('藍')">藍</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('1')" white>1</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('2')" white>2</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('3')" white>3</KeyItem>
        </div>
        <!-- 第三排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('綠')">綠</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('棕')">棕</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('4')" white>4</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('5')" white>5</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('6')" white>6</KeyItem>
        </div>
        <!-- 第四排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('橘')">橘</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('小')">小</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('7')" white>7</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('8')" white>8</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('9')" white>9</KeyItem>
        </div>
        <!-- 第五排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('幹線')">幹線</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="boardState = 3">更多</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress()">C</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('0')" white>0</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress(-1)"
            ><img :src="deleteIconUrl" alt="delete"
          /></KeyItem>
        </div>
      </div>
    </div>
    <!-- 選擇縣市 -->
    <div
      v-else-if="boardState === 2"
      class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4"
    >
      <div class="row row-cols-5 g-2">
        <div v-for="city in citys" :key="city.City" class="col">
          <KeyItem
            :class="{ active: city.City === selectedCity }"
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
    <div
      v-else-if="boardState === 3"
      class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4"
    >
      <div class="row row-cols-5 g-2">
        <!-- 第一排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('F')">F</KeyItem>
        </div>
        <div class="col"><KeyItem @click="handleKeyPress('R')">R</KeyItem></div>
        <div class="col"><KeyItem @click="handleKeyPress('T')">T</KeyItem></div>
        <div class="col">
          <KeyItem @click="handleKeyPress('快')">快</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('內科')">內科</KeyItem>
        </div>
        <!-- 第二排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('跳蛙')">跳蛙</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('通勤')">通勤</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('南軟')">南軟</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('先導')">先導</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('夜間')">夜間</KeyItem>
        </div>
        <!-- 第三排 -->
        <div class="col">
          <KeyItem @click="handleKeyPress('市民')">市民</KeyItem>
        </div>
        <div class="col">
          <KeyItem @click="handleKeyPress('其他')">其他</KeyItem>
        </div>
        <div class="col flex-grow-1">
          <KeyItem @click="boardState = 1">回上一頁</KeyItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'
import deleteIconUrl from '@/assets/delete-icon.svg'
import { citys } from '@/composables/constant'

// inject states and mutations from parent
const { query, updateCityQuery, updateRouteNameQuery } = inject('query')
const { updateIsManual } = inject('manualInput')

// states
const boardState = ref(1)
const tempCity = ref(null)
const selectedCity = computed(() =>
  tempCity.value ? tempCity.value.City : query.city.City
)

// methods
const hideKeyboard = () => {
  updateIsManual(true)
}
const setTempCity = (city) => {
  tempCity.value = city
}
const setCityAndBoardState = () => {
  updateCityQuery(tempCity.value)
  boardState.value = 1
}
const handleKeyPress = (key) => {
  updateRouteNameQuery(key)
}
</script>
