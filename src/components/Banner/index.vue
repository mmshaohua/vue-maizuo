<template>
  <swiper class="mz-banner" :options="swiperOption">
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
        // loop: true, // 循环模式选项
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
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
