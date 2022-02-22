<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__copyrights">© 2021 Brand All Rights Reserved.</div>
      <ul class="footer__links">
        <li class="footer__links-item">
          <a href="#" class="footer__link">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="footer__links-item">
          <a href="#" class="footer__link">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="footer__links-item">
          <a href="#" class="footer__link">
            <i class="fab fa-pinterest-p"></i>
          </a>
        </li>
        <li class="footer__links-item">
          <a href="#" class="footer__link">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
$main-color: #f16d7f;
$main-background-color: #f8f3f4;
.footer {
  background: #222222;
  color: #fff;
  padding: 30px 0;
  @media (max-width: 765px) {
    padding: 43px 0 9px;
  }
}

.footer__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 765px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
}

.footer__copyrights {
  font-size: 16px;
  line-height: 19px;
  color: #fbfbfb;
}

.footer__links {
  list-style-type: none;
  display: flex;
}

.footer__links-item {
  margin: 3px;
  transition: transform 0.6s;
  &:hover {
    transform: rotate(360deg);
  }
}

.footer__link {
  display: flex;
  width: 32px;
  height: 32px;
  color: black;
  background: #fff;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}

.footer__link:hover {
  background: $main-color;
  color: #fff;
}
</style>