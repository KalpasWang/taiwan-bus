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
