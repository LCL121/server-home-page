<template>
  <div class="home-footer-main">
    ©LCL首页 | Powered by LCL
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
}
</style>
