<template>
  <div class="wrap">
    <el-header height>
      <my-header></my-header>
    </el-header>
    <el-main>
      <my-main></my-main>
    </el-main>
    <el-footer height>
      <a href="#" class="find">查看全部教程</a>
    </el-footer>
    <div class="fixe">
      <ul>
        <li>
          <a href="#">
           <img src="@/assets/img/home.png" alt="">
            首页
          </a>
        </li>
        <li>
          <a href="#">
           <img src="@/assets/img/lei.png" alt="">
            分类
          </a>
        </li>
        <li>
          <a href="#">
           <img src="@/assets/img/class.png" alt="">
            课程表
          </a>
        </li>
        <li>
          <router-link :to="{name:'personal'}">
             <img src="@/assets/img/my.png" alt="">
            我的
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/MyHeader.vue'
import myMain from '@/components/MyMain.vue'

export default {
  data () {
    return {}
  },
  components: {
    myHeader,
    myMain
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
</style>
