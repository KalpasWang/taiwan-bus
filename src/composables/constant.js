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
  Icon: busIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [18, -18],
  shadowUrl: null,
  shadowSize: [0, 0],
  shadowAnchor: [18, 18]
})
