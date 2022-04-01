<template>
  <component
    :is="tag"
    :href="link"
    :disabled="!enabled"
    :class="buttonClass"
    class="fds-button"
    @click.stop="handleClick"
  >
    <template v-if="icon">
      <span class="fds-icon-wrapper">
        <span class="fds-icon icon" :class="icon" />
      </span>
    </template>

    <template v-if="text">
      {{ text }}
    </template>

    <slot v-else-if="$slots.default" />
  </component>
</template>

<script>
export default {
  name: "FdsButton",
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "primary",
    },
    buttonStyle: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    contentDescription: {
      type: String,
      default: "",
    },
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Array}
     */
    buttonClass() {
      const buttonClasses = [this.buttonStyle, this.variant, this.size]

      const classes = buttonClasses.map((key) => {
        return key ? `fds-button-${key}` : null
      })

      if (this.link) {
        classes.push("fds-button-link")
      }

      if (this.icon) {
        classes.push("fds-button-icon")
      }

      if (!this.text && !this.$slots.default) {
        classes.push("fds-button-icon-content")
      }

      return classes
    },
    /**
     * @description Returns button tag
     *
     * @returns {String}
     */
    tag() {
      return this.link ? "a" : "button"
    },
    /**
     * @description Is the icon design-system icon?
     * Design System icons contains ico- prefix.
     *
     * @returns {boolean}
     */
    designSystemIcon() {
      return this.icon.indexOf("ico-") > -1
    },
  },
  methods: {
    /**
     * @description Emit click event with link value as param
     */
    handleClick() {
      this.$emit("click", this.link)
    },
  },
}
</script>

<style lang="scss">
.fds-app .fds-button {
  @include button-text-medium;

  border-radius: $radius-medium;
  box-sizing: border-box;
  color: $button-primary-text;
  display: block;
  height: $button-size-medium;
  outline: none;
  padding: $button-padding;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &.fds-button-primary {
    background: $button-primary-fill-background-default;

    &:hover {
      background: $button-primary-fill-background-hover;
    }
  }

  &.fds-button-primary {
    background: $button-primary-fill-background-default;

    &:hover {
      background: $button-primary-fill-background-hover;
    }
  }

  &.fds-button-disabled,
  &[disabled] {
    color: $button-text-color-disabled;
    cursor: default;
  }

  &.fds-button-fill {
    background: $button-primary-fill-background-default;

    &:hover {
      background: $button-primary-fill-background-hover;
    }

    &.fds-button-disabled,
    &[disabled] {
      background: $button-color-fill-background-disabled;
    }
  }

  &.fds-button-outline {
    background: $button-primary-outline-background-default;
    border: 1px solid $button-primary-outline-border-default;
    color: $text-color-primary;

    &:hover {
      background: $button-primary-outline-background-hover;
    }

    &.fds-button-disabled,
    &[disabled] {
      border-color: $button-color-outline-border-disabled;
      color: $button-text-color-disabled;

      &:hover {
        background: $button-primary-outline-background-default;
      }
    }
  }

  &.fds-button-outline {
    background: $button-primary-outline-background-default;
    border: 1px solid $button-primary-outline-border-default;
    color: $text-color-primary;

    &:hover {
      background: $button-primary-outline-background-hover;
    }
  }

  &.fds-button-flat {
    background: $button-color-transparent-background;
    border: none;
    color: $text-color-primary;

    &:hover {
      background: $button-primary-flat-background-hover;
    }

    &.fds-button-disabled,
    &[disabled] {
      color: $button-text-color-disabled;

      &:hover {
        background: $button-color-transparent-background;
      }
    }
  }

  &.fds-button-link {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
      color: $button-primary-text;
      text-decoration: none;
    }
  }

  &.fds-button-icon {
    align-items: center;
    display: flex;
    justify-content: center;

    .icon-wrapper {
      display: block;
      height: 24px;
      margin-right: 8px;
      width: 24px;
    }

    &.fds-button-icon-content {
      min-width: auto;

      .icon-wrapper {
        margin-right: 0;
      }
    }
  }

  &.fds-button-small {
    @include button-text-small;

    height: $button-size-small;
  }

  &.fds-button-large {
    @include button-text-large;

    height: $button-size-large;
  }

  &.fds-button-full {
    max-width: 100%;
    width: 100%;
  }

  .fds-icon-wrapper {
    height: 24px;
    width: 24px;
    line-height: 24px;
    font-size: 18px;
  }

  .fds-icon {
    fill: currentColor;
  }
}
</style>

<style lang="scss">
// Dark MODE handling
.fds-dark-mode {
  .fds-button {
    &.fds-button-secondary {
      background: $dark-button-secondary-background-default;
      border-color: $dark-button-secondary-border;
      color: $dark-button-secondary-text;

      &:hover {
        background: $dark-button-secondary-background-hover;
      }
    }
  }
}
</style>
