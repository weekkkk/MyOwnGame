<template>
  <div class="layout-base">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "layout-base",

  setup() {},
};
</script>

<style lang="less" scoped>
.layout-base {
  min-height: 100vh;
  min-width: 100vw;
  padding: var(--mog-desktop-padding);
  display: grid;
}
</style>