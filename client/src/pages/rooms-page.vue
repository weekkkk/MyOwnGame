<template>
  <div class="f j-c">
    <div class="container-m">
      <div class="f a-c j-b mb-3">
        <h3>Комнаты для игры</h3>
        <ui-button @click="visibleAddRoomModal = true">Создать</ui-button>
      </div>
      <ui-input class="mb-3" placeholder="Имя комнаты" />
      <ui-banner title="Room" icon="iconedv-Star">
        <ui-button>Войти</ui-button>
      </ui-banner>
    </div>
    <ui-modal v-model="visibleAddRoomModal" title="Создать комнату">
      <div class="f d-c">
        <ui-input
          class="mb-3"
          label="Название"
          placeholder="Введите название"
        />
        <ui-input
          class="mb-3"
          label="Максимальное количество игроков"
          placeholder="Введите кол-во игроков"
        />
      </div>
      <template #buttons>
        <div class="f j-c a-c" style="margin: -8px">
          <ui-button color="gray" class="m-2">Закрыть</ui-button>
          <ui-button class="m-2">Создать</ui-button>
        </div>
      </template>
    </ui-modal>
  </div>
</template>

<script>
import { ref } from "vue";
import UiBanner from "../components/ui/ui-banner/ui-banner.vue";
import UiButton from "../components/ui/ui-button/ui-button.vue";
import UiInput from "../components/ui/ui-input/ui-input.vue";
import UiModal from "../components/ui/ui-modal/ui-modal.vue";

export default {
  components: { UiBanner, UiButton, UiInput, UiModal },
  name: "rooms-page",
  setup() {
    const visibleAddRoomModal = ref(false);

    return { visibleAddRoomModal };
  },
};
</script>

<style lang="less" scoped>
</style>