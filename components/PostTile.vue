<template>
  <NuxtLink :to="'/' + post.uid">
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