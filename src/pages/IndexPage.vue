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
  </div>
</template>

<script setup>
import FeatureCard from "src/components/FeatureCard.vue";

const features = [
  {
    category: "forum",
    feature: "What Say You",
    coverImage: "/images/speech-bubbles.png",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "Join In the Fun",
    routeName: "what-say-you",
  },
  {
    category: "learning",
    feature: "Daily Lessons",
    coverImage: "/images/atomic-symbol.jpg",
    purpose:
      "Learn everything you need to know to understand how nuclear energy can be put to good use.",
    callToAction: "Start Learning",
    routeName: "lesson-welcome",
  },
  {
    category: "events",
    feature: "News",
    coverImage: "/images/Diablo-Canyon-power-plant.png",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "See the Latest",
    routeName: "news",
  },
  {
    category: "learning",
    feature: "Simulators",
    coverImage: "/images/Cherenkov-radiation.jpg",
    purpose: "Try nuclear simulators - fun and educational.",
    callToAction: "Learn By Doing",
    routeName: "sims",
  },
  {
    category: "fun",
    feature: "Games",
    coverImage: "/images/word-search.jpg",
    purpose: "Long-form discussions for sharing ideas about nuclear energy.",
    callToAction: "Play Now",
    routeName: "games",
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
