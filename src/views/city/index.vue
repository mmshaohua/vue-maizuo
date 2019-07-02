<template>
  <div class="mz-city">
    <div class="header">
      <router-link tag="div" to="/cinema" class="header_left">
        <i class="iconfont iconchazi"></i>
      </router-link>
      <div class="header_title">当前城市 - </div>
    </div>
    <div class="search_city_input">
      <van-search placeholder="请输入城市名或拼音" v-model="value" />
    </div>
    <div class="content">
      <div class="content_header">
        <div class="gps_city">
          <div>GPS定位你所在的城市</div>
          <span>定位失败</span>
        </div>
        <div class="hot_city">
          <div>热门城市</div>
          <span>北京</span>
          <span>上海</span>
          <span>广州</span>
          <span>深圳</span>
        </div>
      </div>
      <van-index-bar>
        <van-index-anchor index="A" class="van-en" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="B" class="van-en" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'city',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState({
      cities: state => state.cityList.cities
    })
  }
}
</script>

<style lang="scss" scoped>
.mz-city {
  background-color: #fff;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 300;
    &>div {
      float: left;
      height: 44px;
    }
    &_left {
      width: 14%;
      display: flex;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      i {
        display: block;
        font-size: 19px;
        margin-left: 10px;
        color: #191a1b;
      }
    }
    .header_title {
      width: 72%;
      text-align: center;
      font-size: 17px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      color: #191a1b;
    }
  }
  .search_city_input {
    z-index: 2000;
    height: 49px;
    width: 100%;
    // padding: 9.5px 15px;
    position: fixed;
    top: 44px;
    .van-search {
      height: 49px;
    }
  }
  .content {
    padding-top: 94px;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-right: 17px;
    .content_header {
      background-color: #fff;
      padding-left: 15px;
      padding-top: 15px;
      .gps_city {
        box-sizing: border-box;
        &>div {
          font-size: 13px;
          color: #797d82;
          margin-bottom: 10px;
        }
        &>span {
          display: block;
          height: 30px;
          width: 99px;
          background-color: #f4f4f4;
          line-height: 30px;
          border-radius: 3px;
          box-sizing: border-box;
          margin: 0 7.5px 15px 7.5px;
          font-size: 14px;
          color: #191a1b;
          text-align: center;
        }
      }
      .hot_city {
        box-sizing: border-box;
        &>div {
          font-size: 13px;
          color: #797d82;
          margin-bottom: 10px;
        }
        &>span {
          display: inline-block;
          height: 30px;
          width: 99px;
          background-color: #f4f4f4;
          line-height: 30px;
          border-radius: 3px;
          box-sizing: border-box;
          margin: 0 7.5px 15px 7.5px;
          font-size: 14px;
          color: #191a1b;
          text-align: center;
        }
      }
    }
    .van-en {
      margin-right: 20px;
      background-color: #f4f4f4;
    }
  }
}
</style>
