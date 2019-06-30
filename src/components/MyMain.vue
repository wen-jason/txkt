<template>
  <div class="main">
    <div class="zhibo">
      <dl>
        <dt>
          <h2>互联网产品</h2>
        </dt>
        <dd>
          <a href="#">前端开发</a>
        </dd>
        <dd>
          <a href="#">软件测试</a>
        </dd>
        <dd>
          <a href="#">
            <span class="el-icon-plus"></span>
          </a>
        </dd>
      </dl>
      <div class="z-con">
        <zhibo :zlist="zblist"></zhibo>
      </div>
      <div class="mian-class">
        <mclass :list="hotlist" title="热门推荐"></mclass>
        <mclass :list="cplist" title="产品策划&产品运营"></mclass>
        <mclass :list="xmlist" title="新媒体&SEO"></mclass>
      </div>
    </div>
  </div>
</template>

<script>
import zhibo from '@/components/index/Zhibo.vue'
import mclass from '@/components/index/Mclass.vue'
export default {
  data () {
    return {
      zblist: [
        {
          img: require('@/assets/img/pig4.png'),
          title: '[官方推荐]自媒体独...',
          teach: '泛学苑七号先生',
          time: '13:30'
        },
        {
          img: require('@/assets/img/pig5.png'),
          title: '[官方推荐]自媒体每...',
          teach: '斯雁教育月牙老师',
          time: '13:30'
        },
        {
          img: require('@/assets/img/pig6.png'),
          title: '[速度]秒排建站之域...',
          teach: '魔贝课凡秦羽老师',
          time: '13:30'
        }
      ],
      hotlist: [
        {
          img: require('@/assets/img/pig4.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig5.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig6.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig7.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig8.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig9.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        }
      ],
      cplist: [
        {
          img: require('@/assets/img/pig10.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '1.00'
        },
        {
          img: require('@/assets/img/pig11.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '29.90'
        },
        {
          img: require('@/assets/img/pig12.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '98.00'
        },
        {
          img: require('@/assets/img/pig13.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '99.00'
        },
        {
          img: require('@/assets/img/pig14.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '99.00'
        },
        {
          img: require('@/assets/img/pig15.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '298.00'
        }
      ],
      xmlist: [
        {
          img: require('@/assets/img/pig16.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig17.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig18.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '3899.00'
        },
        {
          img: require('@/assets/img/pig19.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '4080.00'
        },
        {
          img: require('@/assets/img/pig20.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: null
        },
        {
          img: require('@/assets/img/pig21.png'),
          title: '知识变现，0成本兼职创业 做互联网讲师...',
          price: '2998.00'
        }
      ]
    }
  },
  components: {
    zhibo,
    mclass
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/main.scss";
</style>
