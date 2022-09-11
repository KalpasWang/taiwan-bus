<template>
  <div class="h-100 d-flex flex-column">
    <TabsHeader @setDirection="setDirection" @back="emit('back')">
      <template #extra>
        <IconButton
          @click="switchComponent('FareMap')"
          :imgUrl="fareIcon"
          title="票價查詢"
        />
        <IconButton
          @click="switchComponent('TimeTable')"
          :imgUrl="timetableIcon"
          title="時刻表"
        />
        <IconButton
          @click="switchComponent('RouteMap')"
          :imgUrl="mapIcon"
          title="地圖"
        />
      </template>
    </TabsHeader>
    <!-- 所有站牌與公車預計抵達時間 -->
    <Transition name="slide-to-left">
      <div
        v-show="direction === 'forward'"
        class="flex-grow-1 d-flex flex-column container overflow-auto"
        :class="direction === 'forward' ? '' : 'd-none'"
      >
        <UpdateTimer class="mt-2 me-4" />
        <ul class="w-100 flex-grow-1 flex-shrink-0 list-unstyled">
          <li
            v-for="(item, i) in arrivalsInfo.forwards"
            :key="i"
            class="py-2 flex-between"
          >
            <!-- 顯示預估到站時間badge與站牌名稱 -->
            <div class="d-flex justify-content-start align-items-center">
              <span v-if="pending" class="flex-center time-label bg-dark">
                <Loading v-if="pending" :width="23" class="d-inline-block" />
              </span>
              <span
                v-else
                class="flex-center time-label"
                :class="[item.Border ? 'label-border' : '', item.BgColor]"
              >
                <span
                  :class="[
                    item.Color,
                    item.TimeLabel && item.TimeLabel.length > 4 ? 'fs-8' : ''
                  ]"
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
                >{{ item.StopName.Zh_tw }}</router-link
              >
            </div>
            <div class="me-4 d-flex justify-content-end align-items-center">
              <img
                v-if="item.Accessible"
                :src="wheelchairIcon"
                alt="無障礙公車"
              />
              <span v-if="item.HasBus" class="plate">{{ item.PlateNumb }}</span>
              <div
                v-if="item.HasBus && i > 0"
                class="station-badge active"
              ></div>
              <div
                v-else-if="item.HasBus && i === 0"
                class="station-badge active noafter"
              ></div>
              <div v-else-if="i > 0" class="station-badge"></div>
              <div v-else class="station-badge noafter"></div>
            </div>
          </li>
        </ul>
      </div>
    </Transition>
    <Transition name="slide-to-right">
      <div
        v-show="direction === 'backward'"
        class="flex-grow-1 d-flex flex-column container overflow-auto"
        :class="direction === 'backward' ? '' : 'd-none'"
      >
        <UpdateTimer class="mt-2 me-4" />
        <ul class="w-100 flex-grow-1 flex-shrink-0 list-unstyled">
          <li
            v-for="(item, i) in arrivalsInfo.backwards"
            :key="i"
            class="py-2 flex-between"
          >
            <!-- 顯示預估到站時間badge與站牌名稱 -->
            <div class="d-flex justify-content-start align-items-center">
              <span v-if="pending" class="flex-center time-label bg-dark">
                <Loading v-if="pending" :width="23" class="d-inline-block" />
              </span>
              <span
                v-else
                class="flex-center time-label"
                :class="[item.Border ? 'label-border' : '', item.BgColor]"
              >
                <Loading v-if="pending" :width="30" class="d-inline-block" />
                <span
                  v-else
                  :class="[
                    item.Color,
                    item.TimeLabel && item.TimeLabel.length > 4 ? 'fs-8' : ''
                  ]"
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
                >{{ item.StopName.Zh_tw }}</router-link
              >
            </div>
            <div class="me-4 d-flex justify-content-end align-items-center">
              <img
                v-if="item.Accessible"
                :src="wheelchairIcon"
                alt="無障礙公車"
              />
              <span v-if="item.HasBus" class="plate">{{ item.PlateNumb }}</span>
              <div
                v-if="item.HasBus && i > 0"
                class="station-badge active"
              ></div>
              <div
                v-else-if="item.HasBus && i === 0"
                class="station-badge active noafter"
              ></div>
              <div v-else-if="i > 0" class="station-badge"></div>
              <div v-else class="station-badge noafter"></div>
            </div>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, inject, onUnmounted } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import UpdateTimer from '@/components/UpdateTimer.vue'
import IconButton from '@/components/IconButton.vue'
import useEventBus from '@/composables/useEventBus'
import { useArrivalsInfo } from '@/composables/bus'
import { getCity, addCustomDataToStops } from '@/composables/utilities'
import wheelchairIcon from '@/assets/wheelchair.svg'
import mapIcon from '@/assets/map.svg'
import timetableIcon from '@/assets/timetable.svg'
import fareIcon from '@/assets/fare.svg'
import Loading from './Loading.vue'

const { routeName, city, forwardLabel, backwardLabel } = inject('busLabel')
const switchComponent = inject('switchComponent')

const direction = ref('forward')
const eventBus = useEventBus('timer')
const { pending } = eventBus
const { arrivalsInfo, fetchNewArrivalsInfo } = useArrivalsInfo(routeName, city)

const emit = defineEmits(['back'])

const setDirection = (newDirection) => {
  direction.value = newDirection
}

// 設定好頭尾站牌名稱
function setStopName(stopsList, stopName) {
  const len = stopsList.length
  if (len !== 0) {
    stopName.value = stopsList[len - 1].StopName.Zh_tw
  }
}

async function updateInfo() {
  await fetchNewArrivalsInfo()
  addCustomDataToStops(arrivalsInfo.forwards)
  addCustomDataToStops(arrivalsInfo.backwards)
}

eventBus.on(updateInfo)
await updateInfo()
setStopName(arrivalsInfo.forwards, forwardLabel)
setStopName(arrivalsInfo.backwards, backwardLabel)

onUnmounted(() => {
  eventBus.off(updateInfo)
})
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

.slide-to-left-enter-active {
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-to-left-leave-active {
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-to-left-enter-from,
.slide-to-left-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}

.slide-to-right-enter-active {
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-to-right-leave-active {
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-to-right-enter-from,
.slide-to-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
