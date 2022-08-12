<template>
  <div>票價查詢</div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../composables/api'
import { filterRouteName, filterDirection } from '../composables/useUtilities'
const props = defineProps({
  routeName: {
    type: String,
    required: true,
    default: ''
  },
  direction: {
    type: String,
    required: true,
    default: 'forward'
  }
})

const result = ref(null)
const city = null
const routeName = props.routeName

// 取得指定[路線名稱]的公車/客運路線票價資料
const fetchRouteFare = async () => {
  // 設定要 fetch 的網址
  let url = `RouteFare/City/${city}`
  if (!city) {
    url = 'RouteFare/InterCity'
  }
  const res = await api.get(`${url}/${routeName}`)
  console.log(res.data)
  result.value = filterRouteName(routeName, res.data)
  console.log(result.value)
}
fetchRouteFare()
</script>

<style lang="scss" scoped></style>
