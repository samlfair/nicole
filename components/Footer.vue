<template>
  <div class="footer">{{ text }}</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 0.8rem;
  color: #999;
  padding: 4rem 20%;
}
</style>