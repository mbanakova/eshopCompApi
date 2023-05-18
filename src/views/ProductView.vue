<template>
  <main class="container">
    <CssLoader v-if="isLoading" />
    <section v-else class="product">
      <div class="product__img">
        <img :src="vImgSrc(product.img)" alt="" />
        <p class="product__offer">{{ product.offer }}</p>
      </div>
      <div class="product__info">
        <h2 class="product__title">{{ product.title }}</h2>
        <p class="product__color">
          <span class="product__color-code" :style="{ backgroundColor: product.colorCode }"></span
          >{{ product.color }}
        </p>
        <p class="product__description">{{ product.description }}</p>
        <ul class="product__badges">
          <li class="product__badge">eco</li>
          <li class="product__badge">trend</li>
        </ul>
        <div class="product__rate" v-if="reviews.productRating.length">
          <div class="product__rate-stars">*****</div>
          <RouterLink class="product__rate-reviews" :to="`/reviews/${product.id}`"
            >{{ reviews.productRating.length }} отзыв</RouterLink
          >
        </div>
        <p class="product__price">{{ product.price }} ₽</p>
        <div class="product__info-footer">
          <p class="product__available">В наличии: {{ product.available }}</p>
          <button class="button button--cta">Купить</button>
        </div>
        <RouterLink class="product__leave-feedback" :to="`/feedback/${product.id}`"
          >Уже купили? Оставьте отзыв!</RouterLink
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useFeedbacksStore } from '@/stores/feedbacks'
import { vImgSrc } from '@/directives/vImgSrc.js'
import CssLoader from '@/components/CssLoader.vue'

const products = useProductsStore()
const reviews = useFeedbacksStore()

const route = useRoute()
const routeId = route.params.id
let isLoading = ref(false)
const product = ref({})

const loadProduct = async () => {
  isLoading.value = true
  try {
    product.value = await products.getProduct(routeId)
  } catch (error) {
    console.log(error.message)
  }
  isLoading.value = false
  return product
}

onMounted(() => {
  loadProduct()
})
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
}

.product__img {
  position: relative;
}

.product__offer {
  background-color: $light;
  color: $white;
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 3px 15px;
  text-transform: uppercase;
  margin: 0;
  border-radius: 6px;
}

.product__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.product__title {
  margin: 0;
  font-size: 27px;
  color: $accent;
}

.product__color {
  margin: 0;
  font-size: 14px;
  color: $dark;
  display: flex;
  align-items: center;
}

.product__color-code {
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid $border;
  margin-right: 14px;
}

.product__description {
  margin: 0;
}

.product__badges {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
}

.product__badge {
  border-radius: 10px;
  background-color: $success;
  font-size: 14px;
  line-height: 14px;
  color: $white;
  padding: 5px 7px;
}

.product__rate {
  display: flex;
  gap: 20px;
  color: $bright;
}

.product__rate-reviews {
  color: $light;
  text-decoration: none;
}

.product__price {
  margin: 0;
  font-size: 30px;
  color: $accent;
}

.product__info-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
}

.product__leave-feedback {
  margin-top: 50px;
  text-decoration: none;
  color: $accent;
  transition: tr;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
