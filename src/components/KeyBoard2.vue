<template>
  <!-- 選擇路線名稱 -->
  <div class="bg-secondary px-1 py-4">
    <!-- 第一排 -->
    <div class="row g-3 mb-3">
      <div class="col">
        <KeyItem @click="router.push({ name: 'IntercitySearch2' })" white>
          <img :src="markerUrl" width="13" height="15.89" class="me-2" />
          以起訖地區搜尋
        </KeyItem>
      </div>
    </div>
    <div class="row row-cols-5 g-2">
      <!-- 第二排 -->
      <div class="col">
        <KeyItem @click="inputRouteName('A')">A</KeyItem>
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
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import input from '@/composables/useInput'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'
import deleteIconUrl from '@/assets/delete-icon.svg'
import { citys } from '@/composables/constant'

const props = defineProps({
  type: String
})

const router = useRouter()
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
