<template>
  <div class="iconbox" style="z-index:1000;">
    <div @click="togglenav" class="btn" :class="[navStatus ?  'not-active' : 'active']">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavBurger",
  data() {
    return {
      navStatus: true // his.$store.getters.getHomeState
    };
  },
  methods: {
    togglenav() {
      console.log("toggling");
      this.navStatus = !this.navStatus;
      console.log(this.$route.name);
      if (
        ["about", "timeline", "works", "skills", "contact"].includes(
          this.$route.name
        )
      ) {
        this.$router.push({
          name: "nav"
        });
      } else if (this.$route.name === "nav") {
        this.$router.push({
          name: "home"
        });
      } else if (this.$route.name === "home") {
        this.$router.push({
          name: "nav"
        });
      }
    }
  },
  mounted() {
    this.$root.$on("linkClicked", () => {
      console.log("linkClicked");
      this.navStatus = true;
    });
  },
  watch: {
    // handle back and forward button
    $route(to, from) {
      console.log(`${from.name} -> ${to.name} / ${this.navStatus}`);
      if (to.name === "nav" && this.navStatus === true) {
        this.navStatus = false;
      } else if (to.name != "nav" && this.navStatus === false) {
        this.navStatus = true;
      }
    }
  }
};
</script>


<style scoped lang="scss">
////////////////////////////
// nav styles
////////////////////////////
.iconbox {
  border-radius: 2px;
  position: absolute;
  top: 65px;
  right: 15px;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #216db3;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.iconbox .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  cursor: pointer;
}

.iconbox span {
  display: block;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  height: 5px;
  background: #fff;
  transition: all 0.3s;
  position: relative;
}

.iconbox span + span {
  margin-top: 10px;
}

.iconbox .active span:nth-child(1) {
  animation: ease 0.7s top forwards;
}

.iconbox .not-active span:nth-child(1) {
  animation: ease 0.7s top-2 forwards;
}

.iconbox .active span:nth-child(2) {
  animation: ease 0.7s scaled forwards;
}

.iconbox .not-active span:nth-child(2) {
  animation: ease 0.7s scaled-2 forwards;
}

.iconbox .active span:nth-child(3) {
  animation: ease 0.7s bottom forwards;
}

.iconbox .not-active span:nth-child(3) {
  animation: ease 0.7s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 15px;
    transform: rotate(0);
  }
  100% {
    top: 15px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 15px;
    transform: rotate(45deg);
  }
  50% {
    top: 15px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 15px;
    transform: rotate(0);
  }
  100% {
    bottom: 15px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 15px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 15px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@media only screen and (max-width: 768px) {
  ///////////////////////////
  // nav styles
  ////////////////////////////
  .iconbox {
    border-radius: 1px;
    position: absolute;
    top: 40px;
    right: 10px;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    background: #216db3;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .iconbox .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    cursor: pointer;
  }

  .iconbox span {
    display: block;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    height: 2px;
    background: #fff;
    transition: all 0.3s;
    position: relative;
  }

  .iconbox span + span {
    margin-top: 4px;
  }

  .iconbox .active span:nth-child(1) {
    animation: ease 0.7s top forwards;
  }

  .iconbox .not-active span:nth-child(1) {
    animation: ease 0.7s top-2 forwards;
  }

  .iconbox .active span:nth-child(2) {
    animation: ease 0.7s scaled forwards;
  }

  .iconbox .not-active span:nth-child(2) {
    animation: ease 0.7s scaled-2 forwards;
  }

  .iconbox .active span:nth-child(3) {
    animation: ease 0.7s bottom forwards;
  }

  .iconbox .not-active span:nth-child(3) {
    animation: ease 0.7s bottom-2 forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 6px;
      transform: rotate(0);
    }
    100% {
      top: 6px;
      transform: rotate(45deg);
    }
  }

  @keyframes top-2 {
    0% {
      top: 6px;
      transform: rotate(45deg);
    }
    50% {
      top: 6px;
      transform: rotate(0deg);
    }
    100% {
      top: 0;
      transform: rotate(0deg);
    }
  }

  @keyframes bottom {
    0% {
      bottom: 0;
      transform: rotate(0);
    }
    50% {
      bottom: 6px;
      transform: rotate(0);
    }
    100% {
      bottom: 6px;
      transform: rotate(135deg);
    }
  }

  @keyframes bottom-2 {
    0% {
      bottom: 6px;
      transform: rotate(135deg);
    }
    50% {
      bottom: 6px;
      transform: rotate(0);
    }
    100% {
      bottom: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>