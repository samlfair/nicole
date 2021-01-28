<template>
  <div :style="padding">
    <div :class="{ animated }" class="squiggle"></div>
  </div>
</template>

<script>
export default {
  name: "SquigglyLine",
  props: {
    slice: Object
  },
  computed: {
    padding() {
      const {
        top_space = 20,
        squiggle_size,
        bottom_space = 20
      } = this.slice.primary;
      const paddingTop = top_space + "px";
      const paddingBottom = bottom_space + "px";
      return { paddingTop, paddingBottom };
    },
    animated() {
      const { animated = false } = this.slice.primary;
      return animated;
    }
  }
};
</script>

<style lang="scss" scoped>
.animated {
  --animation-duration: 9s;
  &::before,
  &::after {
    animation-duration: var(--animation-duration);
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-timing-function: linear;
  }
  &::before {
    animation-name: before;
  }
  &::after {
    animation-name: after;
  }
}

.squiggle {
  --height: 80px;
  --half: calc(var(--height) / 2);
  --quarter: calc(var(--height) / 4);

  height: var(--half);
  display: flex;
  flex-direction: column;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 50%;
    background-image: radial-gradient(
      circle at center,
      transparent 28%,
      black 31%,
      black 39%,
      transparent 42%
    );
    background-size: var(--half) var(--half); // width, height
  }
  &::before {
    // background: green;
    background-position: 0px 0px; // x, y
  }
  &::after {
    // background: yellow;
    background-position: var(--quarter) calc(-1 * var(--quarter)); // x, y
  }
}

@keyframes before {
  from {
    background-position: 0px 0px; // x, y
  }
  to {
    background-position: calc(-1 * var(--half)) 0px;
  }
}

@keyframes after {
  from {
    background-position: var(--quarter) calc(-1 * var(--quarter));
  }
  to {
    background-position: calc(-1 * var(--quarter)) calc(-1 * var(--quarter));
  }
}
</style>
