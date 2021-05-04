<template>
  <header class="header">
    <nuxt-link to="/">
      <img :src="config.data.title_image.url" alt="nicole" />
    </nuxt-link>
    <nav class="nav">
      <ul>
        <li v-for="item in config.data.main_menu" :key="item.label">
          <Button :link="item.link" :label="item.label" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    config: Object
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.logo {
  grid-area: logo;
}

.menu {
  grid-area: menu;
}

.site-title {
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 2rem 0px 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 700px) {
    align-items: flex-end;
    flex-direction: row;
  }
}

.nav {
  ul {
    display: flex;
    flex-direction: row;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 700px) {
      justify-content: flex-end;
      flex-wrap: wrap-reverse;
      max-width: 300px;
    }
    padding-top: 1.5rem;
    color: black;
    li {
      line-height: 25px;
    }
  }
}

img {
  width: auto;
  height: 60px;
}
</style>
