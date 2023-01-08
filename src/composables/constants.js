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
