<template>
  <van-list
    v-model="filmLoading"
    :immediate-check="true"
    @load="getFilmList"
    :finished="isFinished"
    finished-text="别拉了"
    ref="myBox"
  >
    <div class="home_mian">
      <Banner />
      <van-tabs v-model="curFilmType" sticky>
        <van-tab title="正在热映">
          <Filmlist filmType="nowPlaying" :list="filmList" />
        </van-tab>
        <van-tab title="即将上映">
          <Filmlist filmType="comingSoon" :list="filmList" />
        </van-tab>
      </van-tabs>
    </div>
  </van-list>
</template>

<script>
import Banner from '@/components/banner/Banner'
import Filmlist from '@/components/Filmlist'
import Vuex from 'vuex'

export default {
  name: 'movie',
  data () {
    return {
      active: 0
    }
  },
  components: {
    Banner,
    Filmlist
  },

  computed: {
    ...Vuex.mapState('movie', ['filmList']),
    ...Vuex.mapGetters('movie', ['isFinished']),

    curFilmType: {
      get () {
        return this.$store.state.movie.curFilmType
      },
      set (value) {
        this.$store.commit({
          type: 'movie/setCurFilmType',
          filmType: value
        })
      }
    },
    filmLoading: {
      get () {
        return this.$store.state.movie.filmLoading
      },
      set (value) {
        this.$store.commit({
          type: 'movie/setFilmLoading',
          loading: value
        })
      }
    }
  },
  methods: {
    ...Vuex.mapActions('movie', ['getFilmList'])
  },
  watch: {
    curFilmType (newVal, oldVal) {
      // console.log(1111)
      this.$refs.myBox.$el.scrollTop = 0

      this.getFilmList(true)
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  width: 60%;
  margin: 1rem auto;
  display: flex;
}
.movie_menu_switch {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.movie_menu_switch li {
  height: 100%;
  padding: 0 5px;
  line-height: 50px;
  font-size: 14px;

  text-align: center;
  &.active {
    color: #ff5f16;
    border-bottom: #ff5f16 solid 1px;
  }
}
</style>
