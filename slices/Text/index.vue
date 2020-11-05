<template>
  <div>
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

<style></style>
