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
  } else if (time <= 60) {
    badge.text = '即將到站'
    badge.color = 'bg-warning'
  } else if (!time) {
    badge.text = '末班車駛離'
    badge.color = 'bg-secondary'
  } else {
    const min = Math.floor(time / 60)
    badge.text = `約${min}分`
  }
  return badge
}
