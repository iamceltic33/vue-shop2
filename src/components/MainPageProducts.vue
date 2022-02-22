<template>
  <section class="products">
    <div class="container">
      <h2 class="products__title">Featured Items</h2>
      <p class="products__description">
        Shop for items based on what we featured in this week
      </p>
      <div class="products__card-box">
        <product-card
          v-for="(item, index) in products"
          :key="index"
          :item="item"
        />
      </div>
      <div class="products__link-box">
        <router-link class="products__link" to="/catalog"
          >Browse All Product</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  computed: {
    products() {
      console.log(this.$store.getters);
      return this.$store.getters.getCatalog;
    },
  },
};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;
.products {
  padding-bottom: 95px;
  @media (max-width: 1200px) {
    padding-bottom: 64px;
  }
  @media (max-width: 765px) {
    padding-bottom: 95px;
  }
}

.products__title {
  font-size: 30px;
  line-height: 36px;
  text-align: center;
}

.products__description {
  font-size: 14px;
  line-height: 17px;
  color: #9f9f9f;
  text-align: center;
}

.products__card-box {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 1200px) {
    gap: 16px;
  }
}

.products__link {
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  color: #f26376;
  padding: 15px 39px;
  border: 1px solid;
  display: inline-block;
  transition: background-color 0.6s, color 0.6s;
}

.products__link:hover {
  background-color: $main-color;
  color: #fff;
}
</style>