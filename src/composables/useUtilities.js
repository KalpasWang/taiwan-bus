import bus from '@/composables/useCityBus'

export const getTimeBadgeAndColor = (timeObj) => {
  let badge = {
    text: '',
    bgColor: 'bg-dark',
    color: 'text-primary',
    border: true
  }
  // console.log(timeObj)
  const time = timeObj.EstimateTime
  if (time === 0) {
    badge.text = '進站中'
    badge.bgColor = 'bg-primary'
    badge.color = 'text-dark'
  } else if (time <= 90) {
    badge.text = '即將到站'
    badge.bgColor = 'bg-primary'
    badge.color = 'text-dark'
  } else if (!time) {
    const status = timeObj.StopStatus
    switch (status) {
      case 0:
        badge.text = '--'
        break
      case 1:
        badge.text = '未發車'
        break
      case 2:
        badge.text = '交管不停靠'
        break
      case 3:
        badge.text = '末班車已過'
        break
      case 4:
        badge.text = '未營運'
        break
    }
    badge.bgColor = 'bg-dark'
    badge.color = 'text-warning'
    badge.border = false
  } else {
    const min = Math.floor(time / 60)
    badge.text = `約${min}分`
  }
  return badge
}

export const getCity = (code) => {
  // console.log(state)
  const city = bus.state.citysList.find((item) => item.CityCode === code)
  return city.City
}

export const getBearingLabel = (bearing) => {
  let label = ''
  switch (bearing) {
    case 'N':
      label = '北向'
      break
    case 'S':
      label = '南向'
      break
    case 'E':
      label = '東向'
      break
    case 'W':
      label = '西向'
      break
  }
  return label
}
