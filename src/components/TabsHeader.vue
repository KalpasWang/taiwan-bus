<template>
  <!-- Header -->
  <div class="header-shadow bg-dark">
    <div class="d-flex px-3 py-4 container">
      <div class="flex-grow-1 w-100 d-flex align-items-center">
        <IconButton @click="emit('back')" :imgUrl="backIcon" title="回上一頁" />
      </div>
      <slot>
        <Logo class="d-flex align-items-center" />
      </slot>
      <div
        class="flex-grow-1 w-100 d-flex flex-wrap justify-content-end align-items-center"
      >
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="container">
      <h2 class="h4 text-center mb-1">{{ routeName }}</h2>
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
import { ref, inject } from 'vue'
import Logo from '@/components/Logo.vue'
import IconButton from '@/components/IconButton.vue'
import backIcon from '@/assets/back.svg'

const emit = defineEmits(['back', 'setDirection'])
const { routeName, forwardLabel, backwardLabel } = inject('busLabel')
const activeTab = ref('forward')

const setTab = (direction) => {
  activeTab.value = direction
  emit('setDirection', direction)
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
    transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &.active::after {
    background: $primary;
    box-shadow: 0px 0px 6px $primary, 0px 0px 2px $primary;
  }
}
</style>
