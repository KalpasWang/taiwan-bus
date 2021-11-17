<template>
  <div class="home-height position-relative bg-home">
    <img :src="logoUrl" class="icon-home-size" />
    <div class="blue-circle">
      <router-link :to="{ name: 'NearBy' }">
        <img src="" class="mb-2" />
        附近公車站
      </router-link>
    </div>
    <div class="white-circle"></div>
    <div class="yellow-circle"></div>
    <router-link
      :to="{ name: 'CitySearch' }"
      class="btn btn-primary btn-lg m-3"
    >
      查詢公車
    </router-link>
    <router-link :to="{ name: 'NearBy' }" class="btn btn-warning btn-lg m-3"
      >搜尋附近公車站</router-link
    >
    <router-link
      :to="{ name: 'InterCitySearch' }"
      class="btn btn-warning btn-lg m-3"
      >查詢客運</router-link
    >
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setFullHeight)

setFullHeight()
</script>

<style>
.home-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
.bg-home {
  /* black_gray_line */
  background: linear-gradient(
    171.99deg,
    #323232 10.16%,
    #0a0a0b 71.59%
  ) !important;
}
</style>
