<template>
  <header class="header-shadow bg-dark row p-3 px-lg-0">
    <div class="col-auto">
      <logo />
    </div>
    <div class="col">
      <input
        ref="input"
        v-model="routeNameModel"
        :readonly="!isManual"
        type="text"
        class="form-control bg-secondary py-md-3 ls-1"
        placeholder="選擇路線或手動輸入關鍵字"
      />
    </div>
  </header>
</template>

<script setup>
import { inject, ref, computed, watch, onMounted } from 'vue'
import logo from '@/components/logo.vue'

// inject states and mutations from parent
const { query, updateRouteNameQuery } = inject('query')
const { isManual } = inject('manualInput')
const input = ref(null)

const routeNameModel = computed({
  get() {
    return query.routeName
  },
  set(keys) {
    updateRouteNameQuery(keys, true)
  }
})

onMounted(() => {
  watch(isManual, (newVal) => {
    if (newVal) {
      input.value.focus()
    }
  })
})
</script>

<style lang="scss"></style>
