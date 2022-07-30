<template>
  <div>
    <div class="d-flex justify-content-center">
      <input
        :value="chooseDate"
        @click="selectDate"
        class="btn btn-dark px-7 btn-lg"
        type="button"
      />
    </div>
    <ul v-if="props.direction === 'forward'" class="list-unstyled">
      <li v-for="(time, i) in forwardTime" :key="i">{{ i + 1 }}: {{ time }}</li>
    </ul>
    <ul v-else class="list-unstyled text-end">
      <li v-for="(time, i) in backwardTime" :key="i">
        {{ i + 1 }}: {{ time }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSchedule } from '@/composables/bus'
import { format } from 'date-fns'

const props = defineProps({
  routeName: {
    type: String,
    required: true,
    default: ''
  },
  direction: {
    type: String,
    required: true,
    default: 'forward'
  }
})
const chooseDate = ref(format(Date.now(), 'yyyy/MM/dd'))
const { fetchBusSchedule, getDepartureTimeByDate } = useSchedule(
  props.routeName
)

await fetchBusSchedule(props.routeName)
const [forwardTime, backwardTime] = getDepartureTimeByDate(Date.now())
</script>

<style lang=""></style>
