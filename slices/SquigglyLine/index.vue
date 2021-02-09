<template>
  <div id="app">
    <div :style="paddingStyles">
      <div :style="[squiggleStyles]" class="squiggle"></div>
      <div :style="[squiggleStyles, bottom]" class="squiggle bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SquigglyLine",
  props: {
    slice: Object
  },
  computed: {
    innerRadius() {
      return (50 * this.slice.primary.size) / 100;
    },
    thickness() {
      return this.slice.primary.thickness;
    },
    offset() {
      return (this.slice.primary.squiggliness / 100) * this.innerRadius;
    },
    color() {
      return this.slice.primary.color;
    },
    radius() {
      const { innerRadius, thickness } = this;
      return innerRadius + thickness / 2;
    },
    outerRadius() {
      const { innerRadius, thickness } = this;
      return innerRadius + thickness;
    },
    qrtWidth() {
      const { radius, offset } = this;
      return Math.sqrt(radius ** 2 - offset ** 2);
    },
    width() {
      return this.qrtWidth * 4;
    },
    squiggleStyles() {
      const {
        innerRadius,
        thickness,
        offset,
        color,
        outerRadius,
        width
      } = this;
      return {
        height: outerRadius - offset + "px",
        backgroundSize: width + "px " + outerRadius + "px",
        backgroundImage: `radial-gradient(
          circle at bottom,
          transparent ${innerRadius}px,
          ${color} ${innerRadius + 1}px,
          ${color} ${innerRadius + thickness - 1}px,
          transparent ${innerRadius + thickness}px
        )`
      };
    },
    bottom() {
      const { width } = this;
      return {
        backgroundPosition: `${width / 2}px 0px`
      };
    },
    paddingStyles() {
      const { top_space, bottom_space } = this.slice.primary;
      const paddingTop = (top_space ?? 20) + "px";
      const paddingBottom = (bottom_space ?? 20) + "px";
      return { paddingTop, paddingBottom };
    }
  }
};
</script>

<style lang="scss">
.squiggle {
  width: 100%;
  height: 30px;
  background-image: radial-gradient(
    circle at bottom,
    transparent 20px,
    #000 20px,
    #000 30px,
    transparent 30px
  );
  background-size: 80px 30px;
  background-position: 0px 0px;
  background-repeat: repeat-x;
}
.bottom {
  transform: scaleY(-1);
}
</style>
