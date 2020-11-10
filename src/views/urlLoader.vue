<template>
  <page-title :title="pageTitle" />
  <h2>useUrlLoader test</h2>
  <p v-if="loading" class="em">Loading ~~ ...</p>
  <div v-else class="img-place">
    <img :src="result.message" :alt="result.status">
  </div>
</template>

<script>
import { ref } from 'vue'
import PageTitle from '../components/pageTitle'
import useUrlLoader from '../hook/useUrlLoader'

export default {
  components: {
    PageTitle
  },
  setup () {
    const { result, loading, loaded, error } = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    const pageTitle = ref('url hook試用')
    return {
      error,
      result,
      loading,
      loaded,
      pageTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.em{
  font-size: 30px;
}
.img-place{
  width: 90%;
  margin: auto;
  img{
    width: 100%;
  }
}
</style>