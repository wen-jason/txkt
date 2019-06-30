<template>
  <div class="m-class">
    <h4>{{title}}</h4>
    <ul class="m-list">
      <li v-for="item in list" :key="item.index">
        <img :src="item.img" alt="">
        <p class="title">{{item.title}}</p>
        <span v-if="item.price" class="price">￥{{item.price}}</span>
        <span v-else class="price">免费</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list', 'title']
}
</script>

<style lang="scss">

@import '@/assets/css/compon/mclass.scss';
</style>
