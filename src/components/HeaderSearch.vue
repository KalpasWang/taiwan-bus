<template>
  <div class="header-shadow bg-dark row py-3">
    <div class="col-auto">
      <img :src="logoUrl" class="logo-header-size" />
    </div>
    <div class="col">
      <input
        type="text"
        class="form-control py-md-3"
        placeholder="選擇路線或手動輸入關鍵字"
      />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'

const props = defineProps({
  type: String
})
</script>

<style lang="scss"></style>
