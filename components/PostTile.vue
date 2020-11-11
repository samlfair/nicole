<template>
  <NuxtLink :to="'/' + post.uid">
    <img :src="post.data.thumbnail.square.url" :alt="post.data.thumbnail.alt" />
    <h2>{{ post.data.title }}</h2>
  </NuxtLink>
</template>

<script>
export default {
  name: "PostTile",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

h2 {
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
}
</style>