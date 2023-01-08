import { beforeAll, describe, expect, it, vi } from 'vitest'
import { state, useStation } from '@/composables/bus'
import { mockCityStationData } from '@/composables/constants'
import { getCityCode } from '../../../src/composables/utilities'
import { api } from '../../../src/composables/api'

describe('useStations function', () => {
  beforeAll(() => {})

  it('有city時可以運作', async () => {
    const getStationData = useStation()
    const id = '129575',
      city = 'HualienCounty'

    api.get = vi.fn().mockResolvedValue({ data: mockCityStationData })
    await getStationData(id, city)

    expect(state.station.LocationCityCode).toBe(getCityCode(city))
    expect(state.station.StationID).toBe(id)
    expect(Array.isArray(state.station.routes)).toBe(true)
    expect(state.station.routes.length).toBeGreaterThanOrEqual(1)
  })
})
