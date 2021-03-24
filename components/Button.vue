<template>
  <prismic-link :field="link">
    {{ label }}
  </prismic-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    link: Object,
    label: String
  }
};
</script>

<style lang="scss" scoped>
a {
  background: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  padding: 8px 7px 4px 7px;
  border: 2px solid rgb(48, 48, 48);
  &.nuxt-link-active {
    border: 2px solid #c2c2c2;
    color: #c2c2c2;
    cursor: default;
  }
  &:hover:not(.nuxt-link-active) {
    position: relative;
    bottom: 2px;
    right: 2px;
    box-shadow: 2px 2px #c2c2c2;
  }
}
</style>
