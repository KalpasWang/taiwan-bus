import { useNearBy, state } from '@/composables/bus'

describe('useNearBy 函式', () => {
  let mockUserPosition
  let mockResponse

  beforeAll(() => {
    mockUserPosition = {
      coords: { latitude: 25.047675, longitude: 121.517055 }
    }
    mockResponse = [
      {
        StationUID: 'THB136462',
        StationID: '136462',
        StationName: {
          Zh_tw: '臺北車站(鄭州)'
        },
        StationPosition: {
          PositionLon: 121.517615,
          PositionLat: 25.048361,
          GeoHash: 'wsqqmpymm'
        },
        StationGroupID: '100－024',
        Stops: [
          {
            StopUID: 'THB300514',
            StopID: '300514',
            StopName: {
              Zh_tw: '臺北車站(鄭州)',
              En: 'Taipei Station (Zhengzhou)'
            },
            RouteUID: 'THB1816',
            RouteID: '1816',
            RouteName: {
              Zh_tw: '1816',
              En: '1816'
            }
          },
          {
            StopUID: 'THB300514',
            StopID: '300514',
            StopName: {
              Zh_tw: '臺北車站(鄭州)',
              En: 'Taipei Station (Zhengzhou)'
            },
            RouteUID: 'THB1818',
            RouteID: '1818',
            RouteName: {
              Zh_tw: '1818',
              En: '1818'
            }
          },
          {
            StopUID: 'THB300514',
            StopID: '300514',
            StopName: {
              Zh_tw: '臺北車站(鄭州)',
              En: 'Taipei Station (Zhengzhou)'
            },
            RouteUID: 'THB9002',
            RouteID: '9002',
            RouteName: {
              Zh_tw: '9002',
              En: '9002'
            }
          }
        ],
        LocationCityCode: 'TPE',
        Bearing: 'W',
        UpdateTime: '2022-12-12T07:40:59+08:00',
        VersionID: 1477
      },
      {
        StationUID: 'THB137534',
        StationID: '137534',
        StationName: {
          Zh_tw: '臺北車站(鄭州)'
        },
        StationPosition: {
          PositionLon: 121.517615,
          PositionLat: 25.04836,
          GeoHash: 'wsqqmpymm'
        },
        StationGroupID: '100－046',
        Stops: [
          {
            StopUID: 'THB301881',
            StopID: '301881',
            StopName: {
              Zh_tw: '臺北車站(鄭州)',
              En: 'Taipei Main Sta.(Zhengzhou)'
            },
            RouteUID: 'THB2001',
            RouteID: '2001',
            RouteName: {
              Zh_tw: '2001',
              En: '2001'
            }
          }
        ],
        LocationCityCode: 'TPE',
        Bearing: 'N',
        UpdateTime: '2022-12-12T07:40:59+08:00',
        VersionID: 1477
      }
    ]
  })

  it('沒有 geolocation 資料', () => {
    const watchNearBy = useNearBy()
    vi.stubGlobal('navigator', { geolocation: null })
    expect(() => watchNearBy()).toThrowError()
  })

  it('radius 100，傳回包含二個公車站位、距離的陣列', () => {
    const watchNearBy = useNearBy()
    const mockGeolocation = {
      watchPosition: vi.fn((success) => success(mockUserPosition))
    }

    vi.stubGlobal('navigator', { geolocation: mockGeolocation })
    vi.mock('../../../src/composables/api.js', () => {
      return {
        api: { get: vi.fn().mockResolvedValue(mockResponse) }
      }
    })

    const clearWatch = watchNearBy(100)
    expect(state.nearByStations).toHaveLength(2)
    state.nearByStations.forEach((station) => {
      expect(station).toHaveProperty('Distance')
      expect(station.Distance).toBeGreaterThan(0)
      expect(station.Distance).toBeLessThanOrEqual(100)
    })
    clearWatch()
  })

  it('站位資料依照距離遠近排序，距離近的在前面', () => {
    expect(1 + 1).toBe(2)
  })

  it('當 uer 位置改變，公車站位資料也會更新', () => {
    expect(1 + 1).toBe(2)
  })
})
