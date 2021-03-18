<template>
  <div class="box">
    <div v-if="slice.primary.image.fixedWidth.url">
      <prismic-link
        :field="slice.primary.link"
        v-if="slice.primary.link.link_type !== 'Any'"
      >
        <img
          :alt="slice.primary.image.fixedWidth.url"
          :src="uncompressed()"
          class="image"
          :style="widthStyle"
          :width="slice.primary.image.fixedWidth.dimensions.height || `0`"
          :height="slice.primary.image.fixedWidth.dimensions.height || `0`"
        />
      </prismic-link>
      <template v-else>
        <img
          :style="widthStyle"
          class="image"
          :src="uncompressed()"
          :alt="slice.primary.image.fixedWidth.url"
          :width="slice.primary.image.fixedWidth.dimensions.width || `0`"
          :height="slice.primary.image.fixedWidth.dimensions.height || `0`"
        />
      </template>
    </div>
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
  },
  methods: {
    uncompressed() {
      const { url } = this.slice.primary.image.fixedWidth;
      return url?.replace("compress", "");
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
  height: auto;
  // max-width: 500px;
}
</style>
