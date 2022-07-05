<template>
  <div class="f j-c">
    <div class="container-m f d-c">
      <h3 class="mb-3">{{ roomName }}</h3>
      <h4 class="mb-3">{{ theme }}</h4>

      <div class="f d-c question" v-if="questions.length">
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
          <ui-button>Отправить</ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { fetchOneRoom } from "../http/roomAPI";
import { getAllByTheme } from "../http/questionAPI";
import uiButton from "../components/ui/ui-button/ui-button.vue";
export default {
  components: { uiButton },
  name: "room-page",
  setup() {
    const route = useRoute();

    const questions = ref([]);
    const currentQuestionIndex = ref(0);
    const createQuesition = () => {
      getAllByTheme(theme.value).then((data) => {
        questions.value = data;
      });
    };

    const roomName = ref("");
    const theme = ref("");
    const setData = () => {
      fetchOneRoom(route.params.id).then((data) => {
        roomName.value = data.name;
        theme.value = data.theme;

        createQuesition();
      });
    };
    setData();

    const answer = ref("");

    return {
      roomName,
      theme,
      questions,
      currentQuestionIndex,
      answer,
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