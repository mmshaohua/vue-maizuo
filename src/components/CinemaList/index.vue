<template>
  <div class="mz-cinemaList">
    <div class="content">
      <ul>
        <router-link tag="li" to="" v-for="item in cinemaList" :key="item.cinemaId">
          <div class="cinemaList_left">
            <span class="name">{{ item.name }}</span>
            <span class="address">{{ item.address }}</span>
          </div>
          <div class="cinemaList_right">
            <div>
              <span>￥{{ item.lowPrice / 100 }} 起</span>
            </div>
            <strong>距离</strong>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CinemaList',
  computed: {
    ...mapState({
      cinemaList: state => state.cinema.cinemaList
    })
  },
  methods: {
    ...mapActions({
      actionsCinemaList: 'cinema/actionsCinemaList'
    })
  },
  mounted () {
    this.actionsCinemaList()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common/mixins.scss";
  .content {
    padding-bottom: 49px;
    margin-top: 95px;
    z-index: 100;
    ul {
      list-style: none;
      li {
        @include border-bottom;
        position: relative;
        background-color: #fff;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cinemaList_left {
          width: calc(100% - 65px);
          text-align: left;
          padding-right: 15px;
          span {
            display: block;
            max-width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .name {
            color: #191a1b;
            font-size: 15px;
            line-height: 22px;
          }
          .address {
            color: #797d82;
            font-size: 12px;
            margin-top: 5px;
          }
        }
        .cinemaList_right {
          width: 70px;
          text-align: center;
          float: right;
          margin-right: -5px;
          span {
            font-size: 15px;
            color: #ff5f16;
            height: 0!important;
            display: inline-table!important;
          }
          strong {
            display: block;
            font-size: 11px;
            color: #797d82;
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>
