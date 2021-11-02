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
            backward
          </button>
        </li>
      </ul>
      <h4 v-if="busState.error" class="p-3">發生錯誤</h4>
      <div v-else class="tab-content">
        <div
          class="tab-pane fade"
          :class="{ 'show active': activeItem === 'forward' }"
        >
          <ul class="list-group">
            <li
              v-for="stop in busState.forwardStopsList"
              :key="stop.StopID"
              class="list-group-item d-flex justify-content-between align-items-center"
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
              v-for="stop in busState.backwardStopsList"
              :key="stop.StopID"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {{ stop.StopName.Zh_tw }}
              <span class="badge bg-primary">14分</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onUnmounted } from 'vue'
import bus from '@/composables/useBus'
import map from '@/composables/useMap'

export default {
  name: 'RoutePage',
  props: {
    city: String,
    routeName: String
  },
  setup(props) {
    const activeItem = ref('forward')
    const updateTime = ref(0)
    const { busState } = bus
    let timer = null

    const forwardLabel = computed(() => {
      // console.log(busState.forwardStopsList)
      const len = busState.forwardStopsList.length
      if (len === 0) {
        return '去程'
      }
      const finalStop = busState.forwardStopsList[len - 1].StopName.Zh_tw
      return `往 ${finalStop}`
    })

    const setTab = (tabName) => {
      activeItem.value = tabName
    }

    map.mapInit('stops-map')
    bus
      .fetchStopsAndBusArrivalTime(props.city, props.routeName)
      .then(() => {
        map.drawStopsPathAndMarkers(busState.forwardStopsList)
        timer = setInterval(() => {
          if(updateTime.value >= 60){
            bus.fetchStopsAndBusArrivalTime(props.city, props.routeName)
            updateTime.value = 0
          } else {
            updateTime.value = updateTime.value + 1
          }
        }, 1000)
        onUnmounted(() => clearInterval(timer))
      })

    return {
      updateTime,
      busState,
      forwardLabel,
      setTab,
      activeItem
    }
  }
}
</script>

<style lang="scss">
.map {
  height: 840px;
}
</style>