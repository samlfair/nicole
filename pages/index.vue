<template>
  <div>
    <Header />
    <PostGrid :posts="document" />
    <Footer />
  </div>
</template>

<script>
import { PostGrid, Header, Footer } from "~/components";

export default {
  name: "Home",
  components: { PostGrid, Header, Footer },
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
