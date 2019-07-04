<template>
    <div class="content">
      <ul>
        <router-link
          tag="li"
          v-for="item in movieNowList"
          :key="item.filmId"
          :to="'/movieDetails/' + item.filmId"
        >
          <div class="movie_img">
            <img :src="item.poster" alt />
          </div>
          <div class="movie_datails">
            <div class="movie_datails_movieId">
              <span class="name">{{ item.name }}</span>
              <span class="item">{{ item.filmType.name }}</span>
            </div>
            <div class="movie_datails_pingfen">
              <span>{{ item.grade ? '观众评分 ' : '&nbsp;'}}</span>
              <span class="number">{{ item.grade }}</span>
            </div>
            <div class="movie_datails_star">
              <span>主演：{{ actorFormat(item.actors) }}</span>
            </div>
            <div class="movie_datails_time">
              <span>{{ item.nation }} | {{ item.runtime }}分钟</span>
            </div>
          </div>
          <div class="movie_buy">购票</div>
        </router-link>
      </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NowPlaying',
  computed: {
    ...mapState({
      movieNowList: state => state.movie.movieNowList
    })
  },
  methods: {
    actorFormat (actors = []) {
      let tmp = actors.map(item => item.name)
      return tmp.length ? tmp.join(' ') : '暂无主演'
    },
    ...mapActions({
      actionsMovieNowList: 'movie/actionsMovieNowList'
    })
  },
  mounted () {
    this.actionsMovieNowList()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common/mixins.scss";
.content {
  padding-bottom: 49px;
  ul {
    list-style: none;
    padding: 0;
    margin-left: 15px;
    margin-bottom: 0;
    margin-top: 0;
    li {
      @include border-bottom;
      height: 94px;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      .movie_img {
        height: 94px;
        width: 66px;
        background: rgb(249, 249, 249);
        float: left;
        img {
          width: 66px;
          border-radius: 2px;
        }
      }
      span {
        font-size: 13px;
        margin-top: 4px;
        color: #797d82;
      }

      .movie_datails {
        float: left;
        width: 209px;
        padding: 0 10px;
        & > div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        .movie_datails_movieId {
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
        }
        .movie_datails_pingfen {
          visibility: visible;
          .number {
            color: #ffb232;
            font-size: 14px;
          }
        }
      }

      .movie_buy {
        @include film_buy;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        float: right;
      }
    }
  }
}
</style>
