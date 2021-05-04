<template>
  <div class="footer">{{ text }}</div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  font-size: 0.8rem;
  color: #757575;
  padding: 8rem 20% 4rem;
}
</style>
