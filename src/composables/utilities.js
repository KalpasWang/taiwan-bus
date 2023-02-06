import { citys } from '@/composables/constants'

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

function setLabelAndColor(stop) {
  let settings = {
    TimeLabel: '--',
    Color: 'text-primary',
    BgColor: 'bg-dark',
    Border: true,
    LinkColor: 'link-light'
  }
  if (typeof stop.EstimateTime !== 'number') {
    switch (stop.StopStatus) {
      case 1:
        settings.TimeLabel = '未發車'
        break
      case 2:
        settings.TimeLabel = '交管中'
        break
      case 3:
        settings.TimeLabel = '末班過'
        break
      case 4:
        settings.TimeLabel = '未營運'
        break
      default:
        break
    }
    settings.BgColor = 'bg-dark'
    settings.Color = 'text-warning'
    settings.Border = false
  } else if (stop.EstimateTime < 60) {
    settings.TimeLabel = '進站中'
    settings.BgColor = 'bg-primary'
    settings.Color = 'text-dark'
    settings.LinkColor = 'link-primary'
  } else {
    const time = Math.floor(stop.EstimateTime / 60)
    settings.TimeLabel = `${time} 分`
  }
  stop = Object.assign(stop, settings)
}

// 每個站牌物件加入方便渲染用的屬性
export function addCustomDataToStops(stopsList) {
  stopsList.forEach((stop) => {
    setLabelAndColor(stop)
  })
}

export function getCityName(city) {
  const found = citys.find((item) => item.City === city)
  return found?.CityName
}

export function getCityCode(city) {
  const found = citys.find((item) => item.City === city)
  return found?.CityCode || 'THB'
}

export const getCityByCityCode = (code) => {
  const city = citys.find((item) => item.CityCode === code)
  return city?.City
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

// 過濾掉不一致的 routeName
export function filterRouteName(routeName, list) {
  if (!Array.isArray(list)) {
    console.error('list 不是陣列')
    // console.log(list)
    return
  }
  return list.filter((item) => {
    const name =
      typeof item.RouteName === 'object' ? item.RouteName.Zh_tw : item.RouteName
    return name === routeName
  })
}

// 過濾 subroutes
export const filterSubRoutes = (routeName, routesList) => {
  return routesList.filter((route) => {
    return route?.SubRouteName.Zh_tw === routeName
  })
}

// 取得同方向的站牌資料
export const filterStopsByDirection = (arr) => {
  const stopsForward = arr.find((item) => item.Direction === 0)?.Stops
  const stopsBackward = arr.find((item) => item.Direction === 1)?.Stops
  return { stopsForward, stopsBackward }
}

// 取得同方向的資料
export const filterDirection = (arr) => {
  const forwards = arr.filter((item) => item.Direction === 0)
  const backwards = arr.filter((item) => item.Direction === 1)
  return [forwards, backwards]
}

export const delay = (ms = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
