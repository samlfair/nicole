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
      await $prismic.api.query([
        $prismic.predicates.at("document.type", "post"),
        $prismic.predicates.at("my.post.tag", "X66XzxIAACEAZ6pM"),
      ])
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
  head() {
    return {
      title: this.config.data.site_title + " - " + this.config.data.tagline,
      meta: [
        {
          name: "og:title",
          content:
            this.config.data.site_title + " - " + this.config.data.tagline,
        },
        { name: "description", content: this.config.data.site_description },
        { name: "og:description", content: this.config.data.site_description },
        { name: "robots", content: "index, follow" },
        {
          property: "og:image",
          content: this.config.data.header_image.social.url,
        },
      ],
    };
  },
};
</script>

<style></style>
