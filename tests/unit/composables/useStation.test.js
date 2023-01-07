import { describe, expect, it } from 'vitest'
import { state, useStation } from '@/composables/bus'

describe('useStations function', () => {
  it('可以運作', async () => {
    const { fetchStation } = useStation()
    const id = '129575',
      city = 'HualienCounty'
    await fetchStation(id, city)

    expect(state.station.length).toBe(1)
    expect(state.station.StationID).toBe(id)
  })
})
