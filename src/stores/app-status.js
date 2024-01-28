import { defineStore } from 'pinia'

export const useAppStatus = defineStore('app-status', {
  state: () => ({
    leftDrawerOpen: false,
  }),
  actions: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
  },
})
