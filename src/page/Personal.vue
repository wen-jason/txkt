<template>
  <div class="personal">
    <div class="p-header">
      <div class="p-message">
        <div class="text">
          <h1>Momoks</h1>
          <p>时光不回头，当下最重要</p>
        </div>
        <div class="img">
          <img src="@/assets/img/per.png" alt>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/sh.png" alt>
          <p>收货地址</p>
        </li>
        <li>
          <img src="@/assets/img/hc.png" alt>
          <p>缓存中心</p>
        </li>
        <li>
          <img src="@/assets/img/zd.png" alt>
          <p>我的重点</p>
        </li>
        <li>
          <img src="@/assets/img/dd.png" alt>
          <p>我的订单</p>
        </li>
      </ul>
    </div>
    
    <div class="content">
      <ul>
        <li>
          <a href="#">我的学呗</a>
          <p class="a">
            0学呗
            <span class="el-icon-arrow-right"></span>
          </p>
        </li>
        <li>
          <a href="#">我的优惠券</a>
          <p class="a">
            1张
            <span class="el-icon-arrow-right"></span>
          </p>
        </li>
        <li>
          <a href="#">我的拼团</a>
          <span class="el-icon-arrow-right"></span>
        </li>
        <li>
          <a href="#">分享有礼</a>
          <p>
            查看奖励
            <span class="el-icon-arrow-right"></span>
          </p>
        </li>
        <li>
          <a href="#">在线咨询</a>
          <p>
            周一至周日 9:00-24:00
            <span class="el-icon-arrow-right"></span>
          </p>
        </li>
        <li>
          <a href="#">客服热线</a>
          <p>
            周一至周日 9:00-24:00
            <span class="el-icon-arrow-right"></span>
          </p>
        </li>
        <li>
          <a href="#">APP评分</a>
          <span class="el-icon-arrow-right"></span>
        </li>
        <li>
          <a href="#">设置</a>
          <span class="el-icon-arrow-right"></span>
        </li>
      </ul>
    </div>
    <div class="fixed">
      <ul>
        <li>
          <router-link :to="{name:'index'}">
            <img src="@/assets/img/kc.png" alt>
            发现课程
          </router-link>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/img/wdkc.png" alt>
            我的课程
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/img/lc.png" alt>
            练习中心
          </a>
        </li>
        <li>
          <a href="#">
            <img src="@/assets/img/zh.png" alt>
            我的账户
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@/assets/css/personal.scss";
</style>
