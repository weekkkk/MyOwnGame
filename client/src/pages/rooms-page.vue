<template>
  <div class="f j-c">
    <div class="container-m">
      <div class="f a-c j-b mb-3">
        <h3>Комнаты для игры</h3>
        <ui-button @click="visibleAddRoomModal = true">Создать</ui-button>
      </div>
      <div class="f j-b mb-3">
        <ui-input placeholder="Имя комнаты" v-model="searchName" />
        <ui-button class="ml-3" @click="onSetRooms">Найти</ui-button>
      </div>
      <div class="f d-c rooms">
        <ui-banner
          v-for="room in rooms"
          :key="room.id"
          :title="room.name"
          class="room"
          icon="iconedv-Star"
        >
          <ui-button>Войти</ui-button>
        </ui-banner>

        <div class="f j-e">
          <ui-button
            icon="iconedv-Arrow-Left"
            :isOnlyIcon="true"
            @click="page--"
          />
          <div
            class="f a-c j-c mx-2"
            style="
              width: 40px;
              border: 1px solid var(--mog-gray-50);
              border-radius: 8px;
            "
          >
            {{ page }}
          </div>
          <ui-button
            icon="iconedv-Arrow-Right"
            :isOnlyIcon="true"
            @click="page++"
          />
        </div>
      </div>
    </div>
    <ui-modal v-model="visibleAddRoomModal" title="Создать комнату">
      <div class="f d-c">
        <ui-input
          class="mb-3"
          label="Название"
          placeholder="Введите название"
          v-model="name"
        />
        <ui-input
          class="mb-3"
          label="Максимальное количество игроков"
          placeholder="Введите кол-во игроков"
          type="number"
          v-model="playersCount"
        />
      </div>
      <template #buttons>
        <div class="f j-b a-c" style="margin: -8px">
          <ui-button
            color="gray"
            class="m-2"
            @click="visibleAddRoomModal = false"
            >Закрыть</ui-button
          >
          <ui-button class="m-2" @click="onCreateRoom">Создать</ui-button>
        </div>
      </template>
    </ui-modal>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import UiBanner from "../components/ui/ui-banner/ui-banner.vue";
import UiButton from "../components/ui/ui-button/ui-button.vue";
import UiInput from "../components/ui/ui-input/ui-input.vue";
import UiModal from "../components/ui/ui-modal/ui-modal.vue";
import { createRoom, fetchRooms } from "../http/roomAPI";

export default {
  components: { UiBanner, UiButton, UiInput, UiModal },
  name: "rooms-page",
  setup() {
    const rooms = ref([]);
    const page = ref(1);
    const limit = 2;
    const searchName = ref("");
    const onSetRooms = () => {
      console.log(limit);
      fetchRooms(searchName.value, null, page.value, limit).then((data) => {
        rooms.value = data;
      });
    };
    watch(page, onSetRooms);
    onMounted(onSetRooms);

    const visibleAddRoomModal = ref(false);
    const onHide = () => {
      visibleAddRoomModal.value = false;
    };
    const name = ref("Test");
    const playersCount = ref("2");
    const onCreateRoom = () => {
      const data = {};
      data.name = name.value;
      data.players_count = playersCount.value;
      createRoom(data).then((data) => {
        console.log(data);
        onSetRooms();
        onHide();
      });
    };

    return {
      rooms,
      page,
      onSetRooms,
      visibleAddRoomModal,
      name,
      playersCount,
      onCreateRoom,
      searchName,
    };
  },
};
</script>

<style lang="less" scoped>
.rooms {
  .room {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>