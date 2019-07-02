<template>
  <div class="mz-movie">
    <Banner></Banner>
    <div class="movie_content">
      <ul class="movie_content_ul">
        <router-link class="movie_content_li" to="/movie/nowPlaying" tag="li">正在热映
        </router-link>
        <router-link class="movie_content_li" to="/movie/comingSoon" tag="li">即将上映</router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name: 'movie',
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/common/mixins.scss";
  .movie_content {
    @include border-bottom;
    height: 49px;
    background: #fff;
    &_ul{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_li{
      height: 100%;
      line-height: 49px;
      margin: 0 60PX;
      font-size: 14px;
      box-sizing: border-box;
    }
    .router-link-active{
        color: #ff5f16;;
        border-bottom:2px #ff5f16 solid;
    }
  }
</style>
