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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import PrimaryToolbar from 'components/PrimaryToolbar.vue'
import VerticalNavigationMenu from 'src/components/VerticalNavigationMenu.vue'
import { fabXTwitter } from '@quasar/extras/fontawesome-v6'
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
    title: 'Nuclear News',
    caption: 'Highlighting recent advances in nuclear technology and adoption',
    icon: 'newspaper',
    route: 'nuclear-news',
  },
  {
    title: 'Daily Lessons',
    caption: 'Understand more about nuclear energy one idea at a time',
    icon: 'school',
    route: 'daily-lessons',
  },
  {
    title: 'Simulators',
    caption:
      'Little experiments for exploring the fundamental of nuclear energy',
    icon: 'smart_toy',
    route: 'nuclear-sims',
  },
  {
    title: 'Fun and Games',
    caption: 'Play and become familiar with ideas related to nuclear energy',
    icon: 'games',
    route: 'fun-and-games',
  },
  {
    title: "Zanzi's Nuclear Stack",
    caption: 'Essays by Zanzibar about nuclear energy',
    icon: 'article',
    link: 'https://zanzisnuclearstack.substack.com/',
  },
  {
    title: 'X / Twitter',
    caption: '@ZanzibarNuclear',
    icon: fabXTwitter,
    iconPath: '/assets/X_icon_2.svg',
    link: 'https://twitter.com/ZanzibarNuclear',
  },
  {
    title: 'Open Source Code',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/ZanzibarNuclear',
  },
  {
    title: 'Discord Chat Channel',
    caption: "Join Zanzibar's World of Nuclear Energy",
    icon: 'chat',
    link: 'https://discord.gg/XG8SWSCT',
  },
]
</script>
