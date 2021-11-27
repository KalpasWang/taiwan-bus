import { ref, watchEffect } from 'vue'
import { citys } from '@/composables/constant'

const city = ref('')
const routeName = ref('')

watchEffect(() => {
  console.log(routeName.value)
})

const checkCityInput = (value) => {
  return citys.some((city) => city.CityName === value)
}

export default {
  city,
  routeName,
  checkCityInput
}
