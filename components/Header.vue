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
    justify-content: space-around;
    @media (min-width: 700px) {
      justify-content: flex-end;
      flex-wrap: wrap-reverse;
    }
    font-size: 0.7rem;
    padding-top: 1.5rem;
    color: black;
    text-transform: uppercase;
    max-width: 300px;
    font-weight: 500;
    li {
      line-height: 25px;
    }
    li a {
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
  }
}

img {
  // border-radius: 50%;
  width: auto;
  height: 50px;
}
</style>
