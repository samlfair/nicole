<template>
  <div>
    <Header :config="config" />
    <slice-zone
      type="post"
      :uid="$route.params.uid"
      :params="{
        fetchLinks: ['post.title', 'post.thumbnail', 'post.preview_text']
      }"
    />
    <Footer :text="config.data.footer" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";
import { Header, Footer } from "~/components";

export default {
  name: "post",
  components: {
    SliceZone,
    Header,
    Footer
  },
  async asyncData({ $prismic, params, error }) {
    const config = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "config")
      )
    ).results[0];
    const post = (await $prismic.api.getByUID("post", params.uid)).data;
    if (post && config) {
      return { post, config };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    setBackground() {
      return `body {
        background: ${this.post?.background_color}
      }`;
    }
  },
  head() {
    return {
      title: this.post.title + " - " + this.config.data.site_title,
      style: [{ cssText: this.setBackground(), type: "text/css" }],
      meta: [
        {
          name: "og:title",
          content: this.post.title + " - " + this.config.data.site_title
        },
        { name: "description", content: this.post.preview_text },
        { name: "og:description", content: this.post.preview_text },
        { name: "robots", content: "index, follow" },
        {
          property: "og:image",
          content: this.post.thumbnail.social.url
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2284%22>${this.config.data.favicon}</text></svg>`
        }
      ]
    };
  }
};
</script>
