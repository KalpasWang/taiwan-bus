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

export const mockCityArrivals = [
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
