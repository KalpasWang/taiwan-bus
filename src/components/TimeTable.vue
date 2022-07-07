<template>
  <div>
    <ul class="list-unstyled">
      <li>Hello</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import bus from '@/composables/useInterCityBus'
import { api } from '@/composables/api'

const props = defineProps({
  routeName: String
})
// const { state } = bus
const schedule = ref(null)

// 取得指定[路線名稱]的公路客運路線班表資料
const fetchBusSchedule = async (routeName) => {
  const url = `Schedule/InterCity/${routeName}`
  const res = await api.get(url)
  schedule.value = res.data
  console.log(res.data)
}

await fetchBusSchedule(props.routeName)
</script>

<style lang=""></style>
