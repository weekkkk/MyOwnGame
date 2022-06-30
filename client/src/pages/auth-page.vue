<template>
  <div class="f a-c j-c">
    <div class="f d-c a-c container-s">
      <h2 v-if="isLogin" class="mb-3">Авторизация</h2>
      <h2 v-if="isRegistration" class="mb-3">Регистрация</h2>
      <ui-input
        v-model="email"
        class="mb-3"
        label="Email"
        type="email"
        placeholder="Введите email"
        :errorMessage="emailErr"
      />
      <ui-input
        v-model="password"
        class="mb-3"
        label="Пароль"
        placeholder="Введите пароль"
        type="password"
        :errorMessage="passwordErr"
      />
      <div class="f a-c j-b w-100">
        <a v-if="isLogin" @click="onPush"> Зарегистрировать </a>
        <a v-if="isRegistration" @click="onPush">Войти</a>

        <ui-button
          v-if="isLogin"
          :isDisabled="!(email && password)"
          @click="onClick"
        >
          Войти
        </ui-button>

        <ui-button
          v-if="isRegistration"
          :isDisabled="!(email && password)"
          @click="onClick"
        >
          Зарегистрироваться
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { login, registration } from "../http/userAPI";
import UiInput from "../components/ui/ui-input/ui-input.vue";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ROOMS_ROUTE,
} from "../router/router-constants";
import UiButton from "../components/ui/ui-button/ui-button.vue";
import { useUserStore } from "../stores/user";

export default {
  components: { UiInput, UiButton },
  name: "auth-page",
  setup() {
    const router = useRouter();

    const location = useRoute().path;
    const isLogin = location == LOGIN_ROUTE;
    const isRegistration = location == REGISTRATION_ROUTE;

    const userStore = useUserStore();
    const email = ref("");
    const emailErr = ref("");
    const password = ref("");
    const passwordErr = ref("");
    const onClick = async () => {
      try {
        let data = ref({});
        if (isLogin) {
          data.value = await login(email.value, password.value);
        } else {
          data.value = await registration(email.value, password.value);
        }
        userStore.setUser(userStore.user);
        userStore.setIsAuth(true);
        router.push(ROOMS_ROUTE);
      } catch (e) {
        emailErr.value = "";
        passwordErr.value = "";
        if (e.response.data.message.includes("Пользователь"))
          emailErr.value = e.response.data.message;
        else if (e.response.data.message.includes("пароль"))
          passwordErr.value = e.response.data.message;
      }
    };

    const onPush = () => {
      if (isLogin) router.push(REGISTRATION_ROUTE);
      else if (isRegistration) router.push(LOGIN_ROUTE);
    };

    return {
      router,
      isLogin,
      isRegistration,
      email,
      emailErr,
      password,
      passwordErr,
      onClick,
      onPush,
    };
  },
};
</script>

<style lang="less" scoped>
</style>