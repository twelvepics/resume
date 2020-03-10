<template>
  <div>
    <ul class="rubs">
      <li>
        <router-link to="/about" @click.native="linkClicked">About</router-link>
      </li>
      <li>
        <router-link to="/timeline" @click.native="linkClicked">Timeline</router-link>
      </li>
      <li>
        <router-link to="/works" @click.native="linkClicked">Works</router-link>
      </li>
      <li>
        <router-link to="/skills" @click.native="linkClicked">Skills</router-link>
      </li>
      <li>
        <router-link to="/contact" @click.native="linkClicked">Contact me</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    linkClicked() {
      console.log("PING linkClicked PING");
      this.$root.$emit("linkClicked");
    }
  }
};
</script>
<style scoped lang="scss">
.rubs {
  color: #216db3;
  font-size: 2rem;
  padding-top: 8rem;
  text-align: center;
  line-height: 6rem;
}

@media only screen and (max-width: 768px) {
  .rubs {
    color: #216db3;
    font-size: 1.5rem;
    padding-top: 4rem;
    text-align: center;
    line-height: 5rem;
  }
}
</style>