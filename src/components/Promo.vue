<template>
  <section class="promo">
    <div class="container promo__container">
      <h1 class="promo__text tilt-in-top-1">
        <span class="promo__text_big">The brand</span>
        <br />
        of luxerious
        <span class="promo__text_bright">fashion</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;
.promo {
  background: #f1e4e6;
}

.promo__container {
  display: flex;
  align-items: center;
  min-height: 764px;
  @media (max-width: 1200px) {
    min-height: 367.57px;
  }
  justify-content: flex-end;
  background-image: url("../assets/img/man.png");
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 765px) {
    background-image: none;
    justify-content: center;
  }
}

.promo__text {
  width: 406px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #222222;
  position: relative;
  margin-right: 105px;
  @media (max-width: 1200px) {
    font-size: 24px;
    width: 311px;
    margin-left: 0;
    margin-right: 0;
    line-height: 29px;
  }
  @media (max-width: 765px) {
    font-size: 20px;
    line-height: 24px;
    width: 236px;
  }
}

.promo__text_big {
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  @media (max-width: 1200px) {
    font-size: 44px;
    line-height: 53px;
  }
  @media (max-width: 765px) {
    font-size: 38px;
    line-height: 46px;
  }
}

.promo__text_bright {
  color: $main-color;
}

.promo__text::before {
  content: "";
  display: block;
  background: $main-color;
  width: 12px;
  height: 92px;
  position: absolute;
  left: -28px;
  @media (max-width: 765px) {
    height: 61px;
    top: 6px;
  }
}
</style>