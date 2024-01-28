<template>
  <q-list>
    <q-item-label header> {{ heading }} </q-item-label>
    <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
  </q-list>
  <div>
    <q-icon :name="fabXTwitter" />
  </div>
</template>

<script setup>
import EssentialLink from './EssentialLink.vue'
import { fabXTwitter } from '@quasar/extras/fontawesome-v6'

const props = defineProps({
  heading: {
    type: String,
    default: 'Essential Links',
  },
  links: {
    type: Array,
    default: () => {
      return []
    },
  },
})
</script>

<style lang="scss" scoped></style>
