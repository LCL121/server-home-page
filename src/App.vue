<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url("assets/style/iconfont.css");

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: "PingFang SC", "微软雅黑", serif, "Microsoft YaHei", Helvetica, "Helvetica Neue", Tahoma, Arial, sans-serif;
}
</style>
