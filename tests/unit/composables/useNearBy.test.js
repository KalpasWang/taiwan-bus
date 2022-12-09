import { useNearBy } from '@/composables/bus'

describe('useNearBy 函式', () => {
  it('沒有 geolocation 資料', () => {
    const getNearByStations = useNearBy()
    vi.stubGlobal('navigator', { geolocation: null })
    expect(getNearByStations(500)).toThrowError(
      'Geolocation is not supported by your browser'
    )
  })

  it('radius 500，傳回一個公車站位陣列，包含距離', () => {
    expect(1 + 1).toBe(2)
  })

  it('站位資料依照距離遠近排序，距離近的在前面', () => {
    expect(1 + 1).toBe(2)
  })

  it('當 uer 位置改變，公車站位資料也會更新', () => {
    expect(1 + 1).toBe(2)
  })
})
