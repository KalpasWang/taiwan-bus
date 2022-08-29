<template>
  <div class="bg-secondary vh-100">
    <div v-if="error" class="container h-100">
      <h3 class="flex-center text-light">
        {{ error }}
      </h3>
    </div>
    <div v-else class="h-100">
      <Transition name="fade-in">
        <keep-alive>
          <Suspense>
            <component
              :is="children[cIndex]"
              @back="back"
              :routeName="props.routeName"
              :direction="direction"
            ></component>

            <template #fallback>
              <Loading class="mt-4" />
            </template>
          </Suspense>
        </keep-alive>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, provide, onErrorCaptured } from 'vue'
import { useRouter } from 'vue-router'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import TimeTable from '@/components/TimeTable.vue'
import FareMap from '@/components/FareMap.vue'
import RouteMap from '@/components/RouteMap.vue'
import Loading from '@/components/Loading.vue'

const props = defineProps({
  routeName: String
})
const router = useRouter()
const error = ref(null)
const children = {
  RealTimeArrivalInfo,
  TimeTable,
  FareMap,
  RouteMap
}
const cIndex = ref('RealTimeArrivalInfo')
const childrenClass = computed(() => ({
  container: cIndex.value !== 'RouteMap',
  'h-100': cIndex.value === 'RouteMap'
}))
const forwardLabel = ref('去程')
const backwardLabel = ref('回程')

// 動態切換元件，在即時公車路線、時刻表、票價查詢與地圖
// 等元件中切換
const switchComponent = (index) => {
  cIndex.value = index
}

const back = () => {
  if (cIndex.value === 'RealTimeArrivalInfo') {
    router.go(-1)
  } else {
    cIndex.value = 'RealTimeArrivalInfo'
  }
}

provide('busLabel', {
  routeName: props.routeName,
  city: null,
  forwardLabel,
  backwardLabel
})

provide('switchComponent', switchComponent)

onErrorCaptured((e) => {
  console.log(e)
  error.value = e.message
})
</script>
