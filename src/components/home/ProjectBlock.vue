<template>
  <div
    class="home-project-block"
    :style="`background: url(${backgroundImagePath}) no-repeat;background-size: 100% 100%;`"
    @click="goTo(path)"
  >
    <div class="home-project-block-mask">
      <div class="home-project-block-title">{{title}}</div>
      <div class="home-project-block-detail">{{detail}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProjectBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: false
    },
    backgroundImagePath: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    goTo (path) {
      window.open(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.home-project-block {
  height: $homeProjectBlockHeight;
  width: $homeProjectBlockWidth;
  color: $homeTextColor;
  cursor: pointer;
  .home-project-block-mask {
    width: 100%;
    height: 100%;
    background: url($homeImgPublicPath+"mask.png");
    padding: px2rem(20) px2rem(30);
    box-sizing: border-box;
    .home-project-block-title {
      margin-top: px2rem(12);
      margin-bottom: px2rem(12);
      height: px2rem(56);
      font-size: px2rem(20);
      line-height: px2rem(28);
      font-weight: 700;
      color: #fff;
      word-break: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .home-project-block-detail {
      margin-bottom: px2rem(24);
      height: px2rem(44);
      font-size: px2rem(14);
      line-height: px2rem(22);
      color: rgba(255, 255, 255, 0.6);
      word-break: break-word;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
