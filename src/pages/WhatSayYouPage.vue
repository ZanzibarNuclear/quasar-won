<template>
  <q-page class="q-ma-md">
    <div class="text-h2">"What Say You" Discussion Forum</div>
    <what-say-you-editor @post="handlePost" />
    <div class="q-ma-md">
      <q-scroll-area style="height: 500px; max-width: 450px">
        <div
          v-for="(comment, index) in whatSayYou.messages"
          :key="index"
          class="q-py-xs box"
        >
          {{ comment }}
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import WhatSayYouEditor from 'src/components/WhatSayYouEditor.vue'
import { useWhatSayYouStore } from 'src/stores/whatsayyou'

const whatSayYou = useWhatSayYouStore()
const handlePost = (comment) => whatSayYou.addMessage(comment)
</script>

<style scoped>
.box {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.25rem;
  flex-direction: column;
}
</style>
