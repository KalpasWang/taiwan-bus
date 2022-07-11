import { citys } from '@/composables/constant'

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
    badge.text = '進站中'
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
        badge.text = '交管中'
        break
      case 3:
        badge.text = '末班過'
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
    badge.text = `${min} 分`
  }
  return badge
}

export const getCity = (code) => {
  const city = citys.find((item) => item.CityCode === code)
  return city ? city.City : 'intercity'
}

export const getNearByCitys = (city) => {
  const foundCity = citys.find((item) => item.City === city)
  return foundCity.NearByCitys
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

export const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}
