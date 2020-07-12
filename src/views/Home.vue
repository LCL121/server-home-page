<template>
  <div class="home">
    <home-header class="home-header"></home-header>
    <home-center class="home-center"></home-center>
    <home-footer class="home-footer"></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  mounted () {
    const tThis = this
    axios.get('api/home_page/projectDetails.json')
      .then(function (response) {
        const data = response.data
        if (data.success) {
          tThis.$store.commit('setProjects', data.data)
        } else {
          console.error('projectDetails.json 获取失败')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
      .finally(function () {
      })
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: $middleWidth;
  height: 1110px;
  background: #f4f4f4;
  .home-header {
    @include setDivMiddle($middleWidth);
    height: 60px;
    background: #5473aa;
  }
  .home-center {
    @include setDivMiddle($middleWidth);
    flex: 1;
  }
  .home-footer {
    @include setDivMiddle($middleWidth);
    height: 40px;
    background: #405580;
  }
}
</style>
