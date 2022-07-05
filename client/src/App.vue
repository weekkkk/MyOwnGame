<template>
  <router-view />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useUserStore } from "./stores/user";
import { check } from "./http/userAPI";

export default {
  setup() {
    const userStore = useUserStore();
    onMounted(() => {
      check().then((data) => {
        userStore.user = data;
        userStore.setIsAuth(true);
      });
    });
  },
};
</script>


<style lang="less">
@import "@/assets/styles/main.less";
@import "@/assets/fonts/edvibe/style.css";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Ubuntu";
  font-size: 16px;
  color: var(--mog-black);
}
</style>
