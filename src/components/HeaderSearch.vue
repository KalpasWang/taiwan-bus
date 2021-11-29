<template>
  <div class="header-shadow bg-dark row p-3">
    <div class="col-auto">
      <img :src="logoUrl" class="logo-header-size" />
    </div>
    <div class="col">
      <input type="text" class="form-control py-md-3" placeholder="選擇路線" />
    </div>
    <div class="col-auto">
      <img
        :src="searchWhiteUrl"
        @click="emit('search')"
        alt="search icon"
        class="align-middle icon-size"
        role="button"
      />
    </div>
  </div>
</template>

<script setup>
// import { defineEmits } from 'vue'
import logoUrl from '@/assets/Logo.png'
import searchWhiteUrl from '@/assets/search-white.svg'

const props = defineProps({
  type: String
})

const emit = defineEmits(['search'])
</script>

<style lang="scss">
.icon-size {
  height: 25px;
  @media screen and (min-width: 991px) {
    height: 40px;
  }
}
</style>
