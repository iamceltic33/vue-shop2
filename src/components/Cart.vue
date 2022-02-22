<template>
  <breadcrumb>SHOPPING CART</breadcrumb>
  <section class="cart">
    <div class="cart__container container">
      <div class="cart__goods">
        <div class="cart__goods-box">
          <h2 class="hidden">Goods</h2>
          <div
            class="cart__goods-item"
            v-for="(item, index) in products"
            :key="index"
          >
            <img :src="item.image" alt="Товар" class="cart__image" />

            <div class="cart__good-info">
              <h3 class="cart__good-title">{{ item.title }}</h3>
              <p class="cart__info-text">
                Price: <span class="cart__price-value">${{ item.price }}</span>
              </p>
              <div class="cart__info-text">
                Quantity:
                <input
                  type="number"
                  class="cart__quantity-input"
                  v-model="item.count"
                />
              </div>
              <button
                class="cart__close-button"
                type="button"
                v-on:click="removeFromCart(item.id)"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="cart__buttons" v-if="products.length > 0">
          <button class="cart__button" type="button" @click="clearCart">
            Clear shopping cart
          </button>
          <button class="cart__button" type="button">Continue shopping</button>
        </div>
      </div>
      <form action="#" class="cart__form">
        <h2 class="cart__form-heading">Shipping Address</h2>
        <div class="cart__form-content">
          <div class="cart__input-box">
            <input
              type="text"
              class="cart__form-input"
              placeholder="Country"
              required
            />
            <input
              type="text"
              class="cart__form-input"
              placeholder="State"
              required
            />
            <input
              type="text"
              class="cart__form-input"
              placeholder="Postcode / Zip"
              required
            />
            <button type="button" class="cart__shipping-button cart__button">
              Get a Quote
            </button>
          </div>
          <div class="cart__form-totals">
            <p class="cart__sub-total">
              sub total <span class="cart__totals-value">${{ totalSum }}</span>
            </p>
            <p class="cart__grand-total">
              Grand total
              <span class="cart__totals-value cart__grand-total-value"
                >${{ totalSum }}</span
              >
            </p>
            <button type="submit" class="cart__checkout-button cart__button">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  <feedback />
</template>

<script>
import Breadcrumb from "./Breadcrumb.vue";
import Feedback from "./Feedback.vue";
export default {
  components: { Feedback, Breadcrumb },
  computed: {
    products() {
      return this.$store.getters.getCart;
    },
    totalSum() {
      let total = 0;
      this.products.forEach((element) => {
        total += element.price * element.count;
      });
      return total;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;

.page-title {
  background: $main-background-color;
  padding: 60px 0;
  &__heading {
    font-size: 24px;
    line-height: 29px;
    color: $main-color;
    text-transform: uppercase;
    @media (max-width: 765px) {
      text-align: center;
    }
  }
}

.cart {
  padding: 96px 0 128px;
  @media (max-width: 1200px) {
    padding-top: 60px;
  }
  @media (max-width: 765px) {
    padding: 39px 0 96px;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__image {
    display: block;
    height: 100%;
    @media (max-width: 765px) {
      height: 188px;
    }
  }
  &__goods {
    margin-right: 128px;
    flex-grow: 1;
    @media (max-width: 1200px) {
      margin-right: 0;
    }
  }

  &__goods-box {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__goods-item {
    display: flex;
    position: relative;
    box-shadow: 17px 19px 24px rgba(0, 0, 0, 0.13);
    width: 652px;
    @media (max-width: 765px) {
      width: 100%;
      padding-right: 15px;
    }
  }
  &__good-info {
    padding: 22px;
    @media (max-width: 765px) {
      padding: 14px;
      flex-grow: 1;
    }
  }
  &__info-text {
    font-size: 22px;
    line-height: 26px;
    color: #575757;
    margin-bottom: 8px;
    @media (max-width: 765px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 4px;
    }
  }
  &__good-title {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 42px;
    @media (max-width: 765px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 25px;
    }
  }
  &__form {
    min-width: 360px;
    @media (max-width: 1200px) {
      padding-top: 63px;
      width: 100%;
      &-content {
        display: flex;
        padding-top: 20px;
        gap: 15px;
        align-items: start;
        @media (max-width: 765px) {
          display: block;
        }
      }
    }
  }

  &__quantity-input {
    width: 44px;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    @media (max-width: 765px) {
      font-size: 10px;
    }
  }
  &__price-value {
    color: $main-color;
  }
  &__close-button {
    position: absolute;
    top: 22px;
    right: 22px;
    font-size: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    @media (max-width: 765px) {
      font-size: 12px;
      top: 12px;
      right: 12px;
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    padding-top: 89px;
    @media (max-width: 1200px) {
      padding-top: 62px;
      justify-content: center;
      gap: 48px;
    }
    @media (max-width: 765px) {
      gap: 9px;
    }
  }
  &__button {
    padding: 16px 40px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    background: transparent;
    border: 1px solid #4a4a4a;
    cursor: pointer;
    text-transform: uppercase;
    color: #4a4a4a;
    @media (max-width: 765px) {
      font-size: 12px;
      padding: 9px;
    }
  }

  &__form-heading {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
  }

  &__input-box {
    display: flex;
    margin-top: 20px;
    margin-bottom: 69px;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1200px) {
      margin: 0;
      flex-grow: 1;
      width: calc(50% - 40px);
    }
    @media (max-width: 765px) {
      width: 100%;
      margin-bottom: 48px;
    }
  }
  &__form-input {
    padding: 16px 17px;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
    border: 1px solid;
  }
  &__shipping-button {
    align-self: start;
    font-size: 11px;
    padding: 10px 15px;
  }
  &__form-totals {
    background: #f5f3f3;
    text-align: right;
    display: flex;
    flex-direction: column;
    padding: 40px 34px 42px;
    text-transform: uppercase;
    @media (max-width: 1200px) {
      flex-grow: 1;
    }
  }
  &__sub-total {
    font-size: 11px;
    line-height: 13px;
    color: #4a4a4a;
    margin-bottom: 19px;
  }
  &__grand-total {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    &::after {
      content: "";
      display: block;
      border-top: 1px solid #e2e2e2;
      margin: 21px auto 17px;
    }
  }
  &__totals-value {
    margin-left: 22px;
  }
  &__grand-total-value {
    font-weight: bold;
    color: $main-color;
  }
  &__checkout-button {
    background: $main-color;
    color: #ffffff;
    border: none;
  }
}
</style>