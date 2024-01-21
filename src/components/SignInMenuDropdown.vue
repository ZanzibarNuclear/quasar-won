<template>
  <div class="q-pa-md">
    <q-btn-dropdown class="glossy" color="purple" label="Sign In">
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Login using...</div>
          <q-btn label="Google" />
          <q-btn label="X" />
          <q-btn label="Discord" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      mobileData: ref(false),
      bluetooth: ref(false),
    };
  },
};
</script>
