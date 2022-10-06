<template>
  <header class="header-shadow bg-dark row p-3 px-lg-0">
    <div class="col-auto">
      <Logo />
    </div>
    <div class="col">
      <input
        ref="textInput"
        v-model.trim="routeNameModel"
        :readonly="!isManual"
        @click="checkKeyboard"
        type="text"
        class="form-control bg-secondary py-md-3 ls-1"
        placeholder="選擇路線或手動輸入關鍵字"
      />
    </div>
  </header>
</template>

<script setup>
import { inject, ref, computed, watch } from 'vue'
import Logo from '@/components/logo.vue'

// inject states and mutations from parent
const { input, showKeyboard, updateRouteName } = inject('input')
const { isManual } = inject('isManual')
const textInput = ref(null)

const routeNameModel = computed({
  get() {
    return input.routeName
  },
  set(keys) {
    updateRouteName(keys)
  }
})

watch(isManual, (newVal) => {
  if (newVal) {
    textInput.value.focus()
  }
})

const checkKeyboard = (e) => {
  if (!isManual.value) {
    showKeyboard.value = true
  }
}
</script>
