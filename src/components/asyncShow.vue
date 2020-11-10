<template>
  <h2>{{ result }}</h2>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          result: '謝謝你的等待'
        })
      }, 5000)
    })
  }
})
</script>