<template>
  <section class="products">
    <h2 class="section-title">Продукты:</h2>
    <p class="text products__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium consequuntur maxime
      vero autem deleniti dolorum commodi soluta incidunt aliquid architecto nisi voluptates fugiat
      sunt aliquam, corrupti ut eos. Fugit veniam inventore quod omnis id?
    </p>
    <h3 class="block-title">Топ 3:</h3>
    <ul class="products__list">
      <li class="product">
        <a class="product__link" href="#">
          <div class="product__img">
            <img src="./../assets/img/p1.png" alt="" />
          </div>
          <h4 class="product__title">Good 1</h4></a
        >
      </li>
      <li class="product">
        <a class="product__link" href="#">
          <div class="product__img">
            <img src="./../assets/img/p2.png" alt="" />
          </div>
          <h4 class="product__title">Good 2</h4></a
        >
      </li>
      <li class="product">
        <a class="product__link" href="#">
          <div class="product__img">
            <img src="./../assets/img/p3.png" alt="" />
          </div>
          <h4 class="product__title">Good 3</h4></a
        >
      </li>
    </ul>
    <button class="button product__button">Все продукты</button>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.products {
  & .button {
    margin: 0 auto;
  }
}

.products__text {
  margin-bottom: 20px;
}
.products__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  list-style: none;
  margin: 0 0 40px;
  padding: 0;
}
.product__link {
  text-decoration: none;
  text-align: center;
  color: inherit;
}
.product__title {
  margin: 0;
}

.product__button {
  margin: 0 auto;
}
</style>
