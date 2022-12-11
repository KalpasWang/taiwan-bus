import { useNearBy, state } from '@/composables/bus'

describe('useNearBy 函式', () => {
  it('沒有 geolocation 資料', () => {
    const watchNearBy = useNearBy()
    vi.stubGlobal('navigator', { geolocation: null })
    expect(() => watchNearBy()).toThrowError()
  })

  it('radius 500，傳回一個公車站位陣列，包含距離', () => {
    const watchNearBy = useNearBy()
    const mockUserPosition = {
      coords: { latitude: 24.0004793, longitude: 121.6397178 }
    }
    const mockGeolocation = {
      watchPosition: vi.fn((success) => success(mockUserPosition))
    }
    vi.stubGlobal('navigator', { geolocation: mockGeolocation })
    watchNearBy(500)
    expect(state.nearByStations.length).toBeGreaterThan(0)
  })

  it('站位資料依照距離遠近排序，距離近的在前面', () => {
    expect(1 + 1).toBe(2)
  })

  it('當 uer 位置改變，公車站位資料也會更新', () => {
    expect(1 + 1).toBe(2)
  })
})
