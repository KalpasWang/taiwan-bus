import L from 'leaflet'
import busIconUrl from '@/assets/bus.svg'

export const citys = [
  {
    CityID: 'A',
    CityName: '臺北市',
    CityCode: 'TPE',
    City: 'Taipei',
    CountyID: 'A',
    Version: '21.08.1',
    NearByCitys: ['Keelung', 'NewTaipei']
  },
  {
    CityID: 'B',
    CityName: '臺中市',
    CityCode: 'TXG',
    City: 'Taichung',
    CountyID: 'B',
    Version: '21.08.1',
    NearByCitys: [
      'MiaoliCounty',
      'NantouCounty',
      'ChanghuaCounty',
      'HualienCounty'
    ]
  },
  {
    CityID: 'C',
    CityName: '基隆市',
    CityCode: 'KEE',
    City: 'Keelung',
    CountyID: 'C',
    Version: '21.08.1',
    NearByCitys: ['Taipei', 'NewTaipei']
  },
  {
    CityID: 'D',
    CityName: '臺南市',
    CityCode: 'TNN',
    City: 'Tainan',
    CountyID: 'D',
    Version: '21.08.1',
    NearByCitys: ['Kaohsiung', 'Chiayi', 'ChiayiCounty']
  },
  {
    CityID: 'E',
    CityName: '高雄市',
    CityCode: 'KHH',
    City: 'Kaohsiung',
    CountyID: 'E',
    Version: '21.08.1',
    NearByCitys: ['Tainan', 'ChiayiCounty', 'PingtungCounty']
  },
  {
    CityID: 'F',
    CityName: '新北市',
    CityCode: 'NWT',
    City: 'NewTaipei',
    CountyID: 'F',
    Version: '21.08.1',
    NearByCitys: ['Taipei', 'Keelung', 'YilanCounty', 'Taoyuan']
  },
  {
    CityID: 'G',
    CityName: '宜蘭縣',
    CityCode: 'ILA',
    City: 'YilanCounty',
    CountyID: 'G',
    Version: '21.08.1',
    NearByCitys: ['Taipei', 'NewTaipei', 'HualienCounty']
  },
  {
    CityID: 'H',
    CityName: '桃園市',
    CityCode: 'TAO',
    City: 'Taoyuan',
    CountyID: 'H',
    Version: '21.08.1',
    NearByCitys: ['Taipei', 'NewTaipei', 'HsinchuCounty', 'Hsinchu']
  },
  {
    CityID: 'I',
    CityName: '嘉義市',
    CityCode: 'CYI',
    City: 'Chiayi',
    CountyID: 'I',
    Version: '21.08.1',
    NearByCitys: ['Tainan', 'YunlinCounty', 'ChiayiCounty']
  },
  {
    CityID: 'J',
    CityName: '新竹縣',
    CityCode: 'HSQ',
    City: 'HsinchuCounty',
    CountyID: 'J',
    Version: '21.08.1',
    NearByCitys: ['Taoyuan', 'MiaoliCounty', 'Hsinchu']
  },
  {
    CityID: 'K',
    CityName: '苗栗縣',
    CityCode: 'MIA',
    City: 'MiaoliCounty',
    CountyID: 'K',
    Version: '21.08.1',
    NearByCitys: ['Taichung', 'HsinchuCounty', 'Hsinchu']
  },
  {
    CityID: 'M',
    CityName: '南投縣',
    CityCode: 'NAN',
    City: 'NantouCounty',
    CountyID: 'M',
    Version: '21.08.1',
    NearByCitys: [
      'Taichung',
      'ChanghuaCounty',
      'YunlinCounty',
      'ChiayiCounty',
      'HualienCounty'
    ]
  },
  {
    CityID: 'N',
    CityName: '彰化縣',
    CityCode: 'CHA',
    City: 'ChanghuaCounty',
    CountyID: 'N',
    Version: '21.08.1',
    NearByCitys: ['Taichung', 'NantouCounty', 'YunlinCounty']
  },
  {
    CityID: 'O',
    CityName: '新竹市',
    CityCode: 'HSZ',
    City: 'Hsinchu',
    CountyID: 'O',
    Version: '21.08.1',
    NearByCitys: ['HsinchuCounty']
  },
  {
    CityID: 'P',
    CityName: '雲林縣',
    CityCode: 'YUN',
    City: 'YunlinCounty',
    CountyID: 'P',
    Version: '21.08.1',
    NearByCitys: ['NantouCounty', 'ChanghuaCounty', 'ChiayiCounty']
  },
  {
    CityID: 'Q',
    CityName: '嘉義縣',
    CityCode: 'CYQ',
    City: 'ChiayiCounty',
    CountyID: 'Q',
    Version: '21.08.1',
    NearByCitys: [
      'Tainan',
      'Kaohsiung',
      'Chiayi',
      'NantouCounty',
      'YunlinCounty'
    ]
  },
  {
    CityID: 'T',
    CityName: '屏東縣',
    CityCode: 'PIF',
    City: 'PingtungCounty',
    CountyID: 'T',
    Version: '21.08.1',
    NearByCitys: ['Kaohsiung', 'TaitungCounty']
  },
  {
    CityID: 'U',
    CityName: '花蓮縣',
    CityCode: 'HUA',
    City: 'HualienCounty',
    CountyID: 'U',
    Version: '21.08.1',
    NearByCitys: ['YilanCounty', 'NantouCounty', 'TaitungCounty']
  },
  {
    CityID: 'V',
    CityName: '臺東縣',
    CityCode: 'TTT',
    City: 'TaitungCounty',
    CountyID: 'V',
    Version: '21.08.1',
    NearByCitys: ['PingtungCounty', 'HualienCounty']
  },
  {
    CityID: 'W',
    CityName: '金門縣',
    CityCode: 'KIN',
    City: 'KinmenCounty',
    CountyID: 'W',
    Version: '21.08.1',
    NearByCitys: []
  },
  {
    CityID: 'X',
    CityName: '澎湖縣',
    CityCode: 'PEN',
    City: 'PenghuCounty',
    CountyID: 'X',
    Version: '21.08.1',
    NearByCitys: []
  },
  {
    CityID: 'Z',
    CityName: '連江縣',
    CityCode: 'LIE',
    City: 'LienchiangCounty',
    CountyID: 'Z',
    Version: '21.08.1',
    NearByCitys: []
  }
]

export const busIcon = L.icon({
  iconUrl: busIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [18, -18],
  shadowUrl: null,
  shadowSize: [0, 0],
  shadowAnchor: [18, 18]
})

export const mockUserPosition = {
  coords: { latitude: 25.047675, longitude: 121.517055 }
}

export const mockUserPosition2 = {
  coords: { latitude: 25.048675, longitude: 121.527055 }
}

export const mockNearbyResponse = [
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
    UpdateTime: '2022-12-14T02:40:40+08:00',
    VersionID: 2120
  },
  {
    StationUID: 'TPE1895',
    StationID: '1895',
    StationName: {
      Zh_tw: '臺北車站(鄭州)'
    },
    StationPosition: {
      PositionLon: 121.517739472626,
      PositionLat: 25.0483859091605,
      GeoHash: 'wsqqmpyt2'
    },
    StationAddress: '捷運臺北車站M1出口~臺北車站北1門(向東)',
    Stops: [
      {
        StopUID: 'TPE20576',
        StopID: '20576',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10262',
        RouteID: '10262',
        RouteName: {
          Zh_tw: '2',
          En: '2'
        }
      },
      {
        StopUID: 'TPE35429',
        StopID: '35429',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10278',
        RouteID: '10278',
        RouteName: {
          Zh_tw: '669',
          En: '669'
        }
      },
      {
        StopUID: 'TPE36489',
        StopID: '36489',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10452',
        RouteID: '10452',
        RouteName: {
          Zh_tw: '641',
          En: '641'
        }
      },
      {
        StopUID: 'TPE22010',
        StopID: '22010',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10471',
        RouteID: '10471',
        RouteName: {
          Zh_tw: '615',
          En: '615'
        }
      },
      {
        StopUID: 'TPE39066',
        StopID: '39066',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10823',
        RouteID: '10823',
        RouteName: {
          Zh_tw: '260',
          En: '260'
        }
      },
      {
        StopUID: 'TPE39154',
        StopID: '39154',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10824',
        RouteID: '10824',
        RouteName: {
          Zh_tw: '260區',
          En: '260Shuttle'
        }
      },
      {
        StopUID: 'TPE40120',
        StopID: '40120',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10891',
        RouteID: '10891',
        RouteName: {
          Zh_tw: '14',
          En: '14'
        }
      },
      {
        StopUID: 'TPE12112',
        StopID: '12112',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10893',
        RouteID: '10893',
        RouteName: {
          Zh_tw: '274',
          En: '274'
        }
      },
      {
        StopUID: 'TPE41813',
        StopID: '41813',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE11156',
        RouteID: '11156',
        RouteName: {
          Zh_tw: '218',
          En: '218'
        }
      },
      {
        StopUID: 'TPE208388',
        StopID: '208388',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE11157',
        RouteID: '11157',
        RouteName: {
          Zh_tw: '218直',
          En: '218Express'
        }
      },
      {
        StopUID: 'TPE42802',
        StopID: '42802',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE11243',
        RouteID: '11243',
        RouteName: {
          Zh_tw: '39',
          En: '39'
        }
      },
      {
        StopUID: 'TPE50715',
        StopID: '50715',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE15664',
        RouteID: '15664',
        RouteName: {
          Zh_tw: '39夜',
          En: '39Night'
        }
      },
      {
        StopUID: 'TPE15422',
        StopID: '15422',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE16112',
        RouteID: '16112',
        RouteName: {
          Zh_tw: '310',
          En: '310'
        }
      },
      {
        StopUID: 'TPE214132',
        StopID: '214132',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
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
    Bearing: 'E',
    UpdateTime: '2022-12-14T02:40:40+08:00',
    VersionID: 2120
  },
  {
    StationUID: 'TPE50042',
    StationID: '50042',
    StationName: {
      Zh_tw: '臺北車站(鄭州)'
    },
    StationPosition: {
      PositionLon: 121.517471342457,
      PositionLat: 25.0488096410266,
      GeoHash: 'wsqqmpyrf'
    },
    StationAddress: '市民大道1段203號(向西)',
    Stops: [
      {
        StopUID: 'TPE188528',
        StopID: '188528',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10262',
        RouteID: '10262',
        RouteName: {
          Zh_tw: '2',
          En: '2'
        }
      },
      {
        StopUID: 'TPE35468',
        StopID: '35468',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10278',
        RouteID: '10278',
        RouteName: {
          Zh_tw: '669',
          En: '669'
        }
      },
      {
        StopUID: 'TPE182117',
        StopID: '182117',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE10423',
        RouteID: '10423',
        RouteName: {
          Zh_tw: '622',
          En: '622'
        }
      },
      {
        StopUID: 'TPE56105',
        StopID: '56105',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'TPE15711',
        RouteID: '15711',
        RouteName: {
          Zh_tw: '市民小巴9',
          En: 'M9'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'W',
    UpdateTime: '2022-12-14T02:40:40+08:00',
    VersionID: 2120
  },
  {
    StationUID: 'THB107352',
    StationID: '107352',
    StationName: {
      Zh_tw: '臺北轉運站'
    },
    StationPosition: {
      PositionLon: 121.51761,
      PositionLat: 25.04887,
      GeoHash: 'wsqqt0n2j'
    },
    StationGroupID: '103－050',
    Stops: [
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1610',
        RouteID: '1610',
        RouteName: {
          Zh_tw: '1610',
          En: '1610'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1611',
        RouteID: '1611',
        RouteName: {
          Zh_tw: '1611',
          En: '1611'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1613',
        RouteID: '1613',
        RouteName: {
          Zh_tw: '1613',
          En: '1613'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1615',
        RouteID: '1615',
        RouteName: {
          Zh_tw: '1615',
          En: '1615'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1616',
        RouteID: '1616',
        RouteName: {
          Zh_tw: '1616',
          En: '1616'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1617',
        RouteID: '1617',
        RouteName: {
          Zh_tw: '1617',
          En: '1617'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1618',
        RouteID: '1618',
        RouteName: {
          Zh_tw: '1618',
          En: '1618'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1619',
        RouteID: '1619',
        RouteName: {
          Zh_tw: '1619',
          En: '1619'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1620',
        RouteID: '1620',
        RouteName: {
          Zh_tw: '1620',
          En: '1620'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1628',
        RouteID: '1628',
        RouteName: {
          Zh_tw: '1628',
          En: '1628'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1630',
        RouteID: '1630',
        RouteName: {
          Zh_tw: '1630',
          En: '1630'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1632',
        RouteID: '1632',
        RouteName: {
          Zh_tw: '1632',
          En: '1632'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1633',
        RouteID: '1633',
        RouteName: {
          Zh_tw: '1633',
          En: '1633'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1635',
        RouteID: '1635',
        RouteName: {
          Zh_tw: '1635',
          En: '1635'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1636',
        RouteID: '1636',
        RouteName: {
          Zh_tw: '1636',
          En: '1636'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1637',
        RouteID: '1637',
        RouteName: {
          Zh_tw: '1637',
          En: '1637'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1638',
        RouteID: '1638',
        RouteName: {
          Zh_tw: '1638',
          En: '1638'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1639',
        RouteID: '1639',
        RouteName: {
          Zh_tw: '1639',
          En: '1639'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1652',
        RouteID: '1652',
        RouteName: {
          Zh_tw: '1652',
          En: '1652'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1820',
        RouteID: '1820',
        RouteName: {
          Zh_tw: '1820',
          En: '1820'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1821',
        RouteID: '1821',
        RouteName: {
          Zh_tw: '1821',
          En: '1821'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1822',
        RouteID: '1822',
        RouteName: {
          Zh_tw: '1822',
          En: '1822'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1823',
        RouteID: '1823',
        RouteName: {
          Zh_tw: '1823',
          En: '1823'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1824',
        RouteID: '1824',
        RouteName: {
          Zh_tw: '1824',
          En: '1824'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1826',
        RouteID: '1826',
        RouteName: {
          Zh_tw: '1826',
          En: '1826'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1827',
        RouteID: '1827',
        RouteName: {
          Zh_tw: '1827',
          En: '1827'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1828',
        RouteID: '1828',
        RouteName: {
          Zh_tw: '1828',
          En: '1828'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1829',
        RouteID: '1829',
        RouteName: {
          Zh_tw: '1829',
          En: '1829'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1830',
        RouteID: '1830',
        RouteName: {
          Zh_tw: '1830',
          En: '1830'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1831',
        RouteID: '1831',
        RouteName: {
          Zh_tw: '1831',
          En: '1831'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1832',
        RouteID: '1832',
        RouteName: {
          Zh_tw: '1832',
          En: '1832'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1833',
        RouteID: '1833',
        RouteName: {
          Zh_tw: '1833',
          En: '1833'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1834',
        RouteID: '1834',
        RouteName: {
          Zh_tw: '1834',
          En: '1834'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1835',
        RouteID: '1835',
        RouteName: {
          Zh_tw: '1835',
          En: '1835'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1836',
        RouteID: '1836',
        RouteName: {
          Zh_tw: '1836',
          En: '1836'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1837',
        RouteID: '1837',
        RouteName: {
          Zh_tw: '1837',
          En: '1837'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1838',
        RouteID: '1838',
        RouteName: {
          Zh_tw: '1838',
          En: '1838'
        }
      },
      {
        StopUID: 'THB237066',
        StopID: '237066',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1839',
        RouteID: '1839',
        RouteName: {
          Zh_tw: '1839',
          En: '1839'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1839',
        RouteID: '1839',
        RouteName: {
          Zh_tw: '1839',
          En: '1839'
        }
      },
      {
        StopUID: 'THB289796',
        StopID: '289796',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1915',
        RouteID: '1915',
        RouteName: {
          Zh_tw: '1915',
          En: '1915'
        }
      },
      {
        StopUID: 'THB289796',
        StopID: '289796',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1916',
        RouteID: '1916',
        RouteName: {
          Zh_tw: '1916',
          En: '1916'
        }
      },
      {
        StopUID: 'THB289796',
        StopID: '289796',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB1917',
        RouteID: '1917',
        RouteName: {
          Zh_tw: '1917',
          En: '1917'
        }
      },
      {
        StopUID: 'THB289793',
        StopID: '289793',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB2011',
        RouteID: '2011',
        RouteName: {
          Zh_tw: '2011',
          En: '2011'
        }
      },
      {
        StopUID: 'THB289794',
        StopID: '289794',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB6606',
        RouteID: '6606',
        RouteName: {
          Zh_tw: '6606',
          En: '6606'
        }
      },
      {
        StopUID: 'THB305261',
        StopID: '305261',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB6606',
        RouteID: '6606',
        RouteName: {
          Zh_tw: '6606',
          En: '6606'
        }
      },
      {
        StopUID: 'THB289798',
        StopID: '289798',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB7500',
        RouteID: '7500',
        RouteName: {
          Zh_tw: '7500',
          En: '7500'
        }
      },
      {
        StopUID: 'THB289792',
        StopID: '289792',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB7511',
        RouteID: '7511',
        RouteName: {
          Zh_tw: '7511',
          En: '7511'
        }
      },
      {
        StopUID: 'THB289799',
        StopID: '289799',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB9003',
        RouteID: '9003',
        RouteName: {
          Zh_tw: '9003',
          En: '9003'
        }
      },
      {
        StopUID: 'THB289800',
        StopID: '289800',
        StopName: {
          Zh_tw: '臺北轉運站',
          En: 'Taipei Bus Station'
        },
        RouteUID: 'THB9003',
        RouteID: '9003',
        RouteName: {
          Zh_tw: '9003',
          En: '9003'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'W',
    UpdateTime: '2022-12-14T06:41:03+08:00',
    VersionID: 1479
  },
  {
    StationUID: 'THB136440',
    StationID: '136440',
    StationName: {
      Zh_tw: '臺北車站(鄭州)'
    },
    StationPosition: {
      PositionLon: 121.51764,
      PositionLat: 25.04882,
      GeoHash: 'wsqqmpyry'
    },
    StationGroupID: '103－050',
    Stops: [
      {
        StopUID: 'THB300475',
        StopID: '300475',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Station(ZhengZhou)'
        },
        RouteUID: 'THB1915',
        RouteID: '1915',
        RouteName: {
          Zh_tw: '1915',
          En: '1915'
        }
      },
      {
        StopUID: 'THB300475',
        StopID: '300475',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Station(ZhengZhou)'
        },
        RouteUID: 'THB1916',
        RouteID: '1916',
        RouteName: {
          Zh_tw: '1916',
          En: '1916'
        }
      },
      {
        StopUID: 'THB300475',
        StopID: '300475',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Station(ZhengZhou)'
        },
        RouteUID: 'THB1917',
        RouteID: '1917',
        RouteName: {
          Zh_tw: '1917',
          En: '1917'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'W',
    UpdateTime: '2022-12-14T06:41:03+08:00',
    VersionID: 1479
  },
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
    UpdateTime: '2022-12-14T06:41:03+08:00',
    VersionID: 1479
  },
  {
    StationUID: 'THB136463',
    StationID: '136463',
    StationName: {
      Zh_tw: '臺北車站(東三門)'
    },
    StationPosition: {
      PositionLon: 121.518407,
      PositionLat: 25.047926,
      GeoHash: 'wsqqmpz48'
    },
    StationGroupID: '100－025',
    Stops: [
      {
        StopUID: 'THB300516',
        StopID: '300516',
        StopName: {
          Zh_tw: '臺北車站(東三門)',
          En: 'Taipei Station (East Gate)'
        },
        RouteUID: 'THB1813',
        RouteID: '1813',
        RouteName: {
          Zh_tw: '1813',
          En: '1813'
        }
      },
      {
        StopUID: 'THB300516',
        StopID: '300516',
        StopName: {
          Zh_tw: '臺北車站(東三門)',
          En: 'Taipei Station (East Gate)'
        },
        RouteUID: 'THB1814',
        RouteID: '1814',
        RouteName: {
          Zh_tw: '1814',
          En: '1814'
        }
      },
      {
        StopUID: 'THB300516',
        StopID: '300516',
        StopName: {
          Zh_tw: '臺北車站(東三門)',
          En: 'Taipei Station (East Gate)'
        },
        RouteUID: 'THB1815',
        RouteID: '1815',
        RouteName: {
          Zh_tw: '1815',
          En: '1815'
        }
      },
      {
        StopUID: 'THB300516',
        StopID: '300516',
        StopName: {
          Zh_tw: '臺北車站(東三門)',
          En: 'Taipei Station (East Gate)'
        },
        RouteUID: 'THB1819',
        RouteID: '1819',
        RouteName: {
          Zh_tw: '1819',
          En: '1819'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'S',
    UpdateTime: '2022-12-14T06:41:03+08:00',
    VersionID: 1479
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
    UpdateTime: '2022-12-14T06:41:03+08:00',
    VersionID: 1479
  },
  {
    StationUID: 'NWT1895',
    StationID: '1895',
    StationName: {
      Zh_tw: '臺北車站(鄭州)'
    },
    StationPosition: {
      PositionLon: 121.517739472626,
      PositionLat: 25.0483859091605,
      GeoHash: 'wsqqmpyt2'
    },
    StationAddress: '捷運臺北車站M1出口~臺北車站北1門(向東)',
    Stops: [
      {
        StopUID: 'NWT158307',
        StopID: '158307',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'NWT16845',
        RouteID: '16845',
        RouteName: {
          Zh_tw: '578',
          En: '578'
        }
      },
      {
        StopUID: 'NWT158317',
        StopID: '158317',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'NWT16847',
        RouteID: '16847',
        RouteName: {
          Zh_tw: '579',
          En: '579'
        }
      },
      {
        StopUID: 'NWT158496',
        StopID: '158496',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'NWT16855',
        RouteID: '16855',
        RouteName: {
          Zh_tw: '582',
          En: '582'
        }
      },
      {
        StopUID: 'NWT203684',
        StopID: '203684',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Station (Zhengzhou)'
        },
        RouteUID: 'NWT18118',
        RouteID: '18118',
        RouteName: {
          Zh_tw: '966',
          En: '966'
        }
      },
      {
        StopUID: 'NWT204345',
        StopID: '204345',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'NWT18148',
        RouteID: '18148',
        RouteName: {
          Zh_tw: '582經工業區',
          En: '582 Industrial Dist.'
        }
      },
      {
        StopUID: 'NWT208933',
        StopID: '208933',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Station (Zhengzhou)'
        },
        RouteUID: 'NWT18730',
        RouteID: '18730',
        RouteName: {
          Zh_tw: '966副',
          En: '966Sub'
        }
      },
      {
        StopUID: 'NWT209367',
        StopID: '209367',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Station (Zhengzhou)'
        },
        RouteUID: 'NWT18760',
        RouteID: '18760',
        RouteName: {
          Zh_tw: '966A',
          En: '966A'
        }
      },
      {
        StopUID: 'NWT212607',
        StopID: '212607',
        StopName: {
          Zh_tw: '臺北車站(鄭州)',
          En: 'Taipei Main Sta. (Zhengzhou)'
        },
        RouteUID: 'NWT19048',
        RouteID: '19048',
        RouteName: {
          Zh_tw: '582經洲子洋',
          En: '582 Zhouziyang'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'E',
    UpdateTime: '2022-12-14T05:20:42+08:00',
    VersionID: 2645
  }
]

export const mockNearbyResponse2 = [
  {
    StationUID: 'TPE1282',
    StationID: '1282',
    StationName: {
      Zh_tw: '長安林森路口'
    },
    StationPosition: {
      PositionLon: 121.5259734,
      PositionLat: 25.04871037,
      GeoHash: 'wsqqmrux2'
    },
    StationAddress: '長安東路一段28號同向(向東)',
    Stops: [
      {
        StopUID: 'TPE43870',
        StopID: '43870',
        StopName: {
          Zh_tw: '長安林森路口',
          En: 'Changan and Linsen Intersection'
        },
        RouteUID: 'TPE11831',
        RouteID: '11831',
        RouteName: {
          Zh_tw: '49',
          En: '49'
        }
      },
      {
        StopUID: 'TPE19114',
        StopID: '19114',
        StopName: {
          Zh_tw: '長安林森路口',
          En: 'Changan and Linsen Intersection'
        },
        RouteUID: 'TPE15111',
        RouteID: '15111',
        RouteName: {
          Zh_tw: '202',
          En: '202'
        }
      },
      {
        StopUID: 'TPE19228',
        StopID: '19228',
        StopName: {
          Zh_tw: '長安林森路口',
          En: 'Changan and Linsen Intersection'
        },
        RouteUID: 'TPE15185',
        RouteID: '15185',
        RouteName: {
          Zh_tw: '202區',
          En: '202Shuttle'
        }
      },
      {
        StopUID: 'TPE56110',
        StopID: '56110',
        StopName: {
          Zh_tw: '長安林森路口',
          En: 'Changan and Linsen Intersection'
        },
        RouteUID: 'TPE15711',
        RouteID: '15711',
        RouteName: {
          Zh_tw: '市民小巴9',
          En: 'M9'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'E',
    UpdateTime: '2022-12-14T02:40:40+08:00',
    VersionID: 2120
  },
  {
    StationUID: 'TPE6695',
    StationID: '6695',
    StationName: {
      Zh_tw: '華山公園(市民)'
    },
    StationPosition: {
      PositionLon: 121.52663,
      PositionLat: 25.04739,
      GeoHash: 'wsqqmrszx'
    },
    StationAddress: '臺北市市民大道2段公車彎(向西)',
    Stops: [
      {
        StopUID: 'TPE35466',
        StopID: '35466',
        StopName: {
          Zh_tw: '華山公園(市民)',
          En: 'Huashan Park (Civic Blvd.)'
        },
        RouteUID: 'TPE10278',
        RouteID: '10278',
        RouteName: {
          Zh_tw: '669',
          En: '669'
        }
      }
    ],
    LocationCityCode: 'TPE',
    Bearing: 'W',
    UpdateTime: '2022-12-14T02:40:40+08:00',
    VersionID: 2120
  }
]

export const mockCityStationData = [
  {
    StationUID: 'HUA129575',
    StationID: '129575',
    StationName: {
      Zh_tw: '大同市場'
    },
    StationPosition: {
      PositionLon: 121.60629,
      PositionLat: 23.98122,
      GeoHash: 'wsq2rjwux'
    },
    StationGroupID: '970－049',
    Stops: [
      {
        StopUID: 'HUA304864',
        StopID: '304864',
        StopName: {
          Zh_tw: '大同市場',
          En: 'Datong Market'
        },
        RouteUID: 'HUA0307',
        RouteID: '0307',
        RouteName: {
          Zh_tw: '307',
          En: '307'
        }
      },
      {
        StopUID: 'HUA304764',
        StopID: '304764',
        StopName: {
          Zh_tw: '大同市場',
          En: 'Datong Market'
        },
        RouteUID: 'HUA0308',
        RouteID: '0308',
        RouteName: {
          Zh_tw: '308',
          En: '308'
        }
      }
    ],
    LocationCityCode: 'HUA',
    Bearing: 'N',
    UpdateTime: '2023-01-08T07:00:51+08:00',
    VersionID: 1504
  }
]

export const mockCityPassThroughRoutes = [
  {
    RouteUID: 'HUA0307',
    RouteID: '0307',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '39',
        OperatorName: {
          Zh_tw: '首都客運',
          En: 'Capital Bus Co., Ltd.'
        },
        OperatorCode: 'CapitalBus',
        OperatorNo: '0913'
      },
      {
        OperatorID: '42',
        OperatorName: {
          Zh_tw: '臺北客運',
          En: 'Taipei Bus Co., Ltd.'
        },
        OperatorCode: 'TaipeiBus',
        OperatorNo: '1407'
      }
    ],
    AuthorityID: '022',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'HUA030701',
        SubRouteID: '030701',
        OperatorIDs: ['39', '42'],
        SubRouteName: {
          Zh_tw: '307',
          En: '307'
        },
        Headsign: '花蓮轉運站→慈濟科技大學→東大門夜市→花蓮轉運站',
        HeadsignEn:
          'Hualien Bus Station→Tzu—chi University of Science and Technology→Dongdamen Night Market→Hualien Bus Station',
        Direction: 0
      },
      {
        SubRouteUID: 'HUA030702',
        SubRouteID: '030702',
        OperatorIDs: ['39', '42'],
        SubRouteName: {
          Zh_tw: '307',
          En: '307'
        },
        Headsign: '花蓮轉運站→東大門夜市→慈濟科技大學→花蓮轉運站',
        HeadsignEn:
          'Hualien Bus Station→Dongdamen Night Market→Tzu—chi University of Science and Technology→Hualien Bus Station',
        Direction: 1
      }
    ],
    BusRouteType: 11,
    RouteName: {
      Zh_tw: '307',
      En: '307'
    },
    DepartureStopNameZh: '花蓮轉運站',
    DepartureStopNameEn: 'Hualien Bus Station',
    DestinationStopNameZh: '花蓮轉運站',
    DestinationStopNameEn: 'Hualien Bus Station',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/0307.jpg',
    City: 'HualienCounty',
    CityCode: 'HUA',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'HUA0308',
    RouteID: '0308',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '34',
        OperatorName: {
          Zh_tw: '統聯客運',
          En: 'United Highway Bus Co., Ltd.'
        },
        OperatorCode: 'UnitedHighwayBus',
        OperatorNo: '1201'
      }
    ],
    AuthorityID: '022',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'HUA030801',
        SubRouteID: '030801',
        OperatorIDs: ['34'],
        SubRouteName: {
          Zh_tw: '308',
          En: '308'
        },
        Headsign: '飯店接駁線(花蓮轉運站→七星潭)',
        HeadsignEn: 'Hotel connection line(Hualien Bus Station→Qixingtan)',
        Direction: 0
      },
      {
        SubRouteUID: 'HUA030802',
        SubRouteID: '030802',
        OperatorIDs: ['34'],
        SubRouteName: {
          Zh_tw: '308',
          En: '308'
        },
        Headsign: '飯店接駁線(七星潭→花蓮轉運站)',
        HeadsignEn: 'Hotel connection line(Qixingtan→Hualien Bus Station)',
        Direction: 1
      },
      {
        SubRouteUID: 'HUA0308A1',
        SubRouteID: '0308A1',
        OperatorIDs: ['34'],
        SubRouteName: {
          Zh_tw: '308A',
          En: '308A'
        },
        Headsign: '飯店接駁線(花蓮轉運站→民意社區)',
        HeadsignEn:
          'Hotel connection line(Hualien Bus Station→Minyi Community)',
        Direction: 0
      },
      {
        SubRouteUID: 'HUA0308A2',
        SubRouteID: '0308A2',
        OperatorIDs: ['34'],
        SubRouteName: {
          Zh_tw: '308A',
          En: '308A'
        },
        Headsign: '飯店接駁線(民意社區→花蓮轉運站)',
        HeadsignEn:
          'Hotel connection line(Minyi Community→Hualien Bus Station)',
        Direction: 1
      }
    ],
    BusRouteType: 11,
    RouteName: {
      Zh_tw: '308',
      En: '308'
    },
    DepartureStopNameZh: '花蓮轉運站',
    DepartureStopNameEn: 'Hualien Bus Station',
    DestinationStopNameZh: '七星潭',
    DestinationStopNameEn: 'Qixingtan',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/0308.jpg',
    City: 'HualienCounty',
    CityCode: 'HUA',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  }
]

export const mockIntercityStation = [
  {
    StationUID: 'THB102582',
    StationID: '102582',
    StationName: {
      Zh_tw: '署東醫院'
    },
    StationPosition: {
      PositionLon: 121.149651,
      PositionLat: 22.757344,
      GeoHash: 'wsn1kyf7p'
    },
    StationGroupID: '950－039',
    Stops: [
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8101',
        RouteID: '8101',
        RouteName: {
          Zh_tw: '8101',
          En: '8101'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8103',
        RouteID: '8103',
        RouteName: {
          Zh_tw: '8103',
          En: '8103'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8109',
        RouteID: '8109',
        RouteName: {
          Zh_tw: '8109',
          En: '8109'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8113',
        RouteID: '8113',
        RouteName: {
          Zh_tw: '8113',
          En: '8113'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8117',
        RouteID: '8117',
        RouteName: {
          Zh_tw: '8117',
          En: '8117'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8122',
        RouteID: '8122',
        RouteName: {
          Zh_tw: '8122',
          En: '8122'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8128',
        RouteID: '8128',
        RouteName: {
          Zh_tw: '8128',
          En: '8128'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8132',
        RouteID: '8132',
        RouteName: {
          Zh_tw: '8132',
          En: '8132'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8135',
        RouteID: '8135',
        RouteName: {
          Zh_tw: '8135',
          En: '8135'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8137',
        RouteID: '8137',
        RouteName: {
          Zh_tw: '8137',
          En: '8137'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8138',
        RouteID: '8138',
        RouteName: {
          Zh_tw: '8138',
          En: '8138'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8150',
        RouteID: '8150',
        RouteName: {
          Zh_tw: '8150',
          En: '8150'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8161',
        RouteID: '8161',
        RouteName: {
          Zh_tw: '8161',
          En: '8161'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8163',
        RouteID: '8163',
        RouteName: {
          Zh_tw: '8163',
          En: '8163'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8165',
        RouteID: '8165',
        RouteName: {
          Zh_tw: '8165',
          En: '8165'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8166',
        RouteID: '8166',
        RouteName: {
          Zh_tw: '8166',
          En: '8166'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8167',
        RouteID: '8167',
        RouteName: {
          Zh_tw: '8167',
          En: '8167'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8168',
        RouteID: '8168',
        RouteName: {
          Zh_tw: '8168',
          En: '8168'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8171',
        RouteID: '8171',
        RouteName: {
          Zh_tw: '8171',
          En: '8171'
        }
      },
      {
        StopUID: 'THB135427',
        StopID: '135427',
        StopName: {
          Zh_tw: '署東醫院',
          En: 'Taitung Hospital'
        },
        RouteUID: 'THB8172',
        RouteID: '8172',
        RouteName: {
          Zh_tw: '8172',
          En: '8172'
        }
      }
    ],
    LocationCityCode: 'TTT',
    Bearing: 'E',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  }
]

export const mockIntercityPassThroughRoutes = [
  {
    RouteUID: 'THB8101',
    RouteID: '8101',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB810101',
        SubRouteID: '810101',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8101',
          En: '8101'
        },
        Headsign: '台東→靜埔',
        HeadsignEn: 'Taitung→Jingpu',
        Direction: 0
      },
      {
        SubRouteUID: 'THB810102',
        SubRouteID: '810102',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8101',
          En: '8101'
        },
        Headsign: '靜埔→台東',
        HeadsignEn: 'Jingpu→Taitung',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8101A1',
        SubRouteID: '8101A1',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8101A',
          En: '8101A'
        },
        Headsign: '台東轉運站→三仙台遊憩區[台灣好行東部海岸線(一日行程)]',
        HeadsignEn: 'Taitung→ Sanxiantai(East Coast Line Day Trip)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB8101B1',
        SubRouteID: '8101B1',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8101B',
          En: '8101B'
        },
        Headsign: '台東轉運站→阿美民俗中心[台灣好行東部海岸線(上午半日)]',
        HeadsignEn:
          'Taitung→ Amis Folk Center(East Coast Line Day Tour (Morning Half Day Tour))',
        Direction: 0
      },
      {
        SubRouteUID: 'THB8101C1',
        SubRouteID: '8101C1',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8101C',
          En: '8101C'
        },
        Headsign: '台東轉運站→阿美民俗中心[台灣好行東部海岸線(下午半日)]',
        HeadsignEn:
          'Taitung→Amis Folk Center(East Coast Line Day Tour (Afternoon ~ Evening Half Day Tour))',
        Direction: 0
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8101',
      En: '8101'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '德蕾莎',
    DestinationStopNameEn: 'Deleisha',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8101.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8103',
    RouteID: '8103',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB810301',
        SubRouteID: '810301',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8103',
          En: '8103'
        },
        Headsign: '台東→成功',
        HeadsignEn: 'Taitung→Chenggong',
        Direction: 0
      },
      {
        SubRouteUID: 'THB810302',
        SubRouteID: '810302',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8103',
          En: '8103'
        },
        Headsign: '成功→台東',
        HeadsignEn: 'Chenggong→Taitung',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8103',
      En: '8103'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '成功',
    DestinationStopNameEn: 'Chenggong',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8103.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8109',
    RouteID: '8109',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB810901',
        SubRouteID: '810901',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8109',
          En: '8109'
        },
        Headsign: '台東→泰源',
        HeadsignEn: 'Taitung→Taiyuan',
        Direction: 0
      },
      {
        SubRouteUID: 'THB810902',
        SubRouteID: '810902',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8109',
          En: '8109'
        },
        Headsign: '泰源→台東',
        HeadsignEn: 'Taiyuan→Taitung',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8109',
      En: '8109'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '泰源',
    DestinationStopNameEn: 'Taiyuan',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8109.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8113',
    RouteID: '8113',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB811301',
        SubRouteID: '811301',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8113',
          En: '8113'
        },
        Headsign: '台東轉運站→達魯瑪克',
        HeadsignEn: 'Taitung Bus Station→Taromak',
        Direction: 0
      },
      {
        SubRouteUID: 'THB811302',
        SubRouteID: '811302',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8113',
          En: '8113'
        },
        Headsign: '達魯瑪克→台東轉運站',
        HeadsignEn: 'Taromak→Taitung Bus Station',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8113',
      En: '8113'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '達魯瑪克',
    DestinationStopNameEn: 'Taromak',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8113.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8117',
    RouteID: '8117',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB811701',
        SubRouteID: '811701',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8117',
          En: '8117'
        },
        Headsign: '台東→鹿野',
        HeadsignEn: 'Taitung→Zhongye',
        Direction: 0
      },
      {
        SubRouteUID: 'THB811702',
        SubRouteID: '811702',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8117',
          En: '8117'
        },
        Headsign: '鹿野→台東',
        HeadsignEn: 'Zhongye→Taitung',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8117',
      En: '8117'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '鹿野',
    DestinationStopNameEn: 'Luye',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8117.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8122',
    RouteID: '8122',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB812201',
        SubRouteID: '812201',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8122',
          En: '8122'
        },
        Headsign: '臺東→隆昌',
        HeadsignEn: 'Taitung→Longchang',
        Direction: 0
      },
      {
        SubRouteUID: 'THB812202',
        SubRouteID: '812202',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8122',
          En: '8122'
        },
        Headsign: '隆昌→臺東',
        HeadsignEn: 'Longchang→Taitung',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8122',
      En: '8122'
    },
    DepartureStopNameZh: '台東保養廠',
    DepartureStopNameEn: 'Dingdong Transport Maintain Factory(Coast Line)',
    DestinationStopNameZh: '隆昌',
    DestinationStopNameEn: 'Longchang',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8122.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8128',
    RouteID: '8128',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '114',
        OperatorName: {
          Zh_tw: '興東客運'
        },
        OperatorCode: '',
        OperatorNo: '1602'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB812801',
        SubRouteID: '812801',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8128',
          En: '8128'
        },
        Headsign: '臺東→臺東航空站',
        HeadsignEn: 'Taitung→Taitung Airport',
        Direction: 0
      },
      {
        SubRouteUID: 'THB812802',
        SubRouteID: '812802',
        OperatorIDs: ['114'],
        SubRouteName: {
          Zh_tw: '8128',
          En: '8128'
        },
        Headsign: '臺東航空站→臺東',
        HeadsignEn: 'Taitung Airport→Taitung',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8128',
      En: '8128'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '台東航空站',
    DestinationStopNameEn: 'Taitung Airport Station',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8128.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8132',
    RouteID: '8132',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB813201',
        SubRouteID: '813201',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8132',
          En: '8132'
        },
        Headsign: '台東→安朔國小(經大南)',
        HeadsignEn: 'Taitung→Anshuo Elementary School(Via Danan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB813202',
        SubRouteID: '813202',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8132',
          En: '8132'
        },
        Headsign: '安朔國小→台東(經大南)',
        HeadsignEn: 'Anshuo Elementary School→Taitung(Via Danan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8132',
      En: '8132'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '安朔國小',
    DestinationStopNameEn: 'Anshuo Elementary School',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8132.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8135',
    RouteID: '8135',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB813501',
        SubRouteID: '813501',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8135',
          En: '8135'
        },
        Headsign: '台東→安朔(經大南)',
        HeadsignEn: 'Taitung→Anshuo(Via Danan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB813502',
        SubRouteID: '813502',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8135',
          En: '8135'
        },
        Headsign: '安朔→台東(經大南)',
        HeadsignEn: 'Anshuo→Taitung(Via Danan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8135',
      En: '8135'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '安朔',
    DestinationStopNameEn: 'Anshuo',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8135.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8137',
    RouteID: '8137',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB813701',
        SubRouteID: '813701',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8137',
          En: '8137'
        },
        Headsign: '台東→尚武(經大南)',
        HeadsignEn: 'Taitung→Shangwu(Via Danan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB813702',
        SubRouteID: '813702',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8137',
          En: '8137'
        },
        Headsign: '尚武→台東(經大南)',
        HeadsignEn: 'Shangwu→Taitung(Via Danan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8137',
      En: '8137'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '尚武',
    DestinationStopNameEn: 'Shangwu',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8137.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8138',
    RouteID: '8138',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB813801',
        SubRouteID: '813801',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8138',
          En: '8138'
        },
        Headsign: '台東→壢坵(經大南)',
        HeadsignEn: 'Taitung→Liqiu(Via Danan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB813802',
        SubRouteID: '813802',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8138',
          En: '8138'
        },
        Headsign: '壢坵→台東(經大南)',
        HeadsignEn: 'Liqiu→Taitung(Via Danan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8138',
      En: '8138'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '壢坵',
    DestinationStopNameEn: 'Liqiu',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8138.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8150',
    RouteID: '8150',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB815001',
        SubRouteID: '815001',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8150',
          En: '8150'
        },
        Headsign: '台東→金峰(經大南)',
        HeadsignEn: 'Taitung→Jinfeng(Via Danan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB815002',
        SubRouteID: '815002',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8150',
          En: '8150'
        },
        Headsign: '金峰→台東(經大南)',
        HeadsignEn: 'Jinfeng→Taitung(Via Danan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8150',
      En: '8150'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '金峰',
    DestinationStopNameEn: 'Jinfeng',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8150.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8161',
    RouteID: '8161',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816101',
        SubRouteID: '816101',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8161',
          En: '8161'
        },
        Headsign: '台東→富里(經武陵、海端)',
        HeadsignEn: 'Taitung→Fuli(Via Wuling、Haiduan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816102',
        SubRouteID: '816102',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8161',
          En: '8161'
        },
        Headsign: '富里→台東(經海端、武陵)',
        HeadsignEn: 'Fuli→Taitung(Via Wuling、Haiduan)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8161',
      En: '8161'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '富里農會',
    DestinationStopNameEn: 'Fuli Farmer Assc.',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8161.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8163',
    RouteID: '8163',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816301',
        SubRouteID: '816301',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8163',
          En: '8163'
        },
        Headsign: '台東→池上(經武陵、海端)',
        HeadsignEn: 'Taitung→Chishang(Via Wuling、Haiduan)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816302',
        SubRouteID: '816302',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8163',
          En: '8163'
        },
        Headsign: '池上→台東(經海端、武陵)',
        HeadsignEn: 'Chishang→Taitung(Via Haiduan、Wuling)',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8163A2',
        SubRouteID: '8163A2',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8163A',
          En: '8163A'
        },
        Headsign: '池上→台東(經武陵、海端、加樂)',
        HeadsignEn: 'Chishang→Taitung(Via Haiduan、Wuling、 Jiayue)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8163',
      En: '8163'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '池上',
    DestinationStopNameEn: 'Chishang',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8163.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8165',
    RouteID: '8165',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816501',
        SubRouteID: '816501',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8165',
          En: '8165'
        },
        Headsign: '台東→池上(經瑞源、池上大橋)',
        HeadsignEn: 'Taitung→Chishang(Via Ruiyuan、Chishang Bridge)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816502',
        SubRouteID: '816502',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8165',
          En: '8165'
        },
        Headsign: '池上→台東(經池上大橋、瑞源)',
        HeadsignEn: 'Chishang→Taitung(Via Chishang Bridge、Ruiyuan)',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8165A1',
        SubRouteID: '8165A1',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8165A',
          En: '8165A'
        },
        Headsign: '台東→池上(經瑞源、池上大橋、加樂)',
        HeadsignEn: 'Taitung→Chishang(Via Ruiyuan、Chishang Bridge、Jiuyue)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB8165A2',
        SubRouteID: '8165A2',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8165A',
          En: '8165A'
        },
        Headsign: '池上→台東(經池上大橋、瑞源)[繞駛加拿村]',
        HeadsignEn:
          'Chishang→Taitung(Via Chishang Bridge、Ruiyuan)[Jiana Village]',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8165',
      En: '8165'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '池上',
    DestinationStopNameEn: 'Chishang',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8165.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8166',
    RouteID: '8166',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816601',
        SubRouteID: '816601',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8166',
          En: '8166'
        },
        Headsign: '臺東→瑞源、海端→池上',
        HeadsignEn: 'Taitung→Ruiyuan、Haiduan→Chishang',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816602',
        SubRouteID: '816602',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8166',
          En: '8166'
        },
        Headsign: '池上→瑞源、海端→臺東',
        HeadsignEn: 'Chishang→Ruiyuan、Haiduan→Taitung',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8166A2',
        SubRouteID: '8166A2',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8166A',
          En: '8166A'
        },
        Headsign: '池上→台東(經瑞源、海端、加樂)',
        HeadsignEn: 'Chishang→Taitung(Via Ruiyuan、Haiduan、Jiayue)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8166',
      En: '8166'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '池上',
    DestinationStopNameEn: 'Chishang',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8166.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8167',
    RouteID: '8167',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816701',
        SubRouteID: '816701',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8167',
          En: '8167'
        },
        Headsign: '台東→關山',
        HeadsignEn: 'Taitung→Guanshan',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816702',
        SubRouteID: '816702',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8167',
          En: '8167'
        },
        Headsign: '關山→台東',
        HeadsignEn: 'Guanshan→Taitung',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8167A1',
        SubRouteID: '8167A1',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8167A',
          En: '8167A'
        },
        Headsign: '台東→關山(經加樂)',
        HeadsignEn: 'Taitung→Guanshan(Via Jiayue)',
        Direction: 0
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8167',
      En: '8167'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '關山',
    DestinationStopNameEn: 'Guanshan',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8167.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8168',
    RouteID: '8168',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB816801',
        SubRouteID: '816801',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8168',
          En: '8168'
        },
        Headsign: '臺東(延平、龍田)→永康',
        HeadsignEn: 'Taitung(Yanping、Longtian)→Yongkang',
        Direction: 0
      },
      {
        SubRouteUID: 'THB816802',
        SubRouteID: '816802',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8168',
          En: '8168'
        },
        Headsign: '永康→臺東(延平、龍田)',
        HeadsignEn: 'Yongkang→Taitung(Yanping、Longtian)',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8168A1',
        SubRouteID: '8168A1',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8168A',
          En: '8168A'
        },
        Headsign: '臺東(延平、龍田)→永康[台灣好行縱谷鹿野線]',
        HeadsignEn:
          'Taitung[Yanping、Longtian]→Yongkang(Taiwan Tourist Shuttle—East Rift valley Line)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB8168A2',
        SubRouteID: '8168A2',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8168A',
          En: '8168A'
        },
        Headsign: '永康→臺東(延平、龍田)[台灣好行縱谷鹿野線]',
        HeadsignEn:
          'Yongkang→Taitung[Yanping、Longtian](Taiwan Tourist Shuttle—East Rift valley Line)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8168',
      En: '8168'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '鹿野高台',
    DestinationStopNameEn: 'Luye Gaotai',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8168.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8171',
    RouteID: '8171',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB817101',
        SubRouteID: '817101',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8171',
          En: '8171'
        },
        Headsign: '台東→初鹿',
        HeadsignEn: 'Taitung→Chulu',
        Direction: 0
      },
      {
        SubRouteUID: 'THB817102',
        SubRouteID: '817102',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8171',
          En: '8171'
        },
        Headsign: '初鹿→台東(未經台東總站)',
        HeadsignEn: 'Chulu→Taitung(Not Via Taitung Bus Terminal)',
        Direction: 1
      },
      {
        SubRouteUID: 'THB8171A2',
        SubRouteID: '8171A2',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8171A',
          En: '8171A'
        },
        Headsign: '初鹿→台東[至台東女中]',
        HeadsignEn:
          "Chulu→Taitung(To National Taitung Girl's Senior High School)",
        Direction: 1
      },
      {
        SubRouteUID: 'THB8171B1',
        SubRouteID: '8171B1',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8171B',
          En: '8171B'
        },
        Headsign: '台東→初鹿[經鼎東保養場]',
        HeadsignEn: 'Taitung→Chulu(Via DiingDong Transport Maintain Factory)',
        Direction: 0
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8171',
      En: '8171'
    },
    DepartureStopNameZh: '鼎東山線保養場',
    DepartureStopNameEn: 'Dingdong Transport Maintain Factory(Mountain Line)',
    DestinationStopNameZh: '初鹿',
    DestinationStopNameEn: 'Chulu',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8171.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  },
  {
    RouteUID: 'THB8172',
    RouteID: '8172',
    HasSubRoutes: true,
    Operators: [
      {
        OperatorID: '113',
        OperatorName: {
          Zh_tw: '東台灣客運'
        },
        OperatorCode: '',
        OperatorNo: '0816'
      }
    ],
    AuthorityID: '010',
    ProviderID: '010',
    SubRoutes: [
      {
        SubRouteUID: 'THB817201',
        SubRouteID: '817201',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8172',
          En: '8172'
        },
        Headsign: '台東→台東火車站(經四維路)',
        HeadsignEn: 'Taitung→TRA Taitung Station(Via Siwei Road)',
        Direction: 0
      },
      {
        SubRouteUID: 'THB817202',
        SubRouteID: '817202',
        OperatorIDs: ['113'],
        SubRouteName: {
          Zh_tw: '8172',
          En: '8172'
        },
        Headsign: '台東火車站→台東(經四維路)',
        HeadsignEn: 'TRA Taitung Station→Taitung(Via Siwei Road)',
        Direction: 1
      }
    ],
    BusRouteType: 12,
    RouteName: {
      Zh_tw: '8172',
      En: '8172'
    },
    DepartureStopNameZh: '台東轉運站',
    DepartureStopNameEn: 'Taitung Bus Station',
    DestinationStopNameZh: '台東火車站',
    DestinationStopNameEn: 'TRA Taitung Station',
    RouteMapImageUrl: 'http://web.taiwanbus.tw/TMSData/Schematic/file/8172.jpg',
    UpdateTime: '2023-01-09T04:20:50+08:00',
    VersionID: 1505
  }
]

export const mockG1Arrivals = [
  {
    StopUID: 'TPE124233',
    StopID: '124233',
    StopName: {
      Zh_tw: '政大一',
      En: 'National Chengchi U. 1'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2902,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE17003',
    StopID: '17003',
    StopName: {
      Zh_tw: '康樂新村',
      En: 'Kangle New Village'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8309,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE17005',
    StopID: '17005',
    StopName: {
      Zh_tw: '大茅埔',
      En: 'Damaopu'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8342,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE17001',
    StopID: '17001',
    StopName: {
      Zh_tw: '仁康醫院',
      En: 'Jen-Kang Hospital'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8270,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE17007',
    StopID: '17007',
    StopName: {
      Zh_tw: '安祥路口',
      En: 'Anxiang Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8409,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE56984',
    StopID: '56984',
    StopName: {
      Zh_tw: '寶強路口',
      En: 'BaoQiang Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1895,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE56985',
    StopID: '56985',
    StopName: {
      Zh_tw: '寶橋中興路口一',
      En: 'Baoqiao and Zhongxing Intersection 1'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2137,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE56987',
    StopID: '56987',
    StopName: {
      Zh_tw: '安祥路口',
      En: 'Anxiang Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 159,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE56983',
    StopID: '56983',
    StopName: {
      Zh_tw: '萬興圖書館',
      En: 'Wanxing Library'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2935,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE56988',
    StopID: '56988',
    StopName: {
      Zh_tw: '捷運動物園站',
      En: 'MRT Taipei Zoo Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 243,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57416',
    StopID: '57416',
    StopName: {
      Zh_tw: '風動石',
      En: 'Fengdongshi'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 444,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57410',
    StopID: '57410',
    StopName: {
      Zh_tw: '寶橋路口',
      En: 'Baoqiao Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2105,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57411',
    StopID: '57411',
    StopName: {
      Zh_tw: '忠順廟',
      En: 'Zhongshun Temple'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2567,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57412',
    StopID: '57412',
    StopName: {
      Zh_tw: '指南路口',
      En: 'Zhinan Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2716,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57417',
    StopID: '57417',
    StopName: {
      Zh_tw: '風動石',
      En: 'Fengdongshi'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 1086,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57419',
    StopID: '57419',
    StopName: {
      Zh_tw: '萬興國小',
      En: 'Wanxing Elementary School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 228,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57420',
    StopID: '57420',
    StopName: {
      Zh_tw: '國泰新村(木新)',
      En: 'Guotai New Village(Muxin)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 668,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57421',
    StopID: '57421',
    StopName: {
      Zh_tw: '寶強路口',
      En: 'BaoQiang Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 60,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE57422',
    StopID: '57422',
    StopName: {
      Zh_tw: '指南路口',
      En: 'Zhinan Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 482,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE148692',
    StopID: '148692',
    StopName: {
      Zh_tw: '萬壽橋頭(新光)',
      En: 'Wanshou Qiaotou(Xinguang)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 100,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE148693',
    StopID: '148693',
    StopName: {
      Zh_tw: '萬壽橋頭(秀明)',
      En: 'Wanshou Qiaotou(Xiuming)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 163,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE193234',
    StopID: '193234',
    StopName: {
      Zh_tw: '政大一',
      En: 'National Chengchi U. 1'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 268,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE58029',
    StopID: '58029',
    StopName: {
      Zh_tw: '貓纜動物園站',
      En: 'Maokong Gondola Taipei Zoo Station'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 75,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16917',
    StopID: '16917',
    StopName: {
      Zh_tw: '興雅國中',
      En: 'Xingya Junior High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 481,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16915',
    StopID: '16915',
    StopName: {
      Zh_tw: '消防局(松仁)',
      En: 'City Fire Department(Songren)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 397,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16919',
    StopID: '16919',
    StopName: {
      Zh_tw: '信義行政中心(松仁)',
      En: 'Xinyi Dist. Admin. Center(Songren)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 644,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16913',
    StopID: '16913',
    StopName: {
      Zh_tw: '捷運市政府站',
      En: 'MRT Taipei City Hall Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 246,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16911',
    StopID: '16911',
    StopName: {
      Zh_tw: '市政府(市府)',
      En: 'Taipei City Hall(City Hall Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1119,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16929',
    StopID: '16929',
    StopName: {
      Zh_tw: '萬壽橋頭(新光)',
      En: 'Wanshou Qiaotou(Xinguang)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 140,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16921',
    StopID: '16921',
    StopName: {
      Zh_tw: '石壁坑',
      En: 'Shibikeng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 1130,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16923',
    StopID: '16923',
    StopName: {
      Zh_tw: '捷運動物園站',
      En: 'MRT Taipei Zoo Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 0,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE191082',
    StopID: '191082',
    StopName: {
      Zh_tw: '新店站',
      En: 'Xindian Station'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8482,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE191081',
    StopID: '191081',
    StopName: {
      Zh_tw: '新店站',
      En: 'Xindian Station'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 141,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16907',
    StopID: '16907',
    StopName: {
      Zh_tw: '信義行政中心(信義)',
      En: 'Xinyi Dist. Admin. Center(Xinyi)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 845,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16905',
    StopID: '16905',
    StopName: {
      Zh_tw: '石壁坑',
      En: 'Shibikeng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 368,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16909',
    StopID: '16909',
    StopName: {
      Zh_tw: '捷運台北101/世貿站(市府)',
      En: 'MRT Taipei 101/World Trade Center Sta.(City Hall Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 945,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16901',
    StopID: '16901',
    StopName: {
      Zh_tw: '貓纜動物園站',
      En: 'Maokong Gondola Taipei Zoo Station'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 177,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16873',
    StopID: '16873',
    StopName: {
      Zh_tw: '寶高產業園區',
      En: 'Baogao Science and Intellectual Park'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2254,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16871',
    StopID: '16871',
    StopName: {
      Zh_tw: '加油站',
      En: 'Gas Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2213,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16877',
    StopID: '16877',
    StopName: {
      Zh_tw: '木新市場',
      En: 'Muxin Market'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2393,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16875',
    StopID: '16875',
    StopName: {
      Zh_tw: '景美女中',
      En: 'Jingmei Girls High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2341,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16879',
    StopID: '16879',
    StopName: {
      Zh_tw: '力行國小',
      En: 'Lixing Elementary School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2447,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16883',
    StopID: '16883',
    StopName: {
      Zh_tw: '國泰新村(木新)',
      En: 'GuoTai New Village(Muxin)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2487,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16887',
    StopID: '16887',
    StopName: {
      Zh_tw: '景文中學',
      En: 'Jingwen High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2643,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16885',
    StopID: '16885',
    StopName: {
      Zh_tw: '司法新村',
      En: 'Sifa New Village'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2594,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16889',
    StopID: '16889',
    StopName: {
      Zh_tw: '木南公園',
      En: 'Munan Park'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2694,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16851',
    StopID: '16851',
    StopName: {
      Zh_tw: '溪頭',
      En: 'Xitou'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 847,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16855',
    StopID: '16855',
    StopName: {
      Zh_tw: '碧潭橋頭',
      En: 'Bitan Bridge'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1429,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16853',
    StopID: '16853',
    StopName: {
      Zh_tw: '捷運新店站(新店路)',
      En: 'MRT Xindian Sta.(Xindian Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1020,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16859',
    StopID: '16859',
    StopName: {
      Zh_tw: '捷運新店區公所站(北新)',
      En: 'MRT Xindian City Hall Sta.(Beixin)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1535,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16857',
    StopID: '16857',
    StopName: {
      Zh_tw: '檳榔路',
      En: 'Binlang Rd.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1462,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16861',
    StopID: '16861',
    StopName: {
      Zh_tw: '七張(北新路)',
      En: 'Qizhang(Beixin Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1652,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16865',
    StopID: '16865',
    StopName: {
      Zh_tw: '新店郵局',
      En: 'Xindian Post Office'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1868,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16863',
    StopID: '16863',
    StopName: {
      Zh_tw: '捷運七張站',
      En: 'MRT Qizhang Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 1783,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16839',
    StopID: '16839',
    StopName: {
      Zh_tw: '安康派出所',
      En: 'Ankang Police Substation'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 568,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16833',
    StopID: '16833',
    StopName: {
      Zh_tw: '台北菸廠',
      En: 'Taipei Tobacco Factory'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 417,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16831',
    StopID: '16831',
    StopName: {
      Zh_tw: '安康車子路口',
      En: 'Ankang Chezi Rd. Intersection'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 383,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16837',
    StopID: '16837',
    StopName: {
      Zh_tw: '公崙新村(豐榮醫院)',
      En: 'Gonglun New Village(Feng Rong Hospital)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 493,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16835',
    StopID: '16835',
    StopName: {
      Zh_tw: '浪漫貴族',
      En: 'Langmanguizu'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 449,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16849',
    StopID: '16849',
    StopName: {
      Zh_tw: '大坪頂',
      En: 'Dapingding'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 796,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16843',
    StopID: '16843',
    StopName: {
      Zh_tw: '下城社區',
      En: 'Xiacheng Community'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 706,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16841',
    StopID: '16841',
    StopName: {
      Zh_tw: '光華新村(安康路)',
      En: 'Guanghua New Village(Ankang Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 627,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16847',
    StopID: '16847',
    StopName: {
      Zh_tw: '頂城',
      En: 'Dingcheng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 763,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16845',
    StopID: '16845',
    StopName: {
      Zh_tw: '胡璉故居紀念館',
      En: 'The HU-LIAN House Memorial Hall'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 731,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16829',
    StopID: '16829',
    StopName: {
      Zh_tw: '薏仁坑',
      En: 'Yirenkeng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 301,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16827',
    StopID: '16827',
    StopName: {
      Zh_tw: '仁康醫院',
      En: 'Jen-Kang Hospital'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 268,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16825',
    StopID: '16825',
    StopName: {
      Zh_tw: '康樂新村',
      En: 'Kangle New Village'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 244,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16823',
    StopID: '16823',
    StopName: {
      Zh_tw: '大茅埔',
      En: 'Damaopu'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 180,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16891',
    StopID: '16891',
    StopName: {
      Zh_tw: '政大',
      En: 'National Chengchi U.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2842,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16895',
    StopID: '16895',
    StopName: {
      Zh_tw: '大誠高中',
      En: 'Tacheng High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 2973,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16897',
    StopID: '16897',
    StopName: {
      Zh_tw: '萬壽橋頭(秀明)',
      En: 'Wanshou Qiaotou(Xiuming)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 54,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16993',
    StopID: '16993',
    StopName: {
      Zh_tw: '浪漫貴族',
      En: 'Langmanguizu'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8080,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16991',
    StopID: '16991',
    StopName: {
      Zh_tw: '公崙新村(豐榮醫院)',
      En: 'Gonglun New Village(Feng Rong Hospital)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8037,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16997',
    StopID: '16997',
    StopName: {
      Zh_tw: '安康車子路口',
      En: 'Ankang Chezi Rd. Intersection'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8160,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16995',
    StopID: '16995',
    StopName: {
      Zh_tw: '台北菸廠',
      En: 'Taipei Tobacco Factory'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8131,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16999',
    StopID: '16999',
    StopName: {
      Zh_tw: '薏仁坑',
      En: 'Yirenkeng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 8228,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16971',
    StopID: '16971',
    StopName: {
      Zh_tw: '檳榔路',
      En: 'Binlang Rd.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 597,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16975',
    StopID: '16975',
    StopName: {
      Zh_tw: '捷運新店站(新店路)',
      En: 'MRT Xindian Sta.(Xindian Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 773,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16973',
    StopID: '16973',
    StopName: {
      Zh_tw: '碧潭橋頭',
      En: 'Bitan Bridge'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 646,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16979',
    StopID: '16979',
    StopName: {
      Zh_tw: '大坪頂',
      En: 'Dapingding'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7757,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16977',
    StopID: '16977',
    StopName: {
      Zh_tw: '溪頭',
      En: 'Xitou'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7716,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16983',
    StopID: '16983',
    StopName: {
      Zh_tw: '胡璉故居紀念館',
      En: 'The HU-LIAN House Memorial Hall'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7798,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16981',
    StopID: '16981',
    StopName: {
      Zh_tw: '頂城',
      En: 'Dingcheng'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7782,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16987',
    StopID: '16987',
    StopName: {
      Zh_tw: '光華新村(安康路)',
      En: 'Guanghua New Village(Ankang Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7940,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16985',
    StopID: '16985',
    StopName: {
      Zh_tw: '下城社區',
      En: 'Xiacheng Community'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7824,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16989',
    StopID: '16989',
    StopName: {
      Zh_tw: '安康派出所',
      En: 'Ankang Police Substation'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7983,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16959',
    StopID: '16959',
    StopName: {
      Zh_tw: '臺灣銀行',
      En: 'Bank of Taiwan'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 1089,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16953',
    StopID: '16953',
    StopName: {
      Zh_tw: '景美女中',
      En: 'Jingmei Girls High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 816,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16951',
    StopID: '16951',
    StopName: {
      Zh_tw: '木新市場',
      En: 'Muxin Market'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 761,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16957',
    StopID: '16957',
    StopName: {
      Zh_tw: '寶中路',
      En: 'Baozhong Rd.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 1043,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16955',
    StopID: '16955',
    StopName: {
      Zh_tw: '寶高產業園區(寶中路)',
      En: 'Baogao Science and Intellectual Park(Baozhong Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 986,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16965',
    StopID: '16965',
    StopName: {
      Zh_tw: '捷運七張站',
      En: 'MRT Qizhang Sta.'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 253,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16963',
    StopID: '16963',
    StopName: {
      Zh_tw: '新店郵局',
      En: 'Xindian Post Office'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 208,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16969',
    StopID: '16969',
    StopName: {
      Zh_tw: '捷運新店區公所站(北新)',
      En: 'MRT Hsintien City Hall Station'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 483,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16967',
    StopID: '16967',
    StopName: {
      Zh_tw: '七張(北新路)',
      En: 'Qizhang(Beixin Rd.)'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 358,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16939',
    StopID: '16939',
    StopName: {
      Zh_tw: '木南公園',
      En: 'Munan Park'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 520,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16937',
    StopID: '16937',
    StopName: {
      Zh_tw: '新光路口',
      En: 'Xinguang Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 409,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16949',
    StopID: '16949',
    StopName: {
      Zh_tw: '力行國小',
      En: 'Lixing Elementary School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 716,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16943',
    StopID: '16943',
    StopName: {
      Zh_tw: '司法新村',
      En: 'Sifa New Village'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 566,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16941',
    StopID: '16941',
    StopName: {
      Zh_tw: '景文中學',
      En: 'Jingwen High School'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 540,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE16945',
    StopID: '16945',
    StopName: {
      Zh_tw: '忠順廟',
      En: 'Zhongshun Temple'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 615,
    StopStatus: 0,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE156418',
    StopID: '156418',
    StopName: {
      Zh_tw: '安華路口',
      En: 'Anwar Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 0,
    EstimateTime: 687,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  },
  {
    StopUID: 'TPE156419',
    StopID: '156419',
    StopName: {
      Zh_tw: '安華路口',
      En: 'Anwar Rd. Entrance'
    },
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Direction: 1,
    EstimateTime: 7889,
    StopStatus: 1,
    SrcUpdateTime: '2023-01-18T13:18:10+08:00',
    UpdateTime: '2023-01-18T13:18:15+08:00'
  }
]

export const mockG1StopsOfRoute = [
  {
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Operators: [
      {
        OperatorID: '100',
        OperatorName: {
          Zh_tw: '臺北客運',
          En: 'Taipei Bus Co., Ltd.'
        },
        OperatorCode: 'TaipeiBus',
        OperatorNo: '1407'
      }
    ],
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 0,
    City: 'Taipei',
    CityCode: 'TPE',
    Stops: [
      {
        StopUID: 'TPE191081',
        StopID: '191081',
        StopName: {
          Zh_tw: '新店站',
          En: 'Xindian Station'
        },
        StopBoarding: 0,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.483357,
          PositionLat: 24.960538,
          GeoHash: 'wsqmurvmx'
        },
        StationID: '72232',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE56987',
        StopID: '56987',
        StopName: {
          Zh_tw: '安祥路口',
          En: 'Anxiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.491777,
          PositionLat: 24.9554,
          GeoHash: 'wsqmuwgxe'
        },
        StationID: '2902',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16823',
        StopID: '16823',
        StopName: {
          Zh_tw: '大茅埔',
          En: 'Damaopu'
        },
        StopBoarding: 0,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.4946626,
          PositionLat: 24.95431753,
          GeoHash: 'wsqmuwv9q'
        },
        StationID: '1000380',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16825',
        StopID: '16825',
        StopName: {
          Zh_tw: '康樂新村',
          En: 'Kangle New Village'
        },
        StopBoarding: 0,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.496712,
          PositionLat: 24.955193,
          GeoHash: 'wsqmuwznw'
        },
        StationID: '1000381',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16827',
        StopID: '16827',
        StopName: {
          Zh_tw: '仁康醫院',
          En: 'Jen-Kang Hospital'
        },
        StopBoarding: 0,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.499054,
          PositionLat: 24.956348,
          GeoHash: 'wsqmuz0vm'
        },
        StationID: '3983',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16829',
        StopID: '16829',
        StopName: {
          Zh_tw: '薏仁坑',
          En: 'Yirenkeng'
        },
        StopBoarding: 0,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.502106,
          PositionLat: 24.95733611,
          GeoHash: 'wsqmuz75h'
        },
        StationID: '3982',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16831',
        StopID: '16831',
        StopName: {
          Zh_tw: '安康車子路口',
          En: 'Ankang Chezi Rd. Intersection'
        },
        StopBoarding: 0,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.505929,
          PositionLat: 24.958027,
          GeoHash: 'wsqmuzmzj'
        },
        StationID: '3984',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16833',
        StopID: '16833',
        StopName: {
          Zh_tw: '台北菸廠',
          En: 'Taipei Tobacco Factory'
        },
        StopBoarding: 0,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.509284,
          PositionLat: 24.959017,
          GeoHash: 'wsqmvp8kg'
        },
        StationID: '2887',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16835',
        StopID: '16835',
        StopName: {
          Zh_tw: '浪漫貴族',
          En: 'Langmanguizu'
        },
        StopBoarding: 0,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.511483,
          PositionLat: 24.960016,
          GeoHash: 'wsqmvpcfw'
        },
        StationID: '1000401',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16837',
        StopID: '16837',
        StopName: {
          Zh_tw: '公崙新村(豐榮醫院)',
          En: 'Gonglun New Village(Feng Rong Hospital)'
        },
        StopBoarding: 0,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.512648,
          PositionLat: 24.962041,
          GeoHash: 'wsqqj04y3'
        },
        StationID: '1000402',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16839',
        StopID: '16839',
        StopName: {
          Zh_tw: '安康派出所',
          En: 'Ankang Police Substation'
        },
        StopBoarding: -1,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.515311,
          PositionLat: 24.963642,
          GeoHash: 'wsqqj0kxz'
        },
        StationID: '1000403',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16841',
        StopID: '16841',
        StopName: {
          Zh_tw: '光華新村(安康路)',
          En: 'Guanghua New Village(Ankang Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 12,
        StopPosition: {
          PositionLon: 121.517942,
          PositionLat: 24.963936,
          GeoHash: 'wsqqj0w9m'
        },
        StationID: '2896',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE156418',
        StopID: '156418',
        StopName: {
          Zh_tw: '安華路口',
          En: 'Anwar Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 13,
        StopPosition: {
          PositionLon: 121.521365324681,
          PositionLat: 24.9637050292789,
          GeoHash: 'wsqqj290j'
        },
        StationID: '20310',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16843',
        StopID: '16843',
        StopName: {
          Zh_tw: '下城社區',
          En: 'Xiacheng Community'
        },
        StopBoarding: 0,
        StopSequence: 14,
        StopPosition: {
          PositionLon: 121.5235251,
          PositionLat: 24.96347353,
          GeoHash: 'wsqqj26wz'
        },
        StationID: '2858',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16845',
        StopID: '16845',
        StopName: {
          Zh_tw: '胡璉故居紀念館',
          En: 'The HU-LIAN House Memorial Hall'
        },
        StopBoarding: 0,
        StopSequence: 15,
        StopPosition: {
          PositionLon: 121.52598,
          PositionLat: 24.962917,
          GeoHash: 'wsqqj2ke8'
        },
        StationID: '2857',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16847',
        StopID: '16847',
        StopName: {
          Zh_tw: '頂城',
          En: 'Dingcheng'
        },
        StopBoarding: 0,
        StopSequence: 16,
        StopPosition: {
          PositionLon: 121.528339,
          PositionLat: 24.961725,
          GeoHash: 'wsqqj2nhx'
        },
        StationID: '2934',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16849',
        StopID: '16849',
        StopName: {
          Zh_tw: '大坪頂',
          En: 'Dapingding'
        },
        StopBoarding: 0,
        StopSequence: 17,
        StopPosition: {
          PositionLon: 121.530152,
          PositionLat: 24.961041,
          GeoHash: 'wsqqj2p89'
        },
        StationID: '2855',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16851',
        StopID: '16851',
        StopName: {
          Zh_tw: '溪頭',
          En: 'Xitou'
        },
        StopBoarding: 0,
        StopSequence: 18,
        StopPosition: {
          PositionLon: 121.532361,
          PositionLat: 24.960256,
          GeoHash: 'wsqmvxchj'
        },
        StationID: '2679',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16853',
        StopID: '16853',
        StopName: {
          Zh_tw: '捷運新店站(新店路)',
          En: 'MRT Xindian Sta.(Xindian Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 19,
        StopPosition: {
          PositionLon: 121.53755,
          PositionLat: 24.958392,
          GeoHash: 'wsqmvxscn'
        },
        StationID: '72044',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16855',
        StopID: '16855',
        StopName: {
          Zh_tw: '碧潭橋頭',
          En: 'Bitan Bridge'
        },
        StopBoarding: 0,
        StopSequence: 20,
        StopPosition: {
          PositionLon: 121.53982,
          PositionLat: 24.963158,
          GeoHash: 'wsqqj8qsg'
        },
        StationID: '60071',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16857',
        StopID: '16857',
        StopName: {
          Zh_tw: '檳榔路',
          En: 'Binlang Rd.'
        },
        StopBoarding: -1,
        StopSequence: 21,
        StopPosition: {
          PositionLon: 121.5405875,
          PositionLat: 24.96500149,
          GeoHash: 'wsqqj8xps'
        },
        StationID: '2981',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16859',
        StopID: '16859',
        StopName: {
          Zh_tw: '捷運新店區公所站(北新)',
          En: 'MRT Xindian City Hall Sta.(Beixin)'
        },
        StopBoarding: -1,
        StopSequence: 22,
        StopPosition: {
          PositionLon: 121.54161613426882,
          PositionLat: 24.96763873691205,
          GeoHash: 'wsqqj9pzh'
        },
        StationID: '30100',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16861',
        StopID: '16861',
        StopName: {
          Zh_tw: '七張(北新路)',
          En: 'Qizhang(Beixin Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 23,
        StopPosition: {
          PositionLon: 121.542921,
          PositionLat: 24.971513,
          GeoHash: 'wsqqjcbve'
        },
        StationID: '30101',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16863',
        StopID: '16863',
        StopName: {
          Zh_tw: '捷運七張站',
          En: 'MRT Qizhang Sta.'
        },
        StopBoarding: 0,
        StopSequence: 24,
        StopPosition: {
          PositionLon: 121.5430453,
          PositionLat: 24.9753,
          GeoHash: 'wsqqjf8gw'
        },
        StationID: '30102',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16865',
        StopID: '16865',
        StopName: {
          Zh_tw: '新店郵局',
          En: 'Xindian Post Office'
        },
        StopBoarding: 0,
        StopSequence: 25,
        StopPosition: {
          PositionLon: 121.542795,
          PositionLat: 24.978161,
          GeoHash: 'wsqqjg0u2'
        },
        StationID: '30103',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE56984',
        StopID: '56984',
        StopName: {
          Zh_tw: '寶強路口',
          En: 'BaoQiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 26,
        StopPosition: {
          PositionLon: 121.54378,
          PositionLat: 24.97916,
          GeoHash: 'wsqqjg36p'
        },
        StationID: '60063',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE57410',
        StopID: '57410',
        StopName: {
          Zh_tw: '寶橋路口',
          En: 'Baoqiao Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 27,
        StopPosition: {
          PositionLon: 121.546288,
          PositionLat: 24.976868,
          GeoHash: 'wsqqjfgkc'
        },
        StationID: '2987',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE56985',
        StopID: '56985',
        StopName: {
          Zh_tw: '寶橋中興路口一',
          En: 'Baoqiao and Zhongxing Intersection 1'
        },
        StopBoarding: -1,
        StopSequence: 28,
        StopPosition: {
          PositionLon: 121.547757,
          PositionLat: 24.97650499,
          GeoHash: 'wsqqjfu6s'
        },
        StationID: '4160',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16871',
        StopID: '16871',
        StopName: {
          Zh_tw: '加油站',
          En: 'Gas Sta.'
        },
        StopBoarding: 0,
        StopSequence: 29,
        StopPosition: {
          PositionLon: 121.548731,
          PositionLat: 24.977046,
          GeoHash: 'wsqqjfvjf'
        },
        StationID: '1000551',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16873',
        StopID: '16873',
        StopName: {
          Zh_tw: '寶高產業園區',
          En: 'Baogao Science and Intellectual Park'
        },
        StopBoarding: 0,
        StopSequence: 30,
        StopPosition: {
          PositionLon: 121.551231544066,
          PositionLat: 24.9786235157248,
          GeoHash: 'wsqqjgnzh'
        },
        StationID: '1000552',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16875',
        StopID: '16875',
        StopName: {
          Zh_tw: '景美女中',
          En: 'Jingmei Girls High School'
        },
        StopBoarding: 0,
        StopSequence: 31,
        StopPosition: {
          PositionLon: 121.55568,
          PositionLat: 24.980335,
          GeoHash: 'wsqqn5d0u'
        },
        StationID: '2461',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16877',
        StopID: '16877',
        StopName: {
          Zh_tw: '木新市場',
          En: 'Muxin Market'
        },
        StopBoarding: 0,
        StopSequence: 32,
        StopPosition: {
          PositionLon: 121.5583622,
          PositionLat: 24.98100977,
          GeoHash: 'wsqqn5shg'
        },
        StationID: '1000553',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16879',
        StopID: '16879',
        StopName: {
          Zh_tw: '力行國小',
          En: 'Lixing Elementary School'
        },
        StopBoarding: 0,
        StopSequence: 33,
        StopPosition: {
          PositionLon: 121.559783932422,
          PositionLat: 24.9813802657801,
          GeoHash: 'wsqqn5tph'
        },
        StationID: '1000554',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16883',
        StopID: '16883',
        StopName: {
          Zh_tw: '國泰新村(木新)',
          En: 'GuoTai New Village(Muxin)'
        },
        StopBoarding: 0,
        StopSequence: 34,
        StopPosition: {
          PositionLon: 121.561802,
          PositionLat: 24.981856,
          GeoHash: 'wsqqn5y9g'
        },
        StationID: '3993',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57411',
        StopID: '57411',
        StopName: {
          Zh_tw: '忠順廟',
          En: 'Zhongshun Temple'
        },
        StopBoarding: 0,
        StopSequence: 35,
        StopPosition: {
          PositionLon: 121.56469,
          PositionLat: 24.982483,
          GeoHash: 'wsqqn7btw'
        },
        StationID: '1000453',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16885',
        StopID: '16885',
        StopName: {
          Zh_tw: '司法新村',
          En: 'Sifa New Village'
        },
        StopBoarding: 0,
        StopSequence: 36,
        StopPosition: {
          PositionLon: 121.56636,
          PositionLat: 24.98305,
          GeoHash: 'wsqqnk1bv'
        },
        StationID: '4028',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16887',
        StopID: '16887',
        StopName: {
          Zh_tw: '景文中學',
          En: 'Jingwen High School'
        },
        StopBoarding: -1,
        StopSequence: 37,
        StopPosition: {
          PositionLon: 121.568528509552,
          PositionLat: 24.9837877068618,
          GeoHash: 'wsqqnk5t0'
        },
        StationID: '1000540',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16889',
        StopID: '16889',
        StopName: {
          Zh_tw: '木南公園',
          En: 'Munan Park'
        },
        StopBoarding: 0,
        StopSequence: 38,
        StopPosition: {
          PositionLon: 121.570615,
          PositionLat: 24.985348,
          GeoHash: 'wsqqnkmn0'
        },
        StationID: '50681',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57412',
        StopID: '57412',
        StopName: {
          Zh_tw: '指南路口',
          En: 'Zhinan Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 39,
        StopPosition: {
          PositionLon: 121.570722800802,
          PositionLat: 24.9871941238226,
          GeoHash: 'wsqqnkv0g'
        },
        StationID: '2426',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16891',
        StopID: '16891',
        StopName: {
          Zh_tw: '政大',
          En: 'National Chengchi U.'
        },
        StopBoarding: 0,
        StopSequence: 40,
        StopPosition: {
          PositionLon: 121.574633255625,
          PositionLat: 24.9878362086283,
          GeoHash: 'wsqqnkzuw'
        },
        StationID: '2415',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE124233',
        StopID: '124233',
        StopName: {
          Zh_tw: '政大一',
          En: 'National Chengchi U. 1'
        },
        StopBoarding: 0,
        StopSequence: 41,
        StopPosition: {
          PositionLon: 121.576427,
          PositionLat: 24.988319,
          GeoHash: 'wsqqnscr8'
        },
        StationID: '1001400',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE56983',
        StopID: '56983',
        StopName: {
          Zh_tw: '萬興圖書館',
          En: 'Wanxing Library'
        },
        StopBoarding: -1,
        StopSequence: 42,
        StopPosition: {
          PositionLon: 121.57697,
          PositionLat: 24.98897,
          GeoHash: 'wsqqnt1ek'
        },
        StationID: '2520',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16895',
        StopID: '16895',
        StopName: {
          Zh_tw: '大誠高中',
          En: 'Tacheng High School'
        },
        StopBoarding: 0,
        StopSequence: 43,
        StopPosition: {
          PositionLon: 121.576905,
          PositionLat: 24.990413,
          GeoHash: 'wsqqnt3ee'
        },
        StationID: '2368',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16897',
        StopID: '16897',
        StopName: {
          Zh_tw: '萬壽橋頭(秀明)',
          En: 'Wanshou Qiaotou(Xiuming)'
        },
        StopBoarding: -1,
        StopSequence: 44,
        StopPosition: {
          PositionLon: 121.574627,
          PositionLat: 24.991863,
          GeoHash: 'wsqqnmxun'
        },
        StationID: '50671',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE148692',
        StopID: '148692',
        StopName: {
          Zh_tw: '萬壽橋頭(新光)',
          En: 'Wanshou Qiaotou(Xinguang)'
        },
        StopBoarding: 0,
        StopSequence: 45,
        StopPosition: {
          PositionLon: 121.573803212774,
          PositionLat: 24.9928588203687,
          GeoHash: 'wsqqnmz3f'
        },
        StationID: '50669',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16901',
        StopID: '16901',
        StopName: {
          Zh_tw: '貓纜動物園站',
          En: 'Maokong Gondola Taipei Zoo Station'
        },
        StopBoarding: 0,
        StopSequence: 46,
        StopPosition: {
          PositionLon: 121.576314002724,
          PositionLat: 24.9963006246947,
          GeoHash: 'wsqqnw3nj'
        },
        StationID: '2443',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE56988',
        StopID: '56988',
        StopName: {
          Zh_tw: '捷運動物園站',
          En: 'MRT Taipei Zoo Sta.'
        },
        StopBoarding: 0,
        StopSequence: 47,
        StopPosition: {
          PositionLon: 121.579926,
          PositionLat: 24.998553,
          GeoHash: 'wsqqnwgg1'
        },
        StationID: '50672',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16905',
        StopID: '16905',
        StopName: {
          Zh_tw: '石壁坑',
          En: 'Shibikeng'
        },
        StopBoarding: 0,
        StopSequence: 48,
        StopPosition: {
          PositionLon: 121.583287778248,
          PositionLat: 25.0028393386766,
          GeoHash: 'wsqqnxwhp'
        },
        StationID: '56111',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57416',
        StopID: '57416',
        StopName: {
          Zh_tw: '風動石',
          En: 'Fengdongshi'
        },
        StopBoarding: 0,
        StopSequence: 49,
        StopPosition: {
          PositionLon: 121.579255519338,
          PositionLat: 25.0011783104188,
          GeoHash: 'wsqqnx763'
        },
        StationID: '2429',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16907',
        StopID: '16907',
        StopName: {
          Zh_tw: '信義松仁路口(信義)',
          En: 'Xinyi and Songren Rd. Entrance(Xinyi)'
        },
        StopBoarding: 0,
        StopSequence: 50,
        StopPosition: {
          PositionLon: 121.566687674056,
          PositionLat: 25.0329497897498,
          GeoHash: 'wsqqqm45t'
        },
        StationID: '6929',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16909',
        StopID: '16909',
        StopName: {
          Zh_tw: '捷運台北101/世貿站(市府)',
          En: 'MRT Taipei 101/World Trade Center Sta.(City Hall Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 51,
        StopPosition: {
          PositionLon: 121.56364,
          PositionLat: 25.03376,
          GeoHash: 'wsqqqjrbn'
        },
        StationID: '2029',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16911',
        StopID: '16911',
        StopName: {
          Zh_tw: '市政府(市府)',
          En: 'Taipei City Hall(City Hall Rd.)'
        },
        StopBoarding: 0,
        StopSequence: 52,
        StopPosition: {
          PositionLon: 121.563625169371,
          PositionLat: 25.0383666649821,
          GeoHash: 'wsqqqnpgj'
        },
        StationID: '2063',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16913',
        StopID: '16913',
        StopName: {
          Zh_tw: '捷運市政府站',
          En: 'MRT Taipei City Hall Sta.'
        },
        StopBoarding: 0,
        StopSequence: 53,
        StopPosition: {
          PositionLon: 121.5668354,
          PositionLat: 25.04100991,
          GeoHash: 'wsqqqqd62'
        },
        StationID: '3916',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-22T05:00:43+08:00',
    VersionID: 2205
  },
  {
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Operators: [
      {
        OperatorID: '100',
        OperatorName: {
          Zh_tw: '臺北客運',
          En: 'Taipei Bus Co., Ltd.'
        },
        OperatorCode: 'TaipeiBus',
        OperatorNo: '1407'
      }
    ],
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 1,
    City: 'Taipei',
    CityCode: 'TPE',
    Stops: [
      {
        StopUID: 'TPE16915',
        StopID: '16915',
        StopName: {
          Zh_tw: '消防局(松仁)',
          En: 'City Fire Department(Songren)'
        },
        StopBoarding: 0,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.568284,
          PositionLat: 25.038604,
          GeoHash: 'wsqqqq5k6'
        },
        StationID: '1165604593',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16917',
        StopID: '16917',
        StopName: {
          Zh_tw: '興雅國中',
          En: 'Xingya Junior High School'
        },
        StopBoarding: 0,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.568268559011,
          PositionLat: 25.0372323905063,
          GeoHash: 'wsqqqmgk3'
        },
        StationID: '2179',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16919',
        StopID: '16919',
        StopName: {
          Zh_tw: '信義松仁路口(松仁)',
          En: 'Xinyi and Songren Rd. Entrance(Songren)'
        },
        StopBoarding: 0,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.568236043782,
          PositionLat: 25.0345352489599,
          GeoHash: 'wsqqqm7k9'
        },
        StationID: '2121',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57417',
        StopID: '57417',
        StopName: {
          Zh_tw: '風動石',
          En: 'Fengdongshi'
        },
        StopBoarding: 0,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.579341481903,
          PositionLat: 25.0010545644892,
          GeoHash: 'wsqqnx73e'
        },
        StationID: '309',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16921',
        StopID: '16921',
        StopName: {
          Zh_tw: '石壁坑',
          En: 'Shibikeng'
        },
        StopBoarding: 0,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.58301,
          PositionLat: 25.00261,
          GeoHash: 'wsqqnxw4c'
        },
        StationID: '2400',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16923',
        StopID: '16923',
        StopName: {
          Zh_tw: '捷運動物園站',
          En: 'MRT Taipei Zoo Sta.'
        },
        StopBoarding: 0,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.580221,
          PositionLat: 24.99882,
          GeoHash: 'wsqqnwuh8'
        },
        StationID: '2442',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE58029',
        StopID: '58029',
        StopName: {
          Zh_tw: '貓纜動物園站',
          En: 'Maokong Gondola Taipei Zoo Station'
        },
        StopBoarding: 0,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.576778,
          PositionLat: 24.9968,
          GeoHash: 'wsqqnw98b'
        },
        StationID: '1000436',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16929',
        StopID: '16929',
        StopName: {
          Zh_tw: '萬壽橋頭(新光)',
          En: 'Wanshou Qiaotou(Xinguang)'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.573725603131,
          PositionLat: 24.9935042275141,
          GeoHash: 'wsqqnmzm9'
        },
        StationID: '2512',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE148693',
        StopID: '148693',
        StopName: {
          Zh_tw: '萬壽橋頭(秀明)',
          En: 'Wanshou Qiaotou(Xiuming)'
        },
        StopBoarding: 0,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.574153,
          PositionLat: 24.99161,
          GeoHash: 'wsqqnmxde'
        },
        StationID: '2510',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57419',
        StopID: '57419',
        StopName: {
          Zh_tw: '萬興國小',
          En: 'Wanxing Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.576757,
          PositionLat: 24.989679,
          GeoHash: 'wsqqnt1rr'
        },
        StationID: '2519',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE193234',
        StopID: '193234',
        StopName: {
          Zh_tw: '政大一',
          En: 'National Chengchi U. 1'
        },
        StopBoarding: 0,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.576051,
          PositionLat: 24.987811,
          GeoHash: 'wsqqnsbux'
        },
        StationID: '1001409',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16937',
        StopID: '16937',
        StopName: {
          Zh_tw: '新光路口',
          En: 'Xinguang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 12,
        StopPosition: {
          PositionLon: 121.573881732316,
          PositionLat: 24.9880845060964,
          GeoHash: 'wsqqnkzqh'
        },
        StationID: '1000854',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57422',
        StopID: '57422',
        StopName: {
          Zh_tw: '指南路口',
          En: 'Zhinan Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 13,
        StopPosition: {
          PositionLon: 121.570658,
          PositionLat: 24.986197,
          GeoHash: 'wsqqnkt51'
        },
        StationID: '1000544',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16939',
        StopID: '16939',
        StopName: {
          Zh_tw: '木南公園',
          En: 'Munan Park'
        },
        StopBoarding: 0,
        StopSequence: 14,
        StopPosition: {
          PositionLon: 121.57011,
          PositionLat: 24.984828,
          GeoHash: 'wsqqnkkeh'
        },
        StationID: '2521',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16941',
        StopID: '16941',
        StopName: {
          Zh_tw: '景文中學',
          En: 'Jingwen High School'
        },
        StopBoarding: -1,
        StopSequence: 15,
        StopPosition: {
          PositionLon: 121.568940442089,
          PositionLat: 24.9841119210195,
          GeoHash: 'wsqqnk5z1'
        },
        StationID: '1000522',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16943',
        StopID: '16943',
        StopName: {
          Zh_tw: '司法新村',
          En: 'Sifa New Village'
        },
        StopBoarding: 0,
        StopSequence: 16,
        StopPosition: {
          PositionLon: 121.56699,
          PositionLat: 24.98335,
          GeoHash: 'wsqqnk46s'
        },
        StationID: '4029',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16945',
        StopID: '16945',
        StopName: {
          Zh_tw: '忠順廟',
          En: 'Zhongshun Temple'
        },
        StopBoarding: 0,
        StopSequence: 17,
        StopPosition: {
          PositionLon: 121.56452654233,
          PositionLat: 24.982650387537,
          GeoHash: 'wsqqn7bw6'
        },
        StationID: '2411',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57420',
        StopID: '57420',
        StopName: {
          Zh_tw: '國泰新村(木新)',
          En: 'Guotai New Village(Muxin)'
        },
        StopBoarding: 0,
        StopSequence: 18,
        StopPosition: {
          PositionLon: 121.561849824052,
          PositionLat: 24.9820534481377,
          GeoHash: 'wsqqn5yeh'
        },
        StationID: '3994',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16949',
        StopID: '16949',
        StopName: {
          Zh_tw: '力行國小',
          En: 'Lixing Elementary School'
        },
        StopBoarding: 0,
        StopSequence: 19,
        StopPosition: {
          PositionLon: 121.560289058141,
          PositionLat: 24.9816609828931,
          GeoHash: 'wsqqn5v88'
        },
        StationID: '2362',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16951',
        StopID: '16951',
        StopName: {
          Zh_tw: '木新市場',
          En: 'Muxin Market'
        },
        StopBoarding: 0,
        StopSequence: 20,
        StopPosition: {
          PositionLon: 121.558272457788,
          PositionLat: 24.9811534735698,
          GeoHash: 'wsqqn5sjc'
        },
        StationID: '2391',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16953',
        StopID: '16953',
        StopName: {
          Zh_tw: '景美女中',
          En: 'Jingmei Girls High School'
        },
        StopBoarding: 0,
        StopSequence: 21,
        StopPosition: {
          PositionLon: 121.5555005,
          PositionLat: 24.9804367,
          GeoHash: 'wsqqn5d18'
        },
        StationID: '2462',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16955',
        StopID: '16955',
        StopName: {
          Zh_tw: '寶高產業園區(寶中路)',
          En: 'Baogao Science and Intellectual Park(Baozhong Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 22,
        StopPosition: {
          PositionLon: 121.55006,
          PositionLat: 24.97896,
          GeoHash: 'wsqqjgq0c'
        },
        StationID: '20306',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16957',
        StopID: '16957',
        StopName: {
          Zh_tw: '寶中路',
          En: 'Baozhong Rd.'
        },
        StopBoarding: 0,
        StopSequence: 23,
        StopPosition: {
          PositionLon: 121.548333,
          PositionLat: 24.980666,
          GeoHash: 'wsqqjgsfc'
        },
        StationID: '2984',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16959',
        StopID: '16959',
        StopName: {
          Zh_tw: '臺灣銀行',
          En: 'Bank of Taiwan'
        },
        StopBoarding: 0,
        StopSequence: 24,
        StopPosition: {
          PositionLon: 121.54538,
          PositionLat: 24.9794,
          GeoHash: 'wsqqjg6es'
        },
        StationID: '2962',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE57421',
        StopID: '57421',
        StopName: {
          Zh_tw: '寶強路口',
          En: 'BaoQiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 25,
        StopPosition: {
          PositionLon: 121.5435326,
          PositionLat: 24.97919835,
          GeoHash: 'wsqqjg363'
        },
        StationID: '2986',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16963',
        StopID: '16963',
        StopName: {
          Zh_tw: '新店郵局',
          En: 'Xindian Post Office'
        },
        StopBoarding: 0,
        StopSequence: 26,
        StopPosition: {
          PositionLon: 121.542478,
          PositionLat: 24.978011,
          GeoHash: 'wsqqjg0e3'
        },
        StationID: '2947',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16965',
        StopID: '16965',
        StopName: {
          Zh_tw: '捷運七張站',
          En: 'MRT Qizhang Sta.'
        },
        StopBoarding: 0,
        StopSequence: 27,
        StopPosition: {
          PositionLon: 121.54279,
          PositionLat: 24.974123,
          GeoHash: 'wsqqjf2ub'
        },
        StationID: '1165605546',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16967',
        StopID: '16967',
        StopName: {
          Zh_tw: '七張(北新路)',
          En: 'Qizhang(Beixin Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 28,
        StopPosition: {
          PositionLon: 121.5426501,
          PositionLat: 24.97141,
          GeoHash: 'wsqqjcbtj'
        },
        StationID: '2853',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16969',
        StopID: '16969',
        StopName: {
          Zh_tw: '捷運新店區公所站(北新)',
          En: 'MRT Hsintien City Hall Station'
        },
        StopBoarding: -1,
        StopSequence: 29,
        StopPosition: {
          PositionLon: 121.541385,
          PositionLat: 24.967768,
          GeoHash: 'wsqqj9pxz'
        },
        StationID: '2928',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16971',
        StopID: '16971',
        StopName: {
          Zh_tw: '檳榔路',
          En: 'Binlang Rd.'
        },
        StopBoarding: -1,
        StopSequence: 30,
        StopPosition: {
          PositionLon: 121.5404224,
          PositionLat: 24.96516884,
          GeoHash: 'wsqqj8z09'
        },
        StationID: '2982',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16973',
        StopID: '16973',
        StopName: {
          Zh_tw: '碧潭橋頭',
          En: 'Bitan Bridge'
        },
        StopBoarding: 0,
        StopSequence: 31,
        StopPosition: {
          PositionLon: 121.539199,
          PositionLat: 24.962441,
          GeoHash: 'wsqqj8q0u'
        },
        StationID: '2956',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16975',
        StopID: '16975',
        StopName: {
          Zh_tw: '捷運新店站(新店路)',
          En: 'MRT Xindian Sta.(Xindian Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 32,
        StopPosition: {
          PositionLon: 121.53755,
          PositionLat: 24.958392,
          GeoHash: 'wsqmvxscn'
        },
        StationID: '72044',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16977',
        StopID: '16977',
        StopName: {
          Zh_tw: '溪頭',
          En: 'Xitou'
        },
        StopBoarding: 0,
        StopSequence: 33,
        StopPosition: {
          PositionLon: 121.5319036,
          PositionLat: 24.96083175,
          GeoHash: 'wsqmvxbz6'
        },
        StationID: '2950',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16979',
        StopID: '16979',
        StopName: {
          Zh_tw: '大坪頂',
          En: 'Dapingding'
        },
        StopBoarding: 0,
        StopSequence: 34,
        StopPosition: {
          PositionLon: 121.5298939,
          PositionLat: 24.96132951,
          GeoHash: 'wsqqj2p67'
        },
        StationID: '1001047',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16981',
        StopID: '16981',
        StopName: {
          Zh_tw: '頂城',
          En: 'Dingcheng'
        },
        StopBoarding: 0,
        StopSequence: 35,
        StopPosition: {
          PositionLon: 121.528356,
          PositionLat: 24.961886,
          GeoHash: 'wsqqj2njx'
        },
        StationID: '1001048',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16983',
        StopID: '16983',
        StopName: {
          Zh_tw: '胡璉故居紀念館',
          En: 'The HU-LIAN House Memorial Hall'
        },
        StopBoarding: 0,
        StopSequence: 36,
        StopPosition: {
          PositionLon: 121.526281,
          PositionLat: 24.963037,
          GeoHash: 'wsqqj2ksp'
        },
        StationID: '1001049',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16985',
        StopID: '16985',
        StopName: {
          Zh_tw: '下城社區',
          En: 'Xiacheng Community'
        },
        StopBoarding: 0,
        StopSequence: 37,
        StopPosition: {
          PositionLon: 121.5239545,
          PositionLat: 24.96359615,
          GeoHash: 'wsqqj27p3'
        },
        StationID: '1001050',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE156419',
        StopID: '156419',
        StopName: {
          Zh_tw: '安華路口',
          En: 'Anwar Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 38,
        StopPosition: {
          PositionLon: 121.52120824524,
          PositionLat: 24.9639074679223,
          GeoHash: 'wsqqj2913'
        },
        StationID: '20309',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16987',
        StopID: '16987',
        StopName: {
          Zh_tw: '光華新村(安康路)',
          En: 'Guanghua New Village(Ankang Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 39,
        StopPosition: {
          PositionLon: 121.5182441,
          PositionLat: 24.96414395,
          GeoHash: 'wsqqj0wfs'
        },
        StationID: '1000706',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16989',
        StopID: '16989',
        StopName: {
          Zh_tw: '安康派出所',
          En: 'Ankang Police Substation'
        },
        StopBoarding: 0,
        StopSequence: 40,
        StopPosition: {
          PositionLon: 121.514015,
          PositionLat: 24.963346,
          GeoHash: 'wsqqj07y1'
        },
        StationID: '2900',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16991',
        StopID: '16991',
        StopName: {
          Zh_tw: '公崙新村(豐榮醫院)',
          En: 'Gonglun New Village(Feng Rong Hospital)'
        },
        StopBoarding: 0,
        StopSequence: 41,
        StopPosition: {
          PositionLon: 121.512518,
          PositionLat: 24.961978,
          GeoHash: 'wsqqj04wn'
        },
        StationID: '2876',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16993',
        StopID: '16993',
        StopName: {
          Zh_tw: '浪漫貴族',
          En: 'Langmanguizu'
        },
        StopBoarding: 0,
        StopSequence: 42,
        StopPosition: {
          PositionLon: 121.51084,
          PositionLat: 24.95991,
          GeoHash: 'wsqmvpc6p'
        },
        StationID: '2917',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16995',
        StopID: '16995',
        StopName: {
          Zh_tw: '台北菸廠',
          En: 'Taipei Tobacco Factory'
        },
        StopBoarding: 0,
        StopSequence: 43,
        StopPosition: {
          PositionLon: 121.5084746,
          PositionLat: 24.95887022,
          GeoHash: 'wsqmuzxgb'
        },
        StationID: '2886',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16997',
        StopID: '16997',
        StopName: {
          Zh_tw: '安康車子路口',
          En: 'Ankang Chezi Rd. Intersection'
        },
        StopBoarding: 0,
        StopSequence: 44,
        StopPosition: {
          PositionLon: 121.5048646,
          PositionLat: 24.95808137,
          GeoHash: 'wsqmuzmpk'
        },
        StationID: '2905',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16999',
        StopID: '16999',
        StopName: {
          Zh_tw: '薏仁坑',
          En: 'Yirenkeng'
        },
        StopBoarding: 0,
        StopSequence: 45,
        StopPosition: {
          PositionLon: 121.5014748,
          PositionLat: 24.95728682,
          GeoHash: 'wsqmuz6dt'
        },
        StationID: '2979',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE17001',
        StopID: '17001',
        StopName: {
          Zh_tw: '仁康醫院',
          En: 'Jen-Kang Hospital'
        },
        StopBoarding: 0,
        StopSequence: 46,
        StopPosition: {
          PositionLon: 121.499692,
          PositionLat: 24.956813,
          GeoHash: 'wsqmuz1ru'
        },
        StationID: '2901',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE17003',
        StopID: '17003',
        StopName: {
          Zh_tw: '康樂新村',
          En: 'Kangle New Village'
        },
        StopBoarding: 0,
        StopSequence: 47,
        StopPosition: {
          PositionLon: 121.4972383,
          PositionLat: 24.95549,
          GeoHash: 'wsqmuxp86'
        },
        StationID: '2922',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE17005',
        StopID: '17005',
        StopName: {
          Zh_tw: '大茅埔',
          En: 'Damaopu'
        },
        StopBoarding: 0,
        StopSequence: 48,
        StopPosition: {
          PositionLon: 121.494847,
          PositionLat: 24.954594,
          GeoHash: 'wsqmuwvg5'
        },
        StationID: '2859',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE17007',
        StopID: '17007',
        StopName: {
          Zh_tw: '安祥路口',
          En: 'Anxiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 49,
        StopPosition: {
          PositionLon: 121.491647,
          PositionLat: 24.955756,
          GeoHash: 'wsqmux59b'
        },
        StationID: '1001414',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE191082',
        StopID: '191082',
        StopName: {
          Zh_tw: '新店站',
          En: 'Xindian Station'
        },
        StopBoarding: 0,
        StopSequence: 50,
        StopPosition: {
          PositionLon: 121.483357,
          PositionLat: 24.960538,
          GeoHash: 'wsqmurvmx'
        },
        StationID: '72232',
        LocationCityCode: 'NWT'
      }
    ],
    UpdateTime: '2023-01-22T05:00:43+08:00',
    VersionID: 2205
  },
  {
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Operators: [
      {
        OperatorID: '100',
        OperatorName: {
          Zh_tw: '臺北客運',
          En: 'Taipei Bus Co., Ltd.'
        },
        OperatorCode: 'TaipeiBus',
        OperatorNo: '1407'
      }
    ],
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 0,
    City: 'Taipei',
    CityCode: 'TPE',
    Stops: [
      {
        StopUID: 'TPE16853',
        StopID: '16853',
        StopName: {
          Zh_tw: '捷運新店站(新店路)',
          En: 'MRT Xindian Sta.(Xindian Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.53755,
          PositionLat: 24.958392,
          GeoHash: 'wsqmvxscn'
        },
        StationID: '72044',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16855',
        StopID: '16855',
        StopName: {
          Zh_tw: '碧潭橋頭',
          En: 'Bitan Bridge'
        },
        StopBoarding: 0,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.53982,
          PositionLat: 24.963158,
          GeoHash: 'wsqqj8qsg'
        },
        StationID: '60071',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16857',
        StopID: '16857',
        StopName: {
          Zh_tw: '檳榔路',
          En: 'Binlang Rd.'
        },
        StopBoarding: -1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.5405875,
          PositionLat: 24.96500149,
          GeoHash: 'wsqqj8xps'
        },
        StationID: '2981',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16859',
        StopID: '16859',
        StopName: {
          Zh_tw: '捷運新店區公所站(北新)',
          En: 'MRT Xindian City Hall Sta.(Beixin)'
        },
        StopBoarding: -1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.54161613426882,
          PositionLat: 24.96763873691205,
          GeoHash: 'wsqqj9pzh'
        },
        StationID: '30100',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16861',
        StopID: '16861',
        StopName: {
          Zh_tw: '七張(北新路)',
          En: 'Qizhang(Beixin Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.542921,
          PositionLat: 24.971513,
          GeoHash: 'wsqqjcbve'
        },
        StationID: '30101',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16863',
        StopID: '16863',
        StopName: {
          Zh_tw: '捷運七張站',
          En: 'MRT Qizhang Sta.'
        },
        StopBoarding: 0,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.5430453,
          PositionLat: 24.9753,
          GeoHash: 'wsqqjf8gw'
        },
        StationID: '30102',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16865',
        StopID: '16865',
        StopName: {
          Zh_tw: '新店郵局',
          En: 'Xindian Post Office'
        },
        StopBoarding: 0,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.542795,
          PositionLat: 24.978161,
          GeoHash: 'wsqqjg0u2'
        },
        StationID: '30103',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE56984',
        StopID: '56984',
        StopName: {
          Zh_tw: '寶強路口',
          En: 'BaoQiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.54378,
          PositionLat: 24.97916,
          GeoHash: 'wsqqjg36p'
        },
        StationID: '60063',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE57410',
        StopID: '57410',
        StopName: {
          Zh_tw: '寶橋路口',
          En: 'Baoqiao Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.546288,
          PositionLat: 24.976868,
          GeoHash: 'wsqqjfgkc'
        },
        StationID: '2987',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE56985',
        StopID: '56985',
        StopName: {
          Zh_tw: '寶橋中興路口一',
          En: 'Baoqiao and Zhongxing Intersection 1'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.547757,
          PositionLat: 24.97650499,
          GeoHash: 'wsqqjfu6s'
        },
        StationID: '4160',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16871',
        StopID: '16871',
        StopName: {
          Zh_tw: '加油站',
          En: 'Gas Sta.'
        },
        StopBoarding: 0,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.548731,
          PositionLat: 24.977046,
          GeoHash: 'wsqqjfvjf'
        },
        StationID: '1000551',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16873',
        StopID: '16873',
        StopName: {
          Zh_tw: '寶高產業園區',
          En: 'Baogao Science and Intellectual Park'
        },
        StopBoarding: 0,
        StopSequence: 12,
        StopPosition: {
          PositionLon: 121.551231544066,
          PositionLat: 24.9786235157248,
          GeoHash: 'wsqqjgnzh'
        },
        StationID: '1000552',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16875',
        StopID: '16875',
        StopName: {
          Zh_tw: '景美女中',
          En: 'Jingmei Girls High School'
        },
        StopBoarding: 0,
        StopSequence: 13,
        StopPosition: {
          PositionLon: 121.55568,
          PositionLat: 24.980335,
          GeoHash: 'wsqqn5d0u'
        },
        StationID: '2461',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16877',
        StopID: '16877',
        StopName: {
          Zh_tw: '木新市場',
          En: 'Muxin Market'
        },
        StopBoarding: 0,
        StopSequence: 14,
        StopPosition: {
          PositionLon: 121.5583622,
          PositionLat: 24.98100977,
          GeoHash: 'wsqqn5shg'
        },
        StationID: '1000553',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16879',
        StopID: '16879',
        StopName: {
          Zh_tw: '力行國小',
          En: 'Lixing Elementary School'
        },
        StopBoarding: 0,
        StopSequence: 15,
        StopPosition: {
          PositionLon: 121.559783932422,
          PositionLat: 24.9813802657801,
          GeoHash: 'wsqqn5tph'
        },
        StationID: '1000554',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16883',
        StopID: '16883',
        StopName: {
          Zh_tw: '國泰新村(木新)',
          En: 'GuoTai New Village(Muxin)'
        },
        StopBoarding: 0,
        StopSequence: 16,
        StopPosition: {
          PositionLon: 121.561802,
          PositionLat: 24.981856,
          GeoHash: 'wsqqn5y9g'
        },
        StationID: '3993',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57411',
        StopID: '57411',
        StopName: {
          Zh_tw: '忠順廟',
          En: 'Zhongshun Temple'
        },
        StopBoarding: 0,
        StopSequence: 17,
        StopPosition: {
          PositionLon: 121.56469,
          PositionLat: 24.982483,
          GeoHash: 'wsqqn7btw'
        },
        StationID: '1000453',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16885',
        StopID: '16885',
        StopName: {
          Zh_tw: '司法新村',
          En: 'Sifa New Village'
        },
        StopBoarding: 0,
        StopSequence: 18,
        StopPosition: {
          PositionLon: 121.56636,
          PositionLat: 24.98305,
          GeoHash: 'wsqqnk1bv'
        },
        StationID: '4028',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16887',
        StopID: '16887',
        StopName: {
          Zh_tw: '景文中學',
          En: 'Jingwen High School'
        },
        StopBoarding: -1,
        StopSequence: 19,
        StopPosition: {
          PositionLon: 121.568528509552,
          PositionLat: 24.9837877068618,
          GeoHash: 'wsqqnk5t0'
        },
        StationID: '1000540',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16889',
        StopID: '16889',
        StopName: {
          Zh_tw: '木南公園',
          En: 'Munan Park'
        },
        StopBoarding: 0,
        StopSequence: 20,
        StopPosition: {
          PositionLon: 121.570615,
          PositionLat: 24.985348,
          GeoHash: 'wsqqnkmn0'
        },
        StationID: '50681',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57412',
        StopID: '57412',
        StopName: {
          Zh_tw: '指南路口',
          En: 'Zhinan Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 21,
        StopPosition: {
          PositionLon: 121.570722800802,
          PositionLat: 24.9871941238226,
          GeoHash: 'wsqqnkv0g'
        },
        StationID: '2426',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16891',
        StopID: '16891',
        StopName: {
          Zh_tw: '政大',
          En: 'National Chengchi U.'
        },
        StopBoarding: 0,
        StopSequence: 22,
        StopPosition: {
          PositionLon: 121.574633255625,
          PositionLat: 24.9878362086283,
          GeoHash: 'wsqqnkzuw'
        },
        StationID: '2415',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE124233',
        StopID: '124233',
        StopName: {
          Zh_tw: '政大一',
          En: 'National Chengchi U. 1'
        },
        StopBoarding: 0,
        StopSequence: 23,
        StopPosition: {
          PositionLon: 121.576427,
          PositionLat: 24.988319,
          GeoHash: 'wsqqnscr8'
        },
        StationID: '1001400',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE56983',
        StopID: '56983',
        StopName: {
          Zh_tw: '萬興圖書館',
          En: 'Wanxing Library'
        },
        StopBoarding: -1,
        StopSequence: 24,
        StopPosition: {
          PositionLon: 121.57697,
          PositionLat: 24.98897,
          GeoHash: 'wsqqnt1ek'
        },
        StationID: '2520',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16895',
        StopID: '16895',
        StopName: {
          Zh_tw: '大誠高中',
          En: 'Tacheng High School'
        },
        StopBoarding: 0,
        StopSequence: 25,
        StopPosition: {
          PositionLon: 121.576905,
          PositionLat: 24.990413,
          GeoHash: 'wsqqnt3ee'
        },
        StationID: '2368',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16897',
        StopID: '16897',
        StopName: {
          Zh_tw: '萬壽橋頭(秀明)',
          En: 'Wanshou Qiaotou(Xiuming)'
        },
        StopBoarding: -1,
        StopSequence: 26,
        StopPosition: {
          PositionLon: 121.574627,
          PositionLat: 24.991863,
          GeoHash: 'wsqqnmxun'
        },
        StationID: '50671',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE148692',
        StopID: '148692',
        StopName: {
          Zh_tw: '萬壽橋頭(新光)',
          En: 'Wanshou Qiaotou(Xinguang)'
        },
        StopBoarding: 0,
        StopSequence: 27,
        StopPosition: {
          PositionLon: 121.573803212774,
          PositionLat: 24.9928588203687,
          GeoHash: 'wsqqnmz3f'
        },
        StationID: '50669',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16901',
        StopID: '16901',
        StopName: {
          Zh_tw: '貓纜動物園站',
          En: 'Maokong Gondola Taipei Zoo Station'
        },
        StopBoarding: 0,
        StopSequence: 28,
        StopPosition: {
          PositionLon: 121.576314002724,
          PositionLat: 24.9963006246947,
          GeoHash: 'wsqqnw3nj'
        },
        StationID: '2443',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE56988',
        StopID: '56988',
        StopName: {
          Zh_tw: '捷運動物園站',
          En: 'MRT Taipei Zoo Sta.'
        },
        StopBoarding: 0,
        StopSequence: 29,
        StopPosition: {
          PositionLon: 121.579926,
          PositionLat: 24.998553,
          GeoHash: 'wsqqnwgg1'
        },
        StationID: '50672',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16905',
        StopID: '16905',
        StopName: {
          Zh_tw: '石壁坑',
          En: 'Shibikeng'
        },
        StopBoarding: 0,
        StopSequence: 30,
        StopPosition: {
          PositionLon: 121.583287778248,
          PositionLat: 25.0028393386766,
          GeoHash: 'wsqqnxwhp'
        },
        StationID: '56111',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57416',
        StopID: '57416',
        StopName: {
          Zh_tw: '風動石',
          En: 'Fengdongshi'
        },
        StopBoarding: 0,
        StopSequence: 31,
        StopPosition: {
          PositionLon: 121.579255519338,
          PositionLat: 25.0011783104188,
          GeoHash: 'wsqqnx763'
        },
        StationID: '2429',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16907',
        StopID: '16907',
        StopName: {
          Zh_tw: '信義松仁路口(信義)',
          En: 'Xinyi and Songren Rd. Entrance(Xinyi)'
        },
        StopBoarding: 0,
        StopSequence: 32,
        StopPosition: {
          PositionLon: 121.566687674056,
          PositionLat: 25.0329497897498,
          GeoHash: 'wsqqqm45t'
        },
        StationID: '6929',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16909',
        StopID: '16909',
        StopName: {
          Zh_tw: '捷運台北101/世貿站(市府)',
          En: 'MRT Taipei 101/World Trade Center Sta.(City Hall Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 33,
        StopPosition: {
          PositionLon: 121.56364,
          PositionLat: 25.03376,
          GeoHash: 'wsqqqjrbn'
        },
        StationID: '2029',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16911',
        StopID: '16911',
        StopName: {
          Zh_tw: '市政府(市府)',
          En: 'Taipei City Hall(City Hall Rd.)'
        },
        StopBoarding: 0,
        StopSequence: 34,
        StopPosition: {
          PositionLon: 121.563625169371,
          PositionLat: 25.0383666649821,
          GeoHash: 'wsqqqnpgj'
        },
        StationID: '2063',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16913',
        StopID: '16913',
        StopName: {
          Zh_tw: '捷運市政府站',
          En: 'MRT Taipei City Hall Sta.'
        },
        StopBoarding: 0,
        StopSequence: 35,
        StopPosition: {
          PositionLon: 121.5668354,
          PositionLat: 25.04100991,
          GeoHash: 'wsqqqqd62'
        },
        StationID: '3916',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-22T05:00:43+08:00',
    VersionID: 2205
  },
  {
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    Operators: [
      {
        OperatorID: '100',
        OperatorName: {
          Zh_tw: '臺北客運',
          En: 'Taipei Bus Co., Ltd.'
        },
        OperatorCode: 'TaipeiBus',
        OperatorNo: '1407'
      }
    ],
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 1,
    City: 'Taipei',
    CityCode: 'TPE',
    Stops: [
      {
        StopUID: 'TPE16915',
        StopID: '16915',
        StopName: {
          Zh_tw: '消防局(松仁)',
          En: 'City Fire Department(Songren)'
        },
        StopBoarding: 0,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.568284,
          PositionLat: 25.038604,
          GeoHash: 'wsqqqq5k6'
        },
        StationID: '1165604593',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16917',
        StopID: '16917',
        StopName: {
          Zh_tw: '興雅國中',
          En: 'Xingya Junior High School'
        },
        StopBoarding: 0,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.568268559011,
          PositionLat: 25.0372323905063,
          GeoHash: 'wsqqqmgk3'
        },
        StationID: '2179',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16919',
        StopID: '16919',
        StopName: {
          Zh_tw: '信義松仁路口(松仁)',
          En: 'Xinyi and Songren Rd. Entrance(Songren)'
        },
        StopBoarding: 0,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.568236043782,
          PositionLat: 25.0345352489599,
          GeoHash: 'wsqqqm7k9'
        },
        StationID: '2121',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57417',
        StopID: '57417',
        StopName: {
          Zh_tw: '風動石',
          En: 'Fengdongshi'
        },
        StopBoarding: 0,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.579341481903,
          PositionLat: 25.0010545644892,
          GeoHash: 'wsqqnx73e'
        },
        StationID: '309',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16921',
        StopID: '16921',
        StopName: {
          Zh_tw: '石壁坑',
          En: 'Shibikeng'
        },
        StopBoarding: 0,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.58301,
          PositionLat: 25.00261,
          GeoHash: 'wsqqnxw4c'
        },
        StationID: '2400',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16923',
        StopID: '16923',
        StopName: {
          Zh_tw: '捷運動物園站',
          En: 'MRT Taipei Zoo Sta.'
        },
        StopBoarding: 0,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.580221,
          PositionLat: 24.99882,
          GeoHash: 'wsqqnwuh8'
        },
        StationID: '2442',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE58029',
        StopID: '58029',
        StopName: {
          Zh_tw: '貓纜動物園站',
          En: 'Maokong Gondola Taipei Zoo Station'
        },
        StopBoarding: 0,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.576778,
          PositionLat: 24.9968,
          GeoHash: 'wsqqnw98b'
        },
        StationID: '1000436',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16929',
        StopID: '16929',
        StopName: {
          Zh_tw: '萬壽橋頭(新光)',
          En: 'Wanshou Qiaotou(Xinguang)'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.573725603131,
          PositionLat: 24.9935042275141,
          GeoHash: 'wsqqnmzm9'
        },
        StationID: '2512',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE148693',
        StopID: '148693',
        StopName: {
          Zh_tw: '萬壽橋頭(秀明)',
          En: 'Wanshou Qiaotou(Xiuming)'
        },
        StopBoarding: 0,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.574153,
          PositionLat: 24.99161,
          GeoHash: 'wsqqnmxde'
        },
        StationID: '2510',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57419',
        StopID: '57419',
        StopName: {
          Zh_tw: '萬興國小',
          En: 'Wanxing Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.576757,
          PositionLat: 24.989679,
          GeoHash: 'wsqqnt1rr'
        },
        StationID: '2519',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE193234',
        StopID: '193234',
        StopName: {
          Zh_tw: '政大一',
          En: 'National Chengchi U. 1'
        },
        StopBoarding: 0,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.576051,
          PositionLat: 24.987811,
          GeoHash: 'wsqqnsbux'
        },
        StationID: '1001409',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16937',
        StopID: '16937',
        StopName: {
          Zh_tw: '新光路口',
          En: 'Xinguang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 12,
        StopPosition: {
          PositionLon: 121.573881732316,
          PositionLat: 24.9880845060964,
          GeoHash: 'wsqqnkzqh'
        },
        StationID: '1000854',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57422',
        StopID: '57422',
        StopName: {
          Zh_tw: '指南路口',
          En: 'Zhinan Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 13,
        StopPosition: {
          PositionLon: 121.570658,
          PositionLat: 24.986197,
          GeoHash: 'wsqqnkt51'
        },
        StationID: '1000544',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16939',
        StopID: '16939',
        StopName: {
          Zh_tw: '木南公園',
          En: 'Munan Park'
        },
        StopBoarding: 0,
        StopSequence: 14,
        StopPosition: {
          PositionLon: 121.57011,
          PositionLat: 24.984828,
          GeoHash: 'wsqqnkkeh'
        },
        StationID: '2521',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16941',
        StopID: '16941',
        StopName: {
          Zh_tw: '景文中學',
          En: 'Jingwen High School'
        },
        StopBoarding: -1,
        StopSequence: 15,
        StopPosition: {
          PositionLon: 121.568940442089,
          PositionLat: 24.9841119210195,
          GeoHash: 'wsqqnk5z1'
        },
        StationID: '1000522',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16943',
        StopID: '16943',
        StopName: {
          Zh_tw: '司法新村',
          En: 'Sifa New Village'
        },
        StopBoarding: 0,
        StopSequence: 16,
        StopPosition: {
          PositionLon: 121.56699,
          PositionLat: 24.98335,
          GeoHash: 'wsqqnk46s'
        },
        StationID: '4029',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16945',
        StopID: '16945',
        StopName: {
          Zh_tw: '忠順廟',
          En: 'Zhongshun Temple'
        },
        StopBoarding: 0,
        StopSequence: 17,
        StopPosition: {
          PositionLon: 121.56452654233,
          PositionLat: 24.982650387537,
          GeoHash: 'wsqqn7bw6'
        },
        StationID: '2411',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE57420',
        StopID: '57420',
        StopName: {
          Zh_tw: '國泰新村(木新)',
          En: 'Guotai New Village(Muxin)'
        },
        StopBoarding: 0,
        StopSequence: 18,
        StopPosition: {
          PositionLon: 121.561849824052,
          PositionLat: 24.9820534481377,
          GeoHash: 'wsqqn5yeh'
        },
        StationID: '3994',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16949',
        StopID: '16949',
        StopName: {
          Zh_tw: '力行國小',
          En: 'Lixing Elementary School'
        },
        StopBoarding: 0,
        StopSequence: 19,
        StopPosition: {
          PositionLon: 121.560289058141,
          PositionLat: 24.9816609828931,
          GeoHash: 'wsqqn5v88'
        },
        StationID: '2362',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16951',
        StopID: '16951',
        StopName: {
          Zh_tw: '木新市場',
          En: 'Muxin Market'
        },
        StopBoarding: 0,
        StopSequence: 20,
        StopPosition: {
          PositionLon: 121.558272457788,
          PositionLat: 24.9811534735698,
          GeoHash: 'wsqqn5sjc'
        },
        StationID: '2391',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16953',
        StopID: '16953',
        StopName: {
          Zh_tw: '景美女中',
          En: 'Jingmei Girls High School'
        },
        StopBoarding: 0,
        StopSequence: 21,
        StopPosition: {
          PositionLon: 121.5555005,
          PositionLat: 24.9804367,
          GeoHash: 'wsqqn5d18'
        },
        StationID: '2462',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'TPE16955',
        StopID: '16955',
        StopName: {
          Zh_tw: '寶高產業園區(寶中路)',
          En: 'Baogao Science and Intellectual Park(Baozhong Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 22,
        StopPosition: {
          PositionLon: 121.55006,
          PositionLat: 24.97896,
          GeoHash: 'wsqqjgq0c'
        },
        StationID: '20306',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16957',
        StopID: '16957',
        StopName: {
          Zh_tw: '寶中路',
          En: 'Baozhong Rd.'
        },
        StopBoarding: 0,
        StopSequence: 23,
        StopPosition: {
          PositionLon: 121.548333,
          PositionLat: 24.980666,
          GeoHash: 'wsqqjgsfc'
        },
        StationID: '2984',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16959',
        StopID: '16959',
        StopName: {
          Zh_tw: '臺灣銀行',
          En: 'Bank of Taiwan'
        },
        StopBoarding: 0,
        StopSequence: 24,
        StopPosition: {
          PositionLon: 121.54538,
          PositionLat: 24.9794,
          GeoHash: 'wsqqjg6es'
        },
        StationID: '2962',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE57421',
        StopID: '57421',
        StopName: {
          Zh_tw: '寶強路口',
          En: 'BaoQiang Rd. Entrance'
        },
        StopBoarding: 0,
        StopSequence: 25,
        StopPosition: {
          PositionLon: 121.5435326,
          PositionLat: 24.97919835,
          GeoHash: 'wsqqjg363'
        },
        StationID: '2986',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16963',
        StopID: '16963',
        StopName: {
          Zh_tw: '新店郵局',
          En: 'Xindian Post Office'
        },
        StopBoarding: 0,
        StopSequence: 26,
        StopPosition: {
          PositionLon: 121.542478,
          PositionLat: 24.978011,
          GeoHash: 'wsqqjg0e3'
        },
        StationID: '2947',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16965',
        StopID: '16965',
        StopName: {
          Zh_tw: '捷運七張站',
          En: 'MRT Qizhang Sta.'
        },
        StopBoarding: 0,
        StopSequence: 27,
        StopPosition: {
          PositionLon: 121.54279,
          PositionLat: 24.974123,
          GeoHash: 'wsqqjf2ub'
        },
        StationID: '1165605546',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16967',
        StopID: '16967',
        StopName: {
          Zh_tw: '七張(北新路)',
          En: 'Qizhang(Beixin Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 28,
        StopPosition: {
          PositionLon: 121.5426501,
          PositionLat: 24.97141,
          GeoHash: 'wsqqjcbtj'
        },
        StationID: '2853',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16969',
        StopID: '16969',
        StopName: {
          Zh_tw: '捷運新店區公所站(北新)',
          En: 'MRT Hsintien City Hall Station'
        },
        StopBoarding: -1,
        StopSequence: 29,
        StopPosition: {
          PositionLon: 121.541385,
          PositionLat: 24.967768,
          GeoHash: 'wsqqj9pxz'
        },
        StationID: '2928',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16971',
        StopID: '16971',
        StopName: {
          Zh_tw: '檳榔路',
          En: 'Binlang Rd.'
        },
        StopBoarding: -1,
        StopSequence: 30,
        StopPosition: {
          PositionLon: 121.5404224,
          PositionLat: 24.96516884,
          GeoHash: 'wsqqj8z09'
        },
        StationID: '2982',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16973',
        StopID: '16973',
        StopName: {
          Zh_tw: '碧潭橋頭',
          En: 'Bitan Bridge'
        },
        StopBoarding: 0,
        StopSequence: 31,
        StopPosition: {
          PositionLon: 121.539199,
          PositionLat: 24.962441,
          GeoHash: 'wsqqj8q0u'
        },
        StationID: '2956',
        LocationCityCode: 'NWT'
      },
      {
        StopUID: 'TPE16975',
        StopID: '16975',
        StopName: {
          Zh_tw: '捷運新店站(新店路)',
          En: 'MRT Xindian Sta.(Xindian Rd.)'
        },
        StopBoarding: -1,
        StopSequence: 32,
        StopPosition: {
          PositionLon: 121.53755,
          PositionLat: 24.958392,
          GeoHash: 'wsqmvxscn'
        },
        StationID: '72044',
        LocationCityCode: 'NWT'
      }
    ],
    UpdateTime: '2023-01-22T05:00:43+08:00',
    VersionID: 2205
  }
]

export const mockG1NearStops = [
  {
    PlateNumb: '225-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 0,
    StopUID: 'TPE16891',
    StopID: '16891',
    StopName: {
      Zh_tw: '政大',
      En: 'National Chengchi U.'
    },
    StopSequence: 22,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 1,
    GPSTime: '2023-01-26T18:45:25+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '228-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 0,
    StopUID: 'TPE16873',
    StopID: '16873',
    StopName: {
      Zh_tw: '寶高產業園區',
      En: 'Baogao Science and Intellectual Park'
    },
    StopSequence: 30,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 1,
    GPSTime: '2023-01-26T18:46:07+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '229-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 1,
    StopUID: 'TPE16917',
    StopID: '16917',
    StopName: {
      Zh_tw: '興雅國中',
      En: 'Xingya Junior High School'
    },
    StopSequence: 2,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-26T18:46:15+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '293-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 1,
    StopUID: 'TPE16987',
    StopID: '16987',
    StopName: {
      Zh_tw: '光華新村(安康路)',
      En: 'Guanghua New Village(Ankang Rd.)'
    },
    StopSequence: 39,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 1,
    GPSTime: '2023-01-26T18:46:20+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '295-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 1,
    StopUID: 'TPE16951',
    StopID: '16951',
    StopName: {
      Zh_tw: '木新市場',
      En: 'Muxin Market'
    },
    StopSequence: 20,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 1,
    GPSTime: '2023-01-26T18:46:15+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '296-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 0,
    StopUID: 'TPE16857',
    StopID: '16857',
    StopName: {
      Zh_tw: '檳榔路',
      En: 'Binlang Rd.'
    },
    StopSequence: 3,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-26T18:46:18+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '298-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE10142',
    SubRouteID: '10142',
    SubRouteName: {
      Zh_tw: '綠1調度站發車',
      En: 'G1'
    },
    Direction: 0,
    StopUID: 'TPE57416',
    StopID: '57416',
    StopName: {
      Zh_tw: '風動石',
      En: 'Fengdongshi'
    },
    StopSequence: 49,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-26T18:40:33+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '475-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 1,
    StopUID: 'TPE16939',
    StopID: '16939',
    StopName: {
      Zh_tw: '木南公園',
      En: 'Munan Park'
    },
    StopSequence: 14,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-26T18:46:28+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  },
  {
    PlateNumb: '476-FZ',
    OperatorID: '100',
    RouteUID: 'TPE10142',
    RouteID: '10142',
    RouteName: {
      Zh_tw: '綠1',
      En: 'G1'
    },
    SubRouteUID: 'TPE157758',
    SubRouteID: '157758',
    SubRouteName: {
      Zh_tw: '綠1捷運新店站發車',
      En: 'G1'
    },
    Direction: 1,
    StopUID: 'TPE16969',
    StopID: '16969',
    StopName: {
      Zh_tw: '捷運新店區公所站(北新)',
      En: 'MRT Hsintien City Hall Station'
    },
    StopSequence: 29,
    DutyStatus: 1,
    BusStatus: 0,
    A2EventType: 1,
    GPSTime: '2023-01-26T18:46:01+08:00',
    SrcUpdateTime: '2023-01-26T18:46:30+08:00',
    UpdateTime: '2023-01-26T18:46:35+08:00'
  }
]

export const mock0968StopsOfRoute = [
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '35',
        OperatorName: {
          Zh_tw: '葛瑪蘭客運',
          En: 'Kamalan Bus Co., Ltd.'
        },
        OperatorCode: 'KamalanBus',
        OperatorNo: '1308'
      }
    ],
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    Stops: [
      {
        StopUID: 'THB300177',
        StopID: '300177',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.261064,
          PositionLat: 25.018736,
          GeoHash: 'wsqnr6e8e'
        },
        StationID: '136293',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300181',
        StopID: '300181',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.265196,
          PositionLat: 25.020322,
          GeoHash: 'wsqnr6y9g'
        },
        StationID: '136297',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300183',
        StopID: '300183',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: 1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.2631,
          PositionLat: 25.02158,
          GeoHash: 'wsqnr7j17'
        },
        StationID: '136299',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300186',
        StopID: '300186',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: 1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.25934,
          PositionLat: 25.02413,
          GeoHash: 'wsqnr7d25'
        },
        StationID: '136301',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300188',
        StopID: '300188',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: 1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.270736,
          PositionLat: 25.031488,
          GeoHash: 'wsqnrsfdu'
        },
        StationID: '136303',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300190',
        StopID: '300190',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.279911,
          PositionLat: 25.036606,
          GeoHash: 'wsqnrvc2f'
        },
        StationID: '136305',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300192',
        StopID: '300192',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: 1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.287433,
          PositionLat: 25.042302,
          GeoHash: 'wsqnryycf'
        },
        StationID: '136307',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300194',
        StopID: '300194',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: 1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.29021,
          PositionLat: 25.04142,
          GeoHash: 'wsqq2n8uf'
        },
        StationID: '136309',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300196',
        StopID: '300196',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: 1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.294189,
          PositionLat: 25.043506,
          GeoHash: 'wsqq2p58z'
        },
        StationID: '136311',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '16',
        OperatorName: {
          Zh_tw: '亞通客運',
          En: 'Yatung Bus Co., Ltd.'
        },
        OperatorCode: 'YatungBus',
        OperatorNo: '0702'
      }
    ],
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    Stops: [
      {
        StopUID: 'THB300177',
        StopID: '300177',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.261064,
          PositionLat: 25.018736,
          GeoHash: 'wsqnr6e8e'
        },
        StationID: '136293',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300181',
        StopID: '300181',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.265196,
          PositionLat: 25.020322,
          GeoHash: 'wsqnr6y9g'
        },
        StationID: '136297',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300183',
        StopID: '300183',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: 1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.2631,
          PositionLat: 25.02158,
          GeoHash: 'wsqnr7j17'
        },
        StationID: '136299',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300186',
        StopID: '300186',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: 1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.25934,
          PositionLat: 25.02413,
          GeoHash: 'wsqnr7d25'
        },
        StationID: '136301',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300188',
        StopID: '300188',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: 1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.270736,
          PositionLat: 25.031488,
          GeoHash: 'wsqnrsfdu'
        },
        StationID: '136303',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300190',
        StopID: '300190',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.279911,
          PositionLat: 25.036606,
          GeoHash: 'wsqnrvc2f'
        },
        StationID: '136305',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300192',
        StopID: '300192',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: 1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.287433,
          PositionLat: 25.042302,
          GeoHash: 'wsqnryycf'
        },
        StationID: '136307',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300194',
        StopID: '300194',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: 1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.29021,
          PositionLat: 25.04142,
          GeoHash: 'wsqq2n8uf'
        },
        StationID: '136309',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300196',
        StopID: '300196',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: 1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.294189,
          PositionLat: 25.043506,
          GeoHash: 'wsqq2p58z'
        },
        StationID: '136311',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '35',
        OperatorName: {
          Zh_tw: '葛瑪蘭客運',
          En: 'Kamalan Bus Co., Ltd.'
        },
        OperatorCode: 'KamalanBus',
        OperatorNo: '1308'
      }
    ],
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    Stops: [
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'THB300197',
        StopID: '300197',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: -1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.295231,
          PositionLat: 25.042126,
          GeoHash: 'wsqq2nu2z'
        },
        StationID: '136312',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300195',
        StopID: '300195',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.290189,
          PositionLat: 25.041469,
          GeoHash: 'wsqq2n8v4'
        },
        StationID: '136310',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300193',
        StopID: '300193',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: -1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.287471,
          PositionLat: 25.042365,
          GeoHash: 'wsqnryyf6'
        },
        StationID: '136308',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300191',
        StopID: '300191',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.27988,
          PositionLat: 25.03683,
          GeoHash: 'wsqnrvc64'
        },
        StationID: '136306',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300189',
        StopID: '300189',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: -1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.27074,
          PositionLat: 25.03163,
          GeoHash: 'wsqnrsfev'
        },
        StationID: '136304',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300187',
        StopID: '300187',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: -1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.25958,
          PositionLat: 25.02376,
          GeoHash: 'wsqnr76tc'
        },
        StationID: '136302',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300185',
        StopID: '300185',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.262756,
          PositionLat: 25.021679,
          GeoHash: 'wsqnr7hcg'
        },
        StationID: '136300',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300182',
        StopID: '300182',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.26507,
          PositionLat: 25.02023,
          GeoHash: 'wsqnr6y92'
        },
        StationID: '136298',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300178',
        StopID: '300178',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.26165,
          PositionLat: 25.01885,
          GeoHash: 'wsqnr6s13'
        },
        StationID: '136294',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '16',
        OperatorName: {
          Zh_tw: '亞通客運',
          En: 'Yatung Bus Co., Ltd.'
        },
        OperatorCode: 'YatungBus',
        OperatorNo: '0702'
      }
    ],
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    Stops: [
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'THB300197',
        StopID: '300197',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: -1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.295231,
          PositionLat: 25.042126,
          GeoHash: 'wsqq2nu2z'
        },
        StationID: '136312',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300195',
        StopID: '300195',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.290189,
          PositionLat: 25.041469,
          GeoHash: 'wsqq2n8v4'
        },
        StationID: '136310',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300193',
        StopID: '300193',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: -1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.287471,
          PositionLat: 25.042365,
          GeoHash: 'wsqnryyf6'
        },
        StationID: '136308',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300191',
        StopID: '300191',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.27988,
          PositionLat: 25.03683,
          GeoHash: 'wsqnrvc64'
        },
        StationID: '136306',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300189',
        StopID: '300189',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: -1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.27074,
          PositionLat: 25.03163,
          GeoHash: 'wsqnrsfev'
        },
        StationID: '136304',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300187',
        StopID: '300187',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: -1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.25958,
          PositionLat: 25.02376,
          GeoHash: 'wsqnr76tc'
        },
        StationID: '136302',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300185',
        StopID: '300185',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.262756,
          PositionLat: 25.021679,
          GeoHash: 'wsqnr7hcg'
        },
        StationID: '136300',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300182',
        StopID: '300182',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.26507,
          PositionLat: 25.02023,
          GeoHash: 'wsqnr6y92'
        },
        StationID: '136298',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300178',
        StopID: '300178',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.26165,
          PositionLat: 25.01885,
          GeoHash: 'wsqnr6s13'
        },
        StationID: '136294',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '35',
        OperatorName: {
          Zh_tw: '葛瑪蘭客運',
          En: 'Kamalan Bus Co., Ltd.'
        },
        OperatorCode: 'KamalanBus',
        OperatorNo: '1308'
      }
    ],
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    Stops: [
      {
        StopUID: 'THB300174',
        StopID: '300174',
        StopName: {
          Zh_tw: '開南大學',
          En: 'Kainan University'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.270384,
          PositionLat: 25.010787,
          GeoHash: 'wsqnr946k'
        },
        StationID: '136290',
        StationGroupID: '338－074',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300177',
        StopID: '300177',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: 1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.261064,
          PositionLat: 25.018736,
          GeoHash: 'wsqnr6e8e'
        },
        StationID: '136293',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300181',
        StopID: '300181',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.265196,
          PositionLat: 25.020322,
          GeoHash: 'wsqnr6y9g'
        },
        StationID: '136297',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300183',
        StopID: '300183',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: 1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.2631,
          PositionLat: 25.02158,
          GeoHash: 'wsqnr7j17'
        },
        StationID: '136299',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300186',
        StopID: '300186',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: 1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.25934,
          PositionLat: 25.02413,
          GeoHash: 'wsqnr7d25'
        },
        StationID: '136301',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300188',
        StopID: '300188',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: 1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.270736,
          PositionLat: 25.031488,
          GeoHash: 'wsqnrsfdu'
        },
        StationID: '136303',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300190',
        StopID: '300190',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.279911,
          PositionLat: 25.036606,
          GeoHash: 'wsqnrvc2f'
        },
        StationID: '136305',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300192',
        StopID: '300192',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: 1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.287433,
          PositionLat: 25.042302,
          GeoHash: 'wsqnryycf'
        },
        StationID: '136307',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300194',
        StopID: '300194',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: 1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.29021,
          PositionLat: 25.04142,
          GeoHash: 'wsqq2n8uf'
        },
        StationID: '136309',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300196',
        StopID: '300196',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: 1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.294189,
          PositionLat: 25.043506,
          GeoHash: 'wsqq2p58z'
        },
        StationID: '136311',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: -1,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '16',
        OperatorName: {
          Zh_tw: '亞通客運',
          En: 'Yatung Bus Co., Ltd.'
        },
        OperatorCode: 'YatungBus',
        OperatorNo: '0702'
      }
    ],
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    Stops: [
      {
        StopUID: 'THB300174',
        StopID: '300174',
        StopName: {
          Zh_tw: '開南大學',
          En: 'Kainan University'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.270384,
          PositionLat: 25.010787,
          GeoHash: 'wsqnr946k'
        },
        StationID: '136290',
        StationGroupID: '338－074',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300177',
        StopID: '300177',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: 1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.261064,
          PositionLat: 25.018736,
          GeoHash: 'wsqnr6e8e'
        },
        StationID: '136293',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300181',
        StopID: '300181',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.265196,
          PositionLat: 25.020322,
          GeoHash: 'wsqnr6y9g'
        },
        StationID: '136297',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300183',
        StopID: '300183',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: 1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.2631,
          PositionLat: 25.02158,
          GeoHash: 'wsqnr7j17'
        },
        StationID: '136299',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300186',
        StopID: '300186',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: 1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.25934,
          PositionLat: 25.02413,
          GeoHash: 'wsqnr7d25'
        },
        StationID: '136301',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300188',
        StopID: '300188',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: 1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.270736,
          PositionLat: 25.031488,
          GeoHash: 'wsqnrsfdu'
        },
        StationID: '136303',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300190',
        StopID: '300190',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: 1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.279911,
          PositionLat: 25.036606,
          GeoHash: 'wsqnrvc2f'
        },
        StationID: '136305',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300192',
        StopID: '300192',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: 1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.287433,
          PositionLat: 25.042302,
          GeoHash: 'wsqnryycf'
        },
        StationID: '136307',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300194',
        StopID: '300194',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: 1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.29021,
          PositionLat: 25.04142,
          GeoHash: 'wsqq2n8uf'
        },
        StationID: '136309',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300196',
        StopID: '300196',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: 1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.294189,
          PositionLat: 25.043506,
          GeoHash: 'wsqq2p58z'
        },
        StationID: '136311',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: -1,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '35',
        OperatorName: {
          Zh_tw: '葛瑪蘭客運',
          En: 'Kamalan Bus Co., Ltd.'
        },
        OperatorCode: 'KamalanBus',
        OperatorNo: '1308'
      }
    ],
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    Stops: [
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'THB300197',
        StopID: '300197',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: -1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.295231,
          PositionLat: 25.042126,
          GeoHash: 'wsqq2nu2z'
        },
        StationID: '136312',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300195',
        StopID: '300195',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.290189,
          PositionLat: 25.041469,
          GeoHash: 'wsqq2n8v4'
        },
        StationID: '136310',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300193',
        StopID: '300193',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: -1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.287471,
          PositionLat: 25.042365,
          GeoHash: 'wsqnryyf6'
        },
        StationID: '136308',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300191',
        StopID: '300191',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.27988,
          PositionLat: 25.03683,
          GeoHash: 'wsqnrvc64'
        },
        StationID: '136306',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300189',
        StopID: '300189',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: -1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.27074,
          PositionLat: 25.03163,
          GeoHash: 'wsqnrsfev'
        },
        StationID: '136304',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300187',
        StopID: '300187',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: -1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.25958,
          PositionLat: 25.02376,
          GeoHash: 'wsqnr76tc'
        },
        StationID: '136302',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300185',
        StopID: '300185',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.262756,
          PositionLat: 25.021679,
          GeoHash: 'wsqnr7hcg'
        },
        StationID: '136300',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300182',
        StopID: '300182',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.26507,
          PositionLat: 25.02023,
          GeoHash: 'wsqnr6y92'
        },
        StationID: '136298',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300178',
        StopID: '300178',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.26165,
          PositionLat: 25.01885,
          GeoHash: 'wsqnr6s13'
        },
        StationID: '136294',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300174',
        StopID: '300174',
        StopName: {
          Zh_tw: '開南大學',
          En: 'Kainan University'
        },
        StopBoarding: -1,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.270384,
          PositionLat: 25.010787,
          GeoHash: 'wsqnr946k'
        },
        StationID: '136290',
        StationGroupID: '338－074',
        LocationCityCode: 'TAO'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  },
  {
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Operators: [
      {
        OperatorID: '16',
        OperatorName: {
          Zh_tw: '亞通客運',
          En: 'Yatung Bus Co., Ltd.'
        },
        OperatorCode: 'YatungBus',
        OperatorNo: '0702'
      }
    ],
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    Stops: [
      {
        StopUID: 'THB300198',
        StopID: '300198',
        StopName: {
          Zh_tw: '庫倫街口',
          En: 'Kulun St. Entrance'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.518331,
          PositionLat: 25.070919,
          GeoHash: 'wsqqthnbw'
        },
        StationID: '136313',
        StationGroupID: '103－008',
        LocationCityCode: 'TPE'
      },
      {
        StopUID: 'THB300197',
        StopID: '300197',
        StopName: {
          Zh_tw: '長榮',
          En: 'Changrong'
        },
        StopBoarding: -1,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.295231,
          PositionLat: 25.042126,
          GeoHash: 'wsqq2nu2z'
        },
        StationID: '136312',
        StationGroupID: '338－151',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300195',
        StopID: '300195',
        StopName: {
          Zh_tw: '光明國小',
          En: 'Guangming Elementary School'
        },
        StopBoarding: -1,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.290189,
          PositionLat: 25.041469,
          GeoHash: 'wsqq2n8v4'
        },
        StationID: '136310',
        StationGroupID: '338－149',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300193',
        StopID: '300193',
        StopName: {
          Zh_tw: '南竹南昌路口',
          En: 'Nanjhu & Nanchang Intersection'
        },
        StopBoarding: -1,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.287471,
          PositionLat: 25.042365,
          GeoHash: 'wsqnryyf6'
        },
        StationID: '136308',
        StationGroupID: '338－148',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300191',
        StopID: '300191',
        StopName: {
          Zh_tw: '南竹蘆興街口',
          En: 'Nanjhu & Lusing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.27988,
          PositionLat: 25.03683,
          GeoHash: 'wsqnrvc64'
        },
        StationID: '136306',
        StationGroupID: '338－147',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300189',
        StopID: '300189',
        StopName: {
          Zh_tw: '南竹富國路口',
          En: 'Nanjhu & Fuguo Intersection'
        },
        StopBoarding: -1,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.27074,
          PositionLat: 25.03163,
          GeoHash: 'wsqnrsfev'
        },
        StationID: '136304',
        StationGroupID: '338－143',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300187',
        StopID: '300187',
        StopName: {
          Zh_tw: '大竹',
          En: 'Dajhu'
        },
        StopBoarding: -1,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.25958,
          PositionLat: 25.02376,
          GeoHash: 'wsqnr76tc'
        },
        StationID: '136302',
        StationGroupID: '338－132',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300185',
        StopID: '300185',
        StopName: {
          Zh_tw: '上大竹',
          En: 'Shangdajhu'
        },
        StopBoarding: -1,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.262756,
          PositionLat: 25.021679,
          GeoHash: 'wsqnr7hcg'
        },
        StationID: '136300',
        StationGroupID: '338－121',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300182',
        StopID: '300182',
        StopName: {
          Zh_tw: '大竹上興路口',
          En: 'Dajhu & Shangsing Intersection'
        },
        StopBoarding: -1,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.26507,
          PositionLat: 25.02023,
          GeoHash: 'wsqnr6y92'
        },
        StationID: '136298',
        StationGroupID: '338－111',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300178',
        StopID: '300178',
        StopName: {
          Zh_tw: '大竹消防隊',
          En: 'Dajhu Fire Brigade'
        },
        StopBoarding: -1,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.26165,
          PositionLat: 25.01885,
          GeoHash: 'wsqnr6s13'
        },
        StationID: '136294',
        StationGroupID: '338－086',
        LocationCityCode: 'TAO'
      },
      {
        StopUID: 'THB300174',
        StopID: '300174',
        StopName: {
          Zh_tw: '開南大學',
          En: 'Kainan University'
        },
        StopBoarding: -1,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.270384,
          PositionLat: 25.010787,
          GeoHash: 'wsqnr946k'
        },
        StationID: '136290',
        StationGroupID: '338－074',
        LocationCityCode: 'TAO'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  }
]

export const mock0968Arrivals = [
  {
    PlateNumb: '-1',
    StopUID: 'THB300174',
    StopID: '300174',
    StopName: {
      Zh_tw: '開南大學',
      En: 'Kainan University'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 1,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300174',
    StopID: '300174',
    StopName: {
      Zh_tw: '開南大學',
      En: 'Kainan University'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 11,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300177',
    StopID: '300177',
    StopName: {
      Zh_tw: '大竹消防隊',
      En: 'Dajhu Fire Brigade'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 1,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300177',
    StopID: '300177',
    StopName: {
      Zh_tw: '大竹消防隊',
      En: 'Dajhu Fire Brigade'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 2,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300178',
    StopID: '300178',
    StopName: {
      Zh_tw: '大竹消防隊',
      En: 'Dajhu Fire Brigade'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 10,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300178',
    StopID: '300178',
    StopName: {
      Zh_tw: '大竹消防隊',
      En: 'Dajhu Fire Brigade'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 10,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300181',
    StopID: '300181',
    StopName: {
      Zh_tw: '大竹上興路口',
      En: 'Dajhu & Shangsing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 2,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300181',
    StopID: '300181',
    StopName: {
      Zh_tw: '大竹上興路口',
      En: 'Dajhu & Shangsing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 3,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300182',
    StopID: '300182',
    StopName: {
      Zh_tw: '大竹上興路口',
      En: 'Dajhu & Shangsing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 9,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300182',
    StopID: '300182',
    StopName: {
      Zh_tw: '大竹上興路口',
      En: 'Dajhu & Shangsing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 9,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300183',
    StopID: '300183',
    StopName: {
      Zh_tw: '上大竹',
      En: 'Shangdajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 3,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300183',
    StopID: '300183',
    StopName: {
      Zh_tw: '上大竹',
      En: 'Shangdajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 4,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300185',
    StopID: '300185',
    StopName: {
      Zh_tw: '上大竹',
      En: 'Shangdajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 8,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300185',
    StopID: '300185',
    StopName: {
      Zh_tw: '上大竹',
      En: 'Shangdajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 8,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300186',
    StopID: '300186',
    StopName: {
      Zh_tw: '大竹',
      En: 'Dajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 4,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300186',
    StopID: '300186',
    StopName: {
      Zh_tw: '大竹',
      En: 'Dajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 5,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300187',
    StopID: '300187',
    StopName: {
      Zh_tw: '大竹',
      En: 'Dajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 7,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300187',
    StopID: '300187',
    StopName: {
      Zh_tw: '大竹',
      En: 'Dajhu'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 7,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300188',
    StopID: '300188',
    StopName: {
      Zh_tw: '南竹富國路口',
      En: 'Nanjhu & Fuguo Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 5,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300188',
    StopID: '300188',
    StopName: {
      Zh_tw: '南竹富國路口',
      En: 'Nanjhu & Fuguo Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 6,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300189',
    StopID: '300189',
    StopName: {
      Zh_tw: '南竹富國路口',
      En: 'Nanjhu & Fuguo Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 6,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300189',
    StopID: '300189',
    StopName: {
      Zh_tw: '南竹富國路口',
      En: 'Nanjhu & Fuguo Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 6,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300190',
    StopID: '300190',
    StopName: {
      Zh_tw: '南竹蘆興街口',
      En: 'Nanjhu & Lusing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 6,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300190',
    StopID: '300190',
    StopName: {
      Zh_tw: '南竹蘆興街口',
      En: 'Nanjhu & Lusing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 7,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300191',
    StopID: '300191',
    StopName: {
      Zh_tw: '南竹蘆興街口',
      En: 'Nanjhu & Lusing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 5,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300191',
    StopID: '300191',
    StopName: {
      Zh_tw: '南竹蘆興街口',
      En: 'Nanjhu & Lusing Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 5,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300192',
    StopID: '300192',
    StopName: {
      Zh_tw: '南竹南昌路口',
      En: 'Nanjhu & Nanchang Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 7,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300192',
    StopID: '300192',
    StopName: {
      Zh_tw: '南竹南昌路口',
      En: 'Nanjhu & Nanchang Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 8,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300193',
    StopID: '300193',
    StopName: {
      Zh_tw: '南竹南昌路口',
      En: 'Nanjhu & Nanchang Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 4,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300193',
    StopID: '300193',
    StopName: {
      Zh_tw: '南竹南昌路口',
      En: 'Nanjhu & Nanchang Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 4,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300194',
    StopID: '300194',
    StopName: {
      Zh_tw: '光明國小',
      En: 'Guangming Elementary School'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 8,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: 'KKA-3656',
    StopUID: 'THB300194',
    StopID: '300194',
    StopName: {
      Zh_tw: '光明國小',
      En: 'Guangming Elementary School'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    EstimateTime: 42,
    StopCountDown: 1,
    CurrentStop: '300192',
    DestinationStop: '300198',
    StopSequence: 9,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:39:47+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300195',
    StopID: '300195',
    StopName: {
      Zh_tw: '光明國小',
      En: 'Guangming Elementary School'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 3,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300195',
    StopID: '300195',
    StopName: {
      Zh_tw: '光明國小',
      En: 'Guangming Elementary School'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 3,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300196',
    StopID: '300196',
    StopName: {
      Zh_tw: '長榮',
      En: 'Changrong'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 9,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: 'KKA-3656',
    StopUID: 'THB300196',
    StopID: '300196',
    StopName: {
      Zh_tw: '長榮',
      En: 'Changrong'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    EstimateTime: 533,
    StopCountDown: 2,
    CurrentStop: '300192',
    DestinationStop: '300198',
    StopSequence: 10,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:39:47+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300197',
    StopID: '300197',
    StopName: {
      Zh_tw: '長榮',
      En: 'Changrong'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 2,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300197',
    StopID: '300197',
    StopName: {
      Zh_tw: '長榮',
      En: 'Changrong'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 2,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300198',
    StopID: '300198',
    StopName: {
      Zh_tw: '庫倫街口',
      En: 'Kulun St. Entrance'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300198',
    StopSequence: 10,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300198',
    StopID: '300198',
    StopName: {
      Zh_tw: '庫倫街口',
      En: 'Kulun St. Entrance'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300178',
    StopSequence: 1,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: 'KKA-3656',
    StopUID: 'THB300198',
    StopID: '300198',
    StopName: {
      Zh_tw: '庫倫街口',
      En: 'Kulun St. Entrance'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    EstimateTime: 1927,
    StopCountDown: 3,
    CurrentStop: '300192',
    DestinationStop: '300198',
    StopSequence: 11,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:39:47+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB300198',
    StopID: '300198',
    StopName: {
      Zh_tw: '庫倫街口',
      En: 'Kulun St. Entrance'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A2',
    SubRouteID: '0968A2',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 1,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '300174',
    StopSequence: 1,
    StopStatus: 3,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:40:29+08:00',
    SrcTransTime: '2023-01-24T16:40:30+08:00',
    UpdateTime: '2023-01-24T16:40:35+08:00'
  },
  {
    PlateNumb: 'KKA-3656',
    StopUID: 'THB300192',
    StopID: '300192',
    StopName: {
      Zh_tw: '南竹南昌路口',
      En: 'Nanjhu & Nanchang Intersection'
    },
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB0968A1',
    SubRouteID: '0968A1',
    SubRouteName: {
      Zh_tw: '0968A',
      En: '0968A'
    },
    Direction: 0,
    EstimateTime: 59,
    StopCountDown: 1,
    CurrentStop: '300190',
    DestinationStop: '300198',
    StopSequence: 8,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: true,
    DataTime: '2023-01-24T16:39:23+08:00',
    SrcTransTime: '2023-01-24T16:39:30+08:00',
    UpdateTime: '2023-01-24T16:39:35+08:00'
  }
]

export const mock0968NearStops = [
  {
    PlateNumb: '396-FQ',
    OperatorID: '35',
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096801',
    SubRouteID: '096801',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 0,
    StopUID: 'THB300196',
    StopID: '300196',
    StopName: {
      Zh_tw: '長榮',
      En: 'Changrong'
    },
    StopSequence: 9,
    MessageType: 2,
    DutyStatus: 0,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-29T14:45:42+08:00',
    SrcRecTime: '2023-01-29T14:45:43+08:00',
    SrcTransTime: '2023-01-29T14:45:43+08:00',
    UpdateTime: '2023-01-29T14:45:45+08:00'
  },
  {
    PlateNumb: 'KKA-5638',
    OperatorID: '16',
    RouteUID: 'THB0968',
    RouteID: '0968',
    RouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    SubRouteUID: 'THB096802',
    SubRouteID: '096802',
    SubRouteName: {
      Zh_tw: '0968',
      En: '0968'
    },
    Direction: 1,
    StopUID: 'THB300198',
    StopID: '300198',
    StopName: {
      Zh_tw: '庫倫街口',
      En: 'Kulun St. Entrance'
    },
    StopSequence: 1,
    MessageType: 2,
    DutyStatus: 0,
    BusStatus: 0,
    A2EventType: 0,
    GPSTime: '2023-01-29T14:41:17+08:00',
    SrcRecTime: '2023-01-29T14:41:18+08:00',
    SrcTransTime: '2023-01-29T14:41:18+08:00',
    UpdateTime: '2023-01-29T14:41:20+08:00'
  }
]

export const mock1123Arrivals = [
  {
    PlateNumb: '-1',
    StopUID: 'THB182389',
    StopID: '182389',
    StopName: {
      Zh_tw: '花蓮醫院',
      En: 'Hualien Hospital'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 9,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB182444',
    StopID: '182444',
    StopName: {
      Zh_tw: '海星中學',
      En: 'Stella Maris Ursuline High School'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 19,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB182874',
    StopID: '182874',
    StopName: {
      Zh_tw: '花蓮商校',
      En: 'National Hualien Commerical High School'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 3,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB182876',
    StopID: '182876',
    StopName: {
      Zh_tw: '大同市場',
      En: 'Datong Market'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 5,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB208807',
    StopID: '208807',
    StopName: {
      Zh_tw: '亞士都飯店',
      En: 'Astar Hotel'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 11,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB208808',
    StopID: '208808',
    StopName: {
      Zh_tw: '翰品酒店',
      En: 'Chateau de Chine Hotel'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 14,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB222369',
    StopID: '222369',
    StopName: {
      Zh_tw: '東大門夜市',
      En: 'Dongdaemun Night Market'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 8,
    StopStatus: 2,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB237391',
    StopID: '237391',
    StopName: {
      Zh_tw: '臺灣企銀',
      En: 'Taiwan Business Bank'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 6,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB237394',
    StopID: '237394',
    StopName: {
      Zh_tw: '門諾醫院',
      En: 'Mennonite Christian Hospital'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 12,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB237397',
    StopID: '237397',
    StopName: {
      Zh_tw: '榮民之家',
      En: 'Veterans Home'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 17,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB241908',
    StopID: '241908',
    StopName: {
      Zh_tw: '郵政總局',
      En: 'Chunghwa Post Co., Ltd.'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 4,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247310',
    StopID: '247310',
    StopName: {
      Zh_tw: '慈濟醫院',
      En: 'Buddhist Tzu Chi General Hospital'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 25,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247311',
    StopID: '247311',
    StopName: {
      Zh_tw: '花蓮機場',
      En: 'Hualien Airport'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 22,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247312',
    StopID: '247312',
    StopName: {
      Zh_tw: '美崙飯店',
      En: 'Parkview Hotel'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 16,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247673',
    StopID: '247673',
    StopName: {
      Zh_tw: '石雕博物館',
      En: 'Hualien Stone Sculpturing Museum'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 13,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247674',
    StopID: '247674',
    StopName: {
      Zh_tw: '中興中美路口',
      En: 'Zhongxing Zhongmei Intersection'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 15,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB247675',
    StopID: '247675',
    StopName: {
      Zh_tw: '大陳一村',
      En: 'Dachen 1st. Village'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 18,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: 'KKB-1721',
    StopUID: 'THB286975',
    StopID: '286975',
    StopName: {
      Zh_tw: '市立圖書館',
      En: 'City Library'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    EstimateTime: 285,
    StopCountDown: 2,
    CurrentStop: '247310',
    DestinationStop: '307559',
    StopSequence: 27,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:17+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286977',
    StopID: '286977',
    StopName: {
      Zh_tw: '家樂福',
      En: 'Carrefour'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 20,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286978',
    StopID: '286978',
    StopName: {
      Zh_tw: '嘉里村',
      En: 'Jiali Village'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 21,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286979',
    StopID: '286979',
    StopName: {
      Zh_tw: '市立圖書館',
      En: 'City Library'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 2,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286981',
    StopID: '286981',
    StopName: {
      Zh_tw: '家樂福',
      En: 'Carrefour'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 24,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286982',
    StopID: '286982',
    StopName: {
      Zh_tw: '嘉里村',
      En: 'Jiali Village'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 23,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB286983',
    StopID: '286983',
    StopName: {
      Zh_tw: '花蓮旅行社',
      En: 'Hualien Travel Service'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 7,
    StopStatus: 2,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB306026',
    StopID: '306026',
    StopName: {
      Zh_tw: '民權 一街',
      En: 'Minquan  1st Street'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 10,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: 'KKB-1721',
    StopUID: 'THB307470',
    StopID: '307470',
    StopName: {
      Zh_tw: '明廉國小',
      En: 'Minglian Elementary School'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    EstimateTime: 91,
    StopCountDown: 1,
    CurrentStop: '247310',
    DestinationStop: '307559',
    StopSequence: 26,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:17+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: 'KKB-1721',
    StopUID: 'THB307559',
    StopID: '307559',
    StopName: {
      Zh_tw: '花蓮轉運站',
      En: 'Hualien Bus Sation'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    EstimateTime: 362,
    StopCountDown: 3,
    CurrentStop: '247310',
    DestinationStop: '307559',
    StopSequence: 28,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:17+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: '-1',
    StopUID: 'THB307560',
    StopID: '307560',
    StopName: {
      Zh_tw: '花蓮轉運站',
      En: 'Hualien Bus Sation'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    StopCountDown: 0,
    CurrentStop: '-1',
    DestinationStop: '307559',
    StopSequence: 1,
    StopStatus: 1,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:15:50+08:00',
    SrcTransTime: '2023-01-24T17:15:52+08:00',
    UpdateTime: '2023-01-24T17:15:55+08:00'
  },
  {
    PlateNumb: 'KKB-1721',
    StopUID: 'THB247310',
    StopID: '247310',
    StopName: {
      Zh_tw: '慈濟醫院',
      En: 'Buddhist Tzu Chi General Hospital'
    },
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    EstimateTime: 59,
    StopCountDown: 1,
    CurrentStop: '286981',
    DestinationStop: '307559',
    StopSequence: 25,
    StopStatus: 0,
    MessageType: 2,
    IsLastBus: false,
    DataTime: '2023-01-24T17:14:24+08:00',
    SrcTransTime: '2023-01-24T17:14:56+08:00',
    UpdateTime: '2023-01-24T17:15:00+08:00'
  }
]

export const mock1123StopsOfRoute = [
  {
    RouteUID: 'THB1123',
    RouteID: '1123',
    RouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Operators: [
      {
        OperatorID: '34',
        OperatorName: {
          Zh_tw: '統聯客運',
          En: 'United Highway Bus Co., Ltd.'
        },
        OperatorCode: 'UnitedHighwayBus',
        OperatorNo: '1201'
      }
    ],
    SubRouteUID: 'THB112301',
    SubRouteID: '112301',
    SubRouteName: {
      Zh_tw: '1123',
      En: '1123'
    },
    Direction: 0,
    Stops: [
      {
        StopUID: 'THB307560',
        StopID: '307560',
        StopName: {
          Zh_tw: '花蓮轉運站',
          En: 'Hualien Bus Sation'
        },
        StopBoarding: 1,
        StopSequence: 1,
        StopPosition: {
          PositionLon: 121.603181,
          PositionLat: 23.993063,
          GeoHash: 'wsq2rpu9x'
        },
        StationID: '141890',
        StationGroupID: '970－117',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286979',
        StopID: '286979',
        StopName: {
          Zh_tw: '市立圖書館',
          En: 'City Library'
        },
        StopBoarding: 0,
        StopSequence: 2,
        StopPosition: {
          PositionLon: 121.60153,
          PositionLat: 23.99003,
          GeoHash: 'wsq2rp781'
        },
        StationID: '128328',
        StationGroupID: '970－043',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB182874',
        StopID: '182874',
        StopName: {
          Zh_tw: '花蓮商校',
          En: 'National Hualien Commerical High School'
        },
        StopBoarding: 0,
        StopSequence: 3,
        StopPosition: {
          PositionLon: 121.601820604877,
          PositionLat: 23.9865839026486,
          GeoHash: 'wsq2rneez'
        },
        StationID: '31542',
        StationGroupID: '970－002',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB241908',
        StopID: '241908',
        StopName: {
          Zh_tw: '郵政總局',
          En: 'Chunghwa Post Co., Ltd.'
        },
        StopBoarding: 0,
        StopSequence: 4,
        StopPosition: {
          PositionLon: 121.603871170832,
          PositionLat: 23.9839402952397,
          GeoHash: 'wsq2rnjhx'
        },
        StationID: '35855',
        StationGroupID: '970－006',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB182876',
        StopID: '182876',
        StopName: {
          Zh_tw: '大同市場',
          En: 'Datong Market'
        },
        StopBoarding: 0,
        StopSequence: 5,
        StopPosition: {
          PositionLon: 121.60612266764,
          PositionLat: 23.9810104419753,
          GeoHash: 'wsq2rjwgs'
        },
        StationID: '31949',
        StationGroupID: '970－009',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB237391',
        StopID: '237391',
        StopName: {
          Zh_tw: '臺灣企銀',
          En: 'Taiwan Business Bank'
        },
        StopBoarding: 0,
        StopSequence: 6,
        StopPosition: {
          PositionLon: 121.60809,
          PositionLat: 23.97852,
          GeoHash: 'wsq2rm0m1'
        },
        StationID: '107924',
        StationGroupID: '970－045',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286983',
        StopID: '286983',
        StopName: {
          Zh_tw: '花蓮旅行社',
          En: 'Hualien Travel Service'
        },
        StopBoarding: 0,
        StopSequence: 7,
        StopPosition: {
          PositionLon: 121.61036,
          PositionLat: 23.97565,
          GeoHash: 'wsq2rk9uq'
        },
        StationID: '124069',
        StationGroupID: '970－044',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB222369',
        StopID: '222369',
        StopName: {
          Zh_tw: '東大門夜市',
          En: 'Dongdaemun Night Market'
        },
        StopBoarding: 0,
        StopSequence: 8,
        StopPosition: {
          PositionLon: 121.61111,
          PositionLat: 23.97453,
          GeoHash: 'wsq2rk6tb'
        },
        StationID: '32848',
        StationGroupID: '970－012',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB182389',
        StopID: '182389',
        StopName: {
          Zh_tw: '花蓮醫院',
          En: 'Hualien Hospital'
        },
        StopBoarding: 0,
        StopSequence: 9,
        StopPosition: {
          PositionLon: 121.61147,
          PositionLat: 23.97987,
          GeoHash: 'wsq2rm6ub'
        },
        StationID: '31863',
        StationGroupID: '970－008',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB306026',
        StopID: '306026',
        StopName: {
          Zh_tw: '民權 一街',
          En: 'Minquan  1st Street'
        },
        StopBoarding: 0,
        StopSequence: 10,
        StopPosition: {
          PositionLon: 121.618598,
          PositionLat: 23.9813,
          GeoHash: 'wsq2rmxvn'
        },
        StationID: '140434',
        StationGroupID: '970－113',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB208807',
        StopID: '208807',
        StopName: {
          Zh_tw: '亞士都飯店',
          En: 'Astar Hotel'
        },
        StopBoarding: 0,
        StopSequence: 11,
        StopPosition: {
          PositionLon: 121.62297,
          PositionLat: 23.9845,
          GeoHash: 'wsq2rw5pu'
        },
        StationID: '32165',
        StationGroupID: '970－001',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB237394',
        StopID: '237394',
        StopName: {
          Zh_tw: '門諾醫院',
          En: 'Mennonite Christian Hospital'
        },
        StopBoarding: 0,
        StopSequence: 12,
        StopPosition: {
          PositionLon: 121.62621,
          PositionLat: 23.98819,
          GeoHash: 'wsq2rwvt2'
        },
        StationID: '107015',
        StationGroupID: '970－026',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247673',
        StopID: '247673',
        StopName: {
          Zh_tw: '石雕博物館',
          En: 'Hualien Stone Sculpturing Museum'
        },
        StopBoarding: 0,
        StopSequence: 13,
        StopPosition: {
          PositionLon: 121.62807,
          PositionLat: 23.9901,
          GeoHash: 'wsq2rxqb7'
        },
        StationID: '109586',
        StationGroupID: '970－030',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB208808',
        StopID: '208808',
        StopName: {
          Zh_tw: '翰品酒店',
          En: 'Chateau de Chine Hotel'
        },
        StopBoarding: 0,
        StopSequence: 14,
        StopPosition: {
          PositionLon: 121.62659,
          PositionLat: 23.99217,
          GeoHash: 'wsq2rxtu8'
        },
        StationID: '109587',
        StationGroupID: '970－031',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247674',
        StopID: '247674',
        StopName: {
          Zh_tw: '中興中美路口',
          En: 'Zhongxing Zhongmei Intersection'
        },
        StopBoarding: 0,
        StopSequence: 15,
        StopPosition: {
          PositionLon: 121.62791,
          PositionLat: 23.99372,
          GeoHash: 'wsq2rxytx'
        },
        StationID: '109588',
        StationGroupID: '970－032',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247312',
        StopID: '247312',
        StopName: {
          Zh_tw: '美崙飯店',
          En: 'Parkview Hotel'
        },
        StopBoarding: 0,
        StopSequence: 16,
        StopPosition: {
          PositionLon: 121.6279,
          PositionLat: 23.99982,
          GeoHash: 'wsq2x9n9p'
        },
        StationID: '108309',
        StationGroupID: '970－028',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB237397',
        StopID: '237397',
        StopName: {
          Zh_tw: '榮民之家',
          En: 'Veterans Home'
        },
        StopBoarding: 0,
        StopSequence: 17,
        StopPosition: {
          PositionLon: 121.61951,
          PositionLat: 24.00296,
          GeoHash: 'wsq2x98e7'
        },
        StationID: '107868',
        StationGroupID: '970－017',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247675',
        StopID: '247675',
        StopName: {
          Zh_tw: '大陳一村',
          En: 'Dachen 1st. Village'
        },
        StopBoarding: 0,
        StopSequence: 18,
        StopPosition: {
          PositionLon: 121.61869,
          PositionLat: 24.00545,
          GeoHash: 'wsq2xd01b'
        },
        StationID: '109589',
        StationGroupID: '970－033',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB182444',
        StopID: '182444',
        StopName: {
          Zh_tw: '海星中學',
          En: 'Stella Maris Ursuline High School'
        },
        StopBoarding: 0,
        StopSequence: 19,
        StopPosition: {
          PositionLon: 121.61407,
          PositionLat: 24.00743,
          GeoHash: 'wsq2x6ktm'
        },
        StationID: '31876',
        StationGroupID: '971－003',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286977',
        StopID: '286977',
        StopName: {
          Zh_tw: '家樂福',
          En: 'Carrefour'
        },
        StopBoarding: 0,
        StopSequence: 20,
        StopPosition: {
          PositionLon: 121.61051,
          PositionLat: 24.01707,
          GeoHash: 'wsq2xk4jd'
        },
        StationID: '128326',
        StationGroupID: '971－040',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286978',
        StopID: '286978',
        StopName: {
          Zh_tw: '嘉里村',
          En: 'Jiali Village'
        },
        StopBoarding: 0,
        StopSequence: 21,
        StopPosition: {
          PositionLon: 121.60937,
          PositionLat: 24.02009,
          GeoHash: 'wsq2xk9pp'
        },
        StationID: '128327',
        StationGroupID: '971－041',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247311',
        StopID: '247311',
        StopName: {
          Zh_tw: '花蓮機場',
          En: 'Hualien Airport'
        },
        StopBoarding: 0,
        StopSequence: 22,
        StopPosition: {
          PositionLon: 121.61384,
          PositionLat: 24.02609,
          GeoHash: 'wsq2xmu6p'
        },
        StationID: '108308',
        StationGroupID: '971－026',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286982',
        StopID: '286982',
        StopName: {
          Zh_tw: '嘉里村',
          En: 'Jiali Village'
        },
        StopBoarding: 0,
        StopSequence: 23,
        StopPosition: {
          PositionLon: 121.60922,
          PositionLat: 24.01996,
          GeoHash: 'wsq2xk9nk'
        },
        StationID: '128331',
        StationGroupID: '971－041',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286981',
        StopID: '286981',
        StopName: {
          Zh_tw: '家樂福',
          En: 'Carrefour'
        },
        StopBoarding: 0,
        StopSequence: 24,
        StopPosition: {
          PositionLon: 121.61029,
          PositionLat: 24.01705,
          GeoHash: 'wsq2xk1vm'
        },
        StationID: '128330',
        StationGroupID: '971－040',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB247310',
        StopID: '247310',
        StopName: {
          Zh_tw: '慈濟醫院',
          En: 'Buddhist Tzu Chi General Hospital'
        },
        StopBoarding: 0,
        StopSequence: 25,
        StopPosition: {
          PositionLon: 121.59272,
          PositionLat: 23.99492,
          GeoHash: 'wsq2wbjhe'
        },
        StationID: '108306',
        StationGroupID: '970－027',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB307470',
        StopID: '307470',
        StopName: {
          Zh_tw: '明廉國小',
          En: 'Minglian Elementary School'
        },
        StopBoarding: 0,
        StopSequence: 26,
        StopPosition: {
          PositionLon: 121.59514,
          PositionLat: 23.99516,
          GeoHash: 'wsq2wbnvu'
        },
        StationID: '141817',
        StationGroupID: '970－070',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB286975',
        StopID: '286975',
        StopName: {
          Zh_tw: '市立圖書館',
          En: 'City Library'
        },
        StopBoarding: 0,
        StopSequence: 27,
        StopPosition: {
          PositionLon: 121.60132,
          PositionLat: 23.99008,
          GeoHash: 'wsq2rp72k'
        },
        StationID: '128324',
        StationGroupID: '970－043',
        LocationCityCode: 'HUA'
      },
      {
        StopUID: 'THB307559',
        StopID: '307559',
        StopName: {
          Zh_tw: '花蓮轉運站',
          En: 'Hualien Bus Sation'
        },
        StopBoarding: -1,
        StopSequence: 28,
        StopPosition: {
          PositionLon: 121.603181,
          PositionLat: 23.993063,
          GeoHash: 'wsq2rpu9x'
        },
        StationID: '141889',
        StationGroupID: '970－117',
        LocationCityCode: 'HUA'
      }
    ],
    UpdateTime: '2023-01-24T05:20:50+08:00',
    VersionID: 1520
  }
]

export const mockBusTypeNormal = [
  {
    PlateNumb: '225-FZ',
    OperatorCode: '',
    VehicleType: 0,
    HasLiftOrRamp: false,
    UpdateTime: '2019-01-18T16:38:45+08:00'
  }
]

export const mockBusTypeBarrierFree = [
  {
    PlateNumb: '225-FZ',
    OperatorCode: '',
    VehicleType: 1,
    HasLiftOrRamp: false,
    UpdateTime: '2019-01-18T16:38:45+08:00'
  }
]
