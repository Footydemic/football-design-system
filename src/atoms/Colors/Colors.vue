<template>
  <div>
    <div class="fds-colors">
      <div class="color-box">
        <div class="bg-deep-green" />
        <p>
          Deep green <br />
          (#3ca000)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FdsColors",
}
</script>

<style scoped lang="scss">
.fds-colors {
  font-family: "Fira Sans";
  display: flex;
  margin-bottom: 20px;

  .color-box {
    margin-right: 10px;
    margin-bottom: 10px;

    div {
      width: 150px;
      height: 100px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
      line-height: 22px;
      margin-top: 5px;
    }
  }
}
</style>
