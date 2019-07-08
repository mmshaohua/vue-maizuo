<template>
  <div class="mz-details">
    <div class="details_header">
      <div class="goBack">
        <img @click="handleBack" src="../../assets/img/goBack.png" alt="">
      </div>
      <div class="title">{{ item.name }}</div>
    </div>
    <div class="film_poster">
      <img :src="item.poster" alt="">
    </div>
    <div class="film_conent">
      <div class="col">
        <div class="film_name">
          <span class="name">{{ item.name }}</span>
          <span class="item">{{ item.item.name }}</span>
        </div>
        <div class="grade">{{ item. grade }}{{ item.grade ? '分' : '&nbsp;'}}</div>
      </div>
      <div class="category text">{{ item.category }}</div>
      <div class="time text">2019-06-21上映</div>
      <div class="runtime text">{{ item.nation }} | {{ item.runtime }} 分钟</div>
      <div class="hidde text">{{ item.synopsis }}</div>
    </div>
    <div class="film_actors">
      <div class="actors_title">演职人员</div>
      <!-- 有一部电影是没有演员列表的 TODO -->
      <ul class="actors_list" v-if="item.actors">
        <li
          v-for="(actor, index) in item.actors"
          :key="index"
          >
          <img :src="actor.avatarAddress" alt="">
          <span class="actors_name">{{ actor.name }}</span>
          <span>{{ actor.role }}</span>
        </li>
      </ul>
      <ul class="actors_list" v-else>
        <li>木有人啊</li>
      </ul>
    </div>
    <div class="film_photos">111</div>
    <div class="toBuyTicket">选座购票</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'movieDetails',

  computed: {
    ...mapState({
      item: state => state.details.movieDetails
    })
  },

  methods: {
    handleBack () {
      // console.log(this.$route.params)
      this.$router.go(-1)
    },
    ...mapActions({
      actionsMovieDetails: 'details/actionsMovieDetails'
    })
  },

  mounted () {
    // console.log(this.$route.params.filmId)

    this.$nextTick(() => {
      this.actionsMovieDetails(this.$route.params.filmId)
    })
  }
}
</script>

<style lang="scss" scoped>
.mz-details {
  height: 100%;
  box-sizing: border-box;
  background: #ccc;
  .details_header {
    position: fixed;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    transition: all .3s ease;
    width: 100%;
    height: 44px;
    z-index: 1;
    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
      }
    }
    .title {
      font-size: 17px;
      line-height: 44px;
      text-align: center;
    }
  }
  .film_poster {
    width: 100%;
    height: 210px;
    background: rgb(249, 249, 249);
    position: relative;
    opacity: 1;
    display: block;
    img {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .film_conent {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
    .col {
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      .film_name {
        width: 256px;
        span {
          vertical-align: middle;
        }
        .name {
          color: #191a1b;
          font-size: 18px;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          display: inline-block;
        }
      }
      .grade {
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        font-size: 18px;
      }
    }
    .text {
      font-size: 13px;
      color: #797d82;
      margin-top: 4px;
    }
    .hidde {
      font: 13px/1.5 Tahoma,Helvetica,Arial,sans-serif;
      height: 38px!important;
      overflow: hidden;
      margin-top: 12px;
    }
  }
  .film_actors {
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
    .actors_title {
      padding: 15px;
      font-size: 16px;
      text-align: left;
      color: #191a1b;
      height: 22.5px;
      line-height: 22px;
    }
    .actors_list {
      height: 140px;
      background: rgb(255, 255, 255);
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      padding-left: 15px;
      list-style: none;
      li {
        width: 85px;
        height: 131px;
        margin-right: 10px;
        cursor: pointer;
        display: block;
        float: left;
        img {
          width: 85px;
          height: 85px;
          background: rgb(249, 249, 249);
          display: block;
        }
        span {
          display: block;
          text-align: center;
          font-size: 10px;
          color: #797d82;
        }
        .actors_name {
          padding-top: 10px;
          font-size: 12px;
          color: #191a1b;
          width: 85px;
          height: 18px;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .film_photos {
    margin-top: 10px;
    margin-bottom: 60px;
    height: 177px;
    background-color: #fff;
  }
  .toBuyTicket {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>
