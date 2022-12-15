import { render, screen } from '@testing-library/vue'
import { describe, it, beforeAll, vi, expect, afterEach } from 'vitest'
import NearByStations from '@/views/NearByStations.vue'
import { state } from '@/composables/bus'
import { mockNearbyResponse } from '@/composables/utilities'

describe('NearByStations 頁面', () => {
  it('發生錯誤會顯示訊息', () => {})

  describe('Happy Path', () => {
    beforeAll(() => {
      state.nearByStations = mockNearbyResponse
    })

    it('列出使用者附近公車站位', () => {
      render(NearByStations)
      const stations = screen.getAllByRole('listitem')
    })

    it('選擇其中一個公車站位會連結到公車站位頁面', () => {})

    it('點擊地圖圖示會顯示使用者附近的地圖', () => {})
  })
})
