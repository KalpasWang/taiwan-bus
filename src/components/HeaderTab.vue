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
      <img
        @click="toggleMap()"
        :src="mapIcon"
        :class="{ 'map-active': mapShow }"
        alt="地圖"
        role="button"
        width="23"
      />
    </div>
    <div class="container">
      <div class="row">
        <div
          v-for="tab in tabs"
          :key="tab.name"
          @click="setTab(tab.name)"
          class="col tab pb-3 text-center position-relative"
          :class="{ active: activeTab === tab.name }"
          role="button"
        >
          <span class="text-primary">往</span> {{ tab.label }}
        </div>
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
import logo from '@/components/logo.vue'

const props = defineProps({
  tabs: Array,
  currentIdx: Number
})
const emit = defineEmits(['active'])

const activeTab = ref(tabs[currentIdx])
</script>

<style lang="scss">
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
