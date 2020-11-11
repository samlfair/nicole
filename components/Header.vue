<template>
  <header class="header">
    <img :src="config.data.header_image.square.url" alt="nicole" />
    <h1>{{ config.data.site_title }}</h1>
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
h1 {
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
    gap: 4rem;
    font-size: 0.8rem;
    color: #777;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
</style>