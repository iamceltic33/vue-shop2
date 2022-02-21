<template>
  <div class="main-page">
    <promo />
    <categories />
    <main-page-products :products="products" />
    <features />
    <feedback />
  </div>
</template>

<script>
import promo from "./Promo.vue";
import categories from "./Categories.vue";
import features from "./Features.vue";
import mainPageProducts from "./MainPageProducts.vue";
import feedback from "./Feedback.vue";
export default {
  props: ["products"],
  components: { promo, categories, features, mainPageProducts, feedback },
};
</script>

<style lang="scss">
</style>