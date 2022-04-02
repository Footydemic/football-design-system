<template>
  <div class="fds-team" :class="customClass">
    <FdsAvatar :avatar="team.avatar" :flat="flatAvatar" />

    <div class="fds-team-content">
      <p class="fds-team-name">
        {{ team.name }}
      </p>
    </div>
  </div>
</template>

<script>
import FdsAvatar from "../Avatar/Avatar.vue"

export default {
  name: "FdsTeam",
  components: {
    FdsAvatar,
  },
  props: {
    team: {
      required: true,
      type: Object,
      default: () => {},
    },
    reverseOrder: {
      required: false,
      type: Boolean,
      default: false,
    },
    flatAvatar: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customClass() {
      return {
        "fds-team--reverse-order": this.reverseOrder,
        "fds-team--flat": this.flatAvatar,
      }
    },
  },
}
</script>

<style lang="scss">
.fds-app .fds-team {
  cursor: pointer;
  @include t-body-2;
  padding: 8px;
  display: flex;

  align-items: center;

  &.fds-team--reverse-order {
    flex-direction: row-reverse;

    .fds-team-content {
      padding-left: 0;
      padding-right: 15px;
    }

    .fds-team-name {
      text-align: right;
    }
  }

  &.fds-team--flat {
    &.fds-team--reverse-order {
      .fds-team-content {
        padding-left: 0;
        padding-right: 8px;
      }
    }

    .fds-team-content {
      padding-left: 8px;
    }
  }

  .fds-team-content {
    padding-left: 15px;
  }

  .fds-team-name {
    @include t-text-h4;
    color: $c-black-100;
    max-width: 200px;
  }

  .fds-avatar {
    flex-shrink: 0;
  }
}
</style>
