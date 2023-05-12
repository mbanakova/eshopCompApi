<template>
  <section class="products">
    <h2 class="section-title">Продукты:</h2>
    <p class="text products__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium consequuntur maxime
      vero autem deleniti dolorum commodi soluta incidunt aliquid architecto nisi voluptates fugiat
      sunt aliquam, corrupti ut eos. Fugit veniam inventore quod omnis id?
    </p>
    <h3 class="block-title">Топ 3:</h3>
    <ProductsList />
    <RouterLink class="button product__button" to="/catalog">Все продукты</RouterLink>
  </section>
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue'
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  & .button {
    margin: 0 auto;
  }
}

.products__text {
  margin-bottom: 20px;
}

.product__button {
  align-self: center;
}
</style>
