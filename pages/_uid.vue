<template>
  <div>
    <NuxtLink to="/">
      <h1>Nicole's site</h1>
    </NuxtLink>
    <slice-zone type="post" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "post",
  components: {
    SliceZone,
  },
};
</script>

<style></style>
