<template>
  <div class="layout-page">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "layout-page",

  setup() {},
};
</script>

<style lang="less" scoped>
.layout-page {
  min-height: 100vh;
  min-width: 100vw;
  padding: var(--mog-desktop-padding);
  display: grid;
}
</style>