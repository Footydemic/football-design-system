<template>
  <div class="fds-fixture" :class="customClass">
    <FdsTeam :team="fixture.home" :flat-avatar="flatTeam" reverse-order />

    <div class="fds-fixture-result">
      <p class="fds-fixture-full">
        {{ fixture.result.full }}
      </p>
      <p class="fds-fixture-ht">({{ fixture.result.ht }})</p>
    </div>

    <FdsTeam :team="fixture.away" :flat-avatar="flatTeam" />
  </div>
</template>

<script>
import FdsTeam from "../Team/Team.vue"

export default {
  name: "FdsFixture",
  components: {
    FdsTeam,
  },
  props: {
    fixture: {
      required: true,
      type: Object,
      default: () => {},
    },
    flatTeam: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customClass() {
      return {
        "fds-fixture--flat": this.flatTeam,
      }
    },
  },
}
</script>

<style lang="scss">
.fds-app .fds-fixture {
  cursor: pointer;
  @include t-body-2;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  align-items: center;

  .fds-fixture-result {
    color: #333;
    font-size: 28px;
    font-family: "Rubik";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 38px;
    padding: 10px 35px 0;
  }

  .fds-fixture-full {
    line-height: 30px;
  }

  .fds-fixture-ht {
    font-size: 13px;
    font-family: "Rubik";
    color: #888;
    padding-top: 4px;
  }

  .fds-team {
    width: 350px;
  }
}
</style>
