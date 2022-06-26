<template>
  <h1>
    <router-link :to="{ name: 'Home' }" title="回首頁" class="hide-text">
      <img :src="logoUrl" alt="回首頁" class="logo-header-size" />
      Taiwan Bus
    </router-link>
  </h1>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
</script>

<style scoped>
.hide-text {
  font-size: 0;
}
</style>
