<template>
  <div class="fds-player-preview" :class="customClass">
    <FdsAvatar :avatar="player.avatar" />

    <div class="fds-player-preview-content">
      <p class="fds-player-preview-name">
        {{ player.fname }} <b>{{ player.lname }}</b>
      </p>
      <p>{{ player.team }} {{ player.position }}</p>
      <p>{{ player.stats }}</p>
    </div>
  </div>
</template>

<script>
import FdsAvatar from "../Avatar/Avatar.vue"

export default {
  name: "FdsPlayerPreview",
  components: {
    FdsAvatar,
  },
  props: {
    player: {
      required: true,
      type: Object,
      default: () => {},
    },
    flat: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customClass() {
      return {
        "fds-player-preview--flat": this.flat,
      }
    },
  },
}
</script>

<style lang="scss">
.fds-app .fds-player-preview {
  cursor: pointer;
  @include t-body-2;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  box-shadow: 0 0 5px rgba($c-black-100, 0.04);
  border: 1px solid #eee;

  align-items: center;

  &.fds-player-preview--flat {
    border: none;
    box-shadow: none;
  }

  b {
    color: $c-purple-100;
  }

  .fds-player-preview-content {
    padding-left: 15px;
  }

  p {
    color: $c-gray-100;
  }

  .fds-player-preview-name {
    @include t-text-h5;
    color: $c-black-100;
  }
}
</style>
