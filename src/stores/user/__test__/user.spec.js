// Libraries
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Stores
import { useUserStore } from '@/stores/user/user.js'

describe('Scenario: User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Given: The store is initialized', () => {
    let userStore

    beforeEach(() => {
      userStore = useUserStore()
    })

    describe('When: No actions have been called', () => {
      it('Then: The default first name is set', () => {
        expect(userStore.firstName).toBe('TestFirst')
      })

      it('Then: The default last name is set', () => {
        expect(userStore.lastName).toBe('TestLast')
      })

      it('Then: The fullName getter returns the combined name', () => {
        expect(userStore.fullName).toBe('TestFirst TestLast')
      })
    })

    describe('When: setUserProfile is called with a user object', () => {
      beforeEach(() => {
        userStore.setUserProfile({ firstName: 'Kellen', lastName: 'Link' })
      })

      it('Then: The first name is updated', () => {
        expect(userStore.firstName).toBe('Kellen')
      })

      it('Then: The last name is updated', () => {
        expect(userStore.lastName).toBe('Link')
      })

      it('Then: The fullName getter reflects the updated name', () => {
        expect(userStore.fullName).toBe('Kellen Link')
      })
    })
  })
})
