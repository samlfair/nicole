<template>
  <div class="text">
    <prismic-rich-text :field="slice.primary.content" />
  </div>
</template>

<script>
export default {
  name: "Text",
  props: {
    slice: Object
  }
};
</script>
<style lang="scss" scoped>
::v-deep {
  p {
    margin-top: 1rem;
    line-height: 1.5rem;
  }
  .center {
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: 700;
    font-family: "Tajawal", sans-serif;
  }
  h3 {
    font-size: 1.7rem;
    margin-top: 2rem;
    font-weight: 700;
    font-family: "Tajawal", sans-serif;
  }
}
</style>
