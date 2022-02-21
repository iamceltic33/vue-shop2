<template>
  <header-shop />
  <router-view :products="goods" />
  <footer-shop />
</template>

<script>
import HeaderShop from "./components/Header.vue";
import FooterShop from "./components/Footer.vue";
export default {
  components: { HeaderShop, FooterShop },
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 152,
          image: require("./assets/img/product1.png"),
        },
        {
          id: 2,
          title: "ELLERY X M'O 2",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 182,
          image: require("./assets/img/product2.png"),
        },
        {
          id: 3,
          title: "ELLERY X M'O 3",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 520,
          image: require("./assets/img/product3.png"),
        },
        {
          id: 4,
          title: "ELLERY X M'O 4",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 250,
          image: require("./assets/img/product4.png"),
        },
        {
          id: 5,
          title: "ELLERY X M'O 5",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 342,
          image: require("./assets/img/product5.png"),
        },
        {
          id: 6,
          title: "ELLERY X M'O 6",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 140,
          image: require("./assets/img/product6.png"),
        },
      ],
    };
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
