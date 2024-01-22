<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">{{ category }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ feature }}</div>
        <div class="text-caption text-dark">
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
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps([
  "category",
  "feature",
  "coverImage",
  "purpose",
  "callToAction",
  "routeName",
]);
const router = useRouter();
const goTo = async () => {
  router.push({ name: props.routeName });
};
</script>

<style lang="scss" scoped></style>
