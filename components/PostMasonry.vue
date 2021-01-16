<template>
  <div class="masonry" :style="cssGridGap">
    <div class="col" :style="cssGap">
      <template v-for="(post, i) in posts">
        <template>
          <MasonryTile
            v-if="(i < max || !max) && i % 3 === 0"
            :post="post"
            :key="post.id"
          />
        </template>
      </template>
    </div>
    <div class="col" :style="cssGap">
      <template v-for="(post, i) in posts">
        <template>
          <MasonryTile
            v-if="(i < max || !max) && i % 3 === 1"
            :post="post"
            :key="post.id"
          />
        </template>
      </template>
    </div>
    <div class="col" :style="cssGap">
      <template v-for="(post, i) in posts">
        <template>
          <MasonryTile
            v-if="(i < max || !max) && i % 3 === 2"
            :post="post"
            :key="post.id"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { MasonryTile } from "./";

export default {
  name: "PostMasonry",
  components: { MasonryTile },
  props: {
    posts: Array,
    max: Number,
    gap: Number,
  },
  computed: {
    cssGap() {
      return { gap: this.gap + "px" };
    },
    cssGridGap() {
      return { gridGap: this.gap + "px" };
    },
  },
};
</script>

<style lang="scss" scoped>
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 3px;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 3px;
}
</style>