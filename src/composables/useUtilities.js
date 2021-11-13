export const getTimeBadgeAndColor = (timeObj) => {
  let badge = {
    text: '',
    color: 'bg-primary'
  }
  // console.log(timeObj)
  const time = timeObj.EstimateTime
  if (time === 0) {
    badge.text = '進站中'
    badge.color = 'bg-danger'
  } else if (time <= 90) {
    badge.text = '即將到站'
    badge.color = 'bg-warning'
  } else if (!time) {
    const status = timeObj.StopStatus
    switch (status) {
      case 0:
        badge.text = '--'
        break
      case 1:
        badge.text = '尚未發車'
        break
      case 2:
        badge.text = '交管不停靠'
        break
      case 3:
        badge.text = '末班車已過'
        break
      case 4:
        badge.text = '今日未營運'
        break
    }
    badge.color = 'bg-secondary'
  } else {
    const min = Math.floor(time / 60)
    badge.text = `約${min}分`
  }
  return badge
}
export const rad = (x) => {
  return (x * Math.PI) / 180
}

export const getDistance = (p1, p2) => {
  const R = 6378137 // Earth’s mean radius in meter
  const dLat = rad(Math.abs(p2.lat - p1.lat))
  const dLong = rad(Math.abs(p2.lng - p1.lng))
  console.log(dLat)
  console.log(dLong)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) *
      Math.cos(rad(p2.lat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = Math.round(R * c)
  return d // returns the distance in meter
}
