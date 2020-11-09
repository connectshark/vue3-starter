<template>
  <HeadBar :title="title"/>
  <NavBar :routers="routers" />
</template>

<script>
import HeadBar from '@/components/headBar.vue'
import NavBar from '@/components/navBar.vue'
import { reactive, ref } from 'vue'

export default {
  name: 'home',
  components: {
    HeadBar,
    NavBar
  },
  setup () {
    const routers = reactive([{
        value: 'ref功能試用',
        route: '/ref'
      }])
    const title = ref('Hi! vue3 starter')
    return {
      routers,
      title
    }
  }
}
</script>

<style scoped>
.home{

}
</style>
