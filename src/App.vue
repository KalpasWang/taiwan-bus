<template>
  <div id="app">
    <router-view></router-view>
    <notications position="center" classes="my-notications" />
  </div>
</template>

<script setup></script>

<style lang="scss">
@import './assets/scss/all.scss';

.my-notications {
  background: $primary;
  color: $dark;
}
</style>
