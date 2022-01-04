import bus from '@/composables/useCityBus'

export const getTimeBadgeAndColor = (timeObj) => {
  let badge = {
    text: '',
    bgColor: 'bg-dark',
    color: 'text-primary',
    linkColor: 'link-light',
    border: true
  }
  // console.log(timeObj)
  const time = timeObj.EstimateTime
  if (time <= 30) {
    badge.text = '進站中'
    badge.bgColor = 'bg-primary'
    badge.color = 'text-dark'
    badge.linkColor = 'link-primary'
  } else if (time <= 90) {
    badge.text = '即將到站'
    badge.bgColor = 'bg-primary'
    badge.color = 'text-dark'
    badge.linkColor = 'link-primary'
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
      label = '向北'
      break
    case 'S':
      label = '向南'
      break
    case 'E':
      label = '向東'
      break
    case 'W':
      label = '向西'
      break
  }
  return label
}

export const parseShape = (shapeStr) => {
  const latlngList = shapeStr.slice(10).trim().slice(1, -1).split(/,\s|,/)
  // console.log(latlngList)
  return latlngList.map((el, i) => {
    const [lng, lat] = el.split(' ')
    return [parseFloat(lat), parseFloat(lng)]
  })
}

export const filterRouteName = (routeName, list) => {
  if (!Array.isArray(list)) {
    console.error('list is not an array')
    console.log(list)
    return
  }
  return list.filter((item) => {
    return item.RouteName.Zh_tw === routeName
  })
}
