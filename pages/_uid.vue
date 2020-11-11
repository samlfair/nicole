<template>
  <div>
    <Header :config="config" />
    <slice-zone type="post" :uid="$route.params.uid" />
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
    Footer,
  },
  async asyncData({ $prismic, params, error }) {
    const config = (
      await $prismic.api.query(
        $prismic.predicates.at("document.type", "config")
      )
    ).results[0];
    if (config) {
      return { config };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style></style>
