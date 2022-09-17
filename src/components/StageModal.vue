<template>
  <VueFinalModal
    overlay-class="modal-overlay"
    content-class="modal-content"
    classes="modal-container"
  >
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="fs-6 mb-0">{{ props.title }}</h6>
      <button
        @click="emit('cancel')"
        class="btn btn-outline-primary btn-sm fs-6 border-0"
        >取消</button
      >
    </div>
    <div class="row row-cols-1 g-3">
      <div v-for="stage in props.stages" :key="stage.StopID" class="col">
        <button
          @click="emit('confirm', stage)"
          class="w-100 btn btn-outline-primary py-1 shadow-primary rounded-3"
          >{{ stage.StopName }}</button
        >
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '選擇出發站'
  },
  stages: {
    type: Array,
    required: true,
    default: []
  }
})
const emit = defineEmits(['confirm', 'cancel'])
</script>
