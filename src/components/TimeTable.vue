<template>
  <div>
    <h3 v-if="state.pending" class="mt-5 text-center">
      <Loading />
    </h3>
    <h3 v-else-if="state.error" class="mt-5 text-center text-light">
      {{ state.error }}
    </h3>
    <ul v-else class="list-unstyled">
      <!-- <li v-for="item in items" :key="index"></li> -->
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Loading from '@/components/loading.vue'
import bus from '@/composables/useInterCityBus'

const props = defineProps({
  routeName: String
})
const { state } = bus

onMounted(() => {
  bus.fetchSchedule(props.routeName)
})
</script>
<style lang=""></style>
