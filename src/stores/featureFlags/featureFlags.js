import { defineStore } from 'pinia'

/**
 * @return {FeatureFlagStore}
 */
export const useFeatureFlagsStore = defineStore('featureFlags', {
  state: () => ({
    isReady: false,
    flags: {},
  }),
  actions: {
    setAllFlags(featureFlags) {
      try {
        this.flags = featureFlags
      } catch (error) {
        console.warn('Error setting flags in FeatureFlagStore', error)
      } finally {
        this.isReady = true
      }
    },
    isFeatureFlagEnabled(featureName) {
      return this.flags[featureName]
    },
  },
})
