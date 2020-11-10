<template>
  <PageTitle :title="pageTitle"/>
  <p>
    <input type="text"
      v-model="userData"
      @keyup.enter="enterUserData()"
      minlength="0"
      maxlength="5">
  </p>
  <p>
    <input type="button" value="reset" @click="clearData">
  </p>
  <p>{{ arr }}</p>
</template>

<script>
import { reactive, ref } from 'vue'
import PageTitle from '../components/pageTitle'
export default {
  name: 'reactive',
  components: {
    PageTitle
  },
  setup () {
    const pageTitle = ref('reactive功能試用')
    const userData = ref('')
    const arr = reactive([])
    const enterUserData = () => {
      const value = userData.value
      if (value === '') return
      arr.push(value)
      userData.value = ''
    }

    const clearData = () => {
      arr.length = 0
    }
    return {
      pageTitle,
      userData,
      arr,
      enterUserData,
      clearData
    }
  }
}
</script>

<style scoped>
p{
  margin-bottom: 30px;
}
</style>