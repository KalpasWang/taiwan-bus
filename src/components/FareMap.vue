<template>
  <div>票價查詢</div>
  <select v-model="stage1">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select>
  <select v-model="stage2">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select>
  <div v-for="seat in fare">
    <h5>{{ seat }}</h5>
    <dl></dl>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { useRouteFare } from '@/composables/bus'

const props = defineProps({
  routeName: {
    type: String,
    required: true,
    default: ''
  }
})

const { stages, fareMap, init, getStageFare } = useRouteFare(props.routeName)
await init()

const stage2 = ref(stages.value[1])
const stage1 = ref(stages.value[0])
const fare = ref({})

watchEffect(() => {
  fare.value = getStageFare(stage1, stage2)
})
</script>

<style lang="scss" scoped></style>
