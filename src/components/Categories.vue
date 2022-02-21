<template>
  <section class="categories">
    <div class="container">
      <div class="categories__card-box">
        <h2 class="hidden">Categories</h2>
        <div class="categories__card card-women">
          <p class="categories__info">30% off</p>
          <h3 class="categories__title">For women</h3>
        </div>
        <div class="categories__card card-men">
          <p class="categories__info">Hot deal</p>
          <h3 class="categories__title">For men</h3>
        </div>
        <div class="categories__card card-kids">
          <p class="categories__info">New arrivals</p>
          <h3 class="categories__title">For kids</h3>
        </div>
      </div>
      <div class="categories__special">
        <p class="categories__info">Luxirous & trendy</p>
        <h3 class="categories__title">Accesories</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;

.categories {
  padding: 65px 0 96px;
  @media (max-width: 1200px) {
    padding: 20px 0 154px;
  }
  @media (max-width: 765px) {
    padding: 65px 0;
  }
}

.categories__card-box {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    gap: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 765px) {
    display: block;
  }
}

.categories__card,
.categories__special {
  text-align: center;
  position: relative;
  text-transform: uppercase;
}

.categories__card {
  width: 360px;
  padding: 105px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    padding: 60px 0;
  }
  @media (max-width: 765px) {
    width: 100%;
    margin-bottom: 32px;
    padding: 105px 0;
  }
}

.categories__info {
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}

.categories__title {
  font-size: 24px;
  line-height: 29px;
  color: $main-color;
}

.categories__special {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding: 65px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/img/accesories.jpg");

  @media (max-width: 1200px) {
    padding: 33px 0;
  }
}

.card-women {
  background-image: url("../assets/img/women.jpg");
}

.card-men {
  background-image: url("../assets/img/men.jpg");
}

.card-kids {
  background-image: url("../assets/img/kids.jpg");
}
</style>