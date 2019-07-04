<template>
  <swiper class="mz-banner" :options="swiperOption" >
    <swiper-slide
      v-for="item in bannerList"
      :key="item.bannerId"
      >
      <img :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Banner',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        speed: 400,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true // 修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      bannerList: state => state.banner.bannerList
    })
  },
  methods: {
    ...mapActions({
      actionsBannerList: 'banner/actionsBannerList'
    })
  },
  mounted () {
    this.actionsBannerList()
  }
}
</script>

<style lang="scss" scoped>
.mz-banner {
  height: 210px;

  img {
    width: 100%;
  }
}
</style>
