import { render, screen, waitFor } from '@testing-library/vue'
import { describe, it, vi, expect, beforeEach } from 'vitest'
import { router } from '@/router'
import StationPage from '@/views/StationPage.vue'
import { state } from '@/composables/bus'
import {
  mockCityStationData,
  mockCityPassThroughRoutes
} from '@/composables/constants'
import { api } from '../../../src/composables/api'

const options = {
  props: {
    city: 'HualienCounty',
    stationId: '129575'
  },
  global: {
    plugins: [router]
  }
}

describe('Station Page', () => {
  beforeEach(() => {
    api.get = vi
      .fn()
      .mockResolvedValueOnce({ data: mockCityStationData })
      .mockResolvedValueOnce({ data: mockCityPassThroughRoutes })
  })

  it('讀取資料會顯示 loader', () => {
    render(StationPage, options)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('顯示站位名稱', async () => {
    render(StationPage, options)
    await waitFor(() => {
      expect(
        screen.getByText(state.station.StationName.Zh_tw, { exact: false })
      ).toBeInTheDocument()
    })
  })

  it('路線列表包含前往的終點站與 route page 的連結', async () => {
    render(StationPage, options)
    await waitFor(() => {
      const routesList = screen.getAllByRole('listitem')
      expect(routesList.length).toBe(state.station.routes.length)
      routesList.forEach((li, i) => {
        // console.log(li)
        const routeData = state.station.routes[i]
        expect(li.textContent).toMatch(routeData.RouteName.Zh_tw)
        expect(li.textContent).toMatch(routeData.DestinationStopNameZh)
        const link = li.querySelector('a')
        const routeName = routeData.RouteName.Zh_tw
        const routeCity = routeData.City
        expect(link.getAttribute('href')).toBe(
          `/routes/${routeCity}/${routeName}`
        )
      })
    })
  })
  it('先檢查是否已有此站位資料，若是無才會 call api', async () => {
    const { unmount } = render(StationPage, options)
    await waitFor(() => {
      expect(api.get).toHaveBeenCalled()
    })
    unmount()
    render(StationPage, options)
    await waitFor(() => {
      expect(api.get).not.toHaveBeenCalled()
    })
  })
})
