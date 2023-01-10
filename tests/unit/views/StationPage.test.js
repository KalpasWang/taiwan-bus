import { render, screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import {
  describe,
  it,
  beforeAll,
  vi,
  expect,
  beforeEach,
  afterEach
} from 'vitest'
import { router } from '@/router'
import StationPage from '@/views/StationPage.vue'
import { state } from '@/composables/bus'
import { getCityByCityCode } from '@/composables/utilities'
import {
  mockCityStationData,
  mockCityPassThroughRoutes
} from '@/composables/constants'
import { api } from '../../../src/composables/api'

describe('Station Page', () => {
  beforeEach(() => {
    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
  })

  it('讀取資料會顯示 loader', () => {
    render(StationPage, {
      global: {
        plugins: [router]
      }
    })
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
  it('顯示站位名稱與路線列表', () => {})
  it('路線列表包含前往的方向與 route page 的連結', () => {})
  it('先檢查是否已有此站位資料，若是無才會 call api', () => {})
})
