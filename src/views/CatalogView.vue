<template>
  <main class="container">
    <section class="products">
      <h2 class="section-title">Продукты:</h2>
      <p class="text products__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium consequuntur
        maxime vero autem deleniti dolorum commodi soluta incidunt aliquid architecto nisi
        voluptates fugiat sunt aliquam, corrupti ut eos. Fugit veniam inventore quod omnis id?
      </p>
      <ProductsList />
    </section>
  </main>
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
