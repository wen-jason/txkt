<template>
  <div class="header">
    <div class="search">
        <img src="@/assets/img/logo.png" alt>
        <div class="input">
          <div class="s-logo">
            <span class="el-icon-search"></span>
          </div>
          <div class="s-input">
             <input type="text" placeholder="人人都会微信小程序">
          </div>

        </div>
      </div>
      <div class="slider">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="@/assets/img/slider1.png" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="haopin">
        <img class="hp" src="@/assets/img/haopin.png" alt>
        <div class="h-right">
          <img src="@/assets/img/bao.png" alt>
          <div class="text">
            <h3>
              <a href="#">高效办公训练专区</a>
            </h3>
            <a href="#">现时优惠好课马上领</a>
          </div>

        </div>
         <span class="el-icon-arrow-right"></span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/css/index/header.scss'
</style>
