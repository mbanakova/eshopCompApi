<template>
  <CssLoader v-if="isLoading" />
  <ul v-else class="products__list">
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
import { ref, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import { vImgSrc } from '@/directives/vImgSrc.js'
import CssLoader from '@/components/CssLoader.vue'

const props = defineProps(['limit'])
const productsStore = useProductsStore()

let isLoading = ref(false)
const products = ref([])

const loadProducts = async () => {
  isLoading.value = true
  try {
    products.value = await productsStore.getProductsList(0, props.limit)
  } catch (error) {
    console.log(error.message)
  }
  isLoading.value = false
  return products
}

onMounted(() => {
  loadProducts()
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  position: relative;
}

.product__img {
  position: relative;
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
