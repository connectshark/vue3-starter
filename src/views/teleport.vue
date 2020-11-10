<template>
  <page-title :title="'hahaah'"/>
  <input type="button" value="開關按鈕" @click="isOpen = !isOpen">
  <Dialog v-if="isOpen"/>
</template>

<script>
import PageTitle from '../components/pageTitle'
import Dialog from '../components/dialog'
import { ref } from 'vue'
export default {
  components: {
    PageTitle,
    Dialog
  },
  setup () {
    const isOpen = ref(true)
    return {
      isOpen
    }
  }
}
</script>

<style>

</style>