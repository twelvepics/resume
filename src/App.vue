<template>
  <div id="app">
    <app-nav-burger />
    <transition name="slide-right" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppNavBurger from "./components/AppNavBurger.vue";
export default {
  components: {
    appNavBurger: AppNavBurger
  }
};
</script>
<style lang="scss">
body,
html,
#app {
  // height: 100%;
  margin: 0;
}
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
