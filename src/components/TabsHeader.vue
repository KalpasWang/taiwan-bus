<template>
  <!-- Header -->
  <div class="header-shadow bg-dark">
    <div class="d-flex justify-content-between align-items-center px-3 py-4">
      <img
        @click="router.go(-1)"
        :src="backIcon"
        alt="回上一頁"
        role="button"
        width="6"
      />
      <logo />
      <slot></slot>
    </div>
    <div class="container">
      <h2 class="h5 text-center mb-1">{{ routeName }}</h2>
      <div class="row">
        <div
          @click="setTab('forward')"
          class="col tab pb-3 text-center position-relative"
          :class="{ active: activeTab === 'forward' }"
          role="button"
        >
          <span class="text-primary">往</span> {{ forwardLabel }}
        </div>
        <div
          @click="setTab('backward')"
          class="col tab pb-3 text-center position-relative"
          :class="{ active: activeTab === 'backward' }"
          role="button"
        >
          <span class="text-primary">往</span> {{ backwardLabel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/components/logo.vue'
import backIcon from '@/assets/back.svg'

const props = defineProps({
  routeName: {
    type: String,
    default: ''
  },
  forwardLabel: {
    type: String,
    default: '去程'
  },
  backwardLabel: {
    type: String,
    default: '回程'
  }
})
const emit = defineEmits(['setTab'])

const router = useRouter()
const activeTab = ref('forward')

const setTab = (tabName) => {
  activeTab.value = tabName
  emit('setTab', tabName)
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-variables';

.tab {
  &::after {
    content: '';
    width: 100%;
    height: 2.43px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50px;
    background: transparent;
    box-shadow: none;
  }

  &.active::after {
    background: $primary;
    box-shadow: 0px 0px 6px $primary, 0px 0px 2px $primary;
  }
}
</style>
