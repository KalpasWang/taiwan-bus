<template>
  <div>
    <DateModal
      v-model="showModal"
      @confirm="getNewDepartureTime"
      @cancel="showModal = false"
    />
    <div class="flex-center my-5">
      <input
        :value="chooseDate"
        @click="showModal = true"
        class="btn btn-dark px-7 btn-lg"
        type="button"
      />
    </div>
    <div class="row">
      <div class="col flex-center">
        <Transition name="slide-right">
          <ol v-if="props.direction === 'forward'" class="list-unstyled">
            <li v-for="(time, i) in forwardTime" :key="i">
              <span class="index">{{ i + 1 }}</span>
              {{ time }}
            </li>
          </ol>
        </Transition>
      </div>
      <div class="col flex-center">
        <Transition name="slide-left">
          <ol
            v-if="props.direction === 'backward'"
            class="list-unstyled text-end"
          >
            <li v-for="(time, i) in backwardTime" :key="i">
              <span class="index">{{ i + 1 }}</span>
              {{ time }}
            </li>
          </ol>
        </Transition>
      </div>
    </div>
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

.slide-right-enter-active {
  transition: all 0.25s ease-in;
}

.slide-right-leave-active {
  transition: all 0.25s ease-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
}

.slide-left-enter-active {
  transition: all 0.25s ease-in;
}

.slide-left-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
