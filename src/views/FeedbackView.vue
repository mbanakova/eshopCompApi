<template>
  <main class="container feedback">
    <div class="feedback__img">
      <img :src="vImgSrc(product.img)" :alt="product.title" width="100" />
    </div>
    <div class="feedback__content">
      <h1 class="section-title">Отзыв о товаре {{ product.title }}, цвет «{{ product.color }}»:</h1>
      <form class="form feedback__form" @submit.prevent="submitFeedback">
        <div class="form__unit">
          <legend class="form__title">Оценка:</legend>
          <div class="form__stars">
            <input
              class="form__star"
              type="radio"
              value="5"
              aria-label="Ужасно"
              v-model="userFeedback.rate"
            />
            <input
              class="form__star"
              type="radio"
              value="4"
              aria-label="Плохо"
              v-model="userFeedback.rate"
            />
            <input
              class="form__star"
              type="radio"
              value="3"
              aria-label="Так себе"
              v-model="userFeedback.rate"
            />
            <input
              class="form__star"
              type="radio"
              value="2"
              aria-label="Хорошо"
              v-model="userFeedback.rate"
            />
            <input
              class="form__star"
              type="radio"
              value="1"
              aria-label="Отлично"
              v-model="userFeedback.rate"
            />
          </div>
        </div>
        <div class="form__unit">
          <legend class="form__title">Комментарий:</legend>
          <textarea
            class="form__textarea"
            maxlength="300"
            rows="5"
            v-model="userFeedback.comment"
          ></textarea>
        </div>
        <div class="form__unit">
          <legend class="form__title">Подпись:</legend>
          <input class="form__input" type="text" v-model="userFeedback.username" />
        </div>
        <div class="form__unit">
          <input
            class="form__input"
            id="rulesConfirmed"
            type="checkbox"
            v-model="userFeedback.rulesConfirmed"
          />
          <label for="rulesConfirmed"
            >Я соглашаюсь с <RouterLink to="/rules">правилами публикации</RouterLink></label
          >
        </div>
        <button class="form__submit button button--success" type="submit">Отправить</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useFeedbacksStore } from '@/stores/feedbacks'
import { vImgSrc } from '@/directives/vImgSrc.js'

const products = useProductsStore()
const feedbacks = useFeedbacksStore()
const route = useRoute()
const router = useRouter()

const routeId = route.params.id
const product = products.getProduct(routeId)

const date = new Date()
const timestamp = date.toLocaleString().replace(',', '')
const id = date.valueOf()

const userFeedback = reactive({
  productId: routeId,
  id,
  timestamp,
  rate: '',
  comment: '',
  username: '',
  rulesConfirmed: true
})

const submitFeedback = () => {
  feedbacks.addFeedback(userFeedback)
  router.push(`/reviews/${routeId}`)
}
</script>

<style lang="scss" scoped>
.feedback {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.feedback__content {
  max-width: 600px;
  width: 100%;
}

.feedback__img {
  & img {
    max-width: 200px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form__title {
  font-size: 18px;
  margin: 0;
  color: $accent;
}

.form__textarea,
input[type='text'] {
  width: 100%;
  outline: none;
  border: 1px solid $border;
  border-radius: 4px;
  padding: 5px 10px;
  resize: none;
}
.form__stars {
  position: relative;
  width: 125px;
  height: 25px;
  background-image: url('./../assets/img/star-grey.svg');
  background-size: 25px 25px;
  background-repeat: repeat-x;

  &:focus-within {
    outline-offset: 1px;
  }
}

.form__star {
  margin: 0;
  padding: 0;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  font-size: inherit;
  background-repeat: repeat-x;

  &:nth-last-of-type(1) {
    z-index: 5;
    width: 25px;
  }

  &:nth-last-of-type(2) {
    z-index: 4;
    width: 50px;
  }

  &:nth-last-of-type(3) {
    z-index: 3;
    width: 75px;
  }

  &:nth-last-of-type(4) {
    z-index: 2;
    width: 100px;
  }

  &:nth-last-of-type(5) {
    z-index: 1;
    width: 125px;
  }

  &:checked,
  &:hover {
    background-image: url('./../assets/img/star.svg');
    background-size: 25px 25px;
    transition: $tr;
  }
}

.form__submit {
  align-self: flex-start;
}
</style>
