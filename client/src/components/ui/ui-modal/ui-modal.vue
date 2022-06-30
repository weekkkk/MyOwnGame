<template>
  <div
    class="ui-modal"
    v-if="modelValue"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="ui-modal-box container-s" @click.stop>
      <div class="titile-box">
        <h4>{{ title }}</h4>
        <i class="iconedv-Icon-Close"></i>
      </div>
      <div class="body-box">
        <slot></slot>
      </div>
      <div class="buttuns-box">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-modal",
  props: {
    modelValue: Boolean,
    title: String,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
@p: 24px; 
@br: 8px;
@border: 1px solid var(--mog-gray-50);

.ui-modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px;

  .ui-modal-box {
    background-color: #fff;
    padding: @p;
    border-radius: @br;
    display: grid;

    .titile-box {
      display: flex;
      align-items: center;
      justify-content: space-between;

      i {
        font-size: 24px;
        line-height: 24px;
        margin-left: 16px;
        cursor: pointer;
      }
    }

    .body-box {
      padding: @p 0;
    }

    .buttuns-box {
      display: flex;
      justify-content: center;
    }
  }
}
</style>