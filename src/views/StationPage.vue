<template>
  <h1>{{ city }} {{ stationName }}</h1>
  <h4 v-if="busState.error" class="p-3">發生錯誤</h4>
  <div class="list-group">
    <button class="list-group-item list-group-item-action">234</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import bus from '@/composables/useBus'
import map from '@/composables/useMap'

const props = defineProps({
  city: String,
  stationName: String
})
</script>

<style lang="scss">
.map {
  height: 840px;
}
</style>