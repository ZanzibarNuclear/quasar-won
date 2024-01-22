<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <feature-card
      v-for="feature in features"
      :key="feature.feature"
      :category="feature.category"
      :feature="feature.feature"
      :coverImage="feature.coverImage"
      :purpose="feature.purpose"
      :callToAction="feature.callToAction"
      :routeName="feature.routeName"
    />

    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption> Subhead </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> 5:30PM </q-btn>
        <q-btn flat> 7:00PM </q-btn>
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col" src="https://cdn.quasar.dev/img/parallax2.jpg" />

        <q-card-actions vertical class="justify-around">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import FeatureCard from "src/components/FeatureCard.vue";

const features = [
  {
    category: "forum",
    feature: "What Say You",
    coverImage: "https://cdn.quasar.dev/img/parallax2.jpg",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "Join In the Fun",
    routeName: "what-say-you",
  },
  {
    category: "learning",
    feature: "Daily Lessons",
    coverImage: "https://cdn.quasar.dev/img/parallax2.jpg",
    purpose:
      "Learn everything you need to know to understand how nuclear energy can be put to good use.",
    callToAction: "Start Learning",
    routeName: "lesson-welcome",
  },
  {
    category: "events",
    feature: "News",
    coverImage: "https://cdn.quasar.dev/img/parallax2.jpg",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "See the Latest",
    routeName: "news",
  },
  {
    category: "fun",
    feature: "Games",
    coverImage: "https://cdn.quasar.dev/img/parallax2.jpg",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "Play Now",
    routeName: "games",
  },
  {
    category: "learning",
    feature: "Simulators",
    coverImage: "https://cdn.quasar.dev/img/parallax2.jpg",
    purpose: "Try nuclear simulators - fun and educational.",
    callToAction: "Learn By Doing",
    routeName: "sims",
  },
];
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
