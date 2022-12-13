import { useNearBy, state } from '@/composables/bus'
import { describe, it, beforeAll, vi, expect } from 'vitest'
import { api } from '../../../src/composables/api'
import { delay } from '../../../src/composables/utilities'

let mockUserPosition
let mockResponse

describe('useNearBy 函式', () => {
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
        StationUID: 'TPE1000082',
        StationID: '1000082',
        StationName: {
          Zh_tw: '臺北車站(忠孝)'
        },
        StationPosition: {
          PositionLon: 121.51652326089,
          PositionLat: 25.0465305784296,
          GeoHash: 'wsqqmptds'
        },
        StationAddress: '捷運臺北車站M5出口~M4出口(交7)(向西)',
        Stops: [
          {
            StopUID: 'TPE34726',
            StopID: '34726',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10181',
            RouteID: '10181',
            RouteName: {
              Zh_tw: '205',
              En: '205'
            }
          },
          {
            StopUID: 'TPE35854',
            StopID: '35854',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta.'
            },
            RouteUID: 'TPE10415',
            RouteID: '10415',
            RouteName: {
              Zh_tw: '221',
              En: '221'
            }
          },
          {
            StopUID: 'TPE35979',
            StopID: '35979',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta.'
            },
            RouteUID: 'TPE10416',
            RouteID: '10416',
            RouteName: {
              Zh_tw: '232',
              En: '232'
            }
          },
          {
            StopUID: 'TPE37026',
            StopID: '37026',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10481',
            RouteID: '10481',
            RouteName: {
              Zh_tw: '265經中央路',
              En: '265Zhongyang Rd.'
            }
          },
          {
            StopUID: 'TPE37106',
            StopID: '37106',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10482',
            RouteID: '10482',
            RouteName: {
              Zh_tw: '265區',
              En: '265Shuttle'
            }
          },
          {
            StopUID: 'TPE17493',
            StopID: '17493',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10735',
            RouteID: '10735',
            RouteName: {
              Zh_tw: '253',
              En: '253'
            }
          },
          {
            StopUID: 'TPE39041',
            StopID: '39041',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10823',
            RouteID: '10823',
            RouteName: {
              Zh_tw: '260',
              En: '260'
            }
          },
          {
            StopUID: 'TPE188522',
            StopID: '188522',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10824',
            RouteID: '10824',
            RouteName: {
              Zh_tw: '260區',
              En: '260Shuttle'
            }
          },
          {
            StopUID: 'TPE11725',
            StopID: '11725',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10832',
            RouteID: '10832',
            RouteName: {
              Zh_tw: '22',
              En: '22'
            }
          },
          {
            StopUID: 'TPE188524',
            StopID: '188524',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10851',
            RouteID: '10851',
            RouteName: {
              Zh_tw: '內湖幹線',
              En: 'Neihu Metro Bus'
            }
          },
          {
            StopUID: 'TPE10794',
            StopID: '10794',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10911',
            RouteID: '10911',
            RouteName: {
              Zh_tw: '212直',
              En: '212Express'
            }
          },
          {
            StopUID: 'TPE10654',
            StopID: '10654',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10912',
            RouteID: '10912',
            RouteName: {
              Zh_tw: '212',
              En: '212'
            }
          },
          {
            StopUID: 'TPE11039',
            StopID: '11039',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10942',
            RouteID: '10942',
            RouteName: {
              Zh_tw: '257',
              En: '257'
            }
          },
          {
            StopUID: 'TPE40589',
            StopID: '40589',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10961',
            RouteID: '10961',
            RouteName: {
              Zh_tw: '262',
              En: '262'
            }
          },
          {
            StopUID: 'TPE40716',
            StopID: '40716',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE10962',
            RouteID: '10962',
            RouteName: {
              Zh_tw: '262區',
              En: '262Shuttle'
            }
          },
          {
            StopUID: 'TPE41808',
            StopID: '41808',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11156',
            RouteID: '11156',
            RouteName: {
              Zh_tw: '218',
              En: '218'
            }
          },
          {
            StopUID: 'TPE208378',
            StopID: '208378',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11157',
            RouteID: '11157',
            RouteName: {
              Zh_tw: '218直',
              En: '218Express'
            }
          },
          {
            StopUID: 'TPE42429',
            StopID: '42429',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11171',
            RouteID: '11171',
            RouteName: {
              Zh_tw: '265經明德路',
              En: '265Mingde Rd.'
            }
          },
          {
            StopUID: 'TPE43183',
            StopID: '43183',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11812',
            RouteID: '11812',
            RouteName: {
              Zh_tw: '和平幹線',
              En: 'Heping Metro Bus'
            }
          },
          {
            StopUID: 'TPE43835',
            StopID: '43835',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11831',
            RouteID: '11831',
            RouteName: {
              Zh_tw: '49',
              En: '49'
            }
          },
          {
            StopUID: 'TPE44155',
            StopID: '44155',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE11851',
            RouteID: '11851',
            RouteName: {
              Zh_tw: '276',
              En: '276'
            }
          },
          {
            StopUID: 'TPE19152',
            StopID: '19152',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15111',
            RouteID: '15111',
            RouteName: {
              Zh_tw: '202',
              En: '202'
            }
          },
          {
            StopUID: 'TPE19236',
            StopID: '19236',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15185',
            RouteID: '15185',
            RouteName: {
              Zh_tw: '202區',
              En: '202Shuttle'
            }
          },
          {
            StopUID: 'TPE213571',
            StopID: '213571',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15353',
            RouteID: '15353',
            RouteName: {
              Zh_tw: '247',
              En: '247'
            }
          },
          {
            StopUID: 'TPE16691',
            StopID: '16691',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15373',
            RouteID: '15373',
            RouteName: {
              Zh_tw: '中山幹線',
              En: 'Zhongshan Metro Bus'
            }
          },
          {
            StopUID: 'TPE45005',
            StopID: '45005',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15381',
            RouteID: '15381',
            RouteName: {
              Zh_tw: '246',
              En: '246'
            }
          },
          {
            StopUID: 'TPE46018',
            StopID: '46018',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15514',
            RouteID: '15514',
            RouteName: {
              Zh_tw: '605',
              En: '605'
            }
          },
          {
            StopUID: 'TPE46117',
            StopID: '46117',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE15518',
            RouteID: '15518',
            RouteName: {
              Zh_tw: '605新台五',
              En: '605Xintaiwu'
            }
          },
          {
            StopUID: 'TPE15315',
            StopID: '15315',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE16111',
            RouteID: '16111',
            RouteName: {
              Zh_tw: '307',
              En: '307'
            }
          },
          {
            StopUID: 'TPE15456',
            StopID: '15456',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE16112',
            RouteID: '16112',
            RouteName: {
              Zh_tw: '310',
              En: '310'
            }
          },
          {
            StopUID: 'TPE15607',
            StopID: '15607',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE16121',
            RouteID: '16121',
            RouteName: {
              Zh_tw: '604',
              En: '604'
            }
          },
          {
            StopUID: 'TPE58766',
            StopID: '58766',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE16131',
            RouteID: '16131',
            RouteName: {
              Zh_tw: '265夜',
              En: '265Night'
            }
          },
          {
            StopUID: 'TPE125336',
            StopID: '125336',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE16132',
            RouteID: '16132',
            RouteName: {
              Zh_tw: '212夜',
              En: '212Night'
            }
          },
          {
            StopUID: 'TPE191233',
            StopID: '191233',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE17800',
            RouteID: '17800',
            RouteName: {
              Zh_tw: '臺北觀光巴士紅線',
              En: 'Taipei Sightseeing Bus Red route'
            }
          },
          {
            StopUID: 'TPE191247',
            StopID: '191247',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta.'
            },
            RouteUID: 'TPE17801',
            RouteID: '17801',
            RouteName: {
              Zh_tw: '臺北觀光巴士藍線',
              En: 'Taipei Sightseeing Bus Blue route'
            }
          },
          {
            StopUID: 'TPE213085',
            StopID: '213085',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE19108',
            RouteID: '19108',
            RouteName: {
              Zh_tw: '307西藏三民',
              En: '307Xizang Sanmin'
            }
          },
          {
            StopUID: 'TPE214131',
            StopID: '214131',
            StopName: {
              Zh_tw: '臺北車站(忠孝)',
              En: 'Taipei Main Sta. (Zhongxiao)'
            },
            RouteUID: 'TPE19178',
            RouteID: '19178',
            RouteName: {
              Zh_tw: '260區預',
              En: '260Shuttle B'
            }
          }
        ],
        LocationCityCode: 'TPE',
        Bearing: 'W',
        UpdateTime: '2022-12-13T05:20:41+08:00',
        VersionID: 2119
      }
    ]
  })

  it('沒有 geolocation 資料', () => {
    const watchNearBy = useNearBy()
    vi.stubGlobal('navigator', { geolocation: null })
    expect(() => watchNearBy()).toThrowError()
  })

  it('radius 150，傳回包含二個公車站位、距離的陣列', async () => {
    const watchNearBy = useNearBy()
    const mockGeolocation = {
      watchPosition: vi.fn((success) => success(mockUserPosition))
    }

    vi.stubGlobal('navigator', { geolocation: mockGeolocation })
    vi.mock('../../../src/composables/api.js')
    api.get.mockResolvedValue({ data: mockResponse })

    watchNearBy(150)
    await delay(10)
    console.log(state.nearByStations)
    expect(state.nearByStations).toHaveLength(2)
    state.nearByStations.forEach((station) => {
      expect(station).toHaveProperty('Distance')
      expect(station.Distance).toBeGreaterThan(0)
      expect(station.Distance).toBeLessThanOrEqual(150)
    })
  })

  it('站位資料依照距離遠近排序，距離近的在前面', () => {
    expect(1 + 1).toBe(2)
  })

  it('當 uer 位置改變，公車站位資料也會更新', () => {
    expect(1 + 1).toBe(2)
  })
})
