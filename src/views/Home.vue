<template>
  <div class="home columns is-vcentered is-centered is-mobile">
    <div class="bg" ref="bg_image"></div>
    <div>
      <div class="title">ALAIN MASIERO</div>
      <div class="subtitle has-text-justified">FULL STACK WEB/MOBILE DEVELOPER</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: null,
      src: "/img/home_bg.jpg"
    };
  },
  methods: {
    imgOnload() {
      console.log("Image loaded");
      this.$refs["bg_image"].style.backgroundImage = `url('${this.src}')`;
      this.$refs["bg_image"].style.opacity = 1;
    }
  },
  created() {
    this.img = new Image();
    this.img.src = this.src;
    this.img.onload = this.imgOnload;
    this.img = null;
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.columns {
  margin: 0;
  padding: 0;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // background: url("/img/home_bg.jpg") no-repeat center center fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  opacity: 0;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
}
.home {
  /* The image used */
  background-color: #1a1a1a;
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  z-index: -1;
  position: relative;
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
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    // background: url("/img/home_bg.jpg") no-repeat center center fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
    opacity: 0;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
  }
  .home {
    /* The image used */
    background-color: #1a1a1a;
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    z-index: -1;
    position: relative;
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
