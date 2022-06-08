<template>
  <div class="wrapper vh-100 container-lg position-relative">
    <SearchHeader class="header" />
    <main ref="routesList" class="main-content overflow-hidden px-3">
      <h3 v-if="state.pending" class="mt-5 text-center text-light">
        <img :src="loadingIcon" width="70" alt="loading..." />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <RoutesList type="intercity" v-else />
    </main>
    <Transition name="keyboard-slide" @after-leave="setScrollAreaHeight">
      <div v-if="!isManual" class="keyboard">
        <KeyBoard2 />
      </div>
    </Transition>
    <transition name="badge-fade">
      <div
        v-if="isManual"
        class="keyboard-badge bg-primary shadow-sm"
        @click="isManual = false"
      >
        <img :src="keyboardIcon" alt="開啟鍵盤" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, provide, toRef, onUnmounted } from 'vue'
import bus from '@/composables/useInterCityBus'
import SearchHeader from '@/components/SearchHeader.vue'
import KeyBoard2 from '@/components/KeyBoard2.vue'
import RoutesList from '@/components/RoutesList.vue'
import loadingIcon from '@/assets/loading.svg'
import keyboardIcon from '@/assets/keyboard.svg'

const { state } = bus
const routesList = ref(null)
const query = reactive({
  routeName: ''
})
const isManual = ref(false)

// methods
const updateRouteNameQuery = (key, allKeys = false) => {
  if (allKeys) {
    query.routeName = key
  } else if (typeof key === 'string') {
    const oldName = query.routeName
    query.routeName = oldName + key
  } else if (key === -1) {
    const name = query.routeName
    query.routeName = name.slice(0, -1)
  } else if (!key) {
    query.routeName = ''
  }

  if (query.routeName) {
    bus.fetchRoutesByRouteName(query.routeName)
  }
}

const updateIsManual = (val) => {
  isManual.value = +val
}

// 在 mount, resize 與 鍵盤切換時調整 perfect scrollbar 區域高度
const setScrollAreaHeight = () => {
  const height = routesList.value.offsetHeight + 'px'
  // console.log(height)
  document.documentElement.style.setProperty('--h', height)
}

// provide 響應式 states, mutations 給子元件
provide('query', {
  query,
  updateRouteNameQuery
})

provide('routesList', toRef(state, 'routesList'))

provide('manualInput', {
  isManual,
  updateIsManual
})

// 監聽 resize event
function callback() {
  setScrollAreaHeight()
}

onMounted(() => {
  setScrollAreaHeight()
  window.addEventListener('resize', callback)
})

onUnmounted(() => {
  window.removeEventListener('resize', callback)
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
  @media screen and (min-width: 991px) {
    grid-template-columns: 5fr 7fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header main'
      'keyboard main';
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

.keyboard-badge {
  position: absolute;
  right: 16px;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 991px) {
    top: 108px;
    bottom: auto;
    right: 58.34%;
  }
}
</style>
