<template>
  <div class="f j-c">
    <div class="container-m">
      <div class="f a-c j-b mb-3">
        <h3>Комнаты для игры</h3>
        <ui-button>Создать</ui-button>
      </div>
      <ui-input class="mb-3" placeholder="Имя комнаты" />
      <ui-banner title="Room" icon="iconedv-Star">
        <ui-button>Войти</ui-button>
      </ui-banner>
    </div>
  </div>
</template>

<script>
import UiBanner from "../components/ui/ui-banner/ui-banner.vue";
import UiButton from "../components/ui/ui-button/ui-button.vue";
import UiInput from '../components/ui/ui-input/ui-input.vue';

export default {
  components: { UiBanner, UiButton, UiInput },
  name: "rooms-page",
  setup() {},
};
</script>

<style lang="less" scoped>
</style>