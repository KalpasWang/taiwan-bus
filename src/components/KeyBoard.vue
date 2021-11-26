<template>
  <div class="bg-grey-900 p-4">
    <div class="row g-3 mb-3">
      <div class="col-36">
        <div class="btn btn-outline-primary d-block text-light">
          <img :src="markerUrl" width="13px" height="15.89px" class="me-2" />
          <span>選擇縣市</span>
        </div>
      </div>
      <div class="col-24">
        <div class="btn btn-outline-primary d-block">
          <span>手動輸入</span>
        </div>
      </div>
    </div>
    <div class="row g-2">
      <div class="col-24">
        <div class="row row-cols-2 g-2">
          <div class="col">
            <div class="btn btn-outline-primary d-block">
              <span>紅</span>
            </div>
          </div>
          <div class="col">
            <div class="btn btn-outline-primary d-block">
              <span>藍</span>
            </div>
          </div>
          <div class="col">
            <KeyItem>綠</KeyItem>
          </div>
          <div class="col">
            <KeyItem>棕</KeyItem>
          </div>
        </div>
      </div>
      <div class="col-36"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import KeyItem from '@/components/KeyItem.vue'
import markerUrl from '@/assets/marker.svg'

const board = ref('routes')
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.bg-grey-900 {
  background-color: $gray-900;
}
</style>
