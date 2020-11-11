<template>
  <div>
    <Header />
    <slice-zone type="post" :uid="$route.params.uid" />
    <Footer />
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
};
</script>

<style></style>
