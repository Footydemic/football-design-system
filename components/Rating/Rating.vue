<template>
  <div :class="ratingClass" class="fds-rating">
    <span>
      {{ rating }}
    </span>
  </div>
</template>

<script>
export default {
  name: "FdsRating",
  props: {
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  computed: {
    ratingClass() {
      return [
        { rating0: this.rating >= 0 && this.rating <= 1 },
        { rating1: this.rating >= 1 && this.rating < 2 },
        { rating2: this.rating >= 2 && this.rating < 3 },
        { rating3: this.rating >= 3 && this.rating < 4 },
        { rating4: this.rating >= 4 && this.rating < 5 },
        { rating5: this.rating >= 5 && this.rating < 6 },
        { rating6: this.rating >= 6 && this.rating < 7 },
        { rating7: this.rating >= 7 && this.rating < 8 },
        { rating8: this.rating >= 8 && this.rating < 9 },
        { rating9: this.rating >= 9 && this.rating < 10 },
        { rating10: this.rating === 10 },
      ]
    },
  },
}
</script>

<style lang="scss">
// component specific
$c-rating0: #f00;
$c-rating1: #f00;
$c-rating2: #f00;
$c-rating3: #f00;
$c-rating4: #f00;
$c-rating5: #fc3;
$c-rating6: #fc3;
$c-rating7: #6c3;
$c-rating8: #6c3;
$c-rating9: rgb(88, 231, 16);
$c-rating10: rgb(192, 189, 7);

// component specific
$c-rating-inline0: #f00;
$c-rating-inline1: #f00;
$c-rating-inline2: #f00;
$c-rating-inline3: #f00;
$c-rating-inline4: #f00;
$c-rating-inline5: #fc3;
$c-rating-inline6: #fc3;
$c-rating-inline7: #6c3;
$c-rating-inline8: #6c3;
$c-rating-inline9: rgb(88, 231, 16);
$c-rating-inline10: rgb(192, 189, 7);

.fds-app .fds-rating {
  border-color: #eee;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  line-height: 37px;
  font-size: 15px;
  font-weight: bold;
  color: #222;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  border: 2px solid;
  justify-content: center;
  @include t-body-1;

  &.inline {
    border: none !important;
    color: #fff;
  }

  &.mono {
    border: 2px solid;
    border-color: #eee;
  }

  .empty {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    margin: 0 8px;
    font-weight: bold;
  }

  &.rating0 {
    border-color: $c-rating0;
    &.inline {
      background-color: $c-rating-inline0;
    }
  }
  &.rating1 {
    border-color: $c-rating1;
    &.inline {
      background-color: $c-rating-inline1;
    }
  }
  &.rating2 {
    border-color: $c-rating2;
    &.inline {
      background-color: $c-rating-inline2;
    }
  }
  &.rating3 {
    border-color: $c-rating3;
    &.inline {
      background-color: $c-rating-inline3;
    }
  }
  &.rating4 {
    border-color: $c-rating4;
    &.inline {
      background-color: $c-rating-inline4;
    }
  }
  &.rating5 {
    border-color: $c-rating5;
    &.inline {
      color: #fff;
      background-color: $c-rating-inline5;
    }
  }
  &.rating6 {
    border-color: $c-rating6;
    &.inline {
      background-color: $c-rating-inline6;
    }
  }
  &.rating7 {
    border-color: $c-rating7;
    &.inline {
      background-color: $c-rating-inline7;
    }
  }
  &.rating8 {
    border-color: $c-rating8;
    &.inline {
      background-color: $c-rating-inline8;
    }
  }
  &.rating9 {
    border-color: $c-rating9;
    &.inline {
      background-color: $c-rating-inline9;
    }
  }
  &.rating10 {
    border-color: $c-rating10;
    &.inline {
      background-color: $c-rating-inline10;
    }
  }
}
</style>
