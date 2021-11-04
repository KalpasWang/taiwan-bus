<template>
  <div class="list-group">
    <router-link
      :to="{}"
      v-for="item in state.stationsList"
      :key="item.StaionUID"
      class="list-group-item list-group-item-action"
    >
      {{ item.StationName.Zh_tw }}{{ item.Bearing }}
    </router-link>
  </div>
</template>

<script setup>
import bus from '@/composables/useCityBus'
import toRef from 'vue'

const state = toRef(bus, 'busState')
bud.fetchNearByStations(500)
</script>

<style lang=""></style>
