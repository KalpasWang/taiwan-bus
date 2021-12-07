<template>
  <div class="header-shadow bg-dark row py-3">
    <div class="col-auto">
      <img :src="logoUrl" class="logo-header-size" />
    </div>
    <div class="col">
      <input
        v-model="inputs.routeName"
        type="text"
        class="form-control py-md-3 ls-1"
        placeholder="選擇路線或手動輸入關鍵字"
      />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
import input from '@/composables/useInput'

const props = defineProps({
  type: String
})

const { inputs } = input
</script>

<style lang="scss"></style>
