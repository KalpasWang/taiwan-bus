<template>
  <div class="bg-grey-900 p-4">
    <div class="row g-3">
      <div class="col-6">1</div>
      <div class="col-4">2</div>
    </div>
    <div>
      <div class="auxiliary"></div>
      <div class="numbers"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const board = ref('routes')
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.bg-grey-900 {
  background-color: $gray-900;
}
</style>
