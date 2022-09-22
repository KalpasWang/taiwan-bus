<template>
  <div class="wrapper vh-100 container-lg position-relative">
    <SearchHeader class="header" />
    <main class="main-content overflow-auto px-3 px-lg-0 minh-100">
      <RoutesList type="intercity" :routeName="query.routeName" />
    </main>
    <Transition name="keyboard-slide">
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
        <img :src="keyboardIcon" alt="開啟鍵盤" role="button" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, provide } from 'vue'
import SearchHeader from '@/components/SearchHeader.vue'
import KeyBoard2 from '@/components/KeyBoard2.vue'
import RoutesList from '@/components/RoutesList.vue'
import keyboardIcon from '@/assets/keyboard.svg'

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
}

const updateIsManual = (val) => {
  isManual.value = +val
}

// provide 響應式 states, mutations 給子元件
provide('query', {
  query,
  updateRouteNameQuery
})

provide('manualInput', {
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
  @media screen and (min-width: 991px) {
    grid-template-columns: 6fr 7fr;
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
    right: auto;
    left: 16px;
  }
}
</style>
