<template>
  <div class="text-center">
    <router-link :to="{ name: 'BusSearch' }" class="btn btn-primary btn-lg m-3">
      路線搜尋
    </router-link>
    <button class="btn btn-warning btn-lg m-3">附近站牌</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>