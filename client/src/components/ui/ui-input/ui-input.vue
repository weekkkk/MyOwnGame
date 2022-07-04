<template>
  <div
    class="ui-input"
    :style="[{ minWidth: `${minWidth}px` }, { maxWidth: `${maxWidth}px` }]"
    :class="{
      'is-focus': isFocus,
      'is-error': errorMessage && !isFocus,
      'is-success': isSuccess && !errorMessage && !isFocus,
    }"
  >
    <label v-if="label">{{ label }}</label>
    <span class="input-wrapper">
      <div class="icon-box" v-if="icon">
        <i :class="icon"></i>
      </div>
      <div class="placeholder" v-if="placeholder && !innerValue">
        {{ placeholder }}
      </div>
      <div class="placeholder" v-else>{{ "" }}</div>
      <input
        v-model="innerValue"
        @focus="onFocus"
        @blur="onFocus"
        :type="type"
        :class="{ 'with-icon': icon }"
        :readonly="isReadOnly"
      />
    </span>

    <transition name="open">
      <span class="error-message-box" v-if="errorMessage && !isFocus">
        {{ errorMessage }}
      </span>
    </transition>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "ui-input",

  props: {
    modelValue: null,
    placeholder: String,
    label: String,
    icon: String,
    type: { type: String, default: "text" },
    minWidth: { type: Number, default: 160 },
    maxWidth: Number,
    isReadOnly: Boolean,
    errorMessage: String,
    isSuccess: Boolean,
  },

  setup(props, context) {
    const innerValue = ref(props.modelValue);

    const isFocus = ref(false);
    const onFocus = () => {
      isFocus.value = !isFocus.value;
      context.emit("onFocus", isFocus.value);
    };

    watch(innerValue, () =>
      context.emit("update:modelValue", innerValue.value)
    );
    return { innerValue, isFocus, onFocus };
  },
};
</script>

<style lang="less" scoped>
@p: var(--mog-medium-padding);
@br: var(--mog-medium-br);
@border: 1px solid var(--mog-gray-50);
@color-focus: var(--mog-blue);
@color-error: var(--mog-red);
@color-success: var(--mog-green);
@ph-color: var(--mog-gray-75);
@fs: 16px;
@lh: 24px;
@color: var(--mog-black);
@label-fw: 500;
@bg-color: #fff;
@transition: 0.15s;

.open-enter-active {
  transition: 0.15s;
  transition-property: transform opacity;
}

.open-leave-active {
  transition: 0.15s;
  transition-property: transform opacity;
}

.open-enter-from,
.open-leave-to {
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
}

.ui-input {
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: @fs;
    color: @color;
    margin-bottom: @p;
    font-weight: @label-fw;
    line-height: @lh;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: @br;
    padding: @p;
    outline: none;
    border: @border;
    font-size: @fs;
    line-height: @lh;
    color: @color;
    background-color: @bg-color;
    overflow: hidden;
    transition: @transition;

    .icon-box {
      font-size: @lh;
      color: @ph-color;
      margin-right: @p;
      display: grid;
    }

    .placeholder {
      font-size: @fs;
      line-height: @lh;
      color: @ph-color;
      height: @lh;
    }

    input {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: @p;
      outline: none;
      border: none;
      font-size: @fs;
      line-height: @lh;
      color: @color;
      background-color: transparent;

      &.with-icon {
        padding-left: calc(@p * 2 + @lh);
      }
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
  }

  .error-message-box {
    color: @color-error;
    font-size: @fs;
    line-height: @lh;
    word-break: break-all;
  }

  &.is-focus {
    .input-wrapper {
      border-color: @color-focus;
    }
  }

  &.is-error {
    .input-wrapper {
      border-color: @color-error;
    }
  }

  &.is-success {
    .input-wrapper {
      border-color: @color-success;
    }
  }
}
</style>