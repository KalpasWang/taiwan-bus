import { format } from 'date-fns'
import { ref } from 'vue'
import { api } from '../api'
import { filterRouteName, filterDirection } from '../utilities'

function useSchedule(routeName, city) {
  const schedule = ref({})
  const forwardTime = ref([])
  const backwardTime = ref([])

  // 取得指定[路線名稱]的公路客運路線班表資料
  const fetchBusSchedule = async () => {
    // 設定要 fetch 的網址
    let url = `Schedule/City/${city}`
    if (!city) {
      url = 'Schedule/InterCity'
    }
    const res = await api.get(`${url}/${routeName}`)
    schedule.value = filterRouteName(routeName, res.data)
  }

  const getDepartureTimeByDate = (date) => {
    // 取得此日期為星期幾，如 Monday, Tuesday...
    const dayName = format(date, 'EEEE')
    // 過濾出去程與返程的班表
    const { forwards, backwards } = filterDirection(schedule.value)
    // 撈出資料中每筆 Depature time
    const result = [forwards, backwards].map((scheduleData) => {
      const timeArray = scheduleData.reduce((accuArray, bus) => {
        bus.Timetables.forEach((trip) => {
          if (trip.ServiceDay[dayName] === 1) {
            trip.StopTimes.forEach((stop) => {
              if (stop.StopSequence === 1) {
                accuArray.push(stop.DepartureTime)
              }
            })
          }
        })
        return accuArray
      }, [])
      // 根據時間先後排序
      return timeArray.sort((a, b) => {
        const t1 = a.split(':').join('')
        const t2 = b.split(':').join('')
        return t1 > t2 ? 1 : t1 < t2 ? -1 : 0
      })
    })
    // 最終資料會是包含去程與返程發車時間的陣列
    forwardTime.value = result[0]
    backwardTime.value = result[1]
  }

  return {
    schedule,
    forwardTime,
    backwardTime,
    fetchBusSchedule,
    getDepartureTimeByDate
  }
}

export default useSchedule
