<template>
  <div class="position-relative">
    <!-- 每60秒更新一次 -->
    <p
      v-if="timeAfterUpdate < 60"
      class="me-4 pt-4 mb-0 text-end text-primary ls-1"
    >
      *於 {{ timeAfterUpdate }} 秒前更新
    </p>
    <p v-else class="me-4 pt-4 mb-0 text-end text-primary ls-1">
      *更新中...
      <Loading :width="25" class="d-inline-block" />
    </p>
    <!-- 所有站牌與公車預計抵達時間 -->
    <ul class="list-unstyled">
      <li v-for="(item, i) in currentStops" :key="i" class="py-2 flex-between">
        <!-- 顯示預估到站時間badge與站牌名稱 -->
        <div class="d-flex justify-content-start align-items-center">
          <span
            class="flex-center time-label"
            :class="[item.Border ? 'label-border' : '', item.BgColor]"
          >
            <span
              :class="[item.Color, item.TimeLabel.length > 3 ? 'fs-8' : '']"
              >{{ item.TimeLabel }}</span
            >
          </span>
          <!-- params 的 citys 包含站牌在city與公車路線所屬的city -->
          <router-link
            :to="{
              name: 'StationPage',
              params: {
                city: getCity(item.LocationCityCode),
                stationId: item.StationID
              }
            }"
            :class="item.LinkColor"
            class="text-decoration-none fs-7 ls-1 ms-2"
            >{{ i + 1 }}. {{ item.StopName.Zh_tw }}</router-link
          >
        </div>
        <div class="me-4 d-flex justify-content-end align-items-center">
          <img v-if="item.accessible" :src="wheelchairIcon" alt="無障礙公車" />
          <span v-if="item.hasBus" class="plate">{{ item.plate }}</span>
          <div v-if="item.hasBus && i > 0" class="station-badge active"></div>
          <div
            v-else-if="item.hasBus && i === 0"
            class="station-badge active noafter"
          ></div>
          <div v-else-if="i > 0" class="station-badge"></div>
          <div v-else class="station-badge noafter"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import Loading from '@/components/loading.vue'
import { getCity } from '@/composables/useUtilities'
import wheelchairIcon from '@/assets/wheelchair.svg'

const { currentStops, fetchNewStops } = inject('stops')
let timer = null
const timeAfterUpdate = ref(0)

onMounted(() => {
  // 每隔60秒 refresh 一次
  timer = setInterval(async () => {
    if (timeAfterUpdate.value >= 60) {
      await fetchNewStops()
      timeAfterUpdate.value = 0
    } else {
      const v = timeAfterUpdate.value
      timeAfterUpdate.value = v + 1
    }
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style lang="scss">
@import '../assets/scss/custom-variables';

.time-label {
  min-width: 79px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
}

.label-border {
  border: 1px solid $primary;
  box-shadow: 0px 0px 5px $primary;
}

.station-badge {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: $secondary;
  border: 2px solid $primary;
  z-index: 20;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -52px;
    width: 1.4px;
    height: 51px;
    background: $primary;
    // box-shadow: 0px 0px 5px $primary;
    z-index: -1;
  }

  &.active {
    background: $primary;
  }

  &.noafter::after {
    width: 0;
    height: 0;
  }
}

.plate {
  color: $primary;
  font-style: 14px;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 12px;
  }
}
</style>
