<template>
  <div class="f j-c">
    <div class="container-m f d-c">
      <h3 class="mb-3">{{ room.name }}</h3>
      <h4 class="mb-3">{{ room.theme }}</h4>

      <div
        class="f d-c question"
        v-if="
          room.players &&
          room.players.length == room.players_count &&
          questions.length
        "
      >
        <h4 class="mb-3">{{ questions[currentQuestionIndex].text }}</h4>

        <ul class="f d-c">
          <li
            v-for="(answ, index) in questions[currentQuestionIndex].answers"
            :key="index"
            class="f a-c mb-2"
          >
            <input
              type="radio"
              name="questions"
              class="mr-2"
              :value="answ"
              :id="index"
              v-model="answer"
            />
            <label :for="index">
              {{ answ }}
            </label>
          </li>
        </ul>
        <div class="f j-b a-c">
          <div>Ответили: 1 / 2</div>
          <ui-button @click="onSend" :isDisabled="!answer">Отправить</ui-button>
        </div>
      </div>
      <div v-else class="f d-c a-c j-c h-100">
        <h4 class="mb-3">Ждем игроков...</h4>
        <div class="loader">
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { fetchOneRoom, updateAnswerPlayers } from "../http/roomAPI";
import { getAllByTheme } from "../http/questionAPI";
import { useUserStore } from "../stores/user";
import uiButton from "../components/ui/ui-button/ui-button.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  components: { uiButton },
  name: "room-page",
  setup() {
    const route = useRoute();

    const questions = ref([]);
    const currentQuestionIndex = ref(0);
    const createQuesition = () => {
      getAllByTheme(room.value.theme).then((data) => {
        questions.value = data;
      });
    };

    const room = ref({});
    const setData = () => {
      fetchOneRoom(route.params.id).then((data) => {
        room.value = data;

        createQuesition();
      });
    };
    setData();

    const answer = ref("");

    const userStore = useUserStore();
    const onSend = () => {
      updateAnswerPlayers(userStore.user.id, room.value.id).then((data) => {
        console.log(data);
      });
    };

    const trackRoom = () => {
      setTimeout(setData, 1000);
      if (room.players && room.players.length == room.players_count) return;
      else setTimeout(trackRoom, 1000);
    };

    onMounted(() => trackRoom());

    return {
      room,
      questions,
      currentQuestionIndex,
      answer,
      onSend,
    };
  },
};
</script>

<style lang="less" scoped>
.question {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--mog-gray-50);
}

ul {
  li {
    text-decoration: none;
    list-style: none;
    font-size: 16px;
    line-height: 24px;

    input,
    label {
      cursor: pointer;
    }
  }
}
</style>