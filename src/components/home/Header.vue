<template>
  <div class="home-header-main">
    <img
      :src="`${publicPath}img/logo.png`"
      alt="logo"
    >
    <span>LCL首页</span>
    <nav>
      <router-link to="/about">关于</router-link>
    </nav>
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
    height: 40px;
    margin-left: 140px;
  }
  span {
    font-size: 24px;
    font-weight: 700;
    cursor: default;
  }
  nav {
    margin-right: 140px;
    a {
      color: $homeTextColor;
      font-size: 16px;
    }
  }
}
</style>
