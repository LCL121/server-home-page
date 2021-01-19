<template>
  <div class="home-footer-main">
    © 2021 LCL首页 | <a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备2021001361号</a>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.home-footer-main {
  @include fontCenter(px2rem(40));
  color: $homeTextColor;
  font-size: 12px;
  cursor: default;

  a {
    color: $homeTextColor;
  }
}
</style>
