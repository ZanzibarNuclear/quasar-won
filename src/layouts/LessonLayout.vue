<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-dark">
      <primary-toolbar hide-menu />
    </q-header>

    <q-drawer
      show-if-above
      v-model="appStatus.rightDrawerOpen"
      side="right"
      elevated
    >
      <!-- drawer content -->
      <content-outline />
    </q-drawer>

    <q-footer> </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import PrimaryToolbar from 'src/components/PrimaryToolbar.vue'
import ContentOutline from 'src/components/ContentOutline.vue'
import { useAppStatus } from 'stores/app-status'

const appStatus = useAppStatus()
</script>
