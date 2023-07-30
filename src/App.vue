<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family:'msz';
  src:url('../public/fonts/MaShanZheng-Regular.ttf')
}

#app {
  overflow: hidden;
}
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  margin:0px;
  padding:0px;
}
</style>
