import { defineStore } from 'pinia'

/**
 * @return {UserStore}
 */
export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'TestFirst',
    lastName: 'TestLast',
  }),
  getters: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
  },
  actions: {
    setUserProfile({ firstName, lastName }) {
      this.firstName = firstName
      this.lastName = lastName
    },
  },
})
