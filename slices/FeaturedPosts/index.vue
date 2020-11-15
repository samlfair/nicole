<template>
  <div class="featured">
    <PostGrid :posts="document" />
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
  async fetch() {
    try {
      this.document = (await this.$prismic.api.query(
        [
        this.$prismic.predicates.at("document.type", "post"),
        this.$prismic.predicates.at("my.post.tag", this.slice.primary.featured_tag.id),
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