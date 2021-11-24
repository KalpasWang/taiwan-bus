<template>
  <div class="header-shadow bg-dark row p-3">
    <div class="col-auto">
      <img :src="logoUrl" class="logo-header-size" />
    </div>
    <div class="col">
      <input
        class="form-control py-md-3"
        placeholder="選擇路線或手動輸入關鍵字"
      />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
</script>

<style lang="scss"></style>
