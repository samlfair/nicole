<template>
  <div>
    <h1>Nicole's site</h1>
    <ul>
      <li v-for="article in document" :key="article.id">
        <NuxtLink :to="'/' + article.uid">
          <h2>{{ article.data.title }}</h2>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  async asyncData({ $prismic, params, error }) {
    const document = (await $prismic.api.query("")).results;
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style></style>
