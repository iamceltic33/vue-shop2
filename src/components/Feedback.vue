<template>
  <section class="feedback">
    <div class="container feedback__container">
      <h2 class="hidden">Feedback</h2>
      <div class="feedback__review">
        <div class="feedback__review-avatar">
          <img
            :src="require('../assets/img/photo.png')"
            alt="avatar"
            class="review-image"
          />
        </div>
        <p class="feedback__review-text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          <span class="review-italic">a pulvinar purus condimentum“</span>
        </p>
      </div>
      <div class="feedback__subscribe">
        <div class="feedback__subscribe-title">Subscribe</div>
        <div class="feedback__subscribe-text">
          For our newletter and promotion
        </div>
        <form action="#" class="feedback__subscribe-form">
          <input
            type="email"
            name="email"
            class="feedback__input"
            placeholder="Enter Your Email"
            required
          />
          <button class="feedback__button" type="submit">Subscribe</button>
        </form>
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

.feedback {
  background-color: #eee;
  background: left/cover no-repeat url("../assets/img/photo-subscribe.jpg");
}

.feedback__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 97px 0 126px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 64px 0 140px;
  }
  @media (max-width: 765px) {
    padding: 64px 0 110px;
  }
}

.feedback__review {
  text-align: center;
  max-width: 360px;
  margin-bottom: 48px;
}

.feedback__review-text {
  margin-top: 30px;
  font-size: 20px;
  line-height: 24px;
  @media (max-width: 765px) {
    font-size: 18px;
    line-height: 22px;
  }
}

.review-italic {
  font-style: italic;
}

.feedback__subscribe {
  max-width: 557px;
  text-align: center;
}

.feedback__subscribe-title {
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 167.2%;
  @media (max-width: 765px) {
    line-height: 153%;
  }
}

.feedback__subscribe-text {
  font-size: 18px;
  color: #222224;
  text-transform: uppercase;
  line-height: 167.2%;
  @media (max-width: 765px) {
    font-size: 14px;
    line-height: 153%;
  }
}

.feedback__subscribe-form {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.feedback__input {
  background: #e1e1e1;
  border: none;
  padding: 15px 22px;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
}

.feedback__button {
  display: block;
  background-color: $main-color;
  border: none;
  padding: 15px 22px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.6s, color 0.6s;
  animation: getattention 5s infinite;
}

.feedback__button:hover {
  color: $main-color;
  background-color: #fff;
  outline: 1px solid $main-color;
  box-shadow: none;
}
</style>