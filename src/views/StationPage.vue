<template>
  <h1>{{ city }} {{ stationId }}</h1>
  <h4 v-if="busState.pending">Loading...</h4>
  <h4 v-else-if="busState.error">發生錯誤</h4>
  <div v-else>
    <div
      v-for="item in busState.station"
      :key="item.StationUID"
      class="list-group"
    >
      <router-link
        :to="{
          name: 'RoutePage',
          params: {
            city: city,
            routeName: item.RouteName.Zh_tw
          }
        }"
        class="list-group-item list-group-item-action"
      >
        <h4>{{ item.RouteName.Zh_tw }}</h4>
        <p>往 {{ item.DestinationStopNameZh }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'

const props = defineProps({
  city: String,
  stationId: String
})

const { busState } = bus
bus.fetchOneCityStation(props.city, props.stationId)
</script>

<style lang="scss">
.map {
  height: 840px;
}
</style>
