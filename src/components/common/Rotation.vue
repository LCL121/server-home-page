<template>
  <div
    class="rotation"
    @mousedown="clearTimer"
    @mouseup="setTimer"
    @mouseover="clearTimer"
    @mouseout="setTimer"
    @touchstart="startOperation"
    @touchend="endOperation"
  >
    <ul class="rotation-images">
      <li
        :class="['rotation-image', {'image-selected': index === select}]"
        v-for="(item, index) in list"
        :key="index"
      >
        <a :href="item.path" target="_blank">
          <img :src="item.image">
        </a>
      </li>
    </ul>
    <div class="rotation-nav">
      <div
        :class="['rotaion-nav-wrapper', {selected: index === select}]"
        v-for="(item, index) in list"
        :key="index"
        @mouseover="changeSelected(index)"
      >
        <div class="rotation-nav-title">{{item.title}}</div>
        <div
          class="rotation-nav-detail"
          v-show="index === select"
        >{{item.detail}}</div>
      </div>
    </div>
    <div class="rotation-nav-mobile">
      <div v-for="i in 10" :key="i" :class="{selected: i === select + 1}"></div>
    </div>
  </div>
</template>

<script>
const sleepTime = 5000

const rotation = {
  name: 'Rotation',
  props: {
    rotationProjects: Array
  },
  data () {
    return {
      select: 0,
      timer: setInterval(() => {
        this.select++
        if (this.select >= 10) this.select = 0
      }, sleepTime),
      startX: 0
    }
  },
  computed: {
    list () {
      const list = this.rotationProjects
      let len = list && list.length
      for (; len < 10; len++) {
        list.push({
          title: `title: ${len + 1}`,
          detail: `detail: ${len + 1}`,
          image: '/img/1.jpg',
          path: '#'
        })
      }
      return list
    }
  },
  methods: {
    changeSelected (index) {
      this.select = index
    },
    startOperation (event) {
      this.clearTimer()
      this.startX = event.touches[0].clientX
    },
    endOperation (event) {
      const moveX = event.changedTouches[0].clientX - this.startX
      if (moveX >= 50) {
        this.select--
      } else if (moveX <= -50) {
        this.select++
      }
      if (this.select >= 10) this.select = 0
      if (this.select < 0) this.select = 9
      this.setTimer()
    },
    clearTimer () {
      clearInterval(this.timer)
      this.timer = null
    },
    setTimer () {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.select++
          if (this.select >= 10) this.select = 0
        }, sleepTime)
      }
    }
  }
}

export default rotation
</script>

<style scoped lang="scss">
@import '@/assets/style/global.scss';

.rotation {
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  .rotation-images {
    height: 100%;
    width: 100%;
    position: relative;
    .rotation-image {
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s;
      position: absolute;
      top: 0;
    }
    .image-selected {
      z-index: 10;
      opacity: 1;
      transition: 0.5s;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .rotation-nav {
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    width: px2rem(300);
    height: px2rem(430);
    padding: px2rem(10) 0;
    position: absolute;
    top: px2rem(5);
    display: flex;
    flex-direction: column;
    font-size: px2rem(16);
    right: px2rem(100);
    @media screen and (max-width:1100px) {
      right: px2rem(50);
    }
    @media screen and (max-width:500px) {
      display: none;
    }
    .rotaion-nav-wrapper {
      color: #dddddd;
      width: 100%;
      flex: 1;
      padding: px2rem(8) px2rem(15);
      box-sizing: border-box;
    }
    .selected {
      flex: 2;
      height: auto;
      color: #0676fe;
      background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent);
      .rotation-nav-title {
        font-size: px2rem(22);
        margin: px2rem(5) 0;
      }
    }
  }

  .rotation-nav-mobile {
    z-index: 100;
    position: absolute;
    bottom: px2rem(15);
    display: flex;
    left: px2rem(150);
    @media screen and (min-width:501px) {
      display: none;
    }

    div {
      height: px2rem(20);
      width: px2rem(20);
      border-radius: 50%;
      background: rgba(255, 255, 255, .3);
    }

    .selected {
      background: #ffffff;
    }
  }
}
</style>
