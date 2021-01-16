<template>
  <div>
    <Header :config="config" />
    <slice-zone type="post" uid="home" :params="{fetchLinks: 'post.title'}" />
    <Footer :text="config.data.footer" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import { Header, Footer } from "~/components";

export default {
  name: "Home",
  components: {
    SliceZone,
    Header,
    Footer,
  },
  async asyncData({ $prismic, params, error }) {
    const config = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "config")
      )
    ).results[0];
    const post = (await $prismic.api.getByUID("post", "home")).data;
    if (post && config) {
      return { post, config };
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
