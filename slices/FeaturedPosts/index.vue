<template>
  <div class="featured">
    <PostGrid :posts="posts" :max="slice.primary.number || 20" />
  </div>
</template>

<script>
import { PostGrid } from "~/components";


export default {
  name: "FeaturedPosts",
  props: {
    slice: Object,
    document: Object
  },
  data() {
    return {posts: undefined}
  },
  async fetch() {
    try {
      this.posts = (await this.$prismic.api.query(
        [
        this.$prismic.predicates.at("document.type", "post"),
        this.$prismic.predicates.at("my.post.tags.tag", this.slice.primary.featured_tag.id),
      ]
      )).results;
    } catch (e) {
      console.log("Error");
    }
  },
};
</script>

<style lang="scss" scoped>
.featured {
  margin: 2rem 0;
}
</style>