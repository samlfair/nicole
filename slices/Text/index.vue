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
// @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,200;1,200&display=swap");

::v-deep {
  p {
    margin-top: 1rem;
    line-height: 1.5rem;
  }
  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: 700;
    // font-family: "DM Serif Display", serif;
    font-family: "Fraunces", serif;
    // font-style: italic;
  }
  h3 {
    font-size: 1.7rem;
    margin-top: 2rem;
    font-weight: 700;
    // font-family: "DM Serif Display", serif;
    font-family: "Fraunces", serif;
    font-style: italic;
  }
}
</style>
