<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import "../static/amaze/css/amazeui.css";
  @import "../static/amaze/css/admin.css";
  @import "../static/amaze/css/app.css";

  #app {
    width: 100%;
    height: 100%;
  }
</style>
