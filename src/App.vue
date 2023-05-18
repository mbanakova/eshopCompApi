<template>
  <NavBar></NavBar>

  <router-view v-slot="{ Component }">
    <transition name="router"> <component :is="Component" /> </transition
  ></router-view>
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useMenuStore } from './stores/menu'
import NavBar from '@/components/Layout/NavBar.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
const store = useMenuStore()
store.checkScreenWidth() // контролирует бургер-меню и body-scroll-lock при открытом меню
window.addEventListener('resize', store.checkScreenWidth)
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');

.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}

.router-enter-active {
  transition: all 1s ease;
}
</style>
