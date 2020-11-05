<template>
  <div>
    <h1>Post Page</h1>
    <slice-zone type="post" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "post",
  components: {
    SliceZone
  }
};
</script>

<style></style>
