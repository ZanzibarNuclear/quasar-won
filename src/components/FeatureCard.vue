<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">{{ category }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ featureName }}</div>
        <div class="text-caption text-grey">
          {{ purpose }}
        </div>
      </q-card-section>

      <q-card-section v-if="coverImage" class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src="coverImage" />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions align="center">
      <q-btn color="primary" glossy stretch @click="goTo">
        {{ callToAction }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const category = ref("Forum");
const featureName = ref("What Say You");
const coverImage = ref("https://cdn.quasar.dev/img/parallax2.jpg");
const purpose = ref(
  "Long-form discussions for sharing ideas about nuclear energy."
);
const callToAction = "Join In";
const routeName = "what-say-you";
const goTo = () => {
  // navigate to routeName
  alert(routeName);
};
</script>

<style lang="scss" scoped></style>
