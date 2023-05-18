import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const feedbacks = ref([])

  const addFeedback = (obj) => {
    feedbacks.value.push(obj)
  }

  const getFeedback = (productId) => {
    return feedbacks.value.filter(feedback => feedback.productId === productId)[0]
  }

  return { feedbacks, addFeedback, getFeedback }
})
