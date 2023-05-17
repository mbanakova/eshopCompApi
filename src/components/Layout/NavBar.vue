<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container navbar__container">
        <select class="navbar-brand">
          <option value="RU">Ru</option>
          <option value="EN">EN</option>
        </select>
        <div class="navbar__start">
          <!-- <button class="button button--warning" @click="logOut">
            Log out
            {{ authStore.userData.email }}
          </button> -->
          <div class="navbar-brand">
            <div class="navbar-item">Мой магаз</div>
          </div>
        </div>
        <button
          v-if="menuStore.isMobile"
          class="navbar__burger"
          :class="{ 'navbar__burger--open': menuStore.menuOpen }"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="menuStore.toggleMenu"
        >
          <div class="bar"></div>
        </button>
        <div
          class="navbar__links"
          :class="{ 'navbar__links--open': menuStore.menuOpen }"
          ref="navBarMenuRef"
        >
          <RouterLink to="/" class="nav-link" active-class="is-active" @click="menuStore.toggleMenu"
            >Главная</RouterLink
          >
          <RouterLink
            to="/catalog"
            class="nav-link"
            active-class="is-active"
            @click="menuStore.toggleMenu"
            >Каталог</RouterLink
          >
          <RouterLink
            to="/contacts"
            class="nav-link"
            active-class="is-active"
            @click="menuStore.toggleMenu"
            >Контакты</RouterLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useMenuStore } from '@/stores/menu.js'
const menuStore = useMenuStore()
const showMobileNav = ref(false)

const navBarMenuRef = ref(null)
const navBarBurgerRef = ref(null)

onClickOutside(
  navBarMenuRef,
  () => {
    showMobileNav.value = false
  },
  {
    ignore: [navBarBurgerRef]
  }
)

// const logOut = () => {
//   authStore.logoutUser()
//   showMobileNav.value = false
// }
</script>

<style lang="scss" scoped>
.header {
  background-color: $dark;
  color: $white;
  padding: 10px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
}
.navbar {
  width: 100%;
}
.navbar__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 20px;
}
.navbar__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: 1px solid $white;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  transition: $tr;

  & .bar {
    position: relative;
    width: 16px;
    height: 1px;
    background-color: $white;
    transition: $tr;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 16px;
      height: 1px;
      top: -6px;
      left: 0;
      background-color: $white;
    }

    &::after {
      top: 6px;
    }
  }

  &--open {
    & .bar {
      transform: rotate(135deg);
      left: 0;

      &::before {
        transform: rotate(90deg);
        left: 0;
        top: 0;
      }

      &::after {
        opacity: 0;
      }
    }
  }
}

.navbar__links {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: $mobile) {
    display: none;
    transition: opacity 0.8s 0.6s, clip-path 0.6s 0.4s;

    &--open {
      display: flex;
      position: absolute;
      padding: 30px 0;
      top: 45px;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: $bright;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from {
    clip-path: circle(100px at top right);
    opacity: 0;
  }
  .mobile-nav-enter-to {
    opacity: 1;
    clip-path: circle(100% at center);
  }

  .mobile-nav-leave-to {
    opacity: 0;
  }
}
</style>
