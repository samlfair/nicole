<template>
  <div class="box">
    <img
      class="image"
      :src="slice.primary.image.fixedWidth.url"
      :alt="slice.primary.image.fixedWidth.url"
    />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    slice: Object,
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  // height: 60vw;
  // max-height: 500px;
  display: flex;
  justify-content: center;
}

.image {
  width: 100%;
  max-width: 500px;
}
</style>