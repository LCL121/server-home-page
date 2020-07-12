<template>
  <router-link :to="path" class="show-more" v-html="text"></router-link>
</template>

<script>
export default {
  name: 'ShowMore',
  props: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";

.show-more {
  color: $homeTextColor;
  display: block;
  font-size: 14px;
}
</style>
