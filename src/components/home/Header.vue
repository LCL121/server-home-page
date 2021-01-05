<template>
  <div class="home-header-main">
    <img
      :src="`${publicPath}img/logo.png`"
      alt="logo"
    >
    <span>LCL首页</span>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.home-header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $homeTextColor;
  img {
    height: px2rem(40);
    margin-left: px2rem(75);
  }
  span {
    font-size: px2rem(24);
    font-weight: 700;
    cursor: default;
  }
  a {
    color: $homeTextColor;
    font-size: 16px;
    margin-right: px2rem(75);
  }
}
</style>
