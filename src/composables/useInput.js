import { reactive } from 'vue'

const state = reactive({
  city: {
    CityName: '',
    City: '',
    CityCode: ''
  },
  routeName: ''
})

const setCity = (city) => {
  state.city = city
}

const inputRouteName = (value) => {
  state.routeName += value
}

const deleteLastChar = () => {
  const name = state.routeName
  state.routeName = name.slice(0, -1)
}

const removeRouteName = () => {
  state.routeName = ''
}

export default {
  inputs: state,
  setCity,
  inputRouteName,
  deleteLastChar,
  removeRouteName
}
