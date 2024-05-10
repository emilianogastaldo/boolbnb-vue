<script>
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './data/store';
export default {
  name: 'BoolBnb',
  components: { AppLoader, AppHeader, AppFooter },
  data: () => ({
    store
  })
}
</script>

<template>
  <AppLoader v-if="store.isLoading" />
  <AppHeader />
  <div class="main" v-show="!store.isLoading">
    <!-- pagine -->
    <RouterView />
    <AppFooter />
  </div>

</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
