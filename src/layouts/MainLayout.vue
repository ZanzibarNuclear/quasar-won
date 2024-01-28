<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-dark">
      <primary-toolbar />
    </q-header>

    <q-drawer v-model="appStatus.leftDrawerOpen" show-if-above bordered>
      <vertical-navigation-menu
        heading="Explore the World"
        :links="linksList"
      />
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'
import PrimaryToolbar from 'components/PrimaryToolbar.vue'
import VerticalNavigationMenu from 'src/components/VerticalNavigationMenu.vue'
import { useAppStatus } from 'stores/app-status'

const appStatus = useAppStatus()

const linksList = [
  {
    title: 'What Say You',
    caption: 'Express yourself, and find out what others are saying',
    icon: 'record_voice_over',
    route: 'what-say-you',
  },
  {
    title: "Zanzi's Nuclear Stack",
    caption: 'Essays by Zanzibar about nuclear energy',
    icon: 'article',
    link: 'https://zanzisnuclearstack.substack.com/',
  },
  {
    title: 'X / Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Open Source Code',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
]
</script>
