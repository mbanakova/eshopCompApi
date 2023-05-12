<template>
  <main class="rules container">
    <h1 class="section-title section-title--center">Правила публикации отзывов</h1>
    <div class="rules__text">
      <p class="text">Конечно, никаких «правил публикации» у меня нет.</p>
      <p class="text">
        Если отзыв мне понравится — я его опубликую. Если не понравится — не опубликую, или поменяю
        и тогда опубликую 😁
      </p>
    </div>
    <a class="button button--error" @click="$router.go(-1)">Понятно, сейчас так везде</a>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.rules {
  max-width: 550px;
  display: flex;
  flex-direction: column;
}
.rules__text {
  margin-bottom: 30px;
}

.button {
  align-self: center;
}
</style>
