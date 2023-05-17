import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  let menuOpen = ref(false)
  let isMobile = ref(false)
  const body = document.querySelector("body")

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    body.classList.toggle("scroll-lock");
  }

  const checkScreenWidth = () => {
    const MOBILE_WIDTH_MAX = 767

    if (window.innerWidth <= MOBILE_WIDTH_MAX) {
      isMobile.value = true
    } else {
      body.classList.remove("scroll-lock");
      isMobile.value = false
      menuOpen.value = false
    }
  }


  return { menuOpen, isMobile, body, toggleMenu, checkScreenWidth }
})
