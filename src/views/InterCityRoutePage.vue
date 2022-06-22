<template>
  <div class="bg-secondary vh-100 d-flex flex-column">
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
    <!-- 預估到站時間 -->
    <div v-show="mapShow" id="stops-map" class="flex-grow-1"></div>
    <div v-show="!mapShow" class="flex-grow-1 container overflow-auto">
      <h3 v-if="state.pending" class="mt-5 text-center">
        <Loading />
      </h3>
      <h3 v-else-if="state.error" class="mt-5 text-center text-light">
        {{ state.error }}
      </h3>
      <div v-else>
        <RealTimeArrivalInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import bus from '@/composables/useInterCityBus'

const props = defineProps({
  routeName: String
})
const { state } = bus

onMounted(() => {
  bus.fetchSchedule(props.routeName)
})
</script>

<style lang="scss"></style>
