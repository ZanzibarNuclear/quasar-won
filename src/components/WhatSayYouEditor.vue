<template>
  <div>
    <div class="q-pa-md" style="max-width: 450px">
      <q-input
        v-model="message"
        filled
        type="textarea"
        @keydown.enter.exact.prevent="doIt"
      />
      <q-btn class="q-mt-md" push color="primary" label="Push" @click="doIt" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
const emit = defineEmits(['post'])

const doIt = () => {
  emit('post', message.value)
  message.value = ''
}
</script>

<style lang="scss" scoped></style>
