<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
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

<script>
export default {
  name: 'Home'
}
</script>

<style></style>
