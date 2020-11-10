<template>
  <teleport to="#modal">
    <div class="dialog">
      <h2>一個teleport跳窗</h2>
    </div>
  </teleport>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dialog{
  position: fixed;
  width: 80%;
  max-width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  h2{
    font-size: 24px;
    line-height: 2;
    text-align: center;
    color: #fff;
  }
}
</style>