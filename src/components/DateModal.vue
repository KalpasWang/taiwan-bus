<template>
  <VueFinalModal
    overlay-class="modal-overlay"
    content-class="modal-content"
    classes="modal-container"
  >
    <h6 class="mb-4">
      輸入日期 <span class="text-primary">(格式例：2021 01 01)</span>
    </h6>
    <div class="row g-2 mb-4">
      <div class="col">
        <select v-model.number="year" class="form-select px-6 text-center">
          <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
        </select>
      </div>
      <div class="col">
        <select v-model.number="month" class="form-select px-6 text-center">
          <option v-for="(m, i) in 12" :key="i" :value="i">{{ m }}</option>
        </select>
      </div>
      <div class="col">
        <select v-model.number="date" class="form-select px-6 text-center">
          <option v-for="d in 31" :key="d">{{ d }}</option>
        </select>
      </div>
    </div>
    <div class="grid" style="--bs-columns: 2; --bs-gap: 13px">
      <button
        @click="emit('cancel')"
        class="btn btn-outline-primary text-warning indent-16 ls-16"
        >取消</button
      >
      <button
        @click="validateDate"
        class="btn btn-outline-primary indent-16 ls-16"
        >設定</button
      >
    </div>
    <VueFinalModal
      v-model="showError"
      overlay-class="modal-overlay"
      content-class="modal-content"
      classes="modal-container"
    >
      <h6 class="mb-4">{{ msg }}</h6>
      <button
        @click="showError = false"
        class="btn btn-outline-primary w-100 indent-16 ls-16"
        >確認</button
      >
    </VueFinalModal>
  </VueFinalModal>
</template>

<script setup>
import { ref } from 'vue'
import { isExists, isPast } from 'date-fns'

const emit = defineEmits(['confirm', 'cancel'])

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())
const date = ref(today.getDate())
const years = ref([year.value, year.value + 1])
const msg = ref('')
const showError = ref(false)

const validateDate = () => {
  const selectedDate = new Date(year.value, month.value, date.value)
  if (!isExists(year.value, month.value, date.value) || isPast(selectedDate)) {
    msg.value = '請輸入正確且非過去的日期'
    showError.value = true
    return
  }
  emit('confirm', selectedDate)
}
</script>
