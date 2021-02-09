<template>
  <div class="box">
    <prismic-link
      :field="slice.primary.link"
      v-if="slice.primary.link.link_type !== 'Any'"
    >
      <img
        :style="widthStyle"
        class="image"
        :src="slice.primary.image.fixedWidth.url"
        :alt="slice.primary.image.fixedWidth.url"
      />
    </prismic-link>
    <template v-else>
      <img
        :style="widthStyle"
        class="image"
        :src="slice.primary.image.fixedWidth.url"
        :alt="slice.primary.image.fixedWidth.url"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    slice: Object
  },
  computed: {
    widthStyle() {
      // comput max width as a size relative to size on big screens
      return { maxWidth: (this.slice.primary.width || 100) + "%" };
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 30px 0px;
  width: 100%;
  // height: 60vw;
  // max-height: 500px;
  display: flex;
  justify-content: center;
}

.image {
  width: 100%;
  // max-width: 500px;
}
</style>
