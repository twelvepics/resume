<template>
  <div class="bg columns is-vcentered is-centered is-mobile">
    <div>
      <div class="title">ALAIN MASIERO</div>
      <div class="subtitle has-text-justified">FULL STACK WEB/MOBILE DEVELOPER</div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.columns {
  margin: 0;
  padding: 0;
}
.bg {
  /* The image used */
  background-image: url("/img/home_bg.jpg");
  background-color: #1a1a1a;
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  padding: 2rem;
  border: 5px solid white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 1);
  letter-spacing: 3px;
  border-radius: 10px;
}
.subtitle {
  font-size: 1.5rem;
  padding: 0.3rem 0 0 0;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
  letter-spacing: 2px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .bg {
    /* The image used */
    background-image: url("/img/home_bg.jpg") no-repeat center center fixed;
    background-color: #1a1a1a;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -1;
    height: 100%;
  }
  .title {
    text-align: center;
    font-size: 1.2rem;
    color: white;
    padding: 2rem;
    border: 2px solid white;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 1);
    letter-spacing: 3px;
    border-radius: 10px;
  }
  .subtitle {
    font-size: 0.8rem;
    padding: 0.3rem 0 0 0;
    color: white;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
    letter-spacing: 2px;
    width: 100%;
  }
}
</style>
