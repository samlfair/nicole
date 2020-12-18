<template>
  <ul>
    <li v-for="item in slice.items" :key="item.image.url">
      <img :src="item.image.square.url" :alt="item.image.alt" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ImageGrid",
  props: {
    slice: Object
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 2rem 0;
}
</style>
