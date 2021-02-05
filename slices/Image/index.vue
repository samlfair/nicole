<template>
  <div class="box">
    <prismic-link
      :field="slice.primary.link"
      v-if="slice.primary.link.link_type !== 'Any'"
    >
      <img
        class="image"
        :src="slice.primary.image.fixedWidth.url"
        :alt="slice.primary.image.fixedWidth.url"
      />
    </prismic-link>
    <template v-else>
      <img
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
  max-width: 500px;
}
</style>
