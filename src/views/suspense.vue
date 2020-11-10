<template>
  <page-title :title="pageTitle" />
  <Suspense>
    <template #default>
      <async-show/>
    </template>
    <template #fallback>
      <p>等待5秒</p>
    </template>
  </Suspense>
</template>

<script>
import { ref } from 'vue'
import PageTitle from '../components/pageTitle'
import asyncShow from '../components/asyncShow'

export default {
  components: {
    PageTitle,
    asyncShow
  },
  setup () {
    const pageTitle = ref('異步組建和Suspense用法')
    return {
      pageTitle
    }
  }
}
</script>

<style>

</style>