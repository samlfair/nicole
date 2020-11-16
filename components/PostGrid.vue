<template>
  <ul>
    <li v-for="(post, i) in posts" :key="post.id">
      <PostTile v-if="(i < max)" :post="post" />
    </li>
  </ul>
</template>

<script>
import { PostTile } from "./";

export default {
  name: "PostGrid",
  components: { PostTile },
  props: {
    posts: Array,
    max: Number,
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>