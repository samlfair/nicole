<template>
  <div class="buttons">
    <a
      v-for="button in slice2.items"
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
  data: () => { return {
    slice2: {
      "primary": {},
      "items": [
        {
          "icon": "instagram-square",
          "color": "#8a3ab9",
          "link": {
            "link_type": "Web",
            "url": "https://instagram.com/nicoliogi"
          }
        }
      ],
      "slice_type": "socialbuttons",
      "slice_label": null
    }
  }},
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
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
