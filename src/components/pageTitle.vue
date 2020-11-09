<template>
  <div class="pageTitle">
    <span class="material-icons back-btn" @click="backPage">keyboard_backspace</span>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'pageTitle',
  props: {
    title: String
  },
  setup () {
    const router = useRouter()
    const backPage = () => {
      router.back()
    }
    return {
      backPage
    }
  }
}
</script>

<style scoped lang="scss">
.pageTitle{
  width: 100%;
  position: relative;
  box-shadow: 5px 0 10px #ccc;
  h1{
    padding: 50px 0;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 90%;
    margin: auto;
  }
  .back-btn{
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
    padding: 10px 10px;
  }
}
</style>