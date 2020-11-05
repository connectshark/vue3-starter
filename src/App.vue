<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
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
}
</style>
