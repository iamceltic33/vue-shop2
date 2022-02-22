<template>
  <breadcrumb :additionalInfo="true">NEW ARRIVALS</breadcrumb>
  <section class="products products_with-pagination">
    <h2 class="hidden">Products</h2>
    <div class="container">
      <div class="products__controls">
        <details class="products__filter">
          <summary class="products__filter-title">
            <span class="products__filter-text">Filter</span>
          </summary>
          <div class="products__filter-content">
            <details class="products__filter-types" open>
              <summary class="products__filter-types-title">Category</summary>
              <ul class="products__filter-values">
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Accessories</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Bags</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Denim</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link"
                    >Hoodies & Sweatshirts</a
                  >
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Jackets & Coats</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Polos</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Shirts</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Shoes</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Sweaters & Knits</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">T-Shirts</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Tanks</a>
                </li>
              </ul>
            </details>
            <details class="products__filter-types">
              <summary class="products__filter-types-title">Brand</summary>
              <ul class="products__filter-values">
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Accessories</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Bags</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Denim</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link"
                    >Hoodies & Sweatshirts</a
                  >
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Jackets & Coats</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Polos</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Shirts</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Shoes</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Sweaters & Knits</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">T-Shirts</a>
                </li>
                <li class="products__filter-item">
                  <a href="#" class="products__filter-link">Tanks</a>
                </li>
              </ul>
            </details>
            <details class="products__filter-types">
              <summary class="products__filter-types-title">Designer</summary>
            </details>
          </div>
        </details>

        <ul class="sort-list">
          <li class="sort-item">
            <button class="drop-down-button">Trending now</button>
          </li>
          <li class="sort-item">
            <!-- <button class="drop-down-button">Size</button> -->
            <details class="sort-details">
              <summary class="drop-down-button">Size</summary>
              <ul class="sort-details-list">
                <li class="sort-details-item">
                  <label
                    ><input
                      class="sort-details-checkbox"
                      type="checkbox"
                    />XS</label
                  >
                </li>
                <li class="sort-details-item">
                  <label
                    ><input
                      class="sort-details-checkbox"
                      type="checkbox"
                    />S</label
                  >
                </li>
                <li class="sort-details-item">
                  <label
                    ><input
                      class="sort-details-checkbox"
                      type="checkbox"
                    />M</label
                  >
                </li>
                <li class="sort-details-item">
                  <label
                    ><input
                      class="sort-details-checkbox"
                      type="checkbox"
                    />L</label
                  >
                </li>
              </ul>
            </details>
          </li>
          <li class="sort-item">
            <button class="drop-down-button">Price</button>
          </li>
        </ul>
      </div>
      <div class="products__card-box products__card-box_after-control">
        <product-card
          v-for="(item, index) in products"
          :key="index"
          :item="item"
        />
      </div>
      <div class="products__pagination">
        <nav class="products__pagination-nav">
          <ul class="products__pagination-list">
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link products__link-back">
                <img
                  :src="require('../assets/img/arrow-prev.png')"
                  alt="Предыдущий"
                  class="arrow-prev"
                />
              </a>
            </li>
            <li class="products__pagination-item">
              <a
                href="#"
                class="
                  products__pagination-link products__pagination-link_current
                "
                >1</a
              >
            </li>
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link">2</a>
            </li>
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link">3</a>
            </li>
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link">4</a>
            </li>
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link">5</a>
            </li>
            <li class="products__pagination-item">
              <a href="#" class="products__pagination-link products__link-rest"
                >6.....20</a
              >
            </li>
            <li class="products__pagination-item">
              <a
                href="#"
                class="products__pagination-link products__link-forward"
              >
                <img
                  :src="require('../assets/img/arrow-next.png')"
                  alt="Следующий"
                  class="arrow-next"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <features />
  <feedback />
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Feedback from "./Feedback.vue";
import Features from "./Features.vue";
import Breadcrumb from "./Breadcrumb.vue";
export default {
  components: { ProductCard, Feedback, Features, Breadcrumb },
  computed: {
    products() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;
.products__controls {
  padding-top: 35px;
  display: flex;
  gap: 30px;
  @media (max-width: 1200px) {
    justify-content: space-between;
    padding-top: 11px;
  }
}

.sort-list {
  display: flex;
  list-style: none;
  padding-top: 15px;
  gap: 28px;
  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
  @media (max-width: 765px) {
    gap: 24px;
  }
}
.products__filter {
  width: 360px;
  position: relative;
  @media (max-width: 765px) {
    width: 37.5px;
  }
  &-title {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    text-align: left;
    padding: 15px;
    &::after {
      content: "";
      display: inline-block;
      background-image: url("../assets/img/filter-icon.svg");
      background-repeat: no-repeat;
      width: 15px;
      height: 10px;
      margin-left: 11px;
      @media (max-width: 765px) {
        width: 37.5px;
        height: 25px;
        background-size: 100% 100%;
        margin-left: 0;
      }
    }
    @media (max-width: 765px) {
      padding: 15px 0 0;
    }
  }
  &-types {
    margin-bottom: 18px;
  }
  &-types-title {
    display: block;
    color: $main-color;
    text-transform: uppercase;
    border-bottom: 1px solid #ebebeb;
    padding: 15px;
    border-left: 5px $main-color solid;
  }
  &-content {
    position: absolute;
    z-index: 1000;
    background-color: #fff;
    width: 100%;
    padding: 15px;
    @media (max-width: 765px) {
      width: 360px;
    }
  }
  &-item {
    padding: 8px 0;
  }
  &-link {
    padding: 8px 0;
    color: #6f6e6e;
  }
  &-values {
    padding: 15px;
  }
}

.products__filter[open] {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  & .products__filter-content {
    box-shadow: 4px 8px 8px 0px rgba(34, 60, 80, 0.2);
  }
  @media (max-width: 765px) {
    box-shadow: none;
  }
}
.sort-details {
  position: relative;
  &-list {
    position: absolute;
    z-index: 100;
    padding: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 79px;
    color: #6f6e6e;
  }
  &-checkbox {
    margin-right: 9px;
  }
}
.sort-details[open] .sort-details-list {
  box-shadow: 4px 8px 8px 0px rgba(34, 60, 80, 0.2);
}
.drop-down-button {
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 17px;
  color: #6f6e6e;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  @media (max-width: 765px) {
    font-size: 12px;
  }
}

.drop-down-button::after {
  content: "";
  display: inline-block;
  background-image: url("../assets/img/arrow-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 10px;
  height: 5px;
  margin-left: 11px;
}

.products__pagination-nav {
  margin-top: 48px;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
}

.products__pagination-list {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
}

.products__pagination-link {
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #c4c4c4;
  padding: 10px;
}

.products__pagination-link_current {
  color: #ef5b70;
}

@media (max-width: 1200px) {
  .products__card_hide {
    display: none;
  }
  .products__filter-text {
    display: none;
  }
  .products__card-box_after-control {
    margin-top: 32px;
  }
  .products_with-pagination {
    padding-bottom: 64px;
  }
}
</style>