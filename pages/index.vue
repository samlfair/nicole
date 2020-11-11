<template>
  <div>
    <h1>Nicole's site</h1>
    <PostGrid :posts="document" />
  </div>
</template>

<script>
import { PostGrid } from "~/components";

export default {
  name: "Home",
  components: { PostGrid },
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
