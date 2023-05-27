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
          <button class="button button--cta" @click="viewModal = !viewModal">Купить</button>
        </div>
        <RouterLink class="product__leave-feedback" :to="`/feedback/${product.id}`"
          >Уже купили? Оставьте отзыв!</RouterLink
        >
      </div>
    </section>
    <teleport to=".modals-container">
      <div class="modal-outlay" v-if="viewModal">
        <div class="modal">
          <h3>Скопируйте сообщение и отправьте мне в Тимс</h3>
          <div class="modal__text">
            <p ref="messageText">
              Привет! {{ product.title }} цвета {{ product.color }} ещё есть в наличии?
            </p>
            <button
              @click="copyMessage"
              class="copy-button button button--light"
              :class="{ active: tooltip }"
            >
              ❐
            </button>
          </div>
          <button @click="closeModal" class="close-modal">x</button>
        </div>
      </div>
    </teleport>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useFeedbacksStore } from '@/stores/feedbacks'
import { vImgSrc } from '@/directives/vImgSrc.js'
import CssLoader from '@/components/CssLoader.vue'
// import Modal from '@/components/ModalComponent.vue'

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

const viewModal = ref(false)
const messageText = ref(null)
const tooltip = ref(false)

const copyMessage = () => {
  try {
    tooltip.value = true
    navigator.clipboard.writeText(messageText.value.innerText)
    setTimeout(() => {
      tooltip.value = false
    }, 2000)
  } catch (error) {
    console.log(error.message)
  }
}

const closeModal = () => {
  viewModal.value = false
  tooltip.value = false
}
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

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: $white;
  padding: 20px;
  border-radius: 6px;
  z-index: 1000;
  box-shadow: $shadow;
  transition: $tr;
}

.modal-outlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: $modal;
  z-index: 1000;
}

.modal__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-button {
  position: relative;
  margin-left: 20px;

  &::before {
    position: absolute;
    content: 'Скопировано!';
    top: -50px;
    right: 0;
    z-index: 1000;
    padding: 8px 12px;
    font-size: 13px;
    border-radius: 6px;
    background-color: $light;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }

  &::after {
    position: absolute;
    content: '';
    top: -28px;
    right: 16px;
    transform: rotate(45deg);
    z-index: 999;
    width: 16px;
    height: 16px;
    background-color: $light;
    display: none;
  }

  &.active::before,
  &.active::after {
    display: block;
  }
}

.close-modal {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  background-color: $accent;
  color: $white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 6px;
}
</style>
