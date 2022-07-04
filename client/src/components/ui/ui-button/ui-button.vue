<template>
  <button
    @click="onClick"
    class="ui-button"
    :class="[color, { 'is-disabled': isDisabled }]"
  >
    <i class="icon" :class="[icon, { 'mr-2': !isOnlyIcon }]" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ui-button",
  props: {
    icon: String,
    isOnlyIcon: Boolean,
    color: { type: String, default: "blue" },
    isDisabled: Boolean,
  },
  setup(props, context) {
    const isDisabled = ref(props.isDisabled);
    const onClick = () => {
      if (!isDisabled.value) context.emit("onClick");
    };

    return { onClick };
  },
};
</script>

<style lang="less" scoped>
@p: var(--mog-medium-padding);
@br: var(--mog-medium-br);
@blue: var(--mog-blue);
@red: var(--mog-red);
@green: var(--mog-green);
@yellow: var(--mog-yellow);
@gray: var(--mog-gray-75);
@color: #fff;
@fs: 16px;
@lh: 24px;
@fw: 500;

.ui-button {
  display: flex;
  border: none;
  outline: none;
  border-radius: @br;
  padding: @p;
  color: @color;
  cursor: pointer;
  font-size: @fs;
  line-height: @lh;
  font-weight: @fw;
  transition: 0.15s;

  .icon {
    font-size: @lh;
    line-height: @lh;
    color: @color;
  }

  &.blue {
    background-color: @blue;
  }
  &.red {
    background-color: @red;
  }
  &.green {
    background-color: @green;
  }
  &.yellow {
    background-color: @yellow;
  }
  &.gray {
    background-color: @gray;
  }

  &:not(.is-disabled) {
    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(90%);
    }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>