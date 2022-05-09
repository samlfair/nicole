<template>
  <div class="buttons">
    <a
      v-for="button in slice.items"
      :key="button.link.url"
      :href="button.link.url"
      target="_blank"
      :style="{
        color: button.color
      }"
    >
      <font-awesome-icon class="icon" :icon="['fab', button.icon]" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialButtons",
  props: {
    slice: Object
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin: 0 1vw;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
}
</style>
