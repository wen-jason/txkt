<template>
  <div>
    <div class="z-item" v-for="item in zlist" :key="item.title">
      <div class="z-img">
        <img :src="item.img" alt>
      </div>
      <div class="item-r">
        <h3>{{item.title}}</h3>
        <p class="teach">{{item.teach}}</p>
        <p class="time">直播时间：{{item.time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['zlist']
}
</script>

<style lang="scss">
@import '@/assets/css/compon/zhibo.scss';
</style>
