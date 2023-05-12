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
        <div
          class="navbar__links"
          :class="{ 'navbar__links--open': showMobileNav }"
          ref="navBarMenuRef"
        >
          <RouterLink
            to="/"
            class="nav-link"
            active-class="is-active"
            @click="showMobileNav = false"
            >Главная</RouterLink
          >
          <RouterLink
            to="/catalog"
            class="nav-link"
            active-class="is-active"
            @click="showMobileNav = false"
            >Каталог</RouterLink
          >
          <RouterLink
            to="/contacts"
            class="nav-link"
            active-class="is-active"
            @click="showMobileNav = false"
            >Контакты</RouterLink
          >
        </div>
        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--open': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="toggleMobileNav"
          ref="navBarBurgerRef"
        >
          <div class="bar"></div>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
// import { useAuthStore } from '@/stores/authStore.js'
// const authStore = useAuthStore()
const showMobileNav = ref(false)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}

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

  &--open {
    position: absolute;
    top: 40px;
    padding: 30px 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $bright;
    flex-direction: column;
    align-items: center;
  }
}
</style>
