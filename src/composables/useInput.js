import { ref, reactive, watchEffect } from 'vue'
import { citys } from '@/composables/constant'

const city = reactive({
  CityName: '',
  CityCode: '',
  City: ''
})
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
