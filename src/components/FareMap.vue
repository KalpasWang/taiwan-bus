<template>
  <div>票價查詢</div>
  <select v-model="stage1">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select>
  <select v-model="stage2">
    <option v-for="stage in stages" :value="stage">{{ stage.StopName }}</option>
  </select>
  <h3 v-if="!fares">暫無售票</h3>
  <div v-else v-for="fare in fares">
    <h5>{{ fare.seat }}</h5>
    <dl>
      <template v-for="ticket in fare.tickets">
        <dt>{{ ticket.name }}</dt>
        <dd>{{ ticket.price }}</dd>
      </template>
    </dl>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouteFare } from '@/composables/bus'

const props = defineProps({
  routeName: {
    type: String,
    required: true,
    default: ''
  }
})

const { stages, init, getStageFare } = useRouteFare(props.routeName)
await init()

const stage1 = ref(stages.value[0])
const stage2 = ref(stages.value[1])
const fares = ref({})

watchEffect(() => {
  fares.value = getStageFare(stage1.value, stage2.value)
})
</script>

<style lang="scss" scoped></style>
