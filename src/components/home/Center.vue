<template>
  <div class="home-center-main">
    <div class="home-center-main-roll">
      <rotation :rotationProjects=rotationProjects.public></rotation>
    </div>
    <div class="home-center-main-main">
      <div class="home-center-main-main-vueproject">
        <show-more
          class="home-center-main-main-allproject-head"
          :text="vueProject.text"
          :path="vueProject.path"
        ></show-more>
        <div class="home-center-main-main-allproject-main">
          <home-project-block
            v-for="(value, key) in vueProjectInfo"
            :key="key"
            :title="value.title"
            :detail="value.detail"
            :backgroundImagePath="value.backgroundImagePath"
            :path="value.path"
            class="home-center-main-main-project-item"
          ></home-project-block>
        </div>
      </div>
      <div class="home-center-main-main-reactproject">
        <show-more
          class="home-center-main-main-allproject-head"
          :text="reactProject.text"
          :path="reactProject.path"
        ></show-more>
        <div class="home-center-main-main-allproject-main">
          <home-project-block
            v-for="(value, key) in reactProjectInfo"
            :key="key"
            :title="value.title"
            :detail="value.detail"
            :backgroundImagePath="value.backgroundImagePath"
            :path="value.path"
            class="home-center-main-main-project-item"
          ></home-project-block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Rotation from '../common/Rotation'
import HomeProjectBlock from './ProjectBlock'
import ShowMore from '../common/ShowMore'

export default {
  name: 'HomeCenter',
  computed: {
    vueProjectInfo () {
      return this.$store.getters.projects.VueProject && this.$store.getters.projects.VueProject.public
    },
    reactProjectInfo () {
      return this.$store.getters.projects.ReactProject && this.$store.getters.projects.ReactProject.public
    }
  },
  data () {
    return {
      vueProject: {
        text: '查看更多Vue项目 <span class="iconfont" style="font-size: 12px;">&#xe621;</span>',
        path: '/vue-project'
      },
      reactProject: {
        text: '查看更多React项目 <span class="iconfont" style="font-size: 12px;">&#xe621;</span>',
        path: '/react-project'
      },
      rotationProjects: {}
    }
  },
  components: {
    HomeProjectBlock,
    ShowMore,
    Rotation
  },
  mounted () {
    const that = this
    axios.get('/api/home_page/rotation.json')
      .then((res) => {
        that.rotationProjects = res.data.data
      })
      .catch()
      .finally()
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.home-center-main {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #5473aa, #405580);
  .home-center-main-roll {
    // background: url($homeImgPublicPath+"1.jpg") no-repeat;
    // background-size: 100% 100%;
    background: #ccc;
    height: px2rem(460);
    @media screen and (max-width:501px) {
      height: px2rem(350);
    }
  }
  .home-center-main-main {
    @include setDivMiddle(px2rem(920));
    margin-top: px2rem(15);
    flex: 1;
    .home-center-main-main-project-item {
      margin: px2rem(5) px2rem(30);
    }
    .home-center-main-main-allproject-head {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: px2rem(10) px2rem(30) px2rem(10) 0;
    }
    .home-center-main-main-allproject-main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
