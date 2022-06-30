<template>
  <div class="ui-banner">
    <div class="icon-box" v-if="icon">
      <i :class="icon"></i>
    </div>

    <div class="title-box">
      <h4>{{ title }}</h4>
    </div>

    <div class="actions-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-banner",
  props: {
    icon: String,
    title: String,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
@p: 16px;
@br: 8px;
@border: 1px solid var(--mog-gray-50);

.ui-banner {
  display: flex;
  align-items: center;
  width: 100%;
  padding: @p;
  border-radius: @br;
  border: @border;

  .icon-box {
    display: grid;
    font-size: 32px;
    line-height: 32px;
    margin-right: 16px;
  }

  .title-box {
    width: 100%;
    font-weight: 500;
    line-height: 32px;
  }

  .actions-box {
    display: flex;
    align-items: center;
  }
}
</style>