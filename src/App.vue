<template>
  <router-link to='/'>首頁</router-link>
  <router-link to='/ref'>ref功能試用</router-link>
  <router-view></router-view>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const hello = ref('hello')
    return {
      hello
    }
  }
}
</script>

<style>
@font-face{
  font-family: 'openhuninn';
  src: url('assets/font/jf-openhuninn-1.1.ttf');
}
#app {
  font-family: openhuninn,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
