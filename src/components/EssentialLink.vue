<template>
  <q-item clickable v-bind="destinationProps">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: '',
  },
  route: {
    type: String,
    default: null,
  },
})

const destinationProps = computed(() => {
  if (props.link) {
    return {
      href: props.link,
      target: '_blank',
    }
  } else if (props.route) {
    return {
      to: { name: props.route },
    }
  } else {
    return {}
  }
})
</script>
