import { ref } from 'vue'

const events = new Map()
const error = ref(null)
const pending = ref(false)

const useEventBus = (key) => {
  function on(listener) {
    const listeners = events.get(key) || []
    listeners.push(listener)
    events.set(key, listeners)
  }

  function off(listener) {
    const listeners = events.get(key)
    if (!listeners) return
    const index = listeners.indexOf(listener)
    if (index > -1) listeners.splice(index, 1)
    if (!listeners.length) events.delete(key)
  }

  function reset() {
    events.delete(key)
  }

  function emit(event, payload) {
    events.get(key)?.forEach((v) => v(event, payload))
  }

  async function emitAndWait(event, payload) {
    try {
      pending.value = true
      const listeners = events.get(key) || []
      const promises = listeners.map((v) => v(event, payload))
      await Promise.all(promises)
    } catch (e) {
      error.value = e.message
    } finally {
      pending.value = false
    }
  }

  return { on, off, emit, reset, emitAndWait, error, pending }
}

export default useEventBus
