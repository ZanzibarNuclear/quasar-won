import { defineStore } from 'pinia'

export const useAppStatus = defineStore('app-status', {
  state: () => ({
    leftDrawerOpen: false,
    rightDrawerOpen: false,
  }),
  actions: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    toggleRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen
    },
  },
})
