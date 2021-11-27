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
      <div class="col">
        <KeyItem @click="emitInput('紅')">紅</KeyItem>
      </div>
      <div class="col">
        <KeyItem @click="emitInput('藍')">藍</KeyItem>
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
import { ref, defineEmits } from 'vue'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'

const board = ref('routes')

const emit = defineEmits(['input', 'delete'])

const emitInput = (value) => {
  if (value) {
    emit('input', value)
  } else {
    emit('delete')
  }
}
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.bg-grey-900 {
  background-color: $gray-900;
}
</style>
