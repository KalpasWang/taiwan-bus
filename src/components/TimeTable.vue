<template>
  <div>
    <TabsHeader @setDirection="setDirection" @back="emit('back')">
      <div class="flex-center">
        <input
          :value="chooseDate"
          @click="showModal = true"
          class="btn btn-dark px-7 btn-lg"
          type="button"
        />
      </div>
    </TabsHeader>
    <DateModal
      v-model="showModal"
      @confirm="getNewDepartureTime"
      @cancel="showModal = false"
    />
    <div class="row mt-5">
      <div class="col flex-center">
        <Transition name="slide-right">
          <ol v-if="direction === 'forward'" class="list-unstyled">
            <li v-for="(time, i) in forwardTime" :key="i">
              <span class="index">{{ i + 1 }}</span>
              {{ time }}
            </li>
          </ol>
        </Transition>
      </div>
      <div class="col flex-center">
        <Transition name="slide-left">
          <ol v-if="direction === 'backward'" class="list-unstyled text-end">
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
import { inject, ref } from 'vue'
import { useSchedule } from '@/composables/bus'
import { format } from 'date-fns'
import TabsHeader from './TabsHeader.vue'
import DateModal from './DateModal.vue'

const emit = defineEmits(['back'])
const { routeName } = inject('busLabel')
const direction = ref('forward')
const showModal = ref(false)
const chooseDate = ref(format(new Date(), 'yyyy/MM/dd'))
const { forwardTime, backwardTime, fetchBusSchedule, getDepartureTimeByDate } =
  useSchedule(routeName)

const setDirection = (newDirection) => {
  direction.value = newDirection
}

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
