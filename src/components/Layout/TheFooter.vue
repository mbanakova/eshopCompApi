<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__top">
        <div class="footer__address">
          <h3 class="footer__title">Адрес:</h3>
          <p class="footer__text">141402, МO, г. Химки, ул. Репина, д. 34, 6 этаж, 615</p>
        </div>

        <div class="footer__sitemap">
          <h3 class="footer__title">Карта сайта:</h3>
          <ul class="footer__links">
            <li><RouterLink class="footer__link" to="/">Главная</RouterLink></li>
            <li>
              <RouterLink class="footer__link" to="/catalog">Каталог</RouterLink>
            </li>
            <li><RouterLink class="footer__link" to="/contacts">Контакты</RouterLink></li>
          </ul>
        </div>
        <div class="footer__contacts">
          <h3 class="footer__title">Контакты:</h3>
          <ul class="footer__links">
            <li>
              <a class="footer__link" href="mailto:xxx@henderson.ru">&#9993; xxx@henderson.ru</a>
            </li>
            <li><a class="footer__link" href="tel:70xxx">&#9742; 70xxx</a></li>
          </ul>
        </div>
      </div>
      <p class="footer__bottom">©{{ year }} This is a Vue.js 3 Composition API website</p>
    </div>
  </footer>
</template>

<script setup>
const date = new Date()
const year = date.getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  background-color: $dark;
  color: $white;
  padding: 30px 0;
  font-size: 14px;
}

.footer__container {
  display: flex;
  flex-direction: column;
}

.footer__top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
}

.footer__title {
  margin: 0 0 20px;
}

.footer__links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  color: $white;
}

.footer__link {
  color: inherit;
  padding: 5px;
  text-decoration: none;
  display: block;
}

.footer__bottom {
  align-self: flex-end;
  margin: 0;
  font-size: 12px;
}
</style>
