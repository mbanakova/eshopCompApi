import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFeedbacksStore = defineStore('feedbacks', () => {
  const feedbacks = ref([])
  const productRating = ref([])
  const stars = ref([])

  const addFeedback = (obj) => {
    feedbacks.value.push(obj)
    addRates(obj)
  }


  const addRates = (obj) => {
    const rateExists = productRating.value.some(product => product.id === obj.productId)

    if (!rateExists) {
      productRating.value.push({
        id: obj.productId,
        rates: [+obj.rate]
      })
    } else {
      const product = productRating.value.find(product => product.id === obj.productId)
      product.rates.push(+obj.rate)
    }
  }

  const getFeedback = (productId) => {
    return feedbacks.value.filter(feedback => feedback.productId === productId)
  }


  const getProductRating = (productId) => {
    const product = productRating.value.find(rating => rating.id === productId)

    const total = product.rates.reduce((prev, curr) => {
      return prev + curr
    })
    const average = (total / product.rates.length).toFixed(2)
    return average
  }

  const getItemRate = (productId) => {
    const item = productRating.value.find(rating => rating.id === productId)
    return item.rates
  }


  const getItemRateQuantity = (productId) => {
    const item = productRating.value.find(rating => rating.id === productId)
    return item.rates.length
  }

  return { feedbacks, addFeedback, getFeedback, getProductRating, productRating, addRates, getItemRate, stars, getItemRateQuantity }
})
