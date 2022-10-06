<template>
  <div class="bg-secondary p-4 px-md-7 py-md-5 p-lg-4">
    <!-- 選擇縣市 -->
    <div class="row row-cols-5 g-1">
      <div v-for="city in citys.map((ob) => ob.City)" :key="city" class="col">
        <KeyItem
          :class="{ active: city === selectedCity }"
          @click="setCity(city)"
          >{{ getCityName(city) }}</KeyItem
        >
      </div>
      <div class="col flex-grow-1">
        <KeyItem @click="update()">設定</KeyItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import KeyItem from '@/components/KeyItem.vue'
import { citys } from '@/composables/constants'
import { getCityName } from '../composables/utilities'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const selectedCity = ref(props.modelValue)
// methods
const setCity = (city) => {
  selectedCity.value = city
}
const update = () => {
  emit('update:modelValue', selectedCity.value)
}
</script>
