<template>
  <div>
    <ui-input v-model="value" placeholder="Placeholder" label="Label" icon="iconedv-Star" errorMessage="Error Eroo Error ErooError ErooError ErooError ErooError ErooError ErooError Eroo" />
    {{ value }}
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import UiInput from "../components/ui/ui-input/ui-input.vue";
export default {
  components: { UiInput },
  name: "login-page",
  setup() {
    const value = ref("");

    return { value };
  },
};
</script>

<style lang="less" scoped>
</style>