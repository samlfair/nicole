<template>
  <div class="featured">
    <template v-if="slice.primary.display === 'masonry'">
      <PostMasonry :gap="slice.primary.gap || 3" :posts="posts" />
    </template>
    <template else>
      <PostGrid :gap="slice.primary.gap || 3" :posts="posts" />
    </template>
  </div>
</template>

<script>
import { PostGrid, PostMasonry } from "~/components";

export default {
  name: "ManualPostGrid",
  components: { PostGrid, PostMasonry },
  props: {
    slice: Object,
    document: Object,
  },
  computed: {
    posts() {
      return this.slice.items.map((item) => {
        // let data = item.post
        return item.post;
        // item.post
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.featured {
  margin: 2rem 0;
}
</style>