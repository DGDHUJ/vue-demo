<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
#nasoggh {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
body {
  background-color: #fbf9fe;
}
</style>

<style>