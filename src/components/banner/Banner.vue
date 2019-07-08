<template>
  <div class="banner">
    <div class="citylist_go" @click="handleGoCity">
      <span>{{curCityInfo ? curCityInfo.name : '深圳'}}</span>
      <i class="iconfont iconarrow-down"></i>
    </div>

    <swiper :options="swiperOption">
      <img
        v-for="(item,index) in  bannerList"
        :key="index"
        class="swiper-slide"
        :src="item.imgUrl"
        alt
      />
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css"
import { swiper } from "vue-awesome-swiper"
import Vuex from "vuex"

export default {
  name: "Banner",
  data() {
    return {
      icon: "&#xe7ee;",
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    }
  },
  components: {
    swiper
  },
  computed: {
    ...Vuex.mapState("banner", ["bannerList"]),
    ...Vuex.mapGetters("city", ["curCityInfo"])
  },
  methods: {
    ...Vuex.mapActions("banner", ["getBannerList"]),
    handleGoCity() {
      this.$router.push("/city");
    }
  },
  created() {
    this.getBannerList()
  }
};
</script>
<style lang="scss">
.banner {
  position: relative;
}
.citylist_go {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
  i {
    font-size: 8px;
  }
}
.swiper-container {
  height: 210px;
  width: 100%;
}
</style>
