<template>
  <!-- header -->
  <header class="header header-shadow bg-dark p-3 px-lg-0">
    <div class="d-flex px-3 py-4 container">
      <div class="flex-grow-1 w-100 d-flex align-items-center">
        <IconButton @click="emit('back')" :imgUrl="backIcon" title="回上一頁" />
      </div>
      <Logo />
      <div class="flex-grow-1 w-100"></div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-end align-items-center">
        <WideButton @click="showModal1 = true">{{
          stage1.StopName
        }}</WideButton>
      </div>
      <div class="col-auto flex-center">
        <IconButton @click="swapCitys" :imgUrl="swapIcon" title="交換車站" />
      </div>
      <div class="col align-items-center">
        <WideButton @click="showModal2 = true">{{
          stage2.StopName
        }}</WideButton>
      </div>
    </div>
  </header>
  <!-- <select v-model="stage1">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select>
  <select v-model="stage2">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select> -->
  <main class="container pt-7">
    <h3 v-if="!fares" class="text-center h5">暫無售票</h3>
    <div v-else v-for="fare in fares">
      <div>
        <h5>{{ fare.seat }}</h5>
        <dl>
          <template v-for="ticket in fare.tickets">
            <dt>{{ ticket.name }}</dt>
            <dd>{{ ticket.price }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, watchEffect, inject } from 'vue'
import IconButton from './IconButton.vue'
import WideButton from './WideButton.vue'
import Logo from '@/components/Logo.vue'
import backIcon from '@/assets/back.svg'
import swapIcon from '@/assets/swap.svg'
import { useRouteFare } from '@/composables/bus'

const emit = defineEmits(['back'])
const { routeName } = inject('busLabel')
const showModal1 = ref(false)
const showModal2 = ref(false)
const { stages, init, getStageFare } = useRouteFare(routeName)
await init()

const stage1 = ref(stages.value[0])
const stage2 = ref(stages.value[2])
const fares = ref({})

watchEffect(() => {
  fares.value = getStageFare(stage1.value, stage2.value)
})
</script>

<style lang="scss" scoped></style>
