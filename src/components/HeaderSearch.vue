<template>
  <div class="header-shadow bg-dark row p-3">
    <div class="col-auto">
      <img :src="logoUrl" class="logo-header-size" />
    </div>
    <div class="col">
      <div class="input-group">
        <select
          class="form-select flex-grow-0 flex-shrink-1 minw-120px"
          aria-label="選擇縣市"
        >
          <option value="" selected>選擇縣市</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          type="text"
          class="form-control py-md-3"
          placeholder="選擇路線"
        />
      </div>
    </div>
    <div class="col-auto">
      <img
        :src="searchWhiteUrl"
        @click="emit('search')"
        alt="search icon"
        class="vertical-center"
        role="button"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import logoUrl from '@/assets/Logo.png'
import searchWhiteUrl from '@/assets/search-white.svg'

const props = defineProps({
  type: String
})

const emit = defineEmits(['search'])
</script>

<style lang="scss">
.minw-120px {
  min-width: 120px !important;
}
</style>
