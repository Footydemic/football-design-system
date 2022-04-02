<template>
  <div class="fds-avatar" :class="customClass">
    <div v-if="avatar" class="fds-avatar-wrapper">
      <a :href="avatar.link" class="fds-avatar-link">
        <img :src="avatar.image" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FdsAvatar",
  props: {
    avatar: {
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
        "fds-avatar--flat": this.flat,
      }
    },
  },
}
</script>

<style lang="scss">
.fds-app .fds-avatar {
  background: #fff;
  padding: 8px;
  display: flex;
  border: 1px solid #eee;
  align-items: center;
  width: 74px;
  height: 74px;
  border-radius: 6px;

  &.fds-avatar--flat {
    background: none;
    border: none;

    .fds-avatar-link,
    .fds-avatar-outline {
      border-radius: 0%;
    }

    .fds-avatar-link {
      border: none;
      background: none;
    }
  }

  .fds-avatar-wrapper {
    display: flex;
    justify-content: center;

    @include breakpoint(tablet_big) {
      justify-content: flex-start;
    }
  }

  .fds-avatar-link {
    border: 1px solid $c-white;
    text-align: center;
    border-radius: 50%;
    background: $c-white;
    display: flex;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
}
</style>
