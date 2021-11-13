<template>
  <h1>{{ city }} {{ routeName }}</h1>
  <p>{{ updateTime }}秒前更新</p>
  <div class="row">
    <!-- 地圖 -->
    <div class="col-md-7 pb-4">
      <div id="stops-map" class="map"></div>
    </div>
    <!-- 站序與預估時間 -->
    <div class="col-md-5">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button
            class="nav-link"
            :class="{ active: activeItem === 'forward' }"
            @click="setTab('forward')"
          >
            {{ forwardLabel }}
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            :class="{ 'show active': activeItem === 'backward' }"
            @click="setTab('backward')"
          >
            {{ backwardLabel }}
          </button>
        </li>
      </ul>
      <h4 v-if="state.error" class="p-3">{{ state.error }}</h4>
      <div v-else class="tab-content">
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeItem === 'forward' }"
        >
          <ul class="list-group">
            <li
              v-for="stop in state.forwardStopsList"
              :key="stop.StopID"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ stop.StopName.Zh_tw }}
              <span class="badge" :class="stop.Color">{{
                stop.TimeLabel
              }}</span>
            </li>
          </ul>
        </div>
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeItem === 'backward' }"
        >
          <ul class="list-group">
            <li
              v-for="stop in state.backwardStopsList"
              :key="stop.StopID"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ stop.StopName.Zh_tw }}
              <span class="badge" :class="stop.Color">{{
                stop.TimeLabel
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import bus from '@/composables/useCityBus'
import map from '@/composables/useMap'

const props = defineProps({
  city: String,
  routeName: String
})

const activeItem = ref('forward')
const updateTime = ref(0)
const { state } = bus
let timer = null

const forwardLabel = computed(() => {
  const len = state.forwardStopsList.length
  if (len === 0) {
    return '去程'
  }
  const finalStop = state.forwardStopsList[len - 1].StopName.Zh_tw
  return `往 ${finalStop}`
})

const backwardLabel = computed(() => {
  const len = state.backwardStopsList.length
  if (len === 0) {
    return '返程'
  }
  const finalStop = state.backwardStopsList[len - 1].StopName.Zh_tw
  return `往 ${finalStop}`
})

const setTab = (tabName) => {
  activeItem.value = tabName
}

onMounted(async () => {
  map.mapInit('stops-map')
  await bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
  map.drawStopsPathAndMarkers(state.forwardStopsList)
  timer = setInterval(() => {
    if (updateTime.value >= 60) {
      updateTime.value = '更新中'
      bus
        .fetchStopsAndBusArrivalTime(props.city, props.routeName)
        .then(() => (updateTime.value = 0))
    } else {
      updateTime.value = updateTime.value + 1
    }
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style lang="scss">
.map {
  height: 840px;
}
</style>
