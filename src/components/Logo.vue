<template>
  <h1 class="m-0 lh-1 hide-text">
    <router-link :to="{ name: 'Home' }" title="回首頁">
      <img
        :src="logoUrl"
        title="回首頁"
        alt="回首頁"
        class="logo-header-size"
      />
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
