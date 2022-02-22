<template>
  <header-shop />
  <router-view />
  <footer-shop />
</template>

<script>
import HeaderShop from "./components/Header.vue";
import FooterShop from "./components/Footer.vue";
export default {
  components: { HeaderShop, FooterShop },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}
::-webkit-details-marker {
  display: none;
}
summary {
  display: block;
}
</style>
