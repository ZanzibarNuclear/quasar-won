<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="~/assets/Zanzibar.svg" />
          </q-avatar>
          Zanzi's World of Nuclear Energy
        </q-toolbar-title>

        <div>Zanzi's App v0.1</div>
        <q-btn dense flat round icon="person" @click="toggleAccountDropdown" />
        <div v-if="accountDropdownOpen">
          <account-menu-dropdown v-if="loggedIn" />
          <sign-in-menu-dropdown v-else />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import AccountMenuDropdown from "src/components/AccountMenuDropdown.vue";
import SignInMenuDropdown from "src/components/SignInMenuDropdown.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    AccountMenuDropdown,
    SignInMenuDropdown,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const accountDropdownOpen = ref(false);
    const loggedIn = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      accountDropdownOpen,
      loggedIn,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleAccountDropdown() {
        accountDropdownOpen.value = !accountDropdownOpen.value;
      },
      toggleLogin() {
        loggedIn.value = !loggedIn.value;
      },
    };
  },
});
</script>
