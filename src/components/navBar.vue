<template>
  <nav class="navBar">
    <ul class="list-group">
      <li
        class="list-item"
        v-for="route in routers"
        :key="route.value">
        <router-link :to="route.route">{{route.value}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    routers: Array
  }
}
</script>

<style lang="scss" scoped>
.navBar{
  width: 90%;
  margin: auto;
  max-width: 1200px;
  .list-item{
    display: block;
    border-radius: 40px;
    box-shadow: 0 3px 10px #ccc;
    a{
      box-sizing: border-box;
      padding: 20px;
      display: block;
      text-decoration: none;
      color: #6F60F4;
    }
  }
}
</style>