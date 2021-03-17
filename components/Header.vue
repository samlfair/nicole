<template>
  <header class="header">
    <nuxt-link to="/">
      <img :src="config.data.title_image.url" alt="nicole" />
    </nuxt-link>
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
    config: Object
  }
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  padding: 2rem 0;
}

.nav {
  .nuxt-link-active {
    box-shadow: 0px 2px #ccc;
  }
  // width: 80%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #777;
    text-transform: uppercase;
    // letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

img {
  // border-radius: 50%;
  width: auto;
  height: 40px;
}
</style>
