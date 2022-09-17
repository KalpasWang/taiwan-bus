<template>
  <div class="text-end text-primary ls-1">
    <p v-if="error">更新失敗<br />{{ error }}</p>
    <p v-else-if="pending">
      *更新中...
      <Loading :width="25" class="d-inline-block" />
    </p>
    <p v-else> *於 {{ timeAfterUpdate }} 秒前更新 </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Loading from '@/components/loading.vue'
import useEventBus from '@/composables/useEventBus'

const timeAfterUpdate = ref(0)
const updateTime = 30
const eventBus = useEventBus('timer')
const { error, pending } = eventBus
let timer = null

onMounted(() => {
  // 每隔 updateTime 秒 refresh 一次
  timer = setInterval(async () => {
    if (timeAfterUpdate.value >= updateTime) {
      await eventBus.emitAndWait()
      if (error.value) {
        clearInterval(timer)
      }
      timeAfterUpdate.value = 0
    } else {
      timeAfterUpdate.value++
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
