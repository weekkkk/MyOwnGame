<template>
  <div class="f a-c j-c">
    <form class="f d-c a-c container-s" >
      <h2 v-if="isLogin" class="mb-3">Авторизация</h2>
      <h2 v-if="isRegistration" class="mb-3">Регистрация</h2>
      <ui-input
        v-model="email"
        class="mb-3"
        label="Email"
        type="email"
        placeholder="Введите email"
      />
      <ui-input
        v-model="password"
        class="mb-3"
        label="Пароль"
        placeholder="Введите пароль"
        type="password"
      />
      <div class="f a-c j-b w-100">
        <a v-if="isRegistration" @click="$router.push('/login')">Войти</a>
        <a v-if="isLogin" @click="$router.push('/registration')"
          >Зарегистироваться</a
        >

        <ui-button :isDisabled="!(email && password)" v-if="isLogin">
          Войти
        </ui-button>
        <ui-button :isDisabled="!(email && password)" v-if="isRegistration">
          Зарегистрироваться
        </ui-button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { registration } from "../http/userAPI";
import UiInput from "../components/ui/ui-input/ui-input.vue";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../router/router-constants";
import UiButton from "../components/ui/ui-button/ui-button.vue";

export default {
  components: { UiInput, UiButton },
  name: "auth-page",
  setup() {
    const location = useRoute().path;
    const isLogin = location == LOGIN_ROUTE;
    const isRegistration = location == REGISTRATION_ROUTE;

    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      if (isLogin) {
        console.log("hi");
      } else if (isRegistration) {
        const res = await registration(email.value, password.value);
        console.log(res);
      }
    };

    return { isLogin, isRegistration, email, password, onSubmit };
  },
};
</script>

<style lang="less" scoped>
</style>