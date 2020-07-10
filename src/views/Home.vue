<template>
  <div class="home">
    <home-header class="home-header"></home-header>
    <home-center class="home-center"></home-center>
    <home-footer class="home-footer"></home-footer>
  </div>
</template>
<script>
import HomeHeader from 'components/home/Header'
import HomeCenter from 'components/home/Center'
import HomeFooter from 'components/home/Footer'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeCenter,
    HomeFooter
  }
}
</script>
<style scoped lang="scss">
@import "assets/global.scss";

.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: $middleWidth;
  height: 100vh;
  background: #F4F4F4;
  .home-header {
    @include setPageMiddle($middleWidth);
    height: 65px;
    background: #5473AA;
  }
  .home-center {
    @include setPageMiddle($middleWidth);
    flex: 1;
  }
  .home-footer {
    @include setPageMiddle($middleWidth);
    height: 30px;
    background: #405580;
  }
}
</style>
