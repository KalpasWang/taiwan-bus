<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header'
</script>
