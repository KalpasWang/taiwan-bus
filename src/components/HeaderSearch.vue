<template>
  <div class="bg-dark row py-3">
    <div class="col">
      <img :src="logoUrl" class="logo-header-size me-2" />
    </div>
    <div class="col-auto">
      <input class="form-control" placeholder="選擇路線或手動輸入關鍵字" />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
</script>

<style lang=""></style>
