<template>
  <div :style="padding">
    <div class="squiggle top"></div>
    <div class="squiggle bot"></div>
  </div>
</template>

<script>
export default {
  name: "SquigglyLine",
  props: {
    slice: Object,
  },
  computed: {
    padding() {
      const { top_space, squiggle_size, bottom_space } = this.slice.primary;
      const paddingTop = top_space + "px";
      const paddingBottom = bottom_space + "px";
      return { paddingTop, paddingBottom };
    },
  },
};
</script>

<style lang="scss" scoped>
.squiggle {
  height: 11px;
  background-image: radial-gradient(
    transparent 9px,
    black 10px,
    black 12px,
    transparent 12px,
    transparent 20px
  );
  background-size: 40px 40px; // width, height
}

.top {
  background-position: 0px -5px; // x, y
  background-repeat: repeat-x;
}

.bot {
  background-position: 20px -25px; // x, y
  background-repeat: repeat-x;
}
</style>