<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
    <!-- Header -->
    <TabsHeader
      @setDirection="setDirection"
      @back="switchComponent('RealTimeArrivalInfo')"
      :routeName="props.routeName"
      :forwardLabel="forwardStopName"
      :backwardLabel="backwardStopName"
      :isSubview="cIndex === 'RouteMap'"
    >
      <img
        v-if="cIndex === 'RealTimeArrivalInfo'"
        @click="switchComponent('RouteMap')"
        :src="mapIcon"
        alt="地圖"
        title="地圖"
        role="button"
        width="23"
      />
    </TabsHeader>
    <!-- 預估到站時間 -->
    <div class="flex-grow-1 overflow-auto">
      <h3 v-if="error" class="mt-5 text-center">
        {{ error }}
      </h3>
      <div v-else :class="['h-100', mapClass]">
        <keep-alive>
          <Suspense>
            <component
              :is="children[cIndex]"
              :routeName="props.routeName"
              :city="props.city"
              :direction="direction"
            ></component>

            <template #fallback>
              <Loading class="mt-4" />
            </template>
          </Suspense>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onErrorCaptured, computed } from 'vue'
import TabsHeader from '@/components/TabsHeader.vue'
import RouteMap from '@/components/RouteMap.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import Loading from '@/components/Loading.vue'
import mapIcon from '@/assets/map.svg'

const props = defineProps({
  city: String,
  routeName: String
})

const direction = ref('forward')
const error = ref(null)
const forwardStopName = ref('去程')
const backwardStopName = ref('回程')
const children = {
  RealTimeArrivalInfo,
  RouteMap
}
const cIndex = ref('RealTimeArrivalInfo')
const mapClass = computed(() => ({
  container: cIndex.value !== 'RouteMap'
}))

provide('stopsLabel', { forwardStopName, backwardStopName })

const switchComponent = (index) => {
  cIndex.value = index
}

const setDirection = (newDirection) => {
  direction.value = newDirection
}

onErrorCaptured((e) => {
  error.value = e.message
})
</script>
