<template>
  <div class="bg-secondary vh-100">
    <div v-if="error" class="container h-100">
      <h3 class="h-100 flex-center text-light">
        {{ error }}
      </h3>
    </div>
    <div v-else class="h-100">
      <RealTimeArrivalInfo @back="back" />
      <Transition name="slide-in">
        <keep-alive>
          <div
            v-if="cIndex !== 'Home'"
            class="position-absolute bg-secondary top-0 left-0 h-100 w-100 z-100"
          >
            <Suspense>
              <component :is="children[cIndex]" @back="back"></component>

              <template #fallback>
                <div class="h-100 flex-center z-100">
                  <Loading />
                </div>
              </template>
            </Suspense>
          </div>
        </keep-alive>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onErrorCaptured } from 'vue'
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
  TimeTable,
  FareMap,
  RouteMap
}
const cIndex = ref('Home')
const forwardLabel = ref('去程')
const backwardLabel = ref('回程')

// 動態切換元件，在即時公車路線、時刻表、票價查詢與地圖
// 等元件中切換
const switchComponent = (index) => {
  cIndex.value = index
}

const back = () => {
  if (cIndex.value === 'Home') {
    router.go(-1)
  } else {
    cIndex.value = 'Home'
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
