<template>
  <div>
    <img
      :src="slice.primary.image.fixedWidth.url"
      :alt="slice.primary.image.fixedWidth.url"
    />
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

<style></style>
