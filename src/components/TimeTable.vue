<template>
  <div>
    <DateModal
      v-model="showModal"
      @confirm="getNewDepartureTime"
      @cancel="showModal = false"
    />
    <div class="d-flex justify-content-center">
      <input
        :value="chooseDate"
        @click="showModal = true"
        class="btn btn-dark px-7 btn-lg"
        type="button"
      />
    </div>
    <ol v-if="props.direction === 'forward'" class="list-unstyled">
      <li v-for="(time, i) in forwardTime" :key="i">
        <span class="index">{{ i + 1 }}</span>
        {{ time }}
      </li>
    </ol>
    <ol v-else class="list-unstyled text-end">
      <li v-for="(time, i) in backwardTime" :key="i">
        <span class="index">{{ i + 1 }}</span>
        {{ time }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSchedule } from '@/composables/bus'
import { format } from 'date-fns'
import DateModal from './DateModal.vue'

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
const showModal = ref(false)
const chooseDate = ref(format(new Date(), 'yyyy/MM/dd'))
const { forwardTime, backwardTime, fetchBusSchedule, getDepartureTimeByDate } =
  useSchedule(props.routeName)

await fetchBusSchedule()
getDepartureTimeByDate(new Date())

const getNewDepartureTime = (date) => {
  chooseDate.value = format(date, 'yyyy/MM/dd')
  showModal.value = false
  getDepartureTimeByDate(date)
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/custom-variables';

.index {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  min-width: 79px;
  height: 40px;
  padding: 10px;
  border: 1px solid $primary;
  border-radius: 13px;
  box-shadow: 0px 0px 5px $primary;
  margin-right: 28px;
  margin-bottom: 14px;
}
</style>
