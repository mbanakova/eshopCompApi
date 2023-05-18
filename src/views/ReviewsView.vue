<template>
  <main class="reviews container">
    <h1 class="section-title">Отзывы на товар «{{ product.title }} {{ product.color }}»</h1>
    <div class="rates">
      <div class="rates__filter filter">
        <h3 class="filter__title">Фильтровать по:</h3>
        <button class="filter__button filter__button--active">дате</button>
        <button class="filter__button">оценке</button>
      </div>
      <ul class="rates__list">
        <li class="rates__item rate" v-for="review in productReviews" :key="review.id">
          <div class="rate__top">
            <h3 class="rate__user">{{ review.username }}</h3>
            <p class="rate__timestamp">{{ review.timestamp }}</p>
            <p class="rate__user-rate">{{ review.rate }}</p>
          </div>
          <p class="rate__comment">{{ review.comment }}</p>
        </li>
      </ul>
    </div>
    <div class="total">
      <div class="total__top">
        <div class="total__stars"></div>
        <div class="total__rate">4.85 / 5</div>
      </div>
      <ul class="total__bottom">
        <li class="total__rate">
          <h5 class="total__star">5 звёзд</h5>
          <div class="total__bar"><div class="total__progress"></div></div>
          <div class="total__counter">6</div>
        </li>
        <li class="total__rate">
          <h5 class="total__star">4 звёзды</h5>
          <div class="total__bar"><div class="total__progress"></div></div>
          <div class="total__counter">3</div>
        </li>
        <li class="total__rate">
          <h5 class="total__star">3 звёзды</h5>
          <div class="total__bar"><div class="total__progress"></div></div>
          <div class="total__counter">0</div>
        </li>
        <li class="total__rate">
          <h5 class="total__star">2 звёзды</h5>
          <div class="total__bar"><div class="total__progress"></div></div>
          <div class="total__counter">0</div>
        </li>
        <li class="total__rate">
          <h5 class="total__star">1 звёзда</h5>
          <div class="total__bar"><div class="total__progress"></div></div>
          <div class="total__counter">1</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useFeedbacksStore } from '@/stores/feedbacks'

const route = useRoute()
const products = useProductsStore()
const reviews = useFeedbacksStore()

const routeId = route.params.id
const product = products.getProduct(routeId)
const productReviews = reviews.getFeedback(routeId)
</script>

<style lang="scss" scoped>
.reviews {
  display: grid;
  grid-template-areas:
    'title   .'
    'rates   total'
    'rates   .';
  grid-column-gap: 30px;
}

.section-title {
  grid-area: title;
}

.rates {
  grid-area: rates;
}

.total {
  grid-area: total;
  box-shadow: $shadow;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
.rates__filter {
  margin-bottom: 20px;
}
.filter {
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: $accent;
  padding: 10px 20px;
  border-radius: 6px;
  color: $white;
}

.filter__title {
  margin: 0;
  font-size: 16px;
}

.filter__button {
  background-color: transparent;
  border: none;
  outline: none;
  color: $border;
  cursor: pointer;
  font-weight: 700;

  &--active {
    color: $bright;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

.rates__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rate {
  box-shadow: $shadow;
  padding: 20px;
  border-radius: 8px;
}

.rate__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rate__user {
  margin: 0 auto 0 0;
  color: $light;
  font-size: 20px;
}

.rate__timestamp {
  margin-right: 30px;
  color: $gray;
}

.rate__user-rate {
  font-size: 30px;
  color: $bright;
  margin: 0;
}

.rate__comment {
  margin: 0;
}

.total__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.total__stars {
  width: 125px;
  height: 25px;
  background-image: url('./../assets/img/star.svg');
  background-size: 25px 25px;
  background-repeat: repeat-x;
}

.total__bottom {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.total__rate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.total__bar {
  position: relative;
  height: 5px;
  flex-grow: 1;
  background-color: $border;
}

.total__progress {
  position: absolute;
  left: 0;
  top: 0;
  height: inherit;
  width: 90%;
  background-color: $bright;
}

.total__star {
  margin: 0;
}
</style>
