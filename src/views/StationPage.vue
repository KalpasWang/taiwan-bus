<template>
  <h1>{{ city }} {{ stationName }}</h1>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <button class="nav-link" :class="{ active: activeItem === 'forward' }">
        a
      </button>
    </li>
  </ul>
  <h4 v-if="busState.error" class="p-3">發生錯誤</h4>
  <div v-else class="tab-content">
    <div class="tab-pane" :class="{ active: activeItem === 'forward' }">
      <div class="list-group">
        <button class="list-group-item list-group-item-action">234</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed, defineProps, ref } from 'vue'
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