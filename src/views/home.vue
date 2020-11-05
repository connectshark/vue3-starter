<template>
  <HeadBar :title="title"/>
  <NavBar :routers="routers" />
</template>

<script>
import HeadBar from '@/components/headBar.vue'
import NavBar from '@/components/navBar.vue'

export default {
  name: 'home',
  components: {
    HeadBar,
    NavBar
  },
  data () {
    return {
      title: 'Hi! vue3 starter',
      routers: [{
        value: 'ref功能試用',
        route: '/ref'
      }]
    }
  },
}
</script>

<style scoped>
.home{

}
</style>
