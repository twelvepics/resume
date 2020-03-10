<template>
  <div v-if="is_mobile">
    <timeline-mobile />
  </div>
  <div v-else>
    <timeline-desktop />
  </div>
</template>

<script>
import TimelineMoblle from "../components/TimelineMoblle";
import TimelineDesktop from "../components/TimelineDesktop";

export default {
  components: {
    timelineDesktop: TimelineDesktop,
    timelineMobile: TimelineMoblle
  },
  computed: {
    // a computed getter
    is_mobile: function() {
      return this.$mq === "mobile"; // || this.$mq === "tablet";
    }
  }
};
</script>
