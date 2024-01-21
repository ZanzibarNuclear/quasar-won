<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-dark">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/Zanzibar400x400.png" />
          </q-avatar>
          Zanzi's World of Nuclear Energy
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <content-outline />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import ContentOutline from "src/components/ContentOutline.vue";

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
