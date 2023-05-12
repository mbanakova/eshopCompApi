<template>
  <NavBar></NavBar>

  <RouterView />
  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');
</style>
