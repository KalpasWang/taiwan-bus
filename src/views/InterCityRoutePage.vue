<template>
  <div class="bg-secondary vh-100">
    <div v-if="error" class="container h-100">
      <h3 class="h-100 flex-center text-light">
        {{ error }}
      </h3>
    </div>
    <div v-else class="h-100">
      <Transition name="slide-in" mode="out-in" @afterLeave="onLeave">
        <keep-alive>
          <Suspense>
            <component :is="children[cIndex]" @back="back"></component>

            <template #fallback>
              <div class="h-100 flex-center">
                <Loading />
              </div>
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
  Home: RealTimeArrivalInfo,
  TimeTable,
  FareMap,
  RouteMap
}
const cIndex = ref('Home')
const forwardLabel = ref('去程')
const backwardLabel = ref('回程')
const childrenFn = []

// 動態切換元件，在即時公車路線、時刻表、票價查詢與地圖
// 等元件中切換
const switchComponent = (index) => {
  cIndex.value = index
}

// 讓 children components 將需要在 tranistion 呼叫的 function 一一呼叫
const onLeave = () => {
  childrenFn.forEach((cb) => {
    cb()
  })
}

// provide 給 children 可以加入要在 transition end 後使用的 function
const addOnLeave = (cb) => {
  childrenFn.push(cb)
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
provide('addOnLeave', addOnLeave)

onErrorCaptured((e) => {
  console.log(e)
  error.value = e.message
})
</script>
