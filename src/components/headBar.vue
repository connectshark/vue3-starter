<template>
  <header id="headBar">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'headBar',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
#headBar{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 80px 0;
  .title{
    font-size: 30px;
    line-height: 2;
  }
}
</style>