<template>
  <!-- 選擇路線名稱 -->
  <div class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4">
    <!-- 第一排 -->
    <div class="row g-1 mb-3">
      <div class="col-6">
        <KeyItem @click="router.push({ name: 'InterCitySearch2' })" white>
          <img :src="markerUrl" width="13" height="15.89" class="me-2" />
          以起訖地區搜尋
        </KeyItem>
      </div>
      <div class="col-4">
        <KeyItem @click="hideKeyboard()">手動輸入</KeyItem>
      </div>
    </div>
    <div class="row row-cols-5 g-1">
      <!-- 第二排 -->
      <div class="col">
        <KeyItem @click="handleKeyPress('A')">A</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress('B')">B</KeyItem>
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
        <KeyItem @click="handleKeyPress('C')">C</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress('D')">D</KeyItem>
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
        <KeyItem @click="handleKeyPress('E')">E</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress('路')">路</KeyItem>
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
        <KeyItem @click="handleKeyPress('甲')">甲</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress('支')">支</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress()">C</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress('0')" white>0</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="handleKeyPress(-1)"
          ><img :src="deleteIcon" alt="delete"
        /></KeyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'
import deleteIcon from '@/assets/delete-icon.svg'

// inject states and mutations from parent
const { updateRouteNameQuery } = inject('query')
const { updateIsManual } = inject('manualInput')

// states
const router = useRouter()
// const boardState = ref(1)

// methods
const hideKeyboard = () => {
  updateIsManual(true)
}
const handleKeyPress = (key) => {
  updateRouteNameQuery(key)
}
</script>
