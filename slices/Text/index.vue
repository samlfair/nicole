<template>
  <div class="text">
    <prismic-rich-text :field="slice.primary.content" />
  </div>
</template>

<script>
export default {
  name: "Text",
  props: {
    slice: Object,
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  p {
    margin-top: 1rem;
    line-height: 1.5rem;
    font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
      Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol;
  }
  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  }
}
</style>
