<template>
  <div class="wrapper vh-100 container-lg bg-dark">
    <!-- header -->
    <header class="header header-shadow bg-dark p-3 px-lg-0">
      <div class="row">
        <div class="col-auto d-flex justify-content-center align-items-center">
          <IconButton
            @click="router.go(-1)"
            :imgUrl="backIcon"
            title="回上一頁"
          />
        </div>
        <div class="col">
          <Logo />
        </div>
      </div>
      <div class="row gx-0">
        <div class="col">
          <input
            ref="input1"
            :value="getCityName(state.from)"
            @click="focusInput1"
            type="text"
            class="form-control bg-secondary text-center ls-1"
            role="button"
            placeholder="選擇出發縣市"
            readonly
          />
        </div>
        <div class="col-auto d-flex justify-content-center align-items-center">
          <IconButton @click="swapCitys" :imgUrl="swapIcon" title="交換縣市" />
        </div>
        <div class="col">
          <input
            ref="input2"
            :value="getCityName(state.to)"
            @click="focusInput2"
            type="text"
            class="form-control bg-secondary text-center ls-1"
            role="button"
            placeholder="選擇到達縣市"
            readonly
          />
        </div>
      </div>
    </header>
    <main class="main-content overflow-auto px-3 px-lg-0 minh-100">
      <RoutesList type="intercity-from-to" @onScroll="checkMedia" />
    </main>
    <Transition name="keyboard-slide">
      <KeyBoard3 v-if="cityFocused === 'from'" v-model="state.from" />
    </Transition>
    <Transition name="keyboard-slide">
      <KeyBoard3 v-if="cityFocused === 'to'" v-model="state.to" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watchPostEffect } from 'vue'
import { useRouter } from 'vue-router'
import { state } from '@/composables/bus'
import { getCityName } from '../composables/utilities'
import RoutesList from '@/components/RoutesList.vue'
import KeyBoard3 from '@/components/KeyBoard3.vue'
import Logo from '@/components/Logo.vue'
import backIcon from '@/assets/back.svg'
import swapIcon from '@/assets/swap.svg'
import IconButton from '../components/IconButton.vue'

const router = useRouter()
const input1 = ref(null)
const input2 = ref(null)
const cityFocused = ref('from')

watchPostEffect(() => {
  if (state.from && !state.to) {
    focusInput2()
  } else if (!state.from && state.to) {
    focusInput1()
  } else if (state.from && state.to) {
    blurInputs()
  }
})

function focusInput1() {
  input1.value.classList.add('form-control-active')
  input2.value.classList.remove('form-control-active')
  cityFocused.value = 'from'
}

function focusInput2() {
  input2.value.classList.add('form-control-active')
  input1.value.classList.remove('form-control-active')
  cityFocused.value = 'to'
}

function blurInputs() {
  input1.value.classList.remove('form-control-active')
  input2.value.classList.remove('form-control-active')
  cityFocused.value = ''
}

const checkMedia = () => {
  if (!cityFocused.value) return
  const mq = window.matchMedia('(min-width: 992px)')
  if (!mq.matches) {
    cityFocused.value = ''
  }
}

const swapCitys = () => {
  const temp = state.from
  state.from = state.to
  state.to = temp
}

onMounted(() => {
  focusInput1()
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'keyboard';
  column-gap: 42px;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header main'
      'keyboard main';
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 5fr 7fr;
  }
}

.header {
  grid-area: header;
}

.main-content {
  grid-area: main;
}

.keyboard {
  grid-area: keyboard;
}
</style>
