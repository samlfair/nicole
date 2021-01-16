<template>
  <div class="featured">
    Manual Post Grid
    <PostMasonry :posts="posts" />
    <PostGrid :posts="posts" />
  </div>
</template>

<script>
import { PostGrid, PostMasonry } from "~/components";


export default {
  name: "ManualPostGrid",
  components: {PostGrid, PostMasonry},
  props: {
    slice: Object,
    document: Object
  },
  computed: {
    posts() {
      return this.slice.items.map(item => {
        // let data = item.post
        return item.post
        // item.post
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.featured {
  margin: 2rem 0;
}
</style>