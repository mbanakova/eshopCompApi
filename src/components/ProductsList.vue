<template>
  <ul class="products__list">
    <li class="product" v-for="product in products" :key="product.id">
      <RouterLink class="product__link" :to="`/product/${product.id}`">
        <div class="product__img">
          <img :src="vImgSrc(product.img)" :alt="product.title" />
        </div>
        <h4 class="product__title">{{ product.title }}</h4>
        <p class="product__color">
          <span class="product__color-code" :style="{ backgroundColor: product.colorCode }"></span
          >{{ product.color }}
        </p>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'
import { vImgSrc } from '@/directives/vImgSrc.js'

const props = defineProps(['limit'])

const productsStore = useProductsStore()
const products = productsStore.products.slice(0, props.limit)
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-direction: column;
}
.product__title {
  margin: 0 0 5px;
}

.product__color {
  margin: 0;
  font-size: 14px;
  color: $dark;
  display: flex;
  align-self: center;
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
</style>
