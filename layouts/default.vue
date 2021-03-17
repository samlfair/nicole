<template>
  <div class="layout">
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  max-width: 850px;
  margin: auto;
  padding: 20px;
}

::v-deep .slice-image-row {
  .slice-image-row-caption {
    color: grey;
    font-style: italic;
    text-align: center;
    font-weight: 300;
    font-size: 0.9em;
    padding: 0.8em 0 1.5em;
  }
}
</style>
