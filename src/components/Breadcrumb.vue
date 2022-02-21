<template>
  <section class="breadcrumb">
    <div class="container breadcrumb__container">
      <h1 class="breadcrumb__heading"><slot /></h1>
      <nav class="breadcrumbs__nav" v-if="this.additionalInfo">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item">
            <a href="index.html" class="breadcrumbs__link">home</a>
          </li>
          <li class="breadcrumbs__item">
            <a href="catalog.html" class="breadcrumbs__link">MEN</a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link breadcrumbs__link_current"><slot /> </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  props: ["additionalInfo"],
};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;

.breadcrumb {
  padding: 60px;
  background-color: #f8f3f4;
  @media (max-width: 1200px) {
    padding: 60px 0;
  }
  @media (max-width: 765px) {
    padding: 24px 0 46px;
  }
}

.breadcrumb__heading {
  font-size: 24px;
  line-height: 29px;
  color: $main-color;
  text-transform: uppercase;
}

.breadcrumb__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 765px) {
    flex-direction: column;
    gap: 32px;
  }
}

.breadcrumbs__list {
  display: flex;
  list-style: none;
  text-transform: uppercase;
}

.breadcrumbs__item {
  margin-right: 10px;
}

.breadcrumbs__item::before {
  content: "/";
  margin-right: 10px;
}

.breadcrumbs__item:first-child:before {
  content: none;
}

.breadcrumbs__link {
  text-decoration: none;
  font-weight: 300;
  color: #636363;
}

.breadcrumbs__link_current {
  font-weight: bold;
  color: $main-color;
}
</style>