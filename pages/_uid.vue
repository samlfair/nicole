<template>
  <div>
    <Header :config="config" />
    <h1>{{ post.title }}</h1>
    <slice-zone type="post" :uid="$route.params.uid" :params="{fetchLinks: ['post.title', 'post.thumbnail', 'post.preview_text']}"/>
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
  head() {
    return {
      title: this.post.title + " - " + this.config.data.site_title,
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

<style lang="scss" scoped>
h1 {
  font-weight: 800;
  font-size: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

h1:after {
  content: "";
  margin: 1rem 0px 2rem;
  height: 7px;
  // http://www.patternify.com/
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAARklEQVQoU2NkQAObN2/+7+vry4gujiIAUgRTgK4YrhCmCKQAmQ3TCFaITQJdDKtumCnIisEKsTkeXTGG79B9C3MaUQpBigEIqio5SSyvtwAAAABJRU5ErkJggg==)
    repeat;
}
</style>
