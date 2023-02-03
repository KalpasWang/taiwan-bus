<template>
  <div class="wrapper vh-100 container-lg position-relative">
    <SearchHeader class="header" />
    <main class="main-content overflow-auto px-3 px-lg-0 minh-100">
      <RoutesList type="intercity" @onScroll="checkMedia" />
    </main>
    <Transition name="keyboard-slide">
      <div v-if="!isManual && showKeyboard" class="keyboard">
        <KeyBoard2 />
      </div>
    </Transition>
    <transition name="badge-fade">
      <button
        v-if="isManual"
        @click="updateIsManual(false)"
        class="keyboard-badge bg-primary shadow-sm"
        role="button"
      >
        <img :src="keyboardIcon" alt="開啟鍵盤" role="button" />
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { state } from '@/composables/bus'
import SearchHeader from '@/components/SearchHeader.vue'
import KeyBoard2 from '@/components/KeyBoard2.vue'
import RoutesList from '@/components/RoutesList.vue'
import keyboardIcon from '@/assets/keyboard.svg'

const showKeyboard = ref(true)
const isManual = ref(false)

// methods
const checkMedia = () => {
  if (!showKeyboard.value) return
  const mq = window.matchMedia('(min-width: 992px)')
  if (!mq.matches) {
    showKeyboard.value = false
  }
}

const getRouteName = () => {
  return state.inputRouteName2
}

const updateRouteName = (newRouteName) => {
  state.inputRouteName2 = newRouteName
}

const updateIsManual = (val) => {
  isManual.value = +val
  showKeyboard.value = !val
}

// provide 響應式 states, mutations 給子元件
provide('input', {
  showKeyboard,
  getRouteName,
  updateRouteName
})

provide('isManual', {
  isManual,
  updateIsManual
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
