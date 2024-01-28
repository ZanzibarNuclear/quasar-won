<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-editor
        v-model="message"
        square
        :toolbar="[
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
          ['undo', 'redo'],
        ]"
        v-on:keypress.ctrl.enter.exact.prevent="doIt"
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
