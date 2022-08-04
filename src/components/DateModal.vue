<template>
  <VueFinalModal
    overlay-class="modal-overlay"
    content-class="modal-content"
    classes="modal-container"
  >
    <h5 v-if="msg" class="text-dark">{{ msg }}</h5>
    <h5 v-else class="text-dark">輸入日期 (格式例：2021 01 01)</h5>
    <div class="row">
      <div class="col">
        <input v-model="year" :min="year" type="number" class="form-control" />
      </div>
      <div class="col">
        <input
          v-model="month"
          type="number"
          min="1"
          max="12"
          class="form-control"
        />
      </div>
      <div class="col">
        <input
          v-model="date"
          type="number"
          min="1"
          max="31"
          class="form-control"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button
        @click="emit('cancel')"
        type="button"
        class="btn btn-outline-primary text-warning w-100"
      >
        取消
      </button>
      <button
        @click="validateDate"
        type="button"
        class="btn btn-outline-primary w-100"
      >
        設定
      </button>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { ref } from 'vue'
import { isExists, isPast } from 'date-fns'

const emit = defineEmits(['confirm', 'cancel'])

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth() + 1)
const date = ref(today.getDate())
const msg = ref('')

const validateDate = () => {
  const m = month.value - 1
  const selectedDate = new Date(year.value, m, date.value)
  if (!isExists(year.value, m, date.value) || isPast(selectedDate)) {
    msg.value = '請輸入正確且非過去的日期'
    return
  }
  emit('confirm', selectedDate)
}
</script>
