<template>
  <router-link :to="{ name: 'Home' }" class="hide-text">
    <img :src="logoUrl" alt="回首頁" class="logo-header-size" />
    回首頁
  </router-link>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
</script>

<style scoped>
.hide-text {
  font-size: 0;
}
</style>
