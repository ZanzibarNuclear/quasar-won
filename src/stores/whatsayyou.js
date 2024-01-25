import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWhatSayYouStore = defineStore('what-say-you', () => {
  const messages = ref([])

  function addMessage(msg) {
    messages.value.push(msg)
  }

  return { messages, addMessage }
})
