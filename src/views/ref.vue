<template>
  <PageTitle :title="pageName"/>
  <div class="content">
    <h2>筆記重點</h2>
    <p>vue3重寫過後讓每個需要響應式的變數都改用proxy重新包裝</p>
    <p>在setup中使用ref定義字串或數字</p>
    <p>即可讓該變數有響應式的變化</p>
    <h2>{{ count }}</h2>
    <input type="button" value="點擊+1" @click="count ++">
    <p>此頁<a href="https://github.com/connectshark/vue3-starter/blob/master/src/views/ref.vue" target="_blank" rel="noopener noreferrer">demo code</a></p>
  </div>
</template>

<script>
import { ref } from 'vue'
import PageTitle from '../components/pageTitle'

export default {
  name: 'ref',
  components: {
    PageTitle
  },
  setup () {
    const pageName = ref('ref用法')
    const count = ref(0)
    return {
      pageName,
      count
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  width: 90%;
  margin: auto;
  margin-bottom: 5px;
  h2{
    font-size: 25px;
    line-height: 40px;
  }
  p{
    text-align: left;
    font-size: 21px;
    line-height: 32px;
  }
}
</style>
