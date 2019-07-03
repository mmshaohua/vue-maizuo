<template>
  <div class="page-city">
    <div class="header">
      <router-link tag="div" to="/cinema" class="header_left">
        <i class="iconfont iconchazi"></i>
      </router-link>
      <div class="header_title">当前城市 - {{ curCityInfo && curCityInfo.name }}</div>
    </div>
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />

    <!-- 拼音检索 -->
    <div class="city-indexlist" v-show="!searchVal">
      <ul class="city-indexlist__content" ref="box">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="item in hotCity"
                :key="item.cityId"
                @click="handleChangeCity(item)"
                >
                <div class="city-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li
          class="city-indexsection"
          v-for="item in cityList"
          :key="item.firstLetter"
          :ref="'box_'+ item.firstLetter"
          >
          <p class="city-indexsection__index">{{ item.firstLetter }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              @click="handleChangeCity(city)"
              >
              {{ city.name }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="city-indexlist__nav">
        <ul>
          <li
            v-for="item in indexList"
            :key="item"
            @click="handleGoTop(item)"
            >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="city-indexlist" v-show="searchVal">
      <ul class="search_box" v-show="searchList.length > 0">
        <li
          v-for="item in searchList"
          :key="item.cityId"
          @click="handleChangeCity(item)"
          >
          {{ item.name }}  
        </li>
      </ul>

      <div class="empty-result" v-show="!searchList.length">
        <img src="@/assets/img/empty.png" alt />
        <p>没有找到匹配的城市</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions, mapGetters } from 'vuex'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'city',/* 
  data () {
    return {
      searchVal: ''
    }
  }, */
  computed: {
    /* ...mapState({
      cities: state => state.city.cities
    }), */
    ...mapGetters({
      cityList: 'city/cityList',
      hotCity: 'city/hotCity',
      indexList: 'city/indexList',
      searchList: 'city/searchList',
      curCityInfo: 'city/curCityInfo'
    }),
    searchVal: {
      get () {
        return this.$store.state.city.searchVal
      },
      set (value) {
        this.$store.commit('city/mutationsSearchVal', value)
      }
    }
  },
  methods: {
    ...mapActions({
      actionsCityList: 'city/actionsCityList'
    }),
    handleGoTop (firstLetter) {
      /* 1 根据 firstLetter 找到左侧对应的 dom 元素 */
      let box = this.$refs.box
      let el = this.$refs['box_' + firstLetter][0]
      // console.log(el)

      /* 2 获取对应 dom 元素距离顶部的距离 offsetTop */
      let toTopHeight = el.offsetTop

      /* 3 操作左侧滚动条的 scrollTop 属性 */
      box.scrollTop = toTopHeight
    },
    handleChangeCity (city){
      /* 1. 点击获取当前点击城市的 ID ，并修改仓库中的相关数据 */
      this.$store.commit('city/mutationsChangeCity', city.cityId)

      /* 2. 编程式导航，返回上一页 */
      // this.$router.back()
      this.$router.go(-1)

      /* 3. 本地存储 cityId */
      window.localStorage.setItem('curCityId', city.cityId)
    }
  },
  created () {
    this.actionsCityList()
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/common/mixins.scss";

.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    // position: fixed;
    // top: 0;
    // left: 0;
    position: relative;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 300;
    background: #fff;
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
  .city-indexlist {
    width: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: #191a1b;
        padding: 0 6px;
      }
    }

    .city-indexsection {
      font-size: 16px;

      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          @include border-bottom;
          position: relative;
          width: 100%;
          height: 48px;
          line-height: 48px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
          padding-left: 5px;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: 33.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
  }
  .search_box {
    width: 100%;
    padding-left: 15px;
    li {
      @include border-bottom;
      height: 44px;
      position: relative;
      line-height: 44px;
      color: #191a1b;
      font-size: 14px;
    }
  }
  .empty-result {
    position: absolute;
    top: 50px;
    width: 100%;
    text-align: center;
    img {
      width: 90px;
      margin: auto;
    }
    p {
      color: #bdc0c5;
      font-size: 14px;
      margin: 0;
    }
  }
}
</style>
