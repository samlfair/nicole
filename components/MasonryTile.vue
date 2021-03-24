<template>
  <NuxtLink v-if="post.uid" :to="'/' + post.uid">
    <div class="image" :style="styles">
      <!-- <img :src="post.data.thumbnail.fixedWidth.url" :alt="post.data.thumbnail.alt" /> -->
      <div class="title">
        <h2>{{ post.data.title }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "MasonryTile",
  props: {
    post: Object
  },
  computed: {
    styles() {
      const { url, dimensions } = this.post.data.thumbnail.fixedWidth;
      const backgroundImage = `url("${url}")`;
      const backgroundSize = "cover";
      const width = "100%";
      const paddingTop = (dimensions.height / dimensions.width) * 100 + "%";
      // const position = 'relative'
      return { backgroundImage, backgroundSize, paddingTop };
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,200;1,200&display=swap");

.image {
  position: relative;
}

.title {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background: rgba(1, 1, 1, 0.3);
    opacity: 1;
    box-shadow: inset 0px 0px 2px rgba(1, 1, 1, 0.6);
  }
}

h2 {
  padding: 1em;
  font-size: 1.3rem;
  // margin-top: 2rem;
  text-align: center;
  font-weight: 700;
  font-family: "Fraunces", serif;
  font-style: italic;
  color: white;
  text-shadow: 0px 0px 10px rgba(1, 1, 1, 0.6);
}
</style>
