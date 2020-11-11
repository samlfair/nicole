<template>
  <div>
    <Header :config="config" />
    <PostGrid :posts="document" />
    <Footer :text="config.data.footer" />
  </div>
</template>

<script>
import { PostGrid, Header, Footer } from "~/components";

export default {
  name: "Home",
  components: { PostGrid, Header, Footer },
  async asyncData({ $prismic, params, error }) {
    const document = (
      await $prismic.api.query($prismic.predicates.at("document.type", "post"))
    ).results;
    const config = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "config")
      )
    ).results[0];
    if (document && config) {
      return { document, config };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style></style>
