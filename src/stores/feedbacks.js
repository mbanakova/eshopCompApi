import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const feedbacks = ref([])

  const addFeedback = (obj) => {
    feedbacks.value.push(obj)
  }

  const getFeedback = (productId) => {
    const result = feedbacks.value.filter(feedback => feedback.productId === productId)
    console.log(result);
    return result
  }

  return { feedbacks, addFeedback, getFeedback }
})
