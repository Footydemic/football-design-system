<template>
  <div v-if="breadcrumbs.length" class="fds-breadcrumbs">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <template v-if="item.link">
          <a :href="item.link">
            {{ item.text }}
          </a>
        </template>
        <span v-else>
          {{ item.text }}
        </span>
        <span v-if="showIcon(index)" class="icon ion-ios-arrow-forward" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FdsBreadcrumbs",
  props: {
    breadcrumbs: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /**
     * @description Should I show the icon?
     * @param index
     *
     * @returns {Boolean}
     */
    showIcon(index) {
      return index !== this.breadcrumbs.length - 1
    },
  },
}
</script>

<style lang="scss">
.fds-breadcrumbs {
  @include t-body-2;

  color: $c-black-100;
  font-size: 13px;
  height: 16px;
  line-height: 16px;
  padding: 20px 0 25px;
  margin: 0 auto;

  ul {
    list-style: none;

    @include clearfix;

    li {
      float: left;

      a {
        color: currentColor;
        text-decoration: none;

        &:hover {
          color: $c-green-110;
        }
      }

      span {
        color: $c-gray-100;
      }

      .icon {
        margin: 0 10px 0 8px;
      }
    }
  }
}
</style>
