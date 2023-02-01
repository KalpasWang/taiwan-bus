<template>
  <div class="bg-secondary vh-100">
    <div v-if="error" class="container flex-center h-100">
      <h3 class="text-center">
        {{ error }}
      </h3>
    </div>
    <div v-else class="h-100">
      <keep-alive>
        <Suspense>
          <component :is="children[cIndex]" @back="back"></component>

          <template #fallback>
            <div class="h-100 flex-center z-100">
              <Loading />
            </div>
          </template>
        </Suspense>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onErrorCaptured } from 'vue'
import RouteMap from '@/components/RouteMap.vue'
import RealTimeArrivalInfo from '@/components/RealTimeArrivalInfo.vue'
import Loading from '@/components/Loading.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  city: {
    type: String,
    required: true,
    default: ''
  },
  routeName: {
    type: String,
    required: true,
    default: ''
  },
  subRouteName: {
    type: String,
    required: false,
    default: ''
  }
})

const router = useRouter()
const error = ref(null)
const forwardLabel = ref('去程')
const backwardLabel = ref('回程')
const children = {
  Home: RealTimeArrivalInfo,
  RouteMap
}
const cIndex = ref('Home')

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
  subRouteName: props.subRouteName,
  city: props.city,
  forwardLabel,
  backwardLabel
})
provide('switchComponent', switchComponent)

onErrorCaptured((e) => {
  console.error(e)
  error.value = e.message
})
</script>
