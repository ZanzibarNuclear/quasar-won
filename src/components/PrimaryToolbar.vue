<template>
  <q-toolbar>
    <q-btn
      v-if="!hideMenu"
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="appStatus.toggleLeftDrawer"
    />

    <q-toolbar-title>
      <q-btn :to="{ name: 'home' }" flat dense>
        <q-avatar>
          <img src="~/assets/Zanzibar.svg" />
        </q-avatar>
      </q-btn>
      Zanzi's World of Nuclear Energy
    </q-toolbar-title>

    <div>Zanzi's App v0.1</div>
    <q-btn dense flat round icon="person" />
  </q-toolbar>
</template>

<script setup>
import { useAppStatus } from 'stores/app-status'
const appStatus = useAppStatus()
const props = defineProps({
  hideMenu: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped></style>
