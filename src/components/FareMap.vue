<template>
  <div>
    <StageModal
      v-model="showModal1"
      @cancel="showModal1 = false"
      @confirm="setStage1"
      title="選擇出發站"
      :stages="stages"
    />
    <StageModal
      v-model="showModal2"
      @cancel="showModal2 = false"
      @confirm="setStage2"
      title="選擇抵達站"
      :stages="stages"
    />
    <!-- header -->
    <header class="header header-shadow bg-dark p-3 px-lg-0">
      <div class="d-flex px-3 py-4 container">
        <div class="flex-grow-1 w-100 d-flex align-items-center">
          <IconButton
            @click="emit('back')"
            :imgUrl="backIcon"
            title="回上一頁"
          />
        </div>
        <Logo />
        <div class="flex-grow-1 w-100"></div>
      </div>
      <div class="container">
        <h2 class="h4 text-center mb-1">{{ routeName }}</h2>
        <div class="row">
          <div class="col d-flex justify-content-end align-items-center">
            <WideButton @click="showModal1 = true" title="選擇出發站點">{{
              stage1.StopName
            }}</WideButton>
          </div>
          <div class="col-auto flex-center">
            <IconButton
              @click="swapStages"
              :imgUrl="swapIcon"
              title="交換站點"
            />
          </div>
          <div class="col align-items-center">
            <WideButton @click="showModal2 = true" title="選擇抵達站點">{{
              stage2.StopName
            }}</WideButton>
          </div>
        </div>
      </div>
    </header>
    <main class="container pt-7">
      <h3 v-if="!fares" class="text-center h5">暫無售票</h3>
      <div v-else class="row row-cols-1 row-cols-md-2 g-3">
        <div v-for="fare in fares" class="col">
          <div
            class="w-100 border border-primary rounded-3 shadow-primary py-0 d-flex align-items-center"
          >
            <h5 class="p-6 fs-6 fw-normal h-100 mb-0 border-end-dashed">{{
              fare.seat
            }}</h5>
            <dl class="d-flex flex-wrap h-100 mb-0 align-items-center px-2">
              <div v-for="ticket in fare.tickets" class="px-4">
                <dt class="fs-7 text-primary lh-lg">{{ ticket.name }}</dt>
                <dd class="fs-5 lh-sm mb-0 translate-25-y"
                  >${{ ticket.price }}</dd
                >
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect, inject } from 'vue'
import IconButton from './IconButton.vue'
import WideButton from './WideButton.vue'
import Logo from '@/components/Logo.vue'
import backIcon from '@/assets/back.svg'
import swapIcon from '@/assets/swap.svg'
import { useRouteFare } from '@/composables/bus'
import StageModal from './StageModal.vue'

const emit = defineEmits(['back'])
const { routeName } = inject('busLabel')
const showModal1 = ref(false)
const showModal2 = ref(false)
const { stages, init, getStageFare } = useRouteFare(routeName)
await init()

const stage1 = ref(stages.value[0])
const stage2 = ref(stages.value[2])
const fares = ref({})

const setStage1 = (newStage) => {
  stage1.value = newStage
  showModal1.value = false
}

const setStage2 = (newStage) => {
  stage2.value = newStage
  showModal2.value = false
}

const swapStages = () => {
  const temp = stage1.value
  stage1.value = stage2.value
  stage2.value = temp
}

watchEffect(() => {
  fares.value = getStageFare(stage1.value, stage2.value)
})
</script>
