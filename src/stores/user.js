import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: 'Kellen',
        lastName: 'Link',
    }),
    actions: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
    },
})