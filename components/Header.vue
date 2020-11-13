<template>
  <header class="header">
    <nuxt-link to="/">
      <img :src="config.data.header_image.square.url" alt="nicole" />
    </nuxt-link>
    <div class="site-title">
      <nuxt-link to="/">
        {{ config.data.site_title }}
      </nuxt-link>
    </div>
    <nav class="nav">
      <ul>
        <li v-for="item in config.data.main_menu" :key="item.label">
          <prismic-link :field="item.link">
            {{ item.label }}
          </prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    config: Object,
  },
};
</script>

<style lang="scss" scoped>
.site-title {
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 2rem 0px 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.nav {
  // width: 80%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #777;
    text-transform: uppercase;
    // letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    li {
      margin-right: 7vw;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
</style>